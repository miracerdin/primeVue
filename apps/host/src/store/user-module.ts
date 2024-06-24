import { User } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

export const userModule = defineStore("userModule", () => {
    const currentUser = ref<User | null>(null);
    const initializeCurrentUser = () => {
        if (currentUser.value !== null) return;

        const res = sessionStorage.getItem("user");
        currentUser.value = res ? JSON.parse(res) : null;
    };

    const setCurrentUser = (user: User) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        currentUser.value = user;
    };

    const deleteCurrentUser = () => {
        sessionStorage.removeItem("user");
        currentUser.value = null;
    };

    return { currentUser, initializeCurrentUser, setCurrentUser, deleteCurrentUser };
});
