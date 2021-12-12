<template>
  <div class="login">
    <div class="top">
      <div class="wrapper">
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>
    </div>
    <div class="containers">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email or phone number"

        />
        <input
          type="password"
          placeholder="Password"

        />
        <button class="loginButton">
          Sign In
        </button>
        <span>
          New to Netflix? <router-link to="/register"><b>Sign up now.</b></router-link>
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <b>Learn more</b>.
        </small>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("http://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg");
  background-size: cover;
  position: relative;

  .top {
    .wrapper {
      padding: 20px 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        height: 40px;
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

    form {
      min-width: 300px;
      min-height: 400px;
      width: 30vw;
      height: 50vh;
      padding: 30px;
      border-radius: 5px;
      background-color: var(--main-color);
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      input {
        height: 40px;
        border-radius: 5px;
        background-color: gray;
        color: white;
        padding-left: 10px;

        &::placeholder {
          color: lightgray;
        }
      }

      button {
        height: 40px;
        border-radius: 5px;
        background-color: red;
        color: white;
        border: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
      }

      span {
        color: lightgray;
        b {
          color: white;
        }
      }
    }
  }
}

</style>
