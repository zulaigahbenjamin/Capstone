<template>
  <div class="back"></div>
  <div class="container d-flex p-4">
    <div class="col-6 coffee-image">
      <!-- Your coffee shop image goes here -->
      <img src="https://i.postimg.cc/Bv2xR4xQ/3bb7c5ab569f87460cbc8aa3f73c2c97.jpg " alt="Coffee Shop" />
    </div>

    <div class="col-6 login-field">
      <h1 class="text">WELCOME BACK!</h1>

      <form @submit.prevent="login"   >
        <div class="input-group">
          <div class="input-icon fas fa-envelope"></div>
          <label for="email" class="text-start">ENTER YOUR EMAIL</label>
          <input type="email" name="email" v-model="payload.emailAddress" placeholder="e.g., zulaigahbenjamin09@gmail.com" />
        </div>
        <div class="input-group">
          <div class="input-icon fas fa-lock"></div>
          <label for="password" class="text-start">PASSWORD</label>
          <input type="password" v-model="payload.userPwd" name="password" />
        </div>
        <button type="submit">Log In</button>
        <div class="registration-section">
          <p>Don't have an account?</p>
          <button class="link">
            <router-link to="/register" class="register-link text-decoration-none text-white">Register</router-link>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  
<script>
import Swal from 'sweetalert2';

export default {
  name: 'login',
  props: ['initialPayload'],
  data() {
    return {
      payload: {
        emailAddress: '',
        userPwd: ''
      }
    };
  },
  computed: {
    Msg() {
      return this.$store.state.Msg;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.payload)
        .then(() => {
          Swal.fire({
            title: "Success",
            text: "You are now logged in",
            icon: "success",
            confirmButtonText: "OK",
            timer: 1000
          });
          this.$router.push("/admin");
        })
        .catch(error => {
          // Handle login error here
          Swal.fire({
            title: "Error",
            text: "Failed to log in: " + error.message,
            icon: "error",
            confirmButtonText: "OK"
          });
        });
    }
  },
  mounted() {
    //   console.log(cookies.get('setToken'));
  }
};
</script>

  
<style scoped>
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.coffee-image img {
  width: 100%;
  height: auto;
}

.login-field {
  background-color: #ffeecc;
  padding: 20px;
  border-radius: 0 10px 10px 0;
}

.text {
  font-size: 24px;
  margin-bottom: 20px;
  color: #6f4e37;
}

form {
  max-width: 300px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 20px;
  position: relative;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #6f4e37;
}

.registration-section {
  display: flex;

}

label {
  font-size: 16px;
  color: #6f4e37;
}

.link,
input:hover {
  color: brown;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid brown;
  border-radius: 5px;
  font-size: 16px;
}

input:hover {
  color: pink;
}

button {
  background-color: #6f4e37;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #573e2c;
}

.link {
  font-size: 16px;
}

p {
  display: flex;
}

.register-link {
  color: #6f4e37;
  /* Coffee brown color */
  font-weight: bold;
  text-decoration: underline;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .container {
    border-radius: 0;
  }

  .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .login-field {
    border-radius: 0;
  }
}</style>
