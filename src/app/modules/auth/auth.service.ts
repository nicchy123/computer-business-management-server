import httpStatus from "http-status";
import AppError from "../../errors/AppError";

import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { createToken, verifyToken } from "../../utils/createToken";
import config from "../../config";

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExists(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }
  
  const isPasswordMatched = await User.isPasswordMatched(payload.password, user?.password);
  if(!isPasswordMatched){
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid password");
  }

  const jwtPayload = {
    _id: user?._id,
    email: user?.email,
    role: user?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};
const changePassword = async () => {};

const refreshToken = async (token: string) => {
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);

  const { email } = decoded;

  // checking if the user is exist
  const user = await User.isUserExists(email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  const jwtPayload = {
    _id: user._id,
    email: user.email,
    role: user.role
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  return {
    accessToken,
  };
};
const forgetPassword = async () => {};
const resetPassword = async () => {};

export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
