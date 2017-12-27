<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <!-- Use v-model to bind to the model -->
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <!-- Use v-model to bind to the model -->
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
        <div class="error" v-html="error"/>
        <v-btn class="cyan"
          dark
          @click="register">	<!-- Add a click listener that calls the "register" method, below. -->
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
import Panel from "@/components/Panel"
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
        const response = await AuthenticationService.register({		// Use await
          email: this.email,                      // Bound to the HTML
          password: this.password	                // Bound to the HTML
        })    
        this.$store.dispatch('setToken', response.data.token)    
        this.$store.dispatch('setUser', response.data.user)             
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
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
