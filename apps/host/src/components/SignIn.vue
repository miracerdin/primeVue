<template>
    <Button label="Sign In" @click="visible = true" class="h-9" />

    <Dialog v-model:visible="visible" modal header="Sign In" :style="{ width: '25rem' }">
        <span class="p-text-secondary block mb-5">Enter your information.</span>

        <div class="flex align-items-center gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Email</label>
            <InputText id="email" class="flex-auto" autocomplete="off" v-model="userModel.email" />
        </div>
        <div class="flex align-items-center gap-3 mb-3">
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
                @click="signInWithGoogle"
                autofocus
            />
        </div>
        <div class="flex justify-content-end gap-2">
            <Button
                type="button"
                label="Cancel"
                severity="secondary"
                @click="visible = false"
            ></Button>
            <Button type="button" label="Save" @click="getUser"></Button>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { shallowRef, ref } from "vue";
import { useRouter } from "vue-router";
import { authService, EnumToastSeverity, UserModel } from "@primevue/common";
import { User } from "firebase/auth";
import { userModule } from "../store/index";
import { ToastMessageOptions } from "primevue/toast";

const emit = defineEmits<{
    (event: "input", value: boolean): void;
    (event: "onShowToast", value: ToastMessageOptions): void;
}>();

const visible = shallowRef(false);
const router = useRouter();
const userModel = ref<UserModel>({
    userName: "",
    email: "",
    password: "",
});

const setCurrentUser = (user: User) => userModule().setCurrentUser(user);
const onShowToast = (value: ToastMessageOptions) => emit("onShowToast", value);
const input = (value: boolean) => emit("input", value);

const signInWithGoogle = async () => {
    await authService.signInWithGoogle();
    visible.value = false;
};

const getUser = async () => {
    const res = await authService.signIn(userModel.value);
    if (!res) return;
    console.log("user", res);
    setCurrentUser(res.user);
    onShowToast({
        severity: EnumToastSeverity.Success,
        summary: "İşlem Başarılı",
        detail: "Giriş Yapıldı",
        life: 3000,
    });
    visible.value = false;

    input(false);
};
</script>
<style scoped>
.sign-in-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30px;
}
</style>
