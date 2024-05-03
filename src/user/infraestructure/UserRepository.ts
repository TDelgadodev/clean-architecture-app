import type { IUser } from "../domain/IUser.js";
import { User } from "../domain/User.js";
import { PrismaClient } from "@prisma/client";

export class UserRepository implements IUser {
    private db: PrismaClient
    constructor () {
        this.db = new PrismaClient();
    }
    async create(email: string, password: string, name: string): Promise<User> {
        const user = await this.db.user.create({
            data: {
                email,
                password,
                name
            }
        })

        return new User(user.id, user.name, user.email, user.password);
    }
}