<template>
  <header>
    <h1 class="InteriorTitleArticles">
      НОВОСТИ <span class="InteriorTitleArticlesSpan">ВЕБКАМ</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/articles">Блог</nuxt-link>
    </nav>
  </header>

  <main>
    <section class="InteriorDescription">
      <background-articles-index />
      <p>
        В этом разделе мы собираем для вас самые свежие и интересные новости
        вебкам-индустрии. Мы хотим, чтобы вы в любой момент могли получить
        достоверную и актуальную информацию об adult-стриминге, прочитать о
        новых популярны площадках или звездах вебкама.
      </p>
    </section>
    <div class="ArticlesEmbeddedVideo">
      <video class="ArticlesEmbeddedVid" width="250" controls autoplay loop>
        <source src="/static/videos/preview.mp4" type="video/mp4" />
      </video>
    </div>
    <section class="BlogBlock">
      <div class="BlogTable">
        <div
          v-for="post in limitedPosts"
          :key="post.id"
          :class="post.card === 'big' ? 'BlogBigCard' : 'BlogSmallCard'"
        >
          <img
            :class="
              post.card === 'big' ? 'BlogBigCardPhoto' : 'BlogSmallCardPhoto'
            "
            :src="`../assets/images/BlogPhoto${post.id}.webp`"
            alt="Новость визуальное представление"
          />
          <img
            v-if="post.card === 'big'"
            class="BlogBigCardPhotoMobile"
            :src="`../assets/images/BlogPhoto${post.id}Mobile.webp`"
            alt="Мобильная версия новости визуальное представление"
          />
          <div class="BlogSmallCardContent">
            <h3
              class="font19"
              :class="
                post.card === 'big'
                  ? 'BlogBigCardTitle BlogBigCardTitleFix'
                  : 'BlogSmallCardTitle'
              "
            >
              {{ post.title }}
            </h3>
            <h4
              class="font9"
              :class="
                post.card === 'big'
                  ? 'BlogBigCardDescription'
                  : 'BlogSmallCardDescription'
              "
            >
              {{ post.content }}
            </h4>
          </div>
          <div
            :class="
              post.card === 'big'
                ? 'BlogBigCardReactions'
                : 'BlogSmallCardReactions'
            "
          >
            <button
              class="BlogBigCardReactionsDetails font3 pointer"
              @mousedown="handleMouseDown(post.url, $event)"
            >
              Подробнее
            </button>
            <UpvoteDeactivated
              v-if="!isLiked(post.id)"
              class="BlogBigCardReactionsUpvote pointer"
              @click="likePostDB(post.id)"
            />
            <UpvoteActivated
              v-else
              class="BlogBigCardReactionsUpvote pointer"
              @click="dislikePostDB(post.id)"
            />
          </div>
        </div>
      </div>
      <button
        v-show="!allCardsLoaded"
        class="LoadMorePostsButton pointer"
        @click="loadMoreCards()"
      >
        БОЛЬШЕ НОВОСТЕЙ
      </button>
    </section>
    <section class="InteriorText MarginTop100">
      <div class="InteriorTextPadding">
        <h2 class="InteriorTextTitle">Свежие новости для вебкам-моделей</h2>
        <p class="">
          Новости вебкам — это не только слухи о моделях, но и серьезные
          аналитические статьи, в которых авторы помогают разобраться в
          особенностях работы на той или иной площадке, делятся секретами
          высоких заработков. В новостях публикуются последние изменения,
          нововведения сайтов для взрослых, которые нужно знать, если вы хотите
          оставаться в курсе событий.Помимо новостей, мы публикуем и статьи о
          вебкаме, они будут полезны новичкам. Как подобрать образ, какие сайты
          приносят больше денег, как общаться со зрителями — это и многое другое
          мы рассказываем в простой и доступной форме.
        </p>
      </div>
    </section>
  </main>

  <footer class="line-15">
    <FooterTopLine class="FooterTopLine" />
    <div class="FooterGrid">
      <button
        class="PrivacyPolicyLink font9 pointer"
        @click="goToPrivacyPolicy()"
      >
        Политика конфиденциальности
      </button>
      <ArrowCircleUp class="FooterGridArrowUp" @click="scrollToTop()" />
      <p class="Trademark font9">© kinky studio. 2019-2024 год.</p>
    </div>
  </footer>
  <hr class="FinalLine" />
</template>
<script setup>
import ArrowCircleUp from "@/assets/icons/ArrowCircleUp.vue";
import FooterTopLine from "@/assets/icons/FooterTopLine.vue";
import UpvoteDeactivated from "@/assets/icons/UpvoteDeactivated.vue";
import UpvoteActivated from "@/assets/icons/UpvoteActivated.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
  loadLikedPosts();
  dbKeepAlive();
});

// Meta Tags Metadata
useHead({
  title: "Новости вебкам студии «KINKY STUDIO» в Санкт Петербурге",
  meta: [
    {
      name: "description",
      content:
        "Новости вебкам студии «KINKY STUDIO» в городе Санкт Петербург. В разделе найдете свежие новости для вебкам моделей и других партнеров, а так же гостей сайта.",
    },
  ],
});

// Misc methods start

async function dbKeepAlive() {
  try {
    const { data, error: selectError } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", 999999);

    if (selectError) {
      throw selectError;
    }

    if (data && data.length > 0) {
      const existingLikes = data[0].likes;
      const { error: updateError } = await supabase
        .from("blogpostslikes")
        .update({ likes: existingLikes + 1 })
        .eq("post_id", 999999);

      if (updateError) throw updateError;
    } else {
      const { error: insertError } = await supabase
        .from("blogpostslikes")
        .insert([{ post_id: 999999, likes: 1 }]);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error("Error incrementing likes:", error.message);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

function goToPrivacyPolicy() {
  window.open("/privacy-policy", "_blank", "noopener,noreferrer");
}

// Misc methods end

// Blog posts likes start

import posts from "@/src/assets/posts.json";

const allCardsLoaded = computed(() => {
  const totalPosts = posts.length;
  const endOfLastLoadedSet = Math.min(
    (loadedCardSets.value + 1) * 5,
    totalPosts
  );
  return endOfLastLoadedSet === totalPosts;
});
const loadedCardSets = ref(0);

const limitedPosts = computed(() => {
  const totalPosts = posts.length;
  let result = [];

  let setsRequested = loadedCardSets.value + 1;

  for (let i = 0; i < setsRequested; i++) {
    let setStart = i * 5;
    let setEnd = Math.min(setStart + 5, totalPosts);
    let slicedPosts = posts.slice(setStart, setEnd);

    let bigCardIndex = slicedPosts.findIndex((post) => post.card === "big");
    if (bigCardIndex !== -1) {
      let [bigPost] = slicedPosts.splice(bigCardIndex, 1);
      let position = i % 2 === 0 ? 0 : 1;
      slicedPosts.splice(position, 0, bigPost);
    }

    result = [...result, ...slicedPosts];
  }
  return result;
});

function loadMoreCards() {
  loadedCardSets.value++;
}

const likedPostsIds = ref([]);
function loadLikedPosts() {
  likedPostsIds.value = JSON.parse(localStorage.getItem("likedPosts") || "[]");
}

function toggleLike(postId) {
  const index = likedPostsIds.value.indexOf(postId);
  if (index === -1) {
    likedPostsIds.value.push(postId);
  } else {
    likedPostsIds.value.splice(index, 1);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("likedPosts", JSON.stringify(likedPostsIds.value));
  }
}

function isLiked(postId) {
  return likedPostsIds.value.includes(postId);
}

// Database Supabase

import { supabase } from "@/supabaseClient.js";

const operationInProgress = ref(false);

async function likePostDB(postId) {
  if (operationInProgress.value) return;
  operationInProgress.value = true;

  await loadLikedPosts();

  if (likedPostsIds.value.includes(postId)) {
    operationInProgress.value = false;
    return;
  }

  try {
    const { data, error: selectError } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", postId);

    if (selectError) {
      throw selectError;
    }

    if (data && data.length > 0) {
      const existingLikes = data[0].likes;
      const { error: updateError } = await supabase
        .from("blogpostslikes")
        .update({ likes: existingLikes + 1 })
        .eq("post_id", postId);

      if (updateError) throw updateError;
      else await toggleLike(postId);
    } else {
      const { error: insertError } = await supabase
        .from("blogpostslikes")
        .insert([{ post_id: postId, likes: 1 }]);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error("Error incrementing likes:", error.message);
  } finally {
    operationInProgress.value = false;
  }
}

async function dislikePostDB(postId) {
  if (operationInProgress.value) return;
  operationInProgress.value = true;

  await loadLikedPosts();

  if (!likedPostsIds.value.includes(postId)) {
    operationInProgress.value = false;
    return;
  }

  try {
    const { data: currentData, error: fetchError } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", postId)
      .single();

    if (fetchError) throw fetchError;

    if (currentData && currentData.likes > 0) {
      const { error: updateError } = await supabase
        .from("blogpostslikes")
        .update({ likes: currentData.likes - 1 })
        .eq("post_id", postId);

      if (updateError) throw updateError;
      else await toggleLike(postId);
    }
  } catch (error) {
    console.error("Error decrementing likes:", error.message);
  } finally {
    operationInProgress.value = false;
  }
}

// function goToAnArticle(articleID) {
//   window.open(`/articles/${articleID}`, "_blank", "noopener,noreferrer");
// }

function handleMouseDown(articleID, event) {
  if (event.button === 0 || event.button === 1) {
    window.open(`/articles/${articleID}`, "_blank", "noopener,noreferrer");
  }
}

// Blog posts likes end
</script>
<style scroped>
@import "@/assets/styles/ArticlesStyle.css";
</style>
