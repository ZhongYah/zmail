<template>
    <div class="star">
        <button :style="{ backgroundColor: color }" @click="changeColor">
           ★
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'white',
    };
  },
  methods: {
    changeColor() {
    this.color = this.color === 'white' ? '#fcc500' : 'white';
    },
  },
};
</script>

<style>
.star {
  transform: scale(1.8);
  width: 50px;
  height: 50px;
  position: absolute;
  right: 30px;
  top:40px;
}
</style>
