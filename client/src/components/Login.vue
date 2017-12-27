<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Log In">
        <form name="tab-tracker-form" autocomplete="off">
          <!-- Use v-model to bind to the model -->
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <!-- Use v-model to bind to the model -->
          <v-text-field
            label="Password"
            type="password"
            autocomplete="new-password"
            v-model="password"
          ></v-text-field>
        </form>
        <div class="error" v-html="error"/>
        <v-btn class="cyan"
          dark
          @click="login">	
          Log In
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
    async login() {
      try {
        const response = await AuthenticationService.login({		// Use await
          email: this.email,                    // Bound to the HTML
          password: this.password	            // Bound to the HTML
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
}
</script>

<style scoped>
  .error {
    color: red
  }

</style>
