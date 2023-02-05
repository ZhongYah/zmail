<template>
  <div>
    <ul>
      <li v-for="item in filteredData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import DetailsView from './DetailsView.vue'

export default {
  components: {
    DetailsView
  },
  computed: {
    data() {
      return this.$route.params.data
    },
    filteredData() {
      return this.data.filter(item => item.name.includes('Filter Text'))
    }
  }
}
</script>

