<script setup>
  import { RouterView } from 'vue-router'
  import Header from '@/components/comman/Header.vue'
  import { NMessageProvider } from 'naive-ui'
  </script>
  
  <template>
    <n-message-provider>
      <div class="md:px-28 md:px-0 py-0 md:py-10">
        <Header />
        <div class="mx-auto max-w-screen-2xl pt-20">
          <RouterView data-aos="fade-up" />
        </div>
      </div>
    </n-message-provider>
  </template>
  