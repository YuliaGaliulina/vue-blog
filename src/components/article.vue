<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <img :src="article.image"
                     :style="{width: '100%'}">
            </v-flex>
            <v-flex xs12 sm12 md6>
                <h1>{{ article.title}}</h1>
                <div>{{ article.text }}</div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    computed: {
      article() {
        return this.$store.getters.getArticleById(this.$route.params.id);
      }
    },
  };
</script>

