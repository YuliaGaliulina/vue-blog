<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt=""
                :style="{width: '100%'}">
            </v-flex>
            <v-flex xs12 sm12 md6>
                <h1>{{ post.title}}</h1>
                <div>{{ post.text }}</div>
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

