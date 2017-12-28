<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <!-- fab makes it a round button -->
                <v-btn 
                    slot="action"
                    @click="navigateTo({name: 'songs-create'})"
                    class="cyan accent-2"
                    light
                    medium
                    absolute
                    right
                    middle
                    fab
                >
                <v-icon>add</v-icon>
                </v-btn>
                <div v-for="song in songs" 
                    :key="song.id">
                    {{song.title}} - 
                    {{song.artist}} - 
                    {{song.album}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
    data() {
        return {
            songs: null
            // songs: [
            //     {
            //     title: "The Gunner's Dream",
            //     artist: "Pink Floyd",
            //     album: "The Final Cut"
            //     },
            //     {
            //     title: "The Gunner's Dream",
            //     artist: "Pink Floyd",
            //     album: "The Final Cut"
            //     }
            // ]
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    },
    async mounted() {
        // Do request to back end for all songs
        this.songs = (await SongsService.index()).data  // Don't forget to use .data!
    }
}
</script>

<style scoped>
</style>
