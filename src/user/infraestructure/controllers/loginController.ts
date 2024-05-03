import { LoginUser } from "../../application/login.js";

export class LoginController {
  constructor(private loginUser: LoginUser) {}

  async run({ body }: { body: { email: string; password: string } }) {
    try {
      const user = await this.loginUser.run(body.email, body.password);

      return {
        status: 200,
        data: {
          user,
        },
        message: "User logged in",
      };
    } catch (error) {
      const err = error as Error;
      return {
        status: 400,
        message: err.message,
      };
    }
  }
}
