import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import BootstrapLayout from '@/views/BootstrapLayout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'HelloWorld',
      },
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/bootstraplayout',
      name: 'BootstrapLayout',
      component: BootstrapLayout,
    },
  ],
});
