import { Elysia } from "elysia";

export const userRouter = new Elysia({ prefix: "/users" })
    .post('/', () => 'Create a user')
    .get('/', () => 'Get all users')

