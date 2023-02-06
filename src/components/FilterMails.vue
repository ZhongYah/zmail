<template>
  <div>
    Filter email:
    <input type="text"  @input="filterPosts" placeholder="Only number" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterMails",
  methods: 
    mapActions(["filterPosts"]),
    
};
</script>

<style>
input[type="text"]  {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
  border-radius: 5px;
}
</style>
