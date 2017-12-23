<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <!-- Use v-model to bind to the model -->
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <!-- Use v-model to bind to the model -->
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
          <div class="error" v-html="error"/>
          <v-btn class="cyan"
            dark
            @click="login">	
            Log In
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
      email: "abc",		// Bound to the HTML
      password: "123",
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({		// Use await
          email: this.email,                    // Bound to the HTML
          password: this.password	            // Bound to the HTML
        })        
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }

</style>
