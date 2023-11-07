<template>
  <div class="postit-list">
    <PostIt
      v-for="postIt in postItArray"
      :key="postIt.id"
      :title="postIt.title"
      :image="postIt.image"
      :date="postIt.date"
      :time="postIt.time"
      :dueDate="postIt.dueDate"
      :dueTime="postIt.dueTime"
      :priority="postIt.priority"
      :content="postIt.content"
      :featured="postIt.featured"
      :labels="postIt.labels"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostIt from "./PostIt.vue";

const postItArray = ref([
  {
    id: 1,
    title: "Important Meeting",
    image:
      "https://img.freepik.com/foto-gratis/mujer-morena-escribiendo-correo-electronico-computadora-portatil-mientras-sentado-su-casa-enfoque-selectivo-mano_171337-13093.jpg?w=996&t=st=1698849440~exp=1698850040~hmac=0b0645298ac89448f5c811d41d5c580d1bd4846bed53e95d0db0b4bb4f31406dg",
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
    image:
      "https://img.freepik.com/foto-gratis/mujer-morena-escribiendo-correo-electronico-computadora-portatil-mientras-sentado-su-casa-enfoque-selectivo-mano_171337-13093.jpg?w=996&t=st=1698849440~exp=1698850040~hmac=0b0645298ac89448f5c811d41d5c580d1bd4846bed53e95d0db0b4bb4f31406d",
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
    image:
      "https://img.freepik.com/foto-gratis/mujer-morena-escribiendo-correo-electronico-computadora-portatil-mientras-sentado-su-casa-enfoque-selectivo-mano_171337-13093.jpg?w=996&t=st=1698849440~exp=1698850040~hmac=0b0645298ac89448f5c811d41d5c580d1bd4846bed53e95d0db0b4bb4f31406d",
    date: "2023-10-31",
    time: "02:00 PM",
    dueDate: "2023-11-10",
    priority: "high",
    content: "Finish the project report and submit it before the deadline.",
    labels: ["Work", "Project", "Urgent"],
    featured: false,
  },
]);
</script>

<style scoped>
.postit-list {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
