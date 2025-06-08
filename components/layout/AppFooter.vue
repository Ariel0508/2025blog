<script setup>
const route = useRoute();
const isHomePage = computed(() => route.path === "/");
</script>
<template>
  <footer>
    <div class="container mx-auto px-3 max-w-[1320px]">
      <div v-if="!isHomePage" class="contact hidden py-20 md:block">
        <div class="flex flex-row items-center justify-between">
            <p class="email font-medium text-[32px]">alysewanghexschool.com</p>
            <div
              class="social flex flex-row items-center justify-between gap-1"
            >
              <a href="#" class="social-item">
                <img
                  class="social-item-img"
                  src="/public/desktop/index/onlyIcon.png"
                  alt="icon"
                />
              </a>
              <a href="#" class="social-item">
                <img
                  class="social-item-img"
                  src="/public/desktop/index/onlyIcon-1.png"
                  alt="icon"
                />
              </a>
              <a href="#" class="social-item">
                <img
                  class="social-item-img"
                  src="/public/desktop/index/onlyIcon-2.png"
                  alt="icon"
                />
              </a>
              <a href="#" class="social-item">
                <img
                  class="social-item-img"
                  src="/public/desktop/index/icons8-linkedin.png"
                  alt="icon"
                />
              </a>
              <a href="#" class="social-item">
                <img
                  class="social-item-img"
                  src="/public/desktop/index/onlyIcon-3.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    <div class="copyright w-full text-center py-6 font-medium">&copy; 2025 Alyse Wang. All rights reserved.</div>
  </footer>
</template>
<style scoped>
.social-item-img img {
  width: 44px;
  height: 44px;
}
.copyright {
    background: #fff;
}
</style>
