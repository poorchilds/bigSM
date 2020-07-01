<template>
  <div class='login'>
    <van-icon name="cross" class="login-i-x" />
    <img src="../images/登录/u339.png" alt="">
    <van-field v-model="name" class="inp1" placeholder="请输入用户名" />
    <van-field v-model="pwd" class="inp2" placeholder="请输入用户名" />
    <van-button class ="but" round type="info">登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: { },
  data () {
    return {
      name: '请输入',
      pwd: '密码'
    }
  }
}
</script>

<style scoped lang='less'>
  .login{
    margin-top:24px;
    position: relative;
    width: 100%;
    height: 635px;
    background-color: rgba(242, 242, 242, 1);
    .login-i-x{
    font-size: 30px;
    position: absolute;
    font-weight: 400;
    top: 30px;
    left:25px;
    padding: 0 , 10px , 0 ,10px;
    }
    img{
    width: 126px;
    height: 126px;
    position: absolute;
    top: 60px;
    left:50%;
    transform: translate3d(-50%, 0,0);
    }
    .inp1{
      margin: 0 , 20px , 0 , 20px;
      width: 320px;
      position: absolute;
      top: 170px;
      left:20px;
      background-color: rgba(242, 242, 242, 1);
      border-bottom: 1px solid #000;
      font-size: 18px;
    }
    .inp2{
      font-size: 18px;
      width: 320px;
      margin: 0 , 20px , 0 , 20px;
      position: absolute;
      top: 230px;
      left:20px;
      background-color: rgba(242, 242, 242, 1);
      border-bottom: 1px solid #000;
    }
    .but{
      font-size: 18px;
      width: 320px;
      margin: 0 , 20px , 0 , 20px;
      position: absolute;
      top: 330px;
      left:20px;
    }
  }
</style>
