<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span
                class="home"
                @click="navigateTo({name: 'root'})">
                TabTracker
            </span>
        </v-toolbar-title>

        <v-toobar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toobar-items>

        <!-- Allows you to place items to the right -->
        <v-spacer></v-spacer>

        <!-- <v-toobar-items>
            <router-link to="register">
                <v-btn flat dark>
                    Sign Up
                </v-btn>
            </router-link>
        </v-toobar-items> -->

        <v-toobar-items>
                <v-btn flat dark
                    @click="navigateTo({name: 'register'})">
                    Sign Up
                </v-btn>
        </v-toobar-items>

    </v-toolbar>
</template>

<script>
    export default {
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped>
    .home {
        cursor: pointer
    }
    .home:hover {
        color: #E9E;
    }
</style>