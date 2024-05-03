import { Elysia, t } from "elysia";
import {
  createUserController /* loginController */,
} from "../server/dependencies.js";
import { createUserDTO } from "./domain/userDTO.js";
export const userRouter = new Elysia({ prefix: "/users" }).post(
  "/",
  createUserController.run.bind(createUserController),
  createUserDTO
);
//.post('/login', loginController.run.bind(loginController),loginUserDTO)
