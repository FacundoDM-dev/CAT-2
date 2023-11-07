<script setup>
import SearchBar from "./components/SearchBar.vue";
import FilterBar from "./components/FilterBar.vue";
import PostItList from "./components/PostItList.vue";
import PostItForm from "./components/PostItForm.vue";
</script>

<template>
  <div class="main">
    <header class="header">Post It Manager</header>

    <!-- <div>Post-It Manager</div> -->
    <div>
      <SearchBar />
      <FilterBar />
      <PostItList />
    </div>
    <PostItForm />
  </div>
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.header__left {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  margin-right: 10px;
}
.title {
  font-size: 24px;
  font-weight: 400;
}
</style>
