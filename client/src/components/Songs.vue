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
                    class="song"
                    :key="song.id">

                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{song.title}}
                            </div>
                            <div class="song-artist">
                                {{song.artist}}
                            </div>
                            <div class="song-genre">
                                {{song.genre}}
                            </div>
                            <v-btn class="cyan"
                                dark
                                @click="navigateTo({name: 'song', params: {songId: song.id}})">	
                                View
                            </v-btn>
                        </v-flex>

                        <v-flex xs6>
                            <img class="album-image" :src="song.albumImageUrl">
                        </v-flex>

                    </v-layout>

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
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
    border: 1px black solid;
}
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 24px;
}
.song-genre {
    font-size: 18px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>
