import { Model } from "mongoose";

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: "buyer" | "seller"
}


export interface userModel extends Model<IUser> {
    isUserExists: (email:string) => Promise<IUser | null>;
    isPasswordMatched: (pass: string,hashedPass:string) => Promise<any>;
}
