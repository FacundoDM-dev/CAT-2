<template>
  <div class="postit-list">
    <PosTit v-for="postIt in postItArray" :key="postIt.id" :postIt="postIt" />
  </div>
</template>

<script setup>
import {ref} from "vue"
import PosTit from './PosTit.vue';

const postItArray = ref([
  {
    id: 1,
    title: "Important Meeting",
    image: "https://example.com/meeting-image.jpg",
    date: "2023-10-30",
    time: "09:00 AM",
    dueDate: "2023-11-15",
    priority: "high",
    content: "Prepare for the quarterly review meeting with the team.",
    labels: ["Work", "Meeting", "Urgent"],
    featured: true,
  },
  {
    id: 2,
    title: "Grocery List",
    image: "https://example.com/grocery-image.jpg",
    date: "2023-10-30",
    time: "10:00 AM",
    dueDate: "2023-10-31",
    priority: "medium",
    content: "Buy groceries for the week: milk, eggs, bread, and vegetables.",
    labels: ["Personal", "Groceries"],
    featured: false,
  },
  {
    id: 3,
    title: "Project Deadline",
    image: "https://example.com/project-image.jpg",
    date: "2023-10-31",
    time: "02:00 PM",
    dueDate: "2023-11-10",
    priority: "high",
    content: "Finish the project report and submit it before the deadline.",
    labels: ["Work", "Project", "Urgent"],
    featured: false,
  },
  // Agrega más tarjetas Post-It según sea necesario
]);
</script>

<style scoped>
.postit-list {
display: grid;
width: 100%;
grid-template-columns: 1fr 1fr 1fr;
}

</style>
