<template>
  <div class="modal">
    <div class="modal__overlay"></div>

    <div class="modal__content">
      <div class="modal__header">
        <slot name="header"> </slot>

        <button @click="closeModal" class="modal__close">
          <img src="../assets/close-button.svg" alt="Close Button" />
        </button>

        <div class="modal__body">
          <slot name="body"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const closeModal = () => {
  // handle event to implement close functionality
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal__content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
}
.modal__close {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
.modal__close img {
  width: 20px;
}
</style>
