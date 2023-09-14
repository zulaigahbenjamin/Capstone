<template>
  <div class="container33">

    <div class="row">
      <div class="col-md-6 ">
        <h1 class="mt-4">Welcome to Urban Bean Bistro!</h1>

        <form class="row g-3 m-5 mb-2" @submit.prevent="Register">
          <div class="col-12 ">
            <label for="firstName" class="form-label" style="float:left;">First Name:</label>
            <input type="text" class="form-control" placeholder="eg. Zulaigah" v-model="firstName" required
              style="border:2px solid pink;" />
          </div>
          <div class="col-12">
            <label for="lastname" class="form-label" style="float:left;">Surname:</label>
            <input type="text" class="form-control" placeholder="eg. Benjamin" v-model="lastName" required
              style="border:2px solid pink; opacity: 2px;" />
          </div>
          <div class="col-12">
            <label for="role" class="form-label" style="float:left;">Role:</label>
            <input type="text" class="form-control" placeholder="eg. Admin" v-model="userRole" required
              style="border:2px solid pink;" />
          </div>

          <div class="col-12">
            <label for="gender" class="form-label" style="float:left;">Gender:</label>
            <input type="text" class="form-control" placeholder="eg. Female" v-model="gender" required
              style="border:2px solid pink;" />
          </div>
          <div class="col-12">
            <label for="email" class="form-label" style="float:left;">EMAIL:</label>
            <input type="email" class="form-control" placeholder="eg. zulaigahbenjamin99@gmail.com" v-model="emailAddress"
              required style="border:2px solid pink;" />
          </div>
          <div class="col-12">
            <label for="age" class="form-label" style="float:left;">Age:</label>
            <input type="number" class="form-control" placeholder="eg. 20" v-model="userAge" required
              style="border:2px solid pink;" />
          </div>
          <div class="col-12">
            <label for="password" class="form-label" style="float:left;">PASSWORD</label>
            <input type="password" class="form-control" v-model="userPwd" required style="border:2px solid pink;" />
          </div>
          <div class="col-12">
            <button class="btn" type="submit">Sign Up</button>
          </div>
        </form>
        <router-link to="/login" class="register-link text-decoration-none text-white">
          <button class="btn">
            Have an account? Log in
          </button>
        </router-link>
      </div>
      <div class="col-md-6 mb-3">
        <img src="https://i.postimg.cc/GpnKRfKz/94bab547d0ce1ee3da6add5846d6c388.jpg" class="img-fluid m-5"
          alt="Urban Bean Bistro" />
      </div>
    </div>
  </div>
</template>

  
<script>
import Swal from 'sweetalert2';
import sweetAlert from 'sweetalert2'

export default {
  data() {
    return {
      userId: 0,
      firstName: "",
      lastName: "",
      userAge: "",
      gender: "",
      userRole: "",
      emailAddress: "",
      userPwd: "",

    };
  },
  methods: {
    Register() {
     
      this.$store.dispatch("Register", this.newUser)
      .then(() => {
            Swal.fire({
            title: "success",
            text:"you have successfully registered",
            icon:"success",
            confirmButtontext: "ok",
            timer:1000
          })
        })
        this.$router.push("/login")
      }
   
    }
  }

</script>
<style>
.container33 {
  background-color: rgb(248, 248, 212);
  text-align: center;
}

.btn {
  background-color: rgb(242, 222, 238);
}

h1 {
  font-family: 'Abril Fatface', cursive;
  font-family: 'Pacifico', cursive;
}

.form-control {
  width: 100%;
}
</style>
  
 