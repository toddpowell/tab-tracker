<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <song-metadata :song="song" />
            </v-flex>

            <v-flex xs6 class="ml-2">
                <you-tube :youtubeId="song.youtubeId" />
            </v-flex>
        </v-layout>

        <v-layout class="mt-2">
            <v-flex xs6 class="ml-2">
                <tab :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <lyrics :song="song"/>
            </v-flex>
        </v-layout>

        <!-- <v-layout>
            <v-flex xs6>
                <panel title="YouTube Video">
                </panel>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <panel title="Lyrics">
                    <textarea
                        readonly
                        v-model="song.lyrics"
                    ></textarea> 
                </panel>
            </v-flex>        
        </v-layout> -->
    </div>
</template>

<script>
import Panel from "@/components/Panel"
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
    data () {
        return {
            song: {}
        }
    },
    async mounted () {
        // We can get .route, because we used sync(store, router) in main.js
        // So, the store will change whenever the route changes
        const songId = this.$store.state.route.params.songId
        // const songId = this.route.params.songId
        this.song = (await SongsService.show(songId)).data
    },
    components: {
        Panel,
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
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
</style>
