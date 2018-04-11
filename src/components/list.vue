<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="article in articles">
                <v-card>
                    <router-link :to="{ name: 'article', params: { id: article.id }}">
                        <v-card-media :src="article.image"
                                      height="350px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline" :style="{color: 'white'}">{{ article.title }}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-media>
                        <v-card-text>
                            <div class="text">{{ article.text }}</div>
                        </v-card-text>
                    </router-link>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    computed: {
      articles() {
        return this.$store.state.articles;
      }
    }
  };
</script>

<style lang="sass" scoped>
    .text
        display: block
        display: -webkit-box
        height: 50px
        overflow: hidden
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
    .card__text
        color: #000
</style>
