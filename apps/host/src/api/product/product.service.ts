import { baseService } from "@primevue/common";
import { EnumProductCategory, ProductModel } from "../../interfaces/product";

class ProductService {
    readonly path = "product";
    addCollection = async () => {
        const model: ProductModel = {
            categoryId: EnumProductCategory.Other,
            name: "Table",
            picture: "",
            colors: [],
            price: 10,
        };
        return baseService.addApiCollection(model, this.path);
    };
    saveProduct = async (model: ProductModel) =>
        await baseService.updateApiData({ model, path: this.path });

    getProducts = async (model?: ProductModel): Promise<ProductModel[]> => {
        // const q = query(collection(db, this.path), where());
        return await baseService.getDataFromApi({ model, path: this.path });
    };
}

export const productService = () => new ProductService();
