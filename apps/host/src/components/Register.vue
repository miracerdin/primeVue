<template>

  <Button label="Sign Up" @click="visible = true" class="h-9" />

  <Dialog v-model:visible="visible" modal header="Sign Up">
    <div class="surface-card p-4 shadow-2 border-round w-full ">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>
      <div>
        <label for="username" class="block text-900 font-medium mb-2">Username</label>
        <InputText
          id="username"
          class="w-full mb-3"
          autocomplete="off"
          v-model="userModel.userName"
        />
      </div>
      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3"  v-model="userModel.email" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="userModel.password"/>

        <Button label="Sign In" icon="pi pi-user" class="w-full" @click="createUser"></Button>
      </div>
    </div>
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
