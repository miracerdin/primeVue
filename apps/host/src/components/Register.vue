<template>
    <Button label="Sign Up" @click="visible = true" class="h-9" />

    <Dialog v-model:visible="visible" modal header="Create Account" :style="{ width: '25rem' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <Avatar
                    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                    shape="circle"
                />
                <span class="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        </template>
        <span class="p-text-secondary block mb-5">Update your information.</span>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Username</label>
            <InputText
                id="username"
                class="flex-auto"
                autocomplete="off"
                v-model="userModel.userName"
            />
        </div>
        <div class="flex align-items-center gap-3 mb-2">
            <label for="email" class="font-semibold w-6rem">Email</label>
            <InputText id="email" class="flex-auto" autocomplete="off" v-model="userModel.email" />
        </div>
        <div class="flex align-items-center gap-3 mb-2">
            <label for="password" class="font-semibold w-6rem">Password</label>
            <InputText
                id="password"
                class="flex-auto"
                autocomplete="off"
                v-model="userModel.password"
            />
        </div>
        <div>
            <Button
                label="Sign In With Google"
                text
                severity="secondary"
                @click="signUpWithGoogle"
                autofocus
            />
        </div>
        <template #footer>
            <Button label="Cancel" text severity="secondary" @click="visible = false" autofocus />
            <Button label="Save" outlined severity="secondary" @click="createUser" autofocus />
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { getAuth, createUserWithEmailAndPassword, User } from "firebase/auth";
import { useRouter } from "vue-router";
import { authService, EnumToastSeverity, UserModel } from "@primevue/common";
import { userModule } from "../store";
import { ToastMessageOptions } from "primevue/toast";
const email = shallowRef("");
const password = shallowRef("");
const router = useRouter();

const emit = defineEmits<{
    (event: "input", value: boolean): void;
    (event: "onShowToast", value: ToastMessageOptions): void;
}>();

const visible = shallowRef(false);
const userModel = ref<UserModel>({
    userName: "",
    email: "",
    password: "",
});

const setCurrentUser = (user: User) => userModule().setCurrentUser(user);
const onShowToast = (value: ToastMessageOptions) => emit("onShowToast", value);
const input = (value: boolean) => emit("input", value);

const createUser = async () => {
    const res = await authService.createUser(userModel.value);
    console.log("res", res);
    if (typeof res === "string") return;

    setCurrentUser(res);
    onShowToast({
        severity: EnumToastSeverity.Success,
        summary: "İşlem Başarılı",
        detail: "Kullanıcı Oluşturuldu",
        life: 3000,
    });
    visible.value = false;
    input(false);
};

const signUpWithGoogle = async () => {
    await authService.signUpWithGoogle();
};

const signInWithGoogle = () => {
    console.log(email.value);
    console.log(password.value);
};
</script>
