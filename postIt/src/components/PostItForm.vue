<template>
  <div class="postit-form">
    <form @submit.prevent="submitForm" action="" class="postit-form__form">
      <div class="postit-form__form-group">
        <label for="title">Title</label>
        <input v-model="postItData.title" id="title" type="text" name="title" />
      </div>

      <div class="postit-form__form-group">
        <label for="date">Date</label>
        <input v-model="postItData.date" id="date" type="date" name="date" />
      </div>

      <div class="postit-form__form-group">
        <label for="priority">Priority</label>
        <select v-model="postItData.priority" id="priority" name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="higth">Higth</option>
        </select>
      </div>

      <div class="postit-form__form-group">
        <label for="content">Content</label>
        <textarea
          v-model="postItData.content"
          id="content"
          name="content"
          cols="20"
          rows="10"
        ></textarea>
      </div>

      <div class="postit-form__form-group">
        <label for="image">Image</label>
        <input id="image" type="file" name="image" />
      </div>

      <div class="postit-form__form-group">
        <label for="time">Time</label>
        <input v-model="postItData.time" id="time" type="time" name="time" />
      </div>

      <div class="postit-form__form-group">
        <label for="due-date">Due Date</label>
        <input
          v-model="postItData.dueDate"
          id="due-date"
          type="date"
          name="due-date"
        />
      </div>

      <div class="postit-form__form-group">
        <label for="labels">Labels</label>
        <input
          v-model="postItData.labels"
          id="labels"
          type="text"
          name="labels"
        />
      </div>

      <div class="postit-form__submit">
        <button type="submit" class="postit-form__submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const submitForm = () => {};

const postItData = ref({
  title: "",
  date: "",
  time: "",
  dueDate: "",
  priority: "",
  content: "",
  labels: [""],
  featured: true,
});
</script>

<style scoped>
.postit-form__form {
  display: flex;
  flex-wrap: wrap;
}
.postit-form__form-group {
  margin-bottom: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.postit-form__form-group label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
}
.postit-form__form-group input,
.postit-form__form-group textarea,
.postit-form__form-group select {
  width: 80%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  text-align: left;
}
.postit-form__form-group input:focus,
.postit-form__form-group textarea:focus {
  border-color: #000;
}
.postit-form__form-group textarea {
  height: 100px;
}
.postit-form__submit {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  min-width: 100px;
  background-color: #4caf50;
  color: #fff;
}
.postit-form__submit:hover {
  background-color: #43a047;
}
</style>
