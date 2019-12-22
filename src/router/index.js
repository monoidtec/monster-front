import Vue from "vue";
import VueRouter from "vue-router";
import Files from "../views/Files/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "files",
    component: Files,
    children: [
      {
        path: "",
        component: () => import('../views/Files/components/allFiles/index.vue'),
        meta: {
          title: "所有文件"
        }
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - Monster`;
    if (to.name == "home") document.title = "Monster";
  }
  next();
});

export default router;
