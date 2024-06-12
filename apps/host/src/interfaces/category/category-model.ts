import { EntityModel } from "@primevue/common";

export interface CategoryModel extends EntityModel {
    categoryName: string;
    categoryValue: number;
}
