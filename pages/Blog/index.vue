<script setup>
const { data } = await useAsyncData('articles', () => $fetch('/api/articles'));

const articles = computed(() => data.value?.articles || []);

const latestArticle = computed(() => {
  const articlesList = data.value?.articles || [];
  if (!articlesList.length) return null;
  return articlesList.reduce(
    (latest, article) =>
      new Date(article.date) > new Date(latest.date) ? article : latest,
    articlesList[0]
  );
});

const otherArticles = computed(() => {
  if (!latestArticle.value) return [];
  return articles.value.filter(
    (article) => article.id !== latestArticle.value.id
  );
});

const searchQuery = ref('');
//使用 useDebounce 延遲觸發過濾邏輯
const debouncedQuery = useDebounce(searchQuery, 300);

const filteredArticles = computed(() => {
  if (!debouncedQuery.value) {
    return otherArticles.value;
  }
  return otherArticles.value.filter((article) =>
    article.title.toLowerCase().includes(debouncedQuery.value.toLowerCase())
  );
});
useSeoMeta({
  title: '個人部落格 - 部落格頁',
  description: '瀏覽所有部落格文章，包含前端開發、學習筆記與技術分享。',
  ogTitle: '部落格總覽 - 個人品牌網站',
  ogDescription: '在這裡找到所有精彩的文章內容，從 Nuxt 3 到日常開發經驗分享。',
  ogType: 'website',
});
</script>

<template>
  <section class="banner">
    <div class="container w-full max-w-none">
      <div class="flex flex-col md:flex-row">
        <picture class="banner-left flex-1">
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
        <div
          class="banner-right flex-1 content-center bg-[url(/mobile/index/Hero-Section2.png)] lg:bg-[url(/desktop/index/Hero-Section2.png)] bg-cover bg-no-repeat"
        >
          <div class="flex items-center px-6 lg:px-20">
            <div class="banner-content text-primary">
              <div
                class="banner-title text-[52px] md:text-[96px] lg:text-[120px] font-black mb-3"
              >
                BLOG
              </div>
              <div class="banner-text text-[28px] font-bold">
                前端工程師 & 職涯諮詢師
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <main>
    <section v-if="latestArticle" class="blog-info border border-secondary">
      <div class="container w-full max-w-none">
        <div class="flex flex-col md:flex-row items-center md:gap-6">
          <picture class="blog-info-img w-full md:max-w-[50%]">
            <source
              media="(min-width:768px)"
              :srcset="latestArticle?.image?.desktop"
            />
            <img
              :src="latestArticle?.image?.mobile"
              alt="picture"
              class="w-full object-cover h-[375px] min-h-[375px] xs:min-h-[450px] lg:min-h-[640px]"
            />
          </picture>
          <div class="blog-info-content py-12 px-3 md:max-w-[50%]">
            <div class="lg:max-w-[70%]">
              <div class="date mb-1">{{ latestArticle.date }}</div>
              <div class="title-content mb-2 flex items-center">
                <h2 class="title text-2xl font-medium text-primary me-2">
                  前端開發 x 職涯成長
                </h2>
                <div
                  class="tag font-bold text-white bg-primary py-[6px] px-3 rounded-full"
                >
                  最新文章
                </div>
              </div>
              <h3 class="article-title mb-2 text-[28px] font-bold">
                {{ latestArticle.title }}
              </h3>
              <p class="text mb-4 line-clamp-2">
                {{ latestArticle.description }}
              </p>
              <NuxtLink
                :to="`/blog/${latestArticle.id}`"
                class="more text-gray-text font-medium rounded-full border border-gray-text py-2 px-4 hover:bg-gray-text hover:text-white inline-block"
                >閱讀內文</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="blog border border-secondary py-16 md:py-20">
      <div class="container mx-auto px-3 max-w-[1320px]">
        <input
          v-model="searchQuery"
          @keydown.enter="filterArticles"
          type="text"
          placeholder="搜尋你感興趣的文章"
          class="search-input md:w-1/3 px-12 py-4 border border-gray-text rounded-full focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-text"
        />
        <div
          v-if="filteredArticles.length === 0"
          class="text-center text-gray-text py-6 font-medium text-2xl"
        >
          <p>還沒有與{{ searchQuery }}相關的文章</p>
        </div>
        <ul
          v-else="filteredArticles"
          class="grid md:gap-3 lg:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <li
            v-for="article in filteredArticles"
            :key="article.id"
            class="blog-item"
          >
            <div class="blog-item-content py-10">
              <picture class="blog-item-img w-full">
                <source
                  media="(min-width:768px)"
                  :srcset="article?.image?.desktop"
                />
                <img
                  :src="article?.image?.mobile"
                  alt="picture"
                  class="w-full object-cover h-[200px] mb-4"
                />
              </picture>
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
          </li>
        </ul>
      </div>
      <nav aria-label="Page navigation" class="grid place-items-center">
        <ul
          class="pagination flex items-center justify-center w-[328px] rounded-full bg-white px-5 py-2"
        >
          <li class="page-item">
            <a class="page-link prev" href="#" aria-label="Previous">
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
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-current="page">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">...</a></li>
          <li class="page-item">
            <a class="page-link next" href="#" aria-label="Next">
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
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>
<style scoped lang="scss">
.search-input {
  background: url('/images/search.svg') no-repeat left 16px center;
}
.page-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 8px;
  text-align: center;
  &:hover {
    color: #0027d5;
  }
}
.page-link.next {
  padding: 12px 8px 12px 0;
  &:hover path {
    fill: #0027d5;
  }
}
.page-link.prev {
  padding: 12px 0 12px 8px;
  &:hover path {
    fill: #0027d5;
  }
}
</style>
