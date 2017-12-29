<template>
    <panel title="Song Metadata">
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
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl">
                <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    props: [
        'song'
    ],
    components: {
        Panel
    }
}
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: monospace;
    border-style: none;
    border-color: transparent;
    /* height: 600px; */
    height: 250px;
    overflow: auto;
    padding: 20px;
}
.album-image {
    width: 50%;
    margin: 0 auto;
}
</style>
