<template>
  <div class="postit">
    <button class="delete-postit" @click="deletePostIt">
      delete
      <img :src="props.postIt.image" alt="" />
    </button>
    <h2 class="postit-title">{{ props.postIt.title }}</h2>
    <div class="postit-image">
      <img :src="props.postIt.image" alt="Post-It Image" />
    </div>

    <div class="postit-info">
      <div class="postit-date">
        <img :src="props.postIt.image" alt="Date">
        <span>{{ props.postIt.date }}</span>
      </div>
      <div class="postit-time">
        <img :src="props.postIt.image" alt="Time">
        <span>{{ props.postIt.time }}</span>
      </div>
      <div class="postit-priority">
        <span class="priority" :class="props.postIt.priority">
          {{ props.postIt.priority }}
        </span>
      </div>
      <div class="postit-due-date">
        <span>{{ props.postIt.dueDate }}</span>
      </div>
      <div class="postit-content">
        {{ props.postIt.content }}
      </div>
      <div class="postit-labels">
        <span class="label" v-for="label in props.postIt.labels" :key="label">
          {{ label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  postIt: Object,
});
const deletePostIt = () => {

};
</script>

<style scoped>
.postit {
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
padding: 1rem;
position: relative;
margin: 20px;
}
.postit-title {
font-size: 1.5rem;
font-weight: 600;
margin: 0;
}
.postit-image {
margin: 1rem 0;
}
.postit-info {
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;
}
.postit-date,
.postit-time,
.postit-priority,
.postit-due-date {
display: flex;
flex-direction: row;
align-items: center;
width: 50%;
margin-bottom: 0.5rem;
}
.postit-date img,
.postit-time img,
.postit-due-date img {
width: 1rem;
margin-right: 0.5rem;
}
.postit-date span,
.postit-time span,
.postit-due-date span {
font-size: 0.8rem;
}
.priority {
text-transform: uppercase;
font-weight: 600;
font-size: 0.8rem;
padding: 0.2rem 0.5rem;
display: flex;
align-items: center;
justify-content: center;
}
.priority.low {
background-color: #f2c94c;
}
.priority.medium {
background-color: #f2994a;
}
.priority.high {
background-color: #eb5757;
}
.postit-content {
margin: 1rem 0;
text-align: left;
}
.postit-labels {
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: flex-start;
margin: 1rem 0;
}
.postit-labels .label {
  background-color: #f2f2f2;
border-radius: 10px;
padding: 0.5rem;
margin-right: 0.5rem;
margin-bottom: 0.5rem;
font-size: 0.8rem;
}
.delete-postit {
position: absolute;
top: 10px;
right: 10px;
background: transparent;
border: 0;
padding: 0;
cursor: pointer;
}
.delete-postit img {
width: 20px;
}

</style>
