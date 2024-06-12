import { CategoryModel } from "../../interfaces/category";
import { baseService } from "@primevue/common";

class CategoryService {
    readonly path = "categories";
    addCollection = async () => {
        const model: CategoryModel = {
            categoryName: "",
            categoryValue: 0,
        };
        return baseService.addApiCollection(model, this.path);
    };
    saveCategory = async (model: CategoryModel) =>
        await baseService.updateApiData({ model, path: this.path });

    getCategories = async (model?: CategoryModel): Promise<CategoryModel[]> => {
        // const q = query(collection(db, this.path), where());
        return await baseService.getDataFromApi({ model, path: this.path });
    };
}

export const categoryService = () => new CategoryService();
