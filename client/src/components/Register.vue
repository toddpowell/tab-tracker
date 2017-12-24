<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <!-- Use v-model to bind to the model -->
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          </br>
          <!-- Use v-model to bind to the model -->
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
          <div class="error" v-html="error"/>
          <v-btn class="cyan"
            dark
            @click="register">	<!-- Add a click listener that calls the "register" method, below. -->
            Register
          </v-btn>
        </div>

      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data () {
    return {
      email: "test1@gmail.com",		// Bound to the HTML
      password: "12345678",
      error: null
    }
  },
  methods: {
    async register() {	// Called whenever the "Register" button is clicked.	// Use async
      try {
        await AuthenticationService.register({		// Use await
          email: this.email,                      // Bound to the HTML
          password: this.password	                // Bound to the HTML
        })        
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  // methods: {
  //   async register() {	// Called whenever the "Register" button is clicked.	// Use async
  //     const response = await AuthenticationService.register({				// Use await
  //       email: this.email,
  //       password: this.password	// Bound to the HTML
  //     })
  //     console.log(response.data);
  //     // console.log("register button clicked: ", this.email, this.password);
  //   }
  // }
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
  .error {
    color: red
  }

</style>
