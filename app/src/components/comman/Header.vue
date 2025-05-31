<template>
  <header
    class="fixed bg-white dark:bg-neutral-800 border-1 dark:border-neutral-700 :border-neutral-100 inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border shadow-md backdrop-blur-lg md:top-6 md:rounded-md lg:max-w-screen-2xl">
    <div class="px-4">
      <div class="flex justify-between items-center py-2">
        <!-- Logo -->
        <div class="flex shrink-0 items-center px-3">
          <a aria-current="page" class="flex items-center" href="/">
            <span class="text-green-500 font-extrabold text-xl" >Khan.dev</span>
          </a>
        </div>

        <!-- Nav Links -->
        <div class="hidden md:flex">
          <NavLinks />
        </div>
        <!-- Auth Buttons -->
        <div class="gap-2 flex items-center px-3">
          <div class="md:flex hidden gap-2">
            <DarkBtn />
          </div>
          <LangBtn />
          <div class="md:flex hidden gap-2">
            <ContactBtn />
          </div>

          <!-- Drawer button on desktop -->
          <div class="md:hidden flex gap-2">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import Drawer from '@/components/drawer/Drawer.vue'
  import DarkBtn from '@/components/toglbtn/DarkBtn.vue'
  import ContactBtn from '@/components/toglbtn/ContactBtn.vue'
  import NavLinks from '@/components/naveg/NavLinks.vue'
  import LangBtn from '../toglbtn/LangBtn.vue'
</script>