const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/templates/Documentation.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/pages/Docs.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/templates/Post.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/docs/aws-amplify-tutorial/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--aws-amplify-tutorial-md" */ "/Users/i850916/Projects/SkiCycleRun/skicyclerun.com/docs/AWS-Amplify-Tutorial.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/docs/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    path: "/GravelCycling/",
    component: c6
  },
  {
    path: "/Mountains/",
    component: c6
  },
  {
    path: "/PNW/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
