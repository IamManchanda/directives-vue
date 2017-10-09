import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    let delay = 0;
    if (binding.modifiers.delayed) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
        el.style.padding = '.3rem';
      } else {
        el.style.color = binding.value;
        el.style.fontWeight = 'bold';
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
