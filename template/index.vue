<template>
  <div class="wrapper">
    <text class="title">Hello {{ link }}</text>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data: function(){
      return {
        link: 'DingTalk'
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
</style>
