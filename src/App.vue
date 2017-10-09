<template>
  <div class="grid-container margin-top-2">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-6 medium-offset-3">
        <h3>Built-in Directives</h3>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="grid-x grid-margin-x">
      <div class="cell medium-6 medium-offset-3">
        <h3>Custom Directives</h3>
        <p v-highlight:background.delayed="'#3adb76'">Color this</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: '#cc4b37', secondColor: '#1779ba', delay: 500}">Color this multicolor local boy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    localHighlight: {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers.delayed) {
          delay = 3000;
        }
        if (binding.modifiers.blink) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
                el.style.padding = '.3rem';
                el.style.color = '#fefefe';
              } else {
                el.style.color = currentColor;
                el.style.fontWeight = 'bold';
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor;
              el.style.padding = '.3rem';
              el.style.color = '#fefefe';
            } else {
              el.style.color = binding.value.mainColor;
              el.style.fontWeight = 'bold';
            }
          }, delay);
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
