<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div id="text">
        <p>Technical Site</p>
        Docs
      </div>
      <div
        v-for="doc in $page.docs.edges"
        :key="doc.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="doc.node.path" class="text-copy-primary">{{
            doc.node.title
          }}</g-link>
        </h2>

        <div class="text-lg mb-4">
          {{ doc.node.excerpt }}
        </div>

        <div class="mb-8">
          <g-link :to="doc.node.path" class="font-bold uppercase"
            >Read More</g-link
          >
        </div>
      </div>
      <!-- end post -->
    </div>
  </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Docs",
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
