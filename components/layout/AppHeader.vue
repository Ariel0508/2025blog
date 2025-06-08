<script setup>
import { useScroll } from '@vueuse/core'
import { NuxtLink } from '#components'
const isVisible = ref(true)
const { y } = useScroll(window) // 取得 scrollY
const lastY = ref(0)

// 監聽滾動 y 值變化
watch(y, (newY) => {
  if (newY > lastY.value && newY > 100) {
    // 向下滑 + 超過 100px
    isVisible.value = false
  } else if (newY < lastY.value) {
    // 向上滑
    isVisible.value = true
  }

  lastY.value = newY
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 bg-white shadow-md transition-transform duration-300',
      isVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="container mx-auto px-[12px] max-w-[1320px]">
      <nav class="flex flex-row items-center justify-center py-6 gap-10 font-bold">
        <NuxtLink to="/" active-class="text-primary" class="text-[28px] hover:text-primary">首頁</NuxtLink>
        <NuxtLink to="/blog" active-class="text-primary" class="text-[28px] hover:text-primary">部落格</NuxtLink>
      </nav>
    </div>
  </header>
</template>

