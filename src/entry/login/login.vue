<template>
  <div>
    <form id="login-form">
      <label for="username">用户名：</label>
      <input type="text" id="username" name="username">

      <br>

      <label for="password">密码：</label>
      <input type="password" id="password" name="password"><br>

      <br>

      <button @click.prevent="submit">登录</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods:{
      submit(){
        window.location = "/demo/index.html";
      }
    }
  }
</script>

<style>
</style>