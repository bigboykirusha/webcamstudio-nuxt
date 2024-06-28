<template>
  <header>
    <h1 class="InteriorTitle">
      О ЧЕМ
      <span class="InteriorTitleSpan">НАДО ЗНАТЬ</span>
    </h1>
    <nav class="InteriorTitleNav selectNone">
      <nuxt-link class="noDecorationLink" to="/">Главная</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <nuxt-link class="noDecorationLink" to="/articles">Блог</nuxt-link>
      <span class="InteriorTitleNavSpan">&gt</span>
      <span class="noDecorationLink pointer">О чем надо знать?</span>
    </nav>
    <div class="ArticleImage">
      <img class="ArticleImg" src="/src/assets/images/BlogPhoto3Full.webp" />
    </div>
  </header>

  <main>
    <section class="InteriorText">
      <div class="InteriorTextPadding">
        <p class="">
          В прошлый раз мы поговорили о техническом оснащении, необходимом для
          старта в вебкам-индустрии, сегодня же на повестке не менее важный
          аспект работы.
        </p>
        <p class="">
          Специфика кам-сайтов всем известна, большинство людей посещают их
          именно из-за эротического контента. Большинство, но не все. Некоторые
          ищут общения, которого они, в силу различных обстоятельств, лишены в
          реальной жизни. И хорошему собеседнику они готовы платить большие 💰💰
        </p>

        <p class="">
          Поэтому так важен твой уровень английского, ведь чем меньше тебе есть
          чего сказать, тем больше тебе придётся показывать шоу для удержания
          внимания.
        </p>

        <p class="">Возможно, прежде тебе стоит подтянуть свои знания языка.</p>
        <p class="">
          Важно помнить, что ты и только ты определяешь для себя границы
          дозволенного, что ты хочешь показывать, а что нет, о чем хочешь
          говорить, о чем нет. Но все это непосредственно влияет на твой
          заработок.
        </p>
        <p class="">
          В нашей студии опытные администраторы всегда помогут тебе определиться
          с нишей, в соответствии с твоими интересами и дадут совет как
          максимально конвертировать твои таланты и обаяние в заработок
        </p>
      </div>
    </section>
    <section class="ArticleShareBlock">
      <div class="ArticleShareBlockPadding">
        <div class="ArticleShareBlockPaddingLeft">
          <span
            class="ArticleShareBlockText"
            :class="{ collapsed: isSharedPressed }"
            @click="pressShare()"
            >Поделиться</span
          >
          <div
            class="ArticleShareBlockIcons"
            :class="{ collapsed: isSharedPressed }"
          >
            <a :href="shareUrlVK" target="_blank" class="social-button vk"
              ><ShareVkIcon class="pointer"></ShareVkIcon
            ></a>
            <a :href="shareUrlOK" target="_blank" class="social-button ok"
              ><ShareOkIcon class="pointer"></ShareOkIcon
            ></a>
            <a
              :href="shareUrlTwitter"
              target="_blank"
              class="social-button twitter"
              ><ShareXtwitterIcon class="pointer"></ShareXtwitterIcon
            ></a>
            <a
              :href="shareUrlPinterest"
              target="_blank"
              class="social-button pinterest"
              ><SharePinterestIcon class="pointer"></SharePinterestIcon
            ></a>
            <a
              :href="shareUrlLinkedIn"
              target="_blank"
              class="social-button linkedin"
              ><ShareLinkedinIcon class="pointer"></ShareLinkedinIcon
            ></a>
          </div>
        </div>
        <div class="ArticleShareBlockPaddingRight">
          <span class="ArticleLikesCount">{{
            postLikesCount ? `+${postLikesCount}` : `0`
          }}</span>

          <UpvoteActivated
            v-if="isLiked()"
            class="pointer"
            @click="dislikePostDB()"
          ></UpvoteActivated>
          <UpvoteDeactivated
            v-else
            class="pointer"
            @click="likePostDB()"
          ></UpvoteDeactivated>
        </div>
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
import ShareLinkedinIcon from "@/assets/icons/ShareLinkedinIcon.vue";
import ShareOkIcon from "@/assets/icons/ShareOkIcon.vue";
import SharePinterestIcon from "@/assets/icons/SharePinterestIcon.vue";
import ShareVkIcon from "@/assets/icons/ShareVkIcon.vue";
import ShareXtwitterIcon from "@/assets/icons/ShareXtwitterIcon.vue";
import UpvoteDeactivated from "@/assets/icons/UpvoteDeactivated.vue";
import UpvoteActivated from "@/assets/icons/UpvoteActivated.vue";

import { useRouter } from "vue-router";
import posts from "@/src/assets/posts.json";

onMounted(() => {
  loadLikedPosts();
  loadLikesCount();
  prepareSharing();
});

// DATA

const postId = "3";
const postLikesCount = ref(0);

// Misc methods start

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

function goToPrivacyPolicy() {
  window.open("/privacy-policy", "_blank", "noopener,noreferrer");
}

const isSharedPressed = ref(true);
function pressShare() {
  isSharedPressed.value = true;
}

// Misc methods end

// Blog posts likes start

const likedPostsIds = ref([]);
function loadLikedPosts() {
  likedPostsIds.value = JSON.parse(localStorage.getItem("likedPosts") || "[]");
}

function isLiked() {
  return likedPostsIds.value.includes(postId);
}

async function loadLikesCount() {
  try {
    // Attempt to fetch the number of likes for the given postId
    const { data, error } = await supabase
      .from("blogpostslikes")
      .select("likes")
      .eq("post_id", postId)
      .single();

    if (error) {
      throw error;
    }
    if (data) {
      postLikesCount.value = data.likes;
    } else {
      postLikesCount.value = 0;
    }
  } catch (error) {
    console.error("Error fetching likes:", error.message);
    return null;
  }
}

function toggleLike() {
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

// Database Supabase

import { supabase } from "@/supabaseClient.js";

const operationInProgress = ref(false);

async function likePostDB() {
  if (operationInProgress.value) return;
  operationInProgress.value = true;

  await loadLikedPosts();

  if (likedPostsIds.value.includes(postId)) {
    operationInProgress.value = false;
    return;
  }

  postLikesCount.value++;

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
      else await toggleLike();
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

async function dislikePostDB() {
  if (operationInProgress.value) return;
  operationInProgress.value = true;

  await loadLikedPosts();

  if (!likedPostsIds.value.includes(postId)) {
    operationInProgress.value = false;
    return;
  }
  postLikesCount.value--;

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
      else await toggleLike();
    }
  } catch (error) {
    console.error("Error decrementing likes:", error.message);
  } finally {
    operationInProgress.value = false;
  }
}

// Blog posts likes end

// Share page links start

// PASTE SHARE HERE

const shareUrlVK = ref("");
const shareUrlOK = ref("");
const shareUrlTwitter = ref("");
const shareUrlPinterest = ref("");
const shareUrlLinkedIn = ref("");

function prepareSharing() {
  // URL
  const router = useRouter();
  let fullPath = router.currentRoute._value.fullPath;
  const url = encodeURIComponent(fullPath);

  // Title
  const titleString = posts.find((post) => post.id == postId).title;
  const title = encodeURIComponent(titleString);

  // Image
  const imageUrl = encodeURIComponent(
    "https://i.ibb.co/BrsZv9b/Blog-Photo3-Full.webp"
  );

  shareUrlVK.value = `https://vk.com/share.php?url=${url}&title=${title}&image=${imageUrl}&noparse=true`;

  shareUrlOK.value = `https://connect.ok.ru/offer?url=${url}&title=${title}&media=${imageUrl}`;

  shareUrlTwitter.value = `https://twitter.com/intent/tweet?url=${url}&text=${title}&media=${imageUrl}`;

  shareUrlPinterest.value = `https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${title}`;

  shareUrlLinkedIn.value = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=`;
}

// Share page links end
</script>
<style scoped>
@import "@/assets/styles/IndividualArticleStyle.css";
</style>
