<template>
  <div id="app">
    <div class="container">
      <!-- <AddTodo/> -->
      <FilterTodos/>
      <Todos/>
      <WriterDraft/>
    </div>
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";
// import AddTodo from "../components/AddTodo.vue";
import FilterTodos from "../components/FilterTodos.vue";
import WriterDraft from "../components/WriterDraft.vue";

export default {
  name: "app",
  components: {
    Todos,
    WriterDraft,

    // AddTodo,
    FilterTodos
  }
};
</script>
