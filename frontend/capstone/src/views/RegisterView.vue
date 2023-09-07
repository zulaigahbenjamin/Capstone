<template>
    <div class="container d-flex p-4">
      <div class="col-6">
        <img
          src="https://i.postimg.cc/YCJbkvPZ/c9bl-removebg-preview.png"
          alt=""
        />
      </div>
      <div class="col-6">
        <h1>WELCOME TO CLOUD 9 SUPERSTORE!</h1>
  
        <form class="row d-flex" @submit.prevent="register">
          <div class="col-6">
            <label for="firstName" class="text-start">First Name:</label>
            <input
              type="text"
              placeholder="eg. Zulaigah"
              v-model="firstName"
              required
            />
            <label for="lastname" class="text-start">Surname:</label>
            <input
              type="text"
              placeholder="eg. Benjamin"
              v-model="lastName"
              required
            />
            <label for="role" class="text-start">Role:</label>
            <input
              type="text"
              placeholder="eg. Admin"
              v-model="userRole"
              required
            />
            <label for="text" class="text-start">Profile URL</label>
  
            <input
              type="text"
              placeholder=""
              v-model="userProfile"
              required
            />
          </div>
          <div class="col-6">
            <label for="gender" class="text-start">Gender:</label>
            <input
              type="gender"
              placeholder="eg. Female"
              v-model="gender"
              required
            />
            <label for="email" class="text-start">EMAIL:</label>
  
            <input
              type="email"
              placeholder="eg. zulaigahbenjamin99@gmail.com"
              v-model="emailAdd"
              required
            />
  
            <label for="age" class="text-start">Age:</label>
            <input
              type="number"
              placeholder="eg. 20"
              v-model="userAge"
              required
            />
            <label for="password" class="text-start">PASSWORD</label>
  
            <input type="password" v-model="userPwd" required />
          </div>
          <button class="submit">Sign Up</button>
        </form>
  
        <p>
          Have an account?
          <router-link
            to="/login"
            class="register-link text-decoration-none text-white"
            >Log in</router-link
          >
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";
  
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAddress: "",
        userPwd: "",
        userProfile: "",
      };
    },
    methods: {
      async register() {
        try {
          const resp = await this.$store.dispatch("register", {
            firstName: this.firstName,
            lastName: this.lastName,
            userAge: this.userAge,
            gender: this.gender,
            userRole: this.userRole,
            emailAddress: this.emailAddress,
            userPwd: this.userPwd,
            userProfile: this.userProfile,
          });
          if (resp.success) {
            await Swal.fire({
              icon: "success",
              title: "Registration successful",
              text: "CONGRATULATIONS ,YOU ARE NOW REGISTERED ! Please Login",
            });
          } else {
            await Swal.fire({
              icon: "error",
              title: "Registration failed",
              text: resp.error || "Unexpected error",
            });
          }
          this.$router.push("/login");
        } catch (e) {
          console.error("Registration error: ", e);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-link {
    color: var(--secondary-color) !important;
  }
  h1 {
    font-size: 39px !important;
  }
  button {
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge var(--secondary-color);
    outline: none;
    background-color: transparent;
    color: white;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    margin: 14px;
  }
  input {
    width: 100%;
    padding: 14px 12px;
    border-radius: 6px;
    border: 2px solid var(--text-color);
    color: var(--title-color);
    font-size: var(--smaller-font-size);
    font-weight: var(--font-medium);
    transition: border 0.4s;
  }
  label {
    display: block;
    margin: 5px;
    font-size: 29px;
  }
  </style>