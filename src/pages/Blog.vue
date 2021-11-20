<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div id="text">
        <p>Travel</p>
        Blog
      </div>
      <div class="h-15"><hr /></div>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{
            post.node.title
          }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase"
            >Read More</g-link
          >
        </div>
      </div>
      <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    PaginationPosts,
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik+Mono+One");

@keyframes text {
  0% {
    opacity: 0;
    letter-spacing: 150px;
    text-shadow: 0 0 50px #fff;
  }
  50% {
    letter-spacing: 50px;
  }
  100% {
    opacity: 0.8;
    letter-spacing: 3px;
    text-shadow: 0 0 1px #fff;
  }
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Rubik Mono One", sans-serif;
  background: #000;
  color: #fff;
  padding-top: 100px;
  text-align: center;
  overflow: hidden;
}

#text {
  font-size: 50px;
  text-transform: uppercase;
  animation: text 4s linear forwards;
}
</style>
