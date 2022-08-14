import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "../views/DataBindingCheckbox2.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingList from "../views/DataBindingList.vue";
import Renderingvif from "../views/Renderingvif.vue"
import EventClick from "../views/EventClick.vue";
import EventChange from "../views/EventChange.vue";
import Watch from "../views/Watch.vue";
import Watch2 from "../views/Watch2.vue";
import NestedComponent from "../views/NestedComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/databindingHtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindinginputtext",
    component: DataBindingInputText,
  },
  {
    path: "/databindinginputnumber",
    component: DataBindingInputNumber,
  },
  {
    path: "/databindingselect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingtextarea",
    component: DataBindingTextarea,
  },
  {
    path: "/databindingcheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingcheckbox2",
    component: DataBindingCheckbox2,
  },
  {
    path: "/databindingradio",
    component: DataBindingRadio,
  },
  {
    path: "/databindinglist",
    component: DataBindingList,
  },
  {
    path: "/renderingvif",
    component: Renderingvif,
  },
  {
    path: "/eventclick",
    component: EventClick,
  },
  {
    path: "/eventchange",
    component: EventChange,
  },
  {
    path: "/watch",
    component: Watch,
  },
  {
    path: "/watch2",
    component: Watch2,
  },
  {
    path: "/nested",
    component: NestedComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
