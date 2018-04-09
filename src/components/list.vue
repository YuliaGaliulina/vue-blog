<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="n in 9" :key="n">
                <v-card>
                    <v-card-media src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                                  height="350px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline" :style="{color: 'white'}">{{ post.title }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                    <v-card-text>{{ post.text }}</v-card-text>
                    <v-card-actions>
                        <v-btn flat color="blue">Read more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {post} from "../post.js"
    export default {
      data() {
        return {
          post
        }
      }
    }
</script>

<style lang="sass" scoped>
    .card__text
        display: block
        display: -webkit-box
        overflow: hidden
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
</style>
