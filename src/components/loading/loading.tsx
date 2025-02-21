import React, { useEffect } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

//配置
nprogress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

const Loading = () => {
  //组件挂在时执行nprogress.start()
  useEffect(() => {
    nprogress.start();
  }, []);
  //组件消亡时执行 nprogress.done()
  useEffect(() => {
    return () => {
      nprogress.done();
    };
  });
  return <React.Fragment />;
};

export default Loading;
