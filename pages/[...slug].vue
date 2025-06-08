<script setup>
const countdown = ref(3);

onMounted(() => {
    const timer = setInterval(() => {
        if (countdown.value > 0) {
        countdown.value--;
        } else {
        clearInterval(timer);
        return navigateTo("/")
        }
    }, 1000);
    
    onUnmounted(() => clearInterval(timer));
})
</script>
<template>
    <div class='container text-center d-flex flex-column justify-content-center align-items-center'
      style=" height: '80vh'; gap:'2rem'"
    >
      <h1>404 | 找不到此頁面</h1>
      <p className='fs-4'>
        您即將在 <span className='text-primary fw-bold'>{{countdown}}</span> 秒後回到首頁
      </p>
    </div>
</template>
<style scoped></style>
