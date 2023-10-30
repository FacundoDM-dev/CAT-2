<script setup>

import posTit from './components/posTit.vue'

const postItArray = [
  {
    id: 1,
    title: "Important Meeting",
    image: "https://example.com/meeting-image.jpg",
    date: "2023-10-30",
    time: "09:00 AM",
    dueDate: "2023-11-15",
    dueTime: "10:00 AM",
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
    dueTime: "12:00 PM",
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
    dueTime: "04:00 PM",
    priority: "high",
    content: "Finish the project report and submit it before the deadline.",
    labels: ["Work", "Project", "Urgent"],
    featured: false,
  },
  // Add more post-its as needed
];
</script>

<template>
  <div>
    <!-- Utiliza v-for para representar varios posTit -->
    <posTit v-for="postIt in postItArray" :key="postIt.id" :postIt="postIt" />
  </div>
</template>

<style scoped>

</style>
