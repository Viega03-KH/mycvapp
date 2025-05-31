<template>
    <n-card class="w-90 border dark:border-neutral-700 bg-white dark:bg-neutral-800">
      <template #cover>
        <div class="p-4">
          <img
            oncontextmenu="return false;"
            draggable="false"
            class="rounded-sm w-full h-80 object-cover"
            :src="myImage"
            alt="profile cover"
          />
        </div>
      </template>
  
      <div>
        <h1 class="text-xl font-extrabold">Akhmadov Mirjakhon </h1>
        <p class="mt-2 text-lg font-[350] dark:text-neutral-300">
          {{ $t("about") }}
        </p>
  
        <!-- Social icons -->
        <div class="mt-4 flex flex-wrap gap-2">
            
          <a
            v-for="(icon, i) in socialIcons"
            :key="i"
            :href="icon.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-md border dark:border-slate-100/10 border-slate-200 text-slate-600 transition hover:text-primary dark:border-transparent dark:bg-dark-2 dark:text-slate-400 dark:hover:text-primary"
          >
            <font-awesome-icon :icon="['fab', icon.name]" class="h-6 w-6" />
          </a>
  
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-[124px] items-center justify-center rounded-md border dark:border-slate-100/10 border-slate-200 text-slate-600 transition hover:text-primary dark:border-transparent dark:bg-dark-2 dark:text-slate-400 dark:hover:text-primary"
          >
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="h-6 w-8" />
          </a>
        </div>
      </div>
    </n-card>
  </template>
  
  <script setup>
  import myImage from '@/assets/my-img/my-img.jpg'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faFacebookF,
    faGithub,
    faTwitter,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  
  library.add(faFacebookF, faGithub, faTwitter, faYoutube, faArrowRight)
  
  const socialIcons = [
    { name: 'facebook-f', url: 'https://facebook.com/yourprofile' },
    { name: 'github', url: 'https://github.com/yourprofile' },
    { name: 'twitter', url: 'https://twitter.com/yourprofile' },
    { name: 'youtube', url: 'https://youtube.com/yourchannel' },
  ]
  </script>
  