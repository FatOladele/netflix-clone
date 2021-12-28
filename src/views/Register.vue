<template>
  <div class="register">
    <div class="top">
      <div class="wrapper">
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button class="loginButton" @click="signin">Sign In</button>
      </div>
    </div>
    <div class="containers">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
        <div v-if="step === 1" class="input">
          <input type="email" placeholder="email address" v-model="email" />
          <button class="registerButton" @click="handleStart()">
            Get Started
          </button>
        </div>
        <div v-else-if="step===2" class="input">
          <input type="username" placeholder="username" v-model="username" />
          <input type="password" placeholder="password" v-model="password" />
          <button class="registerButton" @click="handleFinish()">
            Start
          </button>
        </div>
      </div>
      <p v-if="showError" class="error_msg">{{errorMsg}}</p>
    </div>
  </div>
</template>

<script>
import api from '../utils/api'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      step: 1,
      showError: false,
      errorMsg: ""
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    handleStart() {
      if(this.validateEmail(this.email)) {
        this.step = 2
        this.showError = false
        this.errorMsg = ''
      } else {
        this.showError = true
        this.errorMsg = 'Invalid Email'
      }
    },
    handleFinish() {
      if(this.password.match(/^[A-Za-z]\w{7,14}$/)) {
        this.showError = false
        this.errorMsg = ''
        const obj = {
          email: this.email,
          username: this.username,
          password: this.password
        }
        api.post('/api/auth/register', obj).then(res => {
          this.login(res.data)
        }).catch(err => {
          console.log(err)
          this.showError = true
          this.errorMsg = err.response.data.msg
          if (this.errorMsg.includes("E-mail")) this.step = 1
        })
      } else {
        this.showError = true
        this.errorMsg = 'Password must be between 7 to 15 characters'
      }
    },
    signin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.register {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  background-size: cover;
  position: relative;

  .top {
    position: relative;
    z-index: 2;
    .wrapper {
      padding: 20px 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        height: 40px;
      }

      .loginButton {
        background-color: red;
        border: none;
        color: white;
        border-radius: 5px;
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 1s;
        &:hover {
          background-color: rgb(250, 108, 108);
        }
      }
    }
  }

  .containers {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    // z-index: -1;
    h1 {
      font-size: 50px;
    }

    h2 {
      margin: 20px;
    }

    p {
      font-size: 20px;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .input {
        width: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        height: 50px;
        border-radius: 5px;

        input{
          flex: 9;
          height: 100%;
          border: none;
          padding: 0 10px;
          color: black
          }

        .registerButton{
          flex: 3;
          height: 100%;
          background-color: red;
          border: none;
          color: white;
          font-size: 22px;
          cursor: pointer;
          transition: background-color 1s;
          &:hover {
            background-color: rgb(250, 108, 108);
          }
        }
      }
    }
    .error_msg{
      color: red
    }
  }
}
</style>
