import express from "express";
// import { register,login,getMe } from "../controllers/auth.controller.js";
import * as authController from '../controllers/auth.controller.js'
import { loginSchema, registerSchema, validate } from "../validations/validator.js";
import authenticate from "../middleware/authenticate.middleware.js";


const authRoute = express.Router();

authRoute.post("/login",validate(loginSchema), authController.login);

authRoute.post("/register",validate(registerSchema), authController.registerYup);

authRoute.get("/me",authenticate ,authController.getMe);

export default authRoute;
