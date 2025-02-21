import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import { App, MenuProps } from 'antd';
import useTheme from '../hook/useTheme';
import { setting } from '../setting';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoutes, setCurrentPath } from '../store/routersMapSlice';
import { AppDispatch, RootState } from '../store';
import { fetchSiteInfo } from '../store/siteSlice';
import { toggleModal } from '../store/modalSlice';

const IndexLayout = () => {
  const { isDarkMode, handleToggleTheme } = useTheme();
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');
  const { pathname } = useLocation();
  const siteInfo = useSelector((state: RootState) => state.site.siteInfo);
  const location = useLocation();

  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user, status } = useSelector(
    (state: RootState) => state.auth
  );
  const { isLeftModalOpen, isTopModalOpen } = useSelector(
    (state: RootState) => state.modal
  );

  const { siteIsOpen } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    console.log(siteIsOpen);

    if (!siteIsOpen) {
      navigate('404');
    }
  }, [siteIsOpen]);
  const { message } = App.useApp();
  //检查系统初始化
  useEffect(() => {
    dispatch(fetchSiteInfo());
  }, []);

  useEffect(() => {
    if (isAuthenticated === true && status === 'succeeded') {
      message.success('你好' + user?.username);
    } else {
      message.success('你好游客,欢迎来到我的博客');
    }
  }, [dispatch, isAuthenticated]);

  // 路由持久化
  useEffect(() => {
    const currentPath = location.pathname;
    dispatch(setCurrentPath(currentPath));
    setCurrent(pathname.split('/')[1] || '');
    // 持久化到 localStorage
    localStorage.setItem('currentPath', currentPath);
  }, [location, dispatch]);

  const routes = useSelector(selectRoutes);
  const lables = routes[0]?.children || [];
  const items: MenuProps['items'] = lables.map(item => {
    return {
      label: item.handle.label,
      key: item.handle.key,
      icon: item.handle.Icon, // 映射为图标组件
    };
  });

  const handleNavigate = (key: string) => {
    console.log(key);
    setCurrent(key);
    navigate(key === 'Home' ? '/' : `/${key}`);
  };

  const handleLeftMenu = () => {
    dispatch(toggleModal('left'));
  };

  const handleRightMenu = () => {
    dispatch(toggleModal('top'));
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Header
        logoUrl={siteInfo?.avatar || setting.BLOG_HERO_DEFAULT_LOGO_URL}
        siteName={siteInfo?.site_name || '个人知识库'}
        menuItems={items}
        isDarkMode={isDarkMode}
        isLeftMenuOpen={isLeftModalOpen}
        isRightMenuOpen={isTopModalOpen}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigate}
        onClickLeftMenu={handleLeftMenu}
        onClickRightMenu={handleRightMenu}
        current={current} // 传递当前选中的菜单项
      ></Header>
      <Outlet />
    </div>
  );
};

export default IndexLayout;
