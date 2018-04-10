import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    articles: [
      {
        title: 'Blog title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mi,' +
        ' porttitor a est id, molestie vestibulum erat. Etiam tincidunt varius sapien ' +
        'convallis laoreet. Vestibulum sed volutpat nulla. Sed aliquam congue arcu, a ' +
        'pellentesque dui laoreet nec. Ut porta, mauris sit amet dignissim varius, ' +
        'nibh risus condimentum diam, non pulvinar nibh ligula eu risus. Phasellus ' +
        'nec orci ut magna vulputate bibendum et sed metus. Duis vel vestibulum ipsum.' +
        ' Nullam finibus ultrices felis, at facilisis tellus tristique nec. ' +
        'Donec molestie ante ipsum, a volutpat orci accumsan non. Sed tincidunt ' +
        'scelerisque ex, molestie volutpat lorem lobortis eget. Nulla porttitor ' +
        'ullamcorper enim a suscipit. Cras sit amet ultrices mi, mattis molestie lorem.' +
        ' Fusce ac ullamcorper tortor.',
        image: '/static/delicate-arch-960279_960_720.jpg'
      },
      {
        title: 'Blog title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mi,' +
        ' porttitor a est id, molestie vestibulum erat. Etiam tincidunt varius sapien ' +
        'convallis laoreet. Vestibulum sed volutpat nulla. Sed aliquam congue arcu, a ' +
        'pellentesque dui laoreet nec. Ut porta, mauris sit amet dignissim varius, ' +
        'nibh risus condimentum diam, non pulvinar nibh ligula eu risus. Phasellus ' +
        'nec orci ut magna vulputate bibendum et sed metus. Duis vel vestibulum ipsum.' +
        ' Nullam finibus ultrices felis, at facilisis tellus tristique nec. ' +
        'Donec molestie ante ipsum, a volutpat orci accumsan non. Sed tincidunt ' +
        'scelerisque ex, molestie volutpat lorem lobortis eget. Nulla porttitor ' +
        'ullamcorper enim a suscipit. Cras sit amet ultrices mi, mattis molestie lorem.' +
        ' Fusce ac ullamcorper tortor.',
        image: '/static/08580454790b357.jpg'
      },
      {
        title: 'Blog title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mi,' +
        ' porttitor a est id, molestie vestibulum erat. Etiam tincidunt varius sapien ' +
        'convallis laoreet. Vestibulum sed volutpat nulla. Sed aliquam congue arcu, a ' +
        'pellentesque dui laoreet nec. Ut porta, mauris sit amet dignissim varius, ' +
        'nibh risus condimentum diam, non pulvinar nibh ligula eu risus. Phasellus ' +
        'nec orci ut magna vulputate bibendum et sed metus. Duis vel vestibulum ipsum.' +
        ' Nullam finibus ultrices felis, at facilisis tellus tristique nec. ' +
        'Donec molestie ante ipsum, a volutpat orci accumsan non. Sed tincidunt ' +
        'scelerisque ex, molestie volutpat lorem lobortis eget. Nulla porttitor ' +
        'ullamcorper enim a suscipit. Cras sit amet ultrices mi, mattis molestie lorem.' +
        ' Fusce ac ullamcorper tortor.',
        image: '/static/34565702861_7598786b24_b.jpg'
      },
      {
        title: 'Blog title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mi,' +
        ' porttitor a est id, molestie vestibulum erat. Etiam tincidunt varius sapien ' +
        'convallis laoreet. Vestibulum sed volutpat nulla. Sed aliquam congue arcu, a ' +
        'pellentesque dui laoreet nec. Ut porta, mauris sit amet dignissim varius, ' +
        'nibh risus condimentum diam, non pulvinar nibh ligula eu risus. Phasellus ' +
        'nec orci ut magna vulputate bibendum et sed metus. Duis vel vestibulum ipsum.' +
        ' Nullam finibus ultrices felis, at facilisis tellus tristique nec. ' +
        'Donec molestie ante ipsum, a volutpat orci accumsan non. Sed tincidunt ' +
        'scelerisque ex, molestie volutpat lorem lobortis eget. Nulla porttitor ' +
        'ullamcorper enim a suscipit. Cras sit amet ultrices mi, mattis molestie lorem.' +
        ' Fusce ac ullamcorper tortor.',
        image: '/static/astronomy-cactus-dark-34107.jpg'
      },
      {
        title: 'Blog title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mi,' +
        ' porttitor a est id, molestie vestibulum erat. Etiam tincidunt varius sapien ' +
        'convallis laoreet. Vestibulum sed volutpat nulla. Sed aliquam congue arcu, a ' +
        'pellentesque dui laoreet nec. Ut porta, mauris sit amet dignissim varius, ' +
        'nibh risus condimentum diam, non pulvinar nibh ligula eu risus. Phasellus ' +
        'nec orci ut magna vulputate bibendum et sed metus. Duis vel vestibulum ipsum.' +
        ' Nullam finibus ultrices felis, at facilisis tellus tristique nec. ' +
        'Donec molestie ante ipsum, a volutpat orci accumsan non. Sed tincidunt ' +
        'scelerisque ex, molestie volutpat lorem lobortis eget. Nulla porttitor ' +
        'ullamcorper enim a suscipit. Cras sit amet ultrices mi, mattis molestie lorem.' +
        ' Fusce ac ullamcorper tortor.',
        image: '/static/18016539940_801304555a_b.jpg'
      },
    ]
  },
});