import { EntityModel } from "./entity-model";

export interface UserModel extends EntityModel {
    userName: string;
    email: string;
    password: string;
}
