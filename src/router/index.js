import Vue from 'vue';
import Router from 'vue-router';
import List from '../components/list.vue';
import Article from '../components/article.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/article/:id',
      component: Article,
      name: 'article'
    }
  ]
});
