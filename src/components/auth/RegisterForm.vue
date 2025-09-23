<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
const schema = object({
  name: string().required('請輸入姓名'),
  email: string().required('請輸入電子郵件').email('請輸入正確的電子郵件格式'),
  password: string().required('請輸入密碼').min(6, '密碼長度至少需要 6 碼'),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const onSubmit = handleSubmit((values) => {
  console.log('送出成功', values);
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
      :vee-validate-attrs="passwordAttrs"
      :error-message="errors['password']"
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
