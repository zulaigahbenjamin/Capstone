<template>
    <div>
      <div class="container flex-container" v-if="user">
        <label for="firstName">Name</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="firstName"
          name="firstName"
          v-model="user.firstName"
          :placeholder="user.firstName"
        />
        <label for="lastName">Surname</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="lastName"
          name="lastName"
          v-model="user.lastName"
          :placeholder="user.lastName"
        />
  
        <label for="userAge">Age</label>
        <input
          type="number"
          autocomplete="off"
          required
          id="userAge"
          name="userAge"
          v-model="user.userAge"
          :placeholder="user.userAge"
        />
  
        <label for="gender">Gender</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="gender"
          name="egnder"
          v-model="user.gender"
          :placeholder="user.gender"
        />
  
        <label for="userRole">Role</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userRole"
          name="userRole"
          v-model="user.userRole"
          :placeholder="user.userRole"
        />
        <label for="emailAddress">Email Address</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="emailAddress"
          name="emailAddress"
          v-model="user.emailAddress"
          :placeholder="user.emailAddress"
        />
  
        <label for="userPwd">Password</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userPwd"
          name="userPwd"
          v-model="user.userPwd"
          :placeholder="user.userPwd"
        />
        <label for="userProfile">Profile URL</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userProfile"
          name="userProfile"
          v-model="user.userProfile"
          :placeholder="user.userProfile"
        />
  
        <button @click="updateUser" class="btn-submit">Submit</button>
      </div>
      <h1 v-else class="text-white">Error</h1>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
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
      async updateUser() {
        try {
          await axios.put(
            `https://zulaigahcapstoneapi.onrender.com/users/${this.$route.params.id}`,
            {
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              userAge: this.user.userAge,
              gender: this.user.gender,
              userRole: this.user.userRole,
              emailAddress: this.user.emailAddress,
              userPass: this.user.userPwd,
              // userProfile: this.user.userProfile,
            }
          );
          this.firstName = "";
          this.lastName = "";
          this.userAge = "";
          this.gender = "";
          this.userRole = "";
          this.emailAddress = "";
          this.userPwd = "";
          this.userProfile = "";
  
          this.$router.push("/admin");
          alert("User has been updated");
        } catch (err) {
          console.log(err);
        }
      },
    },
    props: ["id"],
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    mounted() {
      this.$store.dispatch("getUser", this.id), this.$store.dispatch("getUsers");
    },
  };
  </script>
  
  <style scoped>
  label {
    color: white;
  }
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
  
  label {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }
  
  input {
    font-size: 1.25rem;
    padding: 0.5rem 0 0.5rem 1rem;
  }
  
  .btn-submit {
    margin-top: 2rem;
    margin-left: auto;
    padding: 0.5rem 1rem;
    background-color: #0033ff;
    color: #ffffff;
    text-align: center;
    width: fit-content;
    border-radius: 0.2rem;
    font-size: 1.5rem;
  }
  </style>