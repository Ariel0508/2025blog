<script setup>
const route = useRoute();
const { data } = await useAsyncData('articles', () => $fetch('/api/articles'));

const articles = computed(() => data.value?.articles || []);

const article = computed(() => {
  return articles.value.find(
    (article) => Number(article.id) === Number(route.params.id)
  );
});
useSeoMeta({
  title: `個人部落格 - ${article.value?.title}`,
  description: article.value?.description,
  ogTitle: article.value?.title,
  ogDescription: article.value?.description,
  ogType: 'article',
});
</script>

<template>
  <main>
    <section class="blog-detail-info border border-secondary">
      <div class="flex flex-col md:flex-row">
        <div class="blog-detail-info-left flex-1">
          <picture>
            <source media="(min-width:768px)" :srcset="article.image.desktop" />
            <img
              :src="article.image.mobile"
              alt="picture"
              class="w-full h-[375px] min-h-[375px] xs:min-h-[450px] lg:min-h-[640px] object-cover"
            />
          </picture>
        </div>
        <div class="blog-detail-info-right flex-1 content-center">
          <div class="p-6">
            <div class="title-content">
              <div class="date mb-1">{{ article.date }}</div>
              <div class="flex items-center mb-2">
                <h2 class="title text-2xl text-primary me-2">
                  {{ article.category }}
                </h2>
                <div
                  v-if="article.tag"
                  class="tag font-bold text-white bg-primary py-[6px] px-3 rounded-full"
                >
                  {{ article.tag }}
                </div>
              </div>
            </div>
            <h3 class="article-title mb-2 text-[28px] font-bold">
              {{ article.title }}
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-detail-content border border-secondary py-16 md:py-20">
      <div class="container mx-auto px-3 max-w-[636px]">
        <h3 class="text-[28px] font-bold text-primary mb-6">前言</h3>
        <p class="mb-12">
          嗨，我是
          Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」
          其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
        </p>
        <div class="step-1">
          <picture class="blog-info-img w-full md:max-w-[50%]">
            <source
              media="(min-width:768px)"
              srcset="/desktop/blog-content/content1.png"
            />
            <img
              src="/mobile/blog-content/content1.png"
              alt="picture"
              class="w-full object-cover h-[320px]"
            />
          </picture>
          <h3 class="text-[28px] font-bold text-primary my-6">
            打好基礎：HTML、CSS、JavaScript
          </h3>
          <div class="html">
            <h4 class="text-xl font-bold mb-3">HTML 與語意化</h4>
            <p class="mb-2">
              為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main,
              footer 等）能讓網頁更具可維護性與 SEO 效益。
            </p>
            <p>建議做法：</p>
            <ul class="list-decimal list-inside mb-6">
              <li>
                學習常見標籤的用途與屬性，如
                &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
              </li>
              <li>善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。</li>
            </ul>
          </div>
          <div class="css">
            <h4 class="text-xl font-bold mb-3">CSS 佈局與預處理器</h4>
            <p class="mb-2">
              為何重要：好看的網站來自穩定的排版與佈局，掌握 Flexbox、Grid
              能讓你隨心所欲打造響應式頁面。
            </p>
            <p>建議做法：</p>
            <ul class="list-decimal list-inside mb-6">
              <li>
                先掌握基礎 CSS 後，再學習 SASS 或 LESS
                這類預處理器，提升樣式開發效率。
              </li>
              <li>
                善用
                <span class="text-primary">CSS-Tricks</span>
                等資源，了解常見版型技巧。
              </li>
            </ul>
          </div>
          <div class="js">
            <h4 class="text-xl font-bold mb-3">JavaScript 核心觀念</h4>
            <p class="mb-2">
              為何重要：互動效果、資料處理、前端邏輯都仰賴 JavaScript。
            </p>
            <p>建議做法：</p>
            <ul class="list-decimal list-inside mb-6">
              <li>
                先打穩 ES5 與 ES6 語法基礎，理解閉包 (Closure)、原型鍊
                (Prototype) 等核心機制。。
              </li>
              <li>學會事件監聽、API 資料串接等常見應用，增添網站互動性。</li>
            </ul>
          </div>
          <p class="font-bold summary bg-[#EDEDED] rounded-3xl p-6 mb-12">
            小結：在學習基礎語法時，同步進行小專案實作（如 Todo
            List、計算機、切版作品集）會讓你進步更快，也能累積展示用作品。
          </p>
        </div>
        <div class="step-2">
          <picture class="blog-info-img w-full md:max-w-[50%]">
            <source
              media="(min-width:768px)"
              srcset="/desktop/blog-content/content2.png"
            />
            <img
              src="/mobile/blog-content/content2.png"
              alt="picture"
              class="w-full object-cover h-[320px]"
            />
          </picture>
          <h3 class="text-[28px] font-bold text-primary my-6">
            擅用主流框架與工具
          </h3>
          <div class="frame">
            <h4 class="text-xl font-bold mb-3">React、Vue 先挑一個</h4>
            <ul class="list-disc list-inside mb-6">
              <li>React：生態系豐富、社群支援強，適合喜歡客製化的工程師。</li>
              <li>
                Vue：上手容易、檔案結構直覺，適合對「漸進式開發」有興趣的開發者。
              </li>
            </ul>
          </div>
          <p class="font-bold tips bg-[#EDEDED] rounded-3xl p-6 mb-6">
            TIP：可以先看官方文件或跟著基礎教學做出小專案，感受哪個框架更順手。
          </p>
          <div class="git">
            <h4 class="text-xl font-bold mb-3">版本控制、協作與建置</h4>
            <ul class="list-disc list-inside mb-6">
              <li>
                Git 與 GitHub：一定要掌握分支、Pull Request、Code Review
                等流程，並熟悉 Git Flow 或 Trunk Based Development。
              </li>
              <li>
                打包工具：了解 Webpack、Vite、Parcel
                等常見工具的基本原理與設定，對於優化與部署大有幫助。
              </li>
            </ul>
          </div>
          <div class="test mb-12">
            <h4 class="text-xl font-bold mb-3">自動化測試與最佳實</h4>
            <ul class="list-disc list-inside mb-12">
              <li>
                測試框架：Jest、Mocha、Cypress 等，建立單元測試與 E2E 測試思維。
              </li>
              <li>
                程式結構與品質：遵循程式風格
                (Lint)、維持命名規範、模組化思考，確保專案可維護。
              </li>
            </ul>
          </div>
        </div>
        <div class="step-3">
          <picture class="blog-info-img w-full md:max-w-[50%]">
            <source
              media="(min-width:768px)"
              srcset="/desktop/blog-content/content3.png"
            />
            <img
              src="/mobile/blog-content/content3.png"
              alt="picture"
              class="w-full object-cover h-[320px]"
            />
          </picture>
          <h3 class="text-[28px] font-bold text-primary my-6">
            持續練習與參與社群
          </h3>
          <div class="challenge">
            <h4 class="text-xl font-bold mb-3">多參加前端挑戰 / Hackathon</h4>
            <ul class="list-disc list-inside mb-6">
              <li>在實作中快速累積經驗，也能認識更多同好。</li>
              <li>
                像是
                <span class="text-primary">Frontend Mentor</span>
                提供多種真實設計稿，可練習切版與互動。
              </li>
            </ul>
          </div>
          <div class="project">
            <h4 class="text-xl font-bold mb-3">打造個人作品集網站</h4>
            <ul class="list-disc list-inside mb-6">
              <li>部署在 GitHub Pages 或其他免費/付費主機。</li>
              <li>整合自己做過的小專案，並用文字介紹技術棧與實作細節。</li>
            </ul>
          </div>
          <div class="social">
            <h4 class="text-xl font-bold mb-3">社群互動、分享心得</h4>
            <ul class="list-disc list-inside mb-12">
              <li>
                參與線上或線下的技術交流、讀書會、Meetup，與同行討論，能啟發更多想法。
              </li>
              <li>
                有餘力可將學習過程寫成部落格文章或筆記，進一步強化自己的理解。
              </li>
            </ul>
          </div>
        </div>
        <div class="conclusion">
          <picture class="blog-info-img w-full md:max-w-[50%]">
            <source
              media="(min-width:768px)"
              srcset="/desktop/blog-content/content4.png"
            />
            <img
              src="/mobile/blog-content/content4.png"
              alt="picture"
              class="w-full object-cover h-[320px]"
            />
          </picture>
          <h3 class="text-[28px] font-bold text-primary my-6">結語</h3>
          <div class="challenge">
            <p class="mb-6">
              自學前端可能遇到卡關、挫折，但同時也具備很高的自主性。只要把
              基礎、框架、實踐
              三大面向做好，就能在前端這條路上穩步前進。若你在學習過程中需要更多建議或想要職涯諮詢，歡迎透過<a
                class="text-primary underline"
                href="mailto:sonyt605@gmail.com"
                >聯絡方式</a
              >與我聯繫！
            </p>
            <p class="font-bold bg-[#EDEDED] rounded-3xl p-6 mb-6">
              「程式替你開路，諮詢替你指路，一起走向更寬廣的未來。」
            </p>
            <p class="mb-12">
              感謝你的閱讀，如果這篇文章對你有幫助，別忘了幫忙分享，或在下方留言告訴我你的想法，也讓更多人一起受益吧！
            </p>
          </div>
        </div>
        <div class="readMore">
          <h3 class="text-[28px] font-bold text-primary my-6">延伸閱讀</h3>
          <ul class="list-disc list-inside mb-12">
            <li>前端面試不再慌：破解常見提問的三大策略</li>
            <li>掌握前端測試：從單元測試到端對端測試的完整攻略</li>
            <li>SEO 與前端最佳實踐：讓搜尋引擎看見你的網站</li>
          </ul>
        </div>
      </div>
      <div
        class="page flex align-center justify-between max-w-[636px] mx-auto px-3"
      >
        <NuxtLink
          :to="`/blog/${Number(route.params.id) - 1}`"
          v-if="Number(route.params.id) > 1"
          class="prev text-gray-text rounded-full border border-gray-text py-2 px-4 hover:underline flex items-center"
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
              d="M17.0311 2.47034C17.101 2.54001 17.1564 2.62277 17.1942 2.71389C17.232 2.80501 17.2515 2.90269 17.2515 3.00134C17.2515 3.09999 17.232 3.19767 17.1942 3.28879C17.1564 3.37991 17.101 3.46267 17.0311 3.53234L8.56062 12.0013L17.0311 20.4703C17.1719 20.6112 17.2511 20.8022 17.2511 21.0013C17.2511 21.2005 17.1719 21.3915 17.0311 21.5323C16.8903 21.6732 16.6993 21.7523 16.5001 21.7523C16.301 21.7523 16.1099 21.6732 15.9691 21.5323L6.96912 12.5323C6.89927 12.4627 6.84386 12.3799 6.80605 12.2888C6.76824 12.1977 6.74878 12.1 6.74878 12.0013C6.74878 11.9027 6.76824 11.805 6.80605 11.7139C6.84386 11.6228 6.89927 11.54 6.96912 11.4703L15.9691 2.47034C16.0388 2.4005 16.1216 2.34508 16.2127 2.30727C16.3038 2.26946 16.4015 2.25 16.5001 2.25C16.5988 2.25 16.6965 2.26946 16.7876 2.30727C16.8787 2.34508 16.9615 2.4005 17.0311 2.47034Z"
              fill="#4B4B4B"
            />
          </svg>
          上一篇
        </NuxtLink>
        <NuxtLink
          :to="`/blog/${Number(route.params.id) + 1}`"
          v-if="Number(route.params.id) < articles.length"
          class="next text-gray-text rounded-full border border-gray-text py-2 px-4 hover:underline flex items-center"
        >
          下一篇
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
              d="M6.96912 2.47034C7.03879 2.4005 7.12155 2.34508 7.21267 2.30727C7.30379 2.26946 7.40147 2.25 7.50012 2.25C7.59877 2.25 7.69645 2.26946 7.78757 2.30727C7.87869 2.34508 7.96145 2.4005 8.03112 2.47034L17.0311 11.4703C17.101 11.54 17.1564 11.6228 17.1942 11.7139C17.232 11.805 17.2515 11.9027 17.2515 12.0013C17.2515 12.1 17.232 12.1977 17.1942 12.2888C17.1564 12.3799 17.101 12.4627 17.0311 12.5323L8.03112 21.5323C7.89029 21.6732 7.69928 21.7523 7.50012 21.7523C7.30096 21.7523 7.10995 21.6732 6.96912 21.5323C6.82829 21.3915 6.74917 21.2005 6.74917 21.0013C6.74917 20.8022 6.82829 20.6112 6.96912 20.4703L15.4396 12.0013L6.96912 3.53234C6.89927 3.46267 6.84386 3.37991 6.80605 3.28879C6.76824 3.19767 6.74878 3.09999 6.74878 3.00134C6.74878 2.90269 6.76824 2.80501 6.80605 2.71389C6.84386 2.62277 6.89927 2.54001 6.96912 2.47034Z"
              fill="#4B4B4B"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
