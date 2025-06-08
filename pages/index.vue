<script setup>
const { data } = await useAsyncData('articles', () => $fetch('/api/articles'));
const articles = ref(data.value?.articles || []);

import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
onMounted(() => {
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
useSeoMeta({
  title: '個人部落格 - 首頁',
  description: '這是使用 Nuxt 3 打造的個人部落格，展示最新文章與開發作品。',
  ogTitle: '個人部落格',
  ogDescription: '透過 Nuxt 3 打造的現代個人品牌網站，分享前端技術與學習心得。',
  ogType: 'website',
})
</script>
<template>
  <section class="banner">
    <div class="flex flex-col md:flex-row">
      <div class="banner-left flex-1">
        <picture>
          <source
            media="(min-width:768px)"
            srcset="/desktop/index/Hero-Section.png"
          />
          <img
            src="/mobile/index/Hero-Section.png"
            alt="banner"
            class="size-full object-cover"
          />
        </picture>
      </div>
      <div
        class="banner-right flex-1 lg:content-center bg-[url(/mobile/index/Hero-Section2.png)] lg:bg-[url(/desktop/index/Hero-Section2.png)] bg-cover bg-no-repeat w-full h-[356px] min-h-[450px] lg:min-h-[650px]  2xl:min-h-[834px] object-cover"
      >
        <div class="flex lg:items-center p-6 2xl:p-20">
          <div class="banner-content text-primary">
            <div
              class="banner-title text-[52px] 2xl:text-[120px] font-black mb-3"
            >
              Alyse Wang
            </div>
            <div class="banner-text text-[28px] font-bold">
              前端工程師 & 職涯諮詢師
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info flex justify-center px-3 md:px-0 md:justify-end -mt-[178px] lg:-mt-20">
      <div
        class="md:w-[56%] md:me-[80px] text-2xl lg:text-[28px] bg-white py-10 px-6 md:py-20 md:px-10"
      >
        <p class="mb-4">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
        <p class="mb-4">
          擅長 React、Vue
          等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
        </p>
        <div class="info-social]">
          <div class="social flex flex-row items-center gap-1">
            <a href="#" class="social-item">
              <img
                class="social-item-img"
                src="@/public/desktop/index/onlyIcon.png"
                alt="icon"
              />
            </a>
            <a href="#" class="social-item">
              <img
                class="social-item-img"
                src="@/public/desktop/index/onlyIcon-1.png"
                alt="icon"
              />
            </a>
            <a href="#" class="social-item">
              <img
                class="social-item-img"
                src="@/public/desktop/index/onlyIcon-2.png"
                alt="icon"
              />
            </a>
            <a href="#" class="social-item">
              <img
                class="social-item-img"
                src="@/public/desktop/index/icons8-linkedin.png"
                alt="icon"
              />
            </a>
            <a href="#" class="social-item">
              <img
                class="social-item-img"
                src="@/public/desktop/index/onlyIcon-3.png"
                alt="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <main>
    <section class="sever">
      <div class="container mx-auto px-3 max-w-[1320px] pt-14 lg:pt-20">
        <h2 class="font-bold text-[48px] md:text-[64px] mb-8">
          專業服務與方案
        </h2>
        <div class="sever-list">
          <div class="sever-item mb-8 md:mb-16">
            <div
              class="md:flex md:items-center md:items-center md:justify-center"
            >
              <picture class="sever-img md:max-w-[50%]">
                <source
                  media="(min-width:768px)"
                  srcset="/desktop/index/photo.png"
                />
                <img
                  src="/mobile/index/photo1.png"
                  alt="banner"
                  class="w-full object-cover"
                />
              </picture>
              <div class="sever-content md:max-w-[480px] md:-ml-10">
                <div class="bg-white p-6">
                  <img
                    class="icon"
                    src="/public/images/border.svg"
                    alt="icon"
                  />
                  <p class="mb-4 text-[28px] font-bold">履歷健檢</p>
                  <p class="mb-4">
                    履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="sever-item mb-8 md:mb-16">
            <div
              class="md:flex md:flex-row-reverse md:items-center md:justify-center"
            >
              <picture class="sever-img md:max-w-[50%]">
                <source
                  media="(min-width:768px)"
                  srcset="/desktop/index/photo2.png"
                />
                <img
                  src="/mobile/index/photo2.png"
                  alt="banner"
                  class="w-full object-cover"
                />
              </picture>
              <div class="sever-content md:max-w-[480px] md:-mr-10 z-10">
                <div class="bg-white p-6">
                  <img
                    class="icon"
                    src="/public/images/border.svg"
                    alt="icon"
                  />
                  <p class="mb-4 text-[28px] font-bold">線上諮詢</p>
                  <p class="mb-4">
                    想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="sever-item mb-8 md:mb-16">
            <div
              class="md:flex md:items-center md:items-center md:justify-center"
            >
              <picture class="sever-img md:max-w-[50%]">
                <source
                  media="(min-width:768px)"
                  srcset="/desktop/index/photo3.png"
                />
                <img
                  src="/mobile/index/photo3.png"
                  alt="banner"
                  class="w-full object-cover"
                />
              </picture>
              <div class="sever-content md:max-w-[480px] md:-ml-10">
                <div class="bg-white p-6">
                  <img
                    class="icon"
                    src="/public/images/border.svg"
                    alt="icon"
                  />
                  <p class="mb-4 text-[28px] font-bold">網頁開發</p>
                  <p class="mb-4">
                    想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="sever-item mb-8 md:mb-8">
            <div
              class="md:flex md:flex-row-reverse md:items-center md:justify-center"
            >
              <picture class="sever-img md:max-w-[50%]">
                <source
                  media="(min-width:768px)"
                  srcset="/desktop/index/photo4.png"
                />
                <img
                  src="/mobile/index/photo4.png"
                  alt="banner"
                  class="w-full object-cover"
                />
              </picture>
              <div class="sever-content md:max-w-[480px] md:-mr-10 z-10">
                <div class="bg-white p-6">
                  <img
                    class="icon"
                    src="/public/images/border.svg"
                    alt="icon"
                  />
                  <p class="mb-4 text-[28px] font-bold">企業內訓</p>
                  <p class="mb-4">
                    想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="contact flex flex-col md:flex-row items-end md:items-center md:justify-end md:gap-2 mb-16 md:mb-20"
        >
          <h2 class="contact-title text-[28px] font-bold mb-2 md:mb-0">
            聯繫我，取得更多資訊！
          </h2>
          <button
            type="button"
            class="contact-btn border border-black p-2 rounded-full flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 12C1.5 11.5858 1.83579 11.25 2.25 11.25H19.9393L15.2197 6.53033C14.9268 6.23744 14.9268 5.76256 15.2197 5.46967C15.5126 5.17678 15.9874 5.17678 16.2803 5.46967L22.2803 11.4697C22.5732 11.7626 22.5732 12.2374 22.2803 12.5303L16.2803 18.5303C15.9874 18.8232 15.5126 18.8232 15.2197 18.5303C14.9268 18.2374 14.9268 17.7626 15.2197 17.4697L19.9393 12.75H2.25C1.83579 12.75 1.5 12.4142 1.5 12Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <section class="blog border border-secondary">
      <div class="container mx-auto px-3 max-w-[1320px] py-14 lg:py-20">
        <h2 class="font-bold text-5xl md:text-[64px] mb-6 leading-[1.5]">
          部落格精選
        </h2>
        <div class="blog-swiper relative">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="article in articles"
                :key="article.id"
              >
                <div class="blog-item-content pb-8 2xl:pb-0">
                  <img
                    :src="article?.image?.mobile"
                    alt="picture"
                    class="w-full object-cover h-[200px] mb-4"
                  />
                  <div class="date mb-1">{{ article.date }}</div>
                  <div class="title-content mb-2 flex items-center">
                    <h2 class="title text-2xl font-medium text-primary me-2">
                      {{ article.category }}
                    </h2>
                    <div
                      class="tag font-bold text-white bg-primary py-[6px] px-3 rounded-full"
                      v-if="article.tag"
                    >
                      {{ article.tag }}
                    </div>
                  </div>
                  <h3 class="article-title mb-2 text-[28px] font-bold">
                    {{ article.title }}
                  </h3>
                  <p class="text mb-4 line-clamp-2">
                    {{ article.description }}
                  </p>
                  <NuxtLink
                    :to="`/blog/${article.id}`"
                    class="more text-gray-text font-medium rounded-full border border-gray-text py-2 px-4 hover:bg-gray-text hover:text-white inline-block"
                  >
                    閱讀內文
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next">
            <span class="material-symbols-outlined text-white"
              >arrow_forward</span
            >
          </div>
          <div class="swiper-button-prev">
            <span class="material-symbols-outlined text-white">arrow_back</span>
          </div>
        </div>
      </div>
    </section>
    <section class="case">
      <div class="container mx-auto px-3 max-w-[1320px] py-14 lg:py-20">
        <h2 class="font-bold text-5xl md:text-[64px] mb-8 leading-[1.5]">
          職涯諮詢<br class="md:hidden" />成功案例
        </h2>
        <div class="description flex flex-col lg:flex-row md:gap-6">
          <div class="bg-box bg-[#ededed] p-6">
            <picture>
              <source
                media="(min-width:768px)"
                srcset="/desktop/index/photo8.png"
              />
              <img
                src="/mobile/index/photo8.png"
                alt="picture"
                class="w-full h-[578px] object-cover"
              />
            </picture>
          </div>
          <div class="cards flex flex-col justify-center">
            <div
              class="card -mt-[132px] lg:mt-0 lg:-ml-20 bg-white px-6 py-10 lg:px-10 lg:py-20 mb-3 lg:mb-0 w-full lg:w-[526px]"
            >
              <div class="deco mb-6">
                <img src="/public/images/border.svg" alt="icon" />
              </div>
              <p>
                在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span
                  class="text-primary font-bold"
                  >突破原有的舒適圈</span
                >。
              </p>
            </div>
            <div
              class="card-btn lg:ms-auto lg:-mt-10 bg-[#f5f5f5] px-6 py-10 lg:px-10 lg:py-20 w-full lg:w-[526px]"
            >
              <div class="deco mb-6">
                <img src="/public/images/border.svg" alt="icon" />
              </div>
              <p class="mb-6">
                期待在下一個新機會中，我能與你一起攜手邁向更高峰！
              </p>
              <button
                type="button"
                class="h-[40px] border border-primary text-primary rounded-full bg-white py-2 px-4 hover:bg-primary hover:text-white"
              >
                立即預約諮詢
              </button>
            </div>
          </div>
        </div>
        <ul
          class="podcast-list mt-10 p-6 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 bg-[#f5f5f5]"
        >
          <li class="podcast-item">
            <img
              src="/public/mobile/index/people1.png"
              alt="podcast-picture"
              class="w-20 f-20 rounded-full"
            />
            <div class="my-4 border-b border-gray-text">
              <h4 class="podcast-title text-2xl font-bold mb-2">
                無經驗到前端工程師 Offer
              </h4>
              <div class="podcast-info flex items-center mb-2 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>打造前端專案與履歷亮點</p>
              </div>
              <div class="podcast-info flex items-center mb-4 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>深度強化面試表現</p>
              </div>
            </div>
            <button
              type="button"
              class="h-[40px] border border-gray-text text-gray-text rounded-full py-2 px-4 hover:bg-gray-text hover:text-white"
            >
              前往聆聽 podcast
            </button>
          </li>
          <li class="podcast-item">
            <img
              src="/public/mobile/index/people2.png"
              alt="podcast-picture"
              class="w-20 f-20 rounded-full"
            />
            <div class="my-4 border-b border-gray-text">
              <h4 class="podcast-title text-2xl font-bold mb-2">
                轉職迷茫到明確學習規劃
              </h4>
              <div class="podcast-info flex items-center mb-2 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>制訂階段性目標與時間安排</p>
              </div>
              <div class="podcast-info flex items-center mb-4 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>鼓勵參與前端社群或活動</p>
              </div>
            </div>
            <button
              type="button"
              class="h-[40px] border border-gray-text text-gray-text rounded-full py-2 px-4 hover:bg-gray-text hover:text-white"
            >
              前往聆聽 podcast
            </button>
          </li>
          <li class="podcast-item">
            <img
              src="/public/mobile/index/people3.png"
              alt="podcast-picture"
              class="w-20 f-20 rounded-full"
            />
            <div class="my-4 border-b border-gray-text">
              <h4 class="podcast-title text-2xl font-bold mb-2">
                面試緊張到從容應對
              </h4>
              <div class="podcast-info flex items-center mb-2 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>透過面試模擬找出常犯的邏輯漏洞</p>
              </div>
              <div class="podcast-info flex items-center mb-4 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>討論遇到不熟悉議題時的回應方式</p>
              </div>
            </div>
            <button
              type="button"
              class="h-[40px] border border-gray-text text-gray-text rounded-full py-2 px-4 hover:bg-gray-text hover:text-white"
            >
              前往聆聽 podcast
            </button>
          </li>

          <li class="podcast-item">
            <img
              src="/public/mobile/index/people4.png"
              alt="podcast-picture"
              class="w-20 f-20 rounded-full"
            />
            <div class="my-4 border-b border-gray-text">
              <h4 class="podcast-title text-2xl font-bold mb-2">
                面試緊張到從容應對
              </h4>
              <div class="podcast-info flex items-center mb-2 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>擬定進階框架或技術研究目標</p>
              </div>
              <div class="podcast-info flex items-center mb-4 gap-2">
                <img src="/public/images/checkbox.svg" alt="icon" />
                <p>培養跨團隊溝通與簡報能力</p>
              </div>
            </div>
            <button
              type="button"
              class="h-[40px] border border-gray-text text-gray-text rounded-full py-2 px-4 hover:bg-gray-text hover:text-white"
            >
              前往聆聽 podcast
            </button>
          </li>
        </ul>
      </div>
    </section>
    <section class="subscription">
      <div class="flex flex-col md:flex-row">
        <div class="subscription-left flex-1">
          <picture>
            <source
              media="(min-width:768px)"
              srcset="/desktop/index/photo9.png"
            />
            <img
              src="/mobile/index/photo9.png"
              alt="banner"
              class="size-full object-cover"
            />
          </picture>
        </div>
        <div
          class="subscription-right content-center flex-1 bg-[url(/mobile/index/Hero-Section2.png)] lg:bg-[url(/desktop/index/Hero-Section2.png)] bg-cover bg-no-repeat"
        >
          <div class="flex justify-center items-center p-3 lg:p-20">
            <div
              class="subscription-content bg-white py-10 px-6 md:py-20 md:px-20"
            >
              <h2 class="text-5xl font-bold mb-4">訂閱電子報</h2>
              <p class="text-xl mb-6">
                立即訂閱，搶先掌握<span class="text-primary">前端 x 職涯</span
                >的獨家資訊！
              </p>
              <form>
                <input
                  type="text"
                  placeholder="請輸入您的大名"
                  class="w-full bg-[#f1f1f1] placeholder-gray-text py-2 px-4 mb-2"
                />
                <input
                  type="email"
                  placeholder="請輸入您的電子信箱"
                  class="w-full bg-[#f1f1f1] placeholder-gray-text py-2 px-4 mb-6"
                />
                <button
                  type="submit"
                  class="w-[100px] border border-primary text-primary rounded-full py-2 px-4 submit-btn hover:bg-primary hover:text-white"
                >
                  啟動訂閱
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact border border-black">
      <div class="container mx-auto px-3 max-w-[1320px] py-14 lg:py-20">
        <h2 class="text-5xl font-bold mb-6">與我聯繫</h2>
        <ul>
          <li class="email border-black border-b">
            <a href="mailto:alysewang@hexschool.com">
              <div class="md:flex md:justify-between items-center mb-3">
                <div class="md:flex gap-4">
                  <p
                    class="text-2xl md:text-[32px] mb-2 underline decoration-solid"
                  >
                    alysewang@hexschool.com
                  </p>
                  <p class="text-2xl md:text-[28px] mb-2">合作洽談</p>
                </div>
                <img class="mb-4" src="/public/images/arrow.svg" alt="icon" />
              </div>
            </a>
          </li>
          <li class="youtube border-black border-b my-4">
            <a href="#">
              <div class="md:flex md:justify-between items-center mb-2">
                <div class="md:flex gap-1">
                  <img src="/public/desktop/index/onlyIcon.png" alt="icon" />
                  <p class="text-2xl md:text-[28px]">Youtube</p>
                  <p class="text-2xl md:text-[28px] mb-2">職涯諮詢室</p>
                </div>
                <img class="mb-4" src="/public/images/arrow.svg" alt="icon" />
              </div>
            </a>
          </li>
          <li class="podcast border-black border-b my-4">
            <a href="#">
              <div class="md:flex md:justify-between items-center mb-2">
                <div class="md:flex gap-1">
                  <img src="/public/desktop/index/onlyIcon.png" alt="icon" />
                  <p class="text-2xl md:text-[28px]">Youtube</p>
                  <p class="text-2xl md:text-[28px] mb-2">職涯諮詢室</p>
                </div>
                <img class="mb-4" src="/public/images/arrow.svg" alt="icon" />
              </div>
            </a>
          </li>
          <li class="facebook border-black border-b my-4">
            <a href="#">
              <div class="md:flex md:justify-between items-center mb-2">
                <div class="md:flex gap-1">
                  <img src="/public/desktop/index/onlyIcon-2.png" alt="icon" />
                  <p class="text-2xl md:text-[28px]">Facebook</p>
                  <p class="text-2xl md:text-[28px] mb-2">前端社群</p>
                </div>
                <img class="mb-4" src="/public/images/arrow.svg" alt="icon" />
              </div>
            </a>
          </li>
          <li class="linkedin border-black border-b my-4">
            <a href="#">
              <div class="md:flex md:justify-between items-center mb-2">
                <div class="md:flex gap-1">
                  <img
                    src="/public/desktop/index/icons8-linkedin.png"
                    alt="icon"
                  />
                  <p class="text-2xl md:text-[28px]">linkedin</p>
                  <p class="text-2xl md:text-[28px] mb-2">職涯交流</p>
                </div>
                <img class="mb-4" src="/public/images/arrow.svg" alt="icon" />
              </div>
            </a>
          </li>
          <li class="instagram border-black border-b my-4">
            <a href="#">
              <div class="md:flex md:justify-between items-center mb-2">
                <div class="md:flex gap-1">
                  <img src="/public/desktop/index/onlyIcon-3.png" alt="icon" />
                  <p class="text-2xl md:text-[28px]">Instagram</p>
                  <p class="text-2xl md:text-[28px] mb-2">日常分享</p>
                </div>
                <img class="mb-4" src="/public/images/arrow.svg" alt="icon" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<style scoped lang="scss">
.contact-btn {
  &:hover {
    background-color: black;
    transition: background-color 0.3s ease-in-out;
    svg {
      path {
        fill: white;
        transition: fill 0.3s ease-in-out;
      }
    }
  }
}
.swiper {
  width: 100%;
  height: 552px;
}
.swiper-button-prev,
.swiper-button-next {
  bottom: 0;
  top: auto;
  &:after {
    display: none;
  }
  width: 44px;
  height: 44px;
  background-color: #0027d5;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}
.swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 80px);
  left: auto;
}

@media screen and (min-width: 1536px) {
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    bottom: auto;
    top: 50%;
  }
  .swiper-button-next {
    right: -5%;
    left: auto;
  }
  .swiper-button-prev {
    right: auto;
    left: -5%;
  }
}
</style>
