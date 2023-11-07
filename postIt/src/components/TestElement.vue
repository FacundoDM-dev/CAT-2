<template>
  <div>
    <h1 v-if="isOdd">I am odd</h1>
    <h1 v-else>I'm not an odd package</h1>
    <button class="btn" @click="sendPackage">Send packages</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// no se bien por que habia que definir props aqui
const props = defineProps({
  id: Number,
  items: Number,
  size: String,
  width: Number,
  available: Boolean,
});


// variables count y values

// con funcion
const count = ref(0);

const isOddFunc = (paramCount) => paramCount % 2 !== 0
console.log(count.value, "valor incial");

// computed propertys

const isOdd = computed(() => count.value % 2 !==0) 

const values = ref([
  { id: 1, items: 3, size: "M", width: 90, available: false },
  { id: 2, items: 5, size: "L", width: 98, available: true },
]);


// funcion con parametro reutilizable que busca multiplos de 3 y si los encuentra suma 1 a la variable count.
const increaseItemsCount = (items) => {
  if (items % 3 === 0) {
    count.value++;
  }
};
//// funcion sendPackage se encarga de iterar sobre objeto dentro de la variable values apuntando a la key items y la funcion increaseItemsCount que se encarca de encontrar multiplos de 3, si determina que el objeto y la key que le pasamos como parametro cumple la condicion, pasa una cosa u otra.
const sendPackage = () => {
  values.value.forEach((item) => {
    increaseItemsCount(item.items); 
  });

  alert(`Delivered ${count.value} items.`);
  console.log(count.value);
};
</script>

<style scoped></style>
