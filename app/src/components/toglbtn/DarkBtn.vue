<script setup>
  import { ref, onMounted } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
  
  library.add(faSun, faMoon)
  
  const isDark = ref(false)
  
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
    } else {
      isDark.value = false
      document.documentElement.classList.remove('dark')
      if (!savedTheme) {
        localStorage.setItem('theme', 'light')
      }
    }
  })
  </script>
  
  <template>
    <div class="flex items-center gap-4">
      <n-button @click="toggleDarkMode" type="primary" ghost>
        <template #icon>
          <font-awesome-icon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" />
        </template>
      </n-button>
    </div>
  </template>
  