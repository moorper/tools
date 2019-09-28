import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: true,
      title: 'Tools',
      dll: false,
    }],
  ],
  routes: [{
    path: '/', component: '../layouts/index',
    routes: [{
      path: '/', component: 'index',
    }, {
      path: 'ssr', component: 'ssr/index',
    }],
  }],
};

export default config;
