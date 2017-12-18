<template>
  <div>
    <h1>Register</h1>
    <!-- Use v-model to bind to the model -->
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    />
    </br>
    <!-- Use v-model to bind to the model -->
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    </br>
    <button
      @click="register">	<!-- Add a click listener that calls the "register" method, below. -->
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data () {
    return {
      email: "abc",		// Bound to the HTML
      password: "123"
    }
  },
  methods: {
    async register() {	// Called whenever the "Register" button is clicked.	// Use async
      const response = await AuthenticationService.register({				// Use await
        email: this.email,
        password: this.password	// Bound to the HTML
      })
      console.log(response.data);
      // console.log("register button clicked: ", this.email, this.password);
    }
  }
  // ,
  // watch: {				// Watch for changes. Run this whenever "email" value changes.
  //   email(value){
  //     console.log("email has changed: ", value);
  //   }
  // },
  // mounted() {			// Run this whenever this vue component is mounted onto the page.
  //   setTimeout(() => {
  //     this.email = "Hello, world";
  //   }, 2000)
  // }
}
</script>

<style scoped>
</style>
