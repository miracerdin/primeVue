import { EntityModel } from "../../types";

export interface BaseRequest<T extends EntityModel> {
    model?: T;
    path: string;
}
