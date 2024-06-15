// middleware to decode the token(cookie) to get user informations

import jwt from "jsonwebtoken";
import { config } from "dotenv";
import User from "../model/userModel.js";

config();
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req,res,next) => {
  const token = req.cookies.token;

  if (token)
  {
    try{
      const decoded = jwt.verify(token, jwtSecret);
      const user = await User.findById(decoded.id).select("-password");
      req.user = user;
    }
    catch (error)
    {
      console.error("Error decoding JWT token: ", error.message);
    }
  }
  next();
};

export default authMiddleware;
