<template>
    <div v-if="currentUser" class="flex items-center">
        <span>{{ currentUser.displayName?.toLocaleUpperCase() }}</span>
        <Button label="Logout" class="h-9 ml-2" @click="signOut" />
    </div>
    <div v-else>
        <Button label="Sign In" @click="visible = true" class="h-9" />

      <Dialog v-model:visible="visible" modal header="Sign In">
      <div class="surface-card p-4 shadow-2 border-round w-full ">
        <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3">Don't have an account?</span>
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3"  v-model="userModel.email" />

          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="userModel.password"/>

          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <Checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></Checkbox>
              <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
          </div>

          <Button label="Sign In" icon="pi pi-user" class="w-full" @click="getUser"></Button>
        </div>
      </div>
       </Dialog>

    </div>
</template>

<script setup lang="ts">
import { shallowRef, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { authService, EnumToastSeverity, UserModel } from "@primevue/common";
import { User } from "firebase/auth";
import { userModule } from "../store/index";
import { ToastMessageOptions } from "primevue/toast";
import { useToast } from "primevue/usetoast";

const emit = defineEmits<{
    (event: "input", value: boolean): void;
    (event: "onShowToast", value: ToastMessageOptions): void;
}>();

const visible = shallowRef(false);
const router = useRouter();
const toast = useToast();
const userModel = ref<UserModel>({
    userName: "",
    email: "",
    password: "",
});

const checked1 = shallowRef(false);
const currentUser = ref(userModule().currentUser);
const setCurrentUser = (user: User) => userModule().setCurrentUser(user);
const onShowToast = (value: ToastMessageOptions) => emit("onShowToast", value);
const input = (value: boolean) => emit("input", value);

watch(
    () => userModule().currentUser,
    (newVal) => {
        currentUser.value = newVal;
    },
    { immediate: true },
);
const signInWithGoogle = async () => {
    await authService.signInWithGoogle();
    visible.value = false;
};

const getUser = async () => {
    const res = await authService.signIn(userModel.value);

    if (!res?.user?.refreshToken)
        return toast.add({
            severity: EnumToastSeverity.Error,
            summary: "Giriş Başarısız",
            detail: res,
            life: 3000,
        });

    setCurrentUser(res.user);

    toast.add({
        severity: EnumToastSeverity.Success,
        summary: "Giriş Başarılı",
        detail: "Giriş Başarılı",
        life: 3000,
    });
    visible.value = false;

    input(false);
};

const signOut = async () => {
    await authService.logout().then(() => {
        userModule().deleteCurrentUser();
        currentUser.value = null;
        toast.add({
            severity: EnumToastSeverity.Success,
            summary: "Çıkış Başarılı",
            detail: "Çıkış Yapıldı",
            life: 3000,
        });
    });
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
