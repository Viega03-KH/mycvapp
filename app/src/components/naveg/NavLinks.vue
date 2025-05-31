<template>
  <!-- Nav Links -->
  <div class="flex flex-col md:flex-row items-start md:justify-center gap-2 md:gap-5 w-full">
    <router-link 
      to="/"
      class="nav-link"
      :class="{ 'active': route.path === '/' }"
    >
      <font-awesome-icon :icon="['fas', 'home']" class="w-4 h-4" />
      Home
    </router-link>

    <router-link
      to="/about"
      class="nav-link"
      :class="{ 'active': route.path === '/about' }"
    >
      <font-awesome-icon :icon="['fas', 'user-circle']" class="w-4 h-4" />
      About
    </router-link>

    <router-link
      to="/"
      class="nav-link"
      
    >
      <font-awesome-icon :icon="['fas', 'briefcase']" class="w-4 h-4" />
      Works
    </router-link>

    <router-link
      to="/"
      class="nav-link"
      
    >
    <font-awesome-icon :icon="['fab', 'blogger-b']" class="w-4 h-4" />
      Services
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faHome,
  faUserCircle,
  faBriefcase,
  faSquarePhone
} from '@fortawesome/free-solid-svg-icons'
import { faBloggerB } from '@fortawesome/free-brands-svg-icons'

library.add(faHome, faUserCircle, faBriefcase, faSquarePhone, faBloggerB)

const route = useRoute()
</script>


<style scoped>
.nav-link {
  @apply inline-flex rounded-md gap-2 w-full px-2 py-2 md:py-4 text-sm font-medium transition-all duration-300 hover:bg-green-400/20;
}
.active {
  @apply bg-green-400/20;
}
</style>
