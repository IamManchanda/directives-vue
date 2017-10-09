<template>
  <div class="grid-container margin-top-2">
    <div class="grid-x grid-margin-x">
      <div class="cell">
        <button class="button primary radius" 
                v-custom-on:click="click">Click me</button>
        <hr>
        <div style="width: 100px;height: 100px;background-color: lightgreen"
             v-custom-on:mouseenter="mouseEnter"
             v-custom-on:mouseleave="mouseLeave"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    click() {
      alert('I was clicked!');
    },
    mouseEnter() {
      console.log('Mouse entered.');
    },
    mouseLeave() {
      console.log('Mouse left.');
    }
  }
}
</script>

<style lang="scss">
</style>
