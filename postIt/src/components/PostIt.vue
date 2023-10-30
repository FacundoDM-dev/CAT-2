<template>
  <div class="postit" >
    <button class="delete-postit" @click="deletePostIt">delete
      <img src="" alt="">
    </button>
    <h2 class="postit-title">title</h2>
    <div class="postit-image">
      <img src="" alt="Post-It Image">
    </div>
    
    <div class="postit-info">
      
      <div class="postit-date">
        <span>date</span>
      </div>
      <div class="postit-time">
        <span>time</span>
      </div>
      <div class="postit-priority">
        <span>priority</span>
      </div>
      <div class="postit-due-date">
        <span>due date</span>
      </div>
    </div>
  </div>
</template>

<script setup>



</script>

<style sc>
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
</style>