{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { store } from './store';
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync';
{{/router}}
import axios from 'axios';

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#router}}
/* eslint-disable no-unused-vars */
const unsync = sync(store, router);
{{/router}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
