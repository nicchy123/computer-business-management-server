import{ Schema, model, connect } from 'mongoose';
import { IUser, userModel } from './user.interface';
import bcrypt from 'bcrypt'
import config from '../../config';


  

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true,  unique: true },
  password: { type: String, required: true },
  role: { type: String, default:"buyer", required: true }
});




userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
    next();
  });
  

  userSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, res) => {
      delete res.password;
      delete res?.id
    },
  });
  
  userSchema.statics.isUserExists = async function (email: string) {
    return await User.findOne({ email }).select('+password');
  };
  
  
  userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };


export const User = model<IUser, userModel>('User', userSchema);