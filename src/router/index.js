import Vue from 'vue'
import Router from 'vue-router'

import routes from './router'
import searchRoutes from './search'
import forumRoutes from './forum'

Vue.use(Router)

const router = new Router({
  routes,
});

router.addRoutes(searchRoutes);
router.addRoutes(forumRoutes);


export default router;
