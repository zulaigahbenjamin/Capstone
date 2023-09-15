<!-- <template >
  <h1>My Profile</h1>
  <div class="container-fluid">
    <div class="row gap-3 justify-content-center">
 
      <div v-if="user" class="text-center">
        <div v-for="user of user" :key="user.userId" class="col-12 col-sm-6 col-md-4 col-lg-3 my-4">

          <div style="width: 100%; height: 100%; margin-bottom: 2rem" class="card justify-content-center">
            <div class="card-body justify-content-center">
              <h5 class="card-title">{{ user.firstName }}</h5>
              <h5 class="card-text">{{ user.lastName }}</h5>
              <p class="card-text">{{ user.emailAddress }}</p>
              <p class="card-text">{{ user.userRole }}</p>
              <p class="card-texxt">{{ user.userPwd }}</p>
              <router-link class="btn-prod" to="/">Go Back</router-link>
            </div>

          </div>

        </div>
      </div>
      <div v-else class="text-center" style="margin-top: 3rem; margin-bottom: 5rem;">
        Loading...
        <SpinnerComp />
      </div>
    </div>

  </div>
</template>



<script>
import SpinnerComp from '@/components/spinnerComp.vue';

import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

export default {
  name: 'userProfile',

  components: { SpinnerComp },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.$store.dispatch("getUser");
  },

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');

body {
  overflow-x: hidden;
}

#featured,
h2,
p {
  font-family: 'REM', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'REM', sans-serif;
  background-color: #eaeaea;
}

.hero {
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(https://i.postimg.cc/y8yHbMPv/shoe-sneaker-mockup-psfiles-758x569.jpg); */
  background-image: url(https://i.postimg.cc/Kv6FByBX/new-walll-light.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-weight: 600;
  font-size: 50px;
  font-family: 'REM', sans-serif;
}

.hero {
  width: auto;
}

.hero-inner {
  font-size: 65px;
  /* background-color: #E9D5B7; */
  color: black;
}

#featured,
h2,
p {
  font-family: 'REM', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'REM', sans-serif;
  background-color: #eaeaea;
}

.container {
  width: 900px;
  margin: 0px auto;
}

.text-black {
  text-align: center;
  font-weight: bold;
  margin: 3rem;
  font-size: 25px !important;

}

.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: black;
  border-radius: 7px;
  letter-spacing: 6px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

.card-title {
  margin-left: 10px;
  text-align: center;
}

.card-text {
  margin-left: 20px;
  text-align: center;
  font-size: 18px;
}

.btn-prod {
  padding: 5px;
  background: #B88E2F;
  box-shadow: 0 0 25px #FFF3E3;
  cursor: pointer;
  width: 11%;
  color: black;
  text-decoration: none;
  border-radius: 5px;

}

.btn-prod:hover {
  color: black;
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;

}

.card {
  border: none;
}

.card-img-top {
  height: 300px !important;
  width: 300px !important;
  padding: 10px !important;
}

.card-img-top {
  height: 390px;
  width: 315px;
  margin: auto;
  border-radius: 30px;
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;
  margin-top: 2rem;
}

.Sponsors {
  display: flex;
  justify-content: space-between;
}

.text-sponsor {
  font-size: 26px;
  color: black;
}

.sponsors-law {
  color: black;
  font-size: 16px;
}

.Sponsors div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.Sponsors div i {
  font-size: 20px;
  margin-bottom: 8px;
  /* Adjust spacing between icon and text */
}

.Sponsors {
  background: #E9D5B7;
  padding: 20px;
  margin-top: 5rem;
  margin-bottom: 5rem;

}


.text-black {
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  margin-top: 3rem;

}

.text-blacks {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 20px;
}

@media screen and (max-width: 500px) {

  .hero-inner {
    font-size: 30px;
  }

  .text-black {
    font-size: 18px !important;
  }

  .card-text {
    font-size: 14px;
  }

  .btn-prod {
    width: 30%;
    font-size: 14px;
  }

  .container {
    width: auto;
  }

  .card-img-top {
    height: 220px;
    width: 210px;
    padding: 10px !important;
  }

  .card {
    padding: 10px;
  }

}
</style>


 -->

<template>
  <div v-if="user" class="product_details" :key="user.userId" :user="user">
    <div class="card mx-auto">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="card my-2 row">
          <div class="row justify-content-center align-items-center">
            <div class="col-6">
              <img class="profile" :src="user.userProfile" :alt="user.firstName" />
            </div>
            <div class="col-4">
              <h1>Profile</h1>

              <h3>First Name:</h3>
              <p>{{ user.firstName }} {{ user.lastName }}</p>
              <h3>Role:</h3>
              <p>{{ user.userRole }}</p>
              <h3>Gender</h3>
              <p>{{ user.gender }}</p>
              <h3>Email:</h3>
              <p>{{ user.emailAddress }}</p>
              <h3>Password</h3>
              <p>{{ user.userPwd }}</p>
              <button>
                <router-link to="/users/:id"><img class=" edit-icon"
                    src="https://i.postimg.cc/T2Z8Qtg6/icons8-edit-50-removebg-preview.png" alt="" /></router-link>
              </button>
              <button type="submit" class="btn btton" @click="deleteUser(user.userId)" id="delete-row">
                <img class="edit-icon" src="https://i.postimg.cc/kMtSk56b/icons8-delete-30.png" alt="" />
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </div>
  <spinner v-else />
</template>
<script>
import spinner from "@/components/spinnerComp.vue";

export default {
  // props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    id() {
      return this.$route.params.id;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUser", this.id);
  },
  methods: {
    async deleteUser(userId) {
      console.log("deleted user", userId);
      const success = await this.$store.dispatch("deleteUser", userId);

      if (success) {
        this.$router.push("/login");
        // Update the product list in your component if needed.
        // this.$store.dispatch('getUsers', userId); // You can dispatch this if you need to refresh the product list.
      } else {
        alert("Failed to delete user. Please try again.");
      }
    },
  },
  components: { spinner },
};
</script>
<style scoped>
* {
  overflow: hidden;
  background-color: #e4c2a2;
}

.profile {
  height: 350px;
  width: auto;
  border-radius: 10px;
}

.card.my-2 {
  text-align: center;
  height: 500px;
  width: 900px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(80, 45, 8, 0.22) 0px 25px 43px;
  border: 1px solid #c59360;
}

.edit-icon {
  height: 27px;
}

/* .edit-icon:hover {
  
 } */

h1 {
  color: #3c6866 !important;
  text-align: center;
  font-family: Inter;
  font-size: 2.9rem;
  /* font-style: italic; */
  font-weight: 600;
  line-height: normal;
  -webkit-text-stroke: 1px #5a3009;
  padding-bottom: 0.5em;
}

p {
  font-size: 18px;
  font-weight: 600;
  color: #462507;
}

h3 {
  color: #462507;
}

button {
  border: none !important;
  background: none;
}
</style>
