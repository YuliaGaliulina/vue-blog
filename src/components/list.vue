<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="article in articles">
                <v-card>
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
                    <v-card-text>{{ article.text }}</v-card-text>
                    <v-card-actions>
                        <v-btn flat color="blue">Read more</v-btn>
                    </v-card-actions>
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
    .card__text
        display: block
        display: -webkit-box
        height: 65px
        overflow: hidden
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
</style>
