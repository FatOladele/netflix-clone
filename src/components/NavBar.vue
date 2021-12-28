<template>
  <div :class="isScrolled ? 'navbar scrolled' : 'navbar'">
    <div class="containers">
      <div class="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <router-link to="/" class="link"> Home</router-link>
        <router-link to="/series" class="link">Series</router-link>
        <router-link to="/movies" class="link">Movies</router-link>
        <span>New and Popular</span>
        <span>My List</span>
      </div>
      <div class="right">
        <span class="material-icons icon">search</span>
        <span>{{getUser.username}}</span>
        <span class="material-icons icon">notifications</span>
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div class="profile">
          <span class="material-icons icon">arrow_drop_down</span>
          <div class="options">
            <span>Settings</span>
            <span @click="logout">Logout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['getUser'])
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleScroll() {
      this.isScrolled = (window.pageYOffset > 0)? true: false
    }
  }
}
</script>

<style lang="scss">
@mixin tablet {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin mobile {
  @media (max-width: 480px) {
    @content;
  }
}
.navbar {
  width: 100%;
  color: white;
  font-size: 14px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);

  &.scrolled {
    background-color: var(--main-color);
  }

  .containers {
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;

    .left {
      display: flex;
      align-items: center;

      img {
        height: 25px;
        margin-right: 40px;

        @include mobile {
          display: none;
        }
      }
      .link {
        margin-right: 20px;
      }
      span {
        margin-right: 20px;
        cursor: pointer;

        @include tablet {
          display: none;
        }

        &.navbarmainLinks {
          @include tablet {
            display: block;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .icon {
        margin: 0px 15px;
        cursor: pointer;
      }

      img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
      }

      .profile {
        .options {
          display: none;
          background-color: var(--main-color);
          border-radius: 5px;
        }

        span {
          padding: 10px;
          cursor: pointer;
        }

        &:hover {
          .options {
            display: flex;
            flex-direction: column;
            position: absolute;
          }
        }
      }
    }
  }
}
</style>
