<template>
 <div class="min-h-screen flex items-center justify-center">
    <div class="bg-gray-300 border-4 border-black shadow-2xl rounded-lg">
      <form class="border-b-4 border-black">
         <input type="number" class="bg-transparent p-8 rounded-t-lg outline-none text-3xl text-right text-black font-mono">
      </form>
      <div class="p-6 text-white grid grid-cols-4 gap-4 text-xl">
        <button class="font-mono bg-red-900 border-4 border-black text-black col-span-3 hover:bg-red-400 rounded-full p-5">C</button>
        <button class="font-mono bg-purple-400 border-4 border-black text-black hover:bg-purple-200 rounded-full p-5">&divide;</button>

        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">1</button>
        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">2</button>
        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">3</button>
        <button class="font-mono bg-purple-400 border-4 border-black text-black hover:bg-purple-200 rounded-full p-5">&times;</button>

        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">4</button>
        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">5</button>
        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">6</button>
        <button class="font-mono bg-purple-400 border-4 border-black text-black hover:bg-purple-200 rounded-full p-5">&minus;</button>

        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">7</button>
        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">8</button>
        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">9</button>
        <button class="font-mono bg-purple-400 border-4 border-black text-black hover:bg-purple-200 rounded-full p-5">&plus;</button>

        <button class="font-mono bg-black hover:bg-gray-800 rounded-full p-5">0</button>
        <button class="font-mono bg-green-900 col-span-3 border-4 border-black text-black hover:bg-green-200 rounded-full p-5">&equals;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>

</style>
