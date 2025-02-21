// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.scss';
import { RouteObject, useNavigate, useRoutes } from 'react-router-dom';
import { ConfigProvider, theme, ThemeConfig } from 'antd';
import useTheme from './hook/useTheme';
import Loading from './components/loading/loading';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticleRoutes, loadMainSiteRoutes } from './store/routersMapSlice';
import { selectRoutes } from './store/routersMapSlice';
import { App as AntdApp } from 'antd'; // 引入 Ant Design 的 App
import MouseParticles from 'react-mouse-particles';
import { checkLoginStatus } from './store/authSlice';
import { AppDispatch, RootState } from './store';
import { recordVisit } from './api/site';
import useTitle from './hook/useTitle';
const App: React.FC = () => {
  const { isDarkMode } = useTheme(); // 确保在 Provider 内部
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoaded } = useSelector((state: RootState) => state.routesMap);
  const { siteIsOpen } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const Routes: RouteObject[] = useSelector(selectRoutes);
  useTitle();
  // todo ROuter 为空
  useEffect(() => {
    if (isDarkMode) {
      setCurrentTheme({
        algorithm: theme.darkAlgorithm,
        components: {
          Breadcrumb: {
            /* 这里是你的组件 token */
            itemColor: '#fff',
          },
          Tree: {
            /* 树形控件的样式 */
            directoryNodeSelectedBg: 'rgba(0, 0, 0, 0.82)', // 选中背景色：深绿松石色半透明
            directoryNodeSelectedColor: '#4fd1c5', // 选中文字颜色：亮绿松石色
            nodeHoverBg: 'rgba(255, 255, 255, 0.03)', // 悬浮背景色：更柔和的白色半透明
            nodeHoverColor: '#81e6d9', // 悬浮文字颜色：淡绿松石色
          },
        },
      });
    } else {
      setCurrentTheme({
        algorithm: theme.defaultAlgorithm,
        components: {
          Breadcrumb: {
            /* 这里是你的组件 token */
            itemColor: '#fff',
          },
          Tree: {
            /* 树形控件的样式 */
            directoryNodeSelectedBg: 'rgba(72, 176, 162, 0.08)', // 选中背景色：柔和的绿松石色
            directoryNodeSelectedColor: '#38a89d', // 选中文字颜色：清新的绿松石色
            nodeHoverBg: 'rgba(0, 0, 0, 0.02)', // 悬浮背景色：极淡的灰色
            nodeHoverColor: '#4dc0b5', // 悬浮文字颜色：浅绿松石色
          },
        },
      });
    }
  }, [isDarkMode]);

  // 创建静态路由
  useEffect(() => {
    dispatch(loadMainSiteRoutes());
    dispatch(loadArticleRoutes());
    dispatch(checkLoginStatus());
    if (siteIsOpen === false) {
      navigate('/404');
    }
  }, [dispatch, siteIsOpen]);

  useEffect(() => {
    recordVisit({
      ip: '', // 服务端会自动获取
      userAgent: navigator.userAgent,
      path: window.location.pathname,
      referer: document.referrer || undefined,
    });
  }, []);

  const router = useRoutes(Routes);

  if (isLoaded === false) {
    return <Loading></Loading>;
  }
  return (
    <ConfigProvider theme={currentTheme}>
      <AntdApp>
        {/* @ts-expect-error - MouseParticles has incomplete type definitions */}
        <MouseParticles g={1} color="random" cull="col,image-wrapper" />
        {router}
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
