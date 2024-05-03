import { UserRepository } from "../user/infraestructure/UserRepository.js";
import { CreateUser } from "../user/application/create.js";
import { CreateUserController } from "../user/infraestructure/controllers/createController.js";
import { Hash } from "../services/hash.js";

const userRepository = new UserRepository();
const hashService = new Hash();
const createUser = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser)
