import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "./firebaseConfig";
import { BaseRequest } from "./base-request";

class BaseService {
    addApiCollection = async <T extends { id?: string }>(
        model: T,
        path: string,
    ): Promise<boolean> => {
        if (!model.id) model.id = uuidv4();
        const docRef = await addDoc(collection(db, path), model);
        if (!docRef.id) throw "Bir hata oluştu.";

        return true;
    };

    updateApiData = async <T extends { id?: string }>(request: BaseRequest<T>): Promise<void> => {
        if (!request.model?.id) {
            const id: string = uuidv4();
            return await setDoc(doc(db, request.path, id), { ...request.model, id });
        }

        return await updateDoc(doc(db, request.path, request.model.id), request.model);
    };

    getDataFromApi = async <T extends { id?: string }>(request: BaseRequest<T>): Promise<T[]> => {
        if (request.model?.id) {
            const res = await getDoc(doc(db, request.path, request.model.id ?? ""));
            return res.data() ? <T[]>[res.data()] : [];
        }
        const filters = this.createQueryFilters(request);
        const querySnapshot = await getDocs(
            query(
                collection(db, request.path),
                ...Object.entries(filters).map(([key, value]) => where(key, "==", value)),
            ),
        );

        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as T);
    };

    createQueryFilters = <T extends { id?: string }>(req: BaseRequest<T>) => {
        const filters: Record<string, unknown> = {};
        for (const prop in req.model) {
            if (Object.prototype.hasOwnProperty.call(req.model, prop)) {
                if (req.model[prop] !== undefined && req.model[prop] !== null)
                    filters[prop] = req.model[prop];
            }
        }
        return filters;
    };
}
export const baseService = new BaseService();
