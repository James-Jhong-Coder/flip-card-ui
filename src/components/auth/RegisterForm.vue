<script setup lang="ts">
import { useForm } from 'vee-validate';
import { useDialogStore } from '@/stores/dialog';
import { object, string, ref as yupRef } from 'yup';
import { POST_AUTH_REGISTER } from '@/apis/api';
const dialogStore = useDialogStore();
const schema = object({
  name: string().required('請輸入姓名'),
  email: string().required('請輸入電子郵件').email('請輸入正確的電子郵件格式'),
  password: string().required('請輸入密碼').min(6, '密碼長度至少需要 6 碼'),
  confirmPassword: string()
    .required('請再次輸入密碼')
    .oneOf([yupRef('password')], '兩次輸入的密碼不一致'),
});

const { defineField, handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');

const authRegister = () => {
  POST_AUTH_REGISTER({
    email: email.value,
    password: password.value,
    name: name.value,
  }).then(() => {
    dialogStore.show('alert', {
      message: '註冊成功 !',
    });
    resetForm();
  });
};

const onSubmit = handleSubmit(() => {
  authRegister();
});
</script>

<template>
  <div class="login-form">
    <general-input
      v-model="name"
      title="姓名"
      :vee-validate-attrs="nameAttrs"
      :error-message="errors['name']"
    />
    <general-input
      v-model="email"
      title="電子郵件"
      :vee-validate-attrs="emailAttrs"
      :error-message="errors['email']"
      class="mt-4"
    />
    <general-input
      v-model="password"
      title="密碼"
      type="password"
      :vee-validate-attrs="passwordAttrs"
      :error-message="errors['password']"
      class="mt-4"
    />
    <general-input
      v-model="confirmPassword"
      title="確認密碼"
      type="password"
      :vee-validate-attrs="confirmPasswordAttrs"
      :error-message="errors['confirmPassword']"
      class="mt-4"
    />
    <custom-button variant="solid" shape="square" class="mt-5" @click="onSubmit"
      >註冊</custom-button
    >
  </div>
</template>

<style scoped>
.login-form {
  @apply w-full;
  @apply flex flex-col;
}
</style>
