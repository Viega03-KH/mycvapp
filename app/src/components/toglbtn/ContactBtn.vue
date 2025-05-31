<template>
    <n-tooltip placement="bottom" trigger="hover">
              <template #trigger>
                <n-button icon-placement="right" type="primary">
                  <template #icon>
                    <n-icon>
                      <font-awesome-icon :icon="['fas', 'square-phone']" class="w-5 h-5" />
                    </n-icon>
                  </template>
                  Contact
                </n-button>
              </template>
              <span class="italic" > Click to contact or <span class="text-green-500" >Tel: 88-380-29-03</span> </span>
    </n-tooltip>
</template>

<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faSquarePhone,
  } from '@fortawesome/free-solid-svg-icons'
  library.add(faSquarePhone)
</script>