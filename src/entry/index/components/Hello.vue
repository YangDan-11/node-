<template>
  <div>
    Hello {{ name }}
    <van-button type="primary" @click="toast">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "admin"
    };
  },
  methods: {
    toast() {
      this.$toast("123");
    }
  }
};
</script>

<style>
</style>