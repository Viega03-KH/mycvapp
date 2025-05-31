<template>
    <n-button-group>
      <n-button @click="activate" type="primary">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </n-button>
    </n-button-group>
  
    <n-drawer v-model:show="active" :width="200" class="bg-white dark:bg-neutral-800 px-[0px]">
      <n-drawer-content class="px-[0px]" closable>
        <template #header>
          <a>Menu</a>
        </template>
  
        <div class="content p-[0px]">
          <NavLinks />
        </div>
        <template>
          
        </template>
  
        <template #footer>
          <div class="flex justify-start gap-1">
          <DarkBtn />
          <ContactBtn />
          </div>
        </template>
      </n-drawer-content>
    </n-drawer>
  </template>
  
  <script setup>
  import { ref, defineExpose } from 'vue'
  import NavLinks from '@/components/naveg/NavLinks.vue'
  import ContactBtn from '@/components/toglbtn/ContactBtn.vue'
  import DarkBtn from '@/components/toglbtn/DarkBtn.vue'
  import LangBtn from '../toglbtn/LangBtn.vue'
      // Font Awesome
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import {
      faBars,
      faHome,
      faUserCircle,
      faBriefcase,
      faSquarePhone,
    } from '@fortawesome/free-solid-svg-icons'
    
    library.add(faBars, faHome, faUserCircle, faBriefcase, faSquarePhone)
  
  const active = ref(false)
  
  const activate = () => {
    active.value = true
  }
  
  // Tashqi komponentdan chaqirish uchun ochib qo'yiladi
  defineExpose({
    activate
  })
  </script>
  