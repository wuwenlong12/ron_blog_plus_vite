import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss'; // 导入 SCSS 模块
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import {
  findRouterMatches,
  parsePath,
} from '../../router/utils/findRouterMatches';

const AppBreadcrumb: React.FC = () => {
  const location = useLocation();
  const router = useSelector((state: RootState) => state.routesMap.routesMap);
  const [matches, setMatches] = useState<
    { pathname: string; label?: string }[]
  >([]);
  useEffect(() => {
    if (router[0]?.children) {
      setMatches(
        findRouterMatches(parsePath(location.pathname), router[0].children)
      );
    }
  }, []);

  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItemType[]>(
    []
  );

  // 当路由匹配项变化时更新 breadcrumb
  useEffect(() => {
    updateBreadcrumb();
  }, [matches]);

  const updateBreadcrumb = () => {
    const items = matches
      .filter(item => item?.label) // 仅对定义了 handle.label 的路由生成面包屑
      .map(item => ({
        // key: item.id, // 唯一标识
        title: (
          <Link to={item.pathname || ''} className={`${styles.breadcrumbLink}`}>
            {item?.label}
          </Link>
        ), // 显示面包屑文字，并添加链接
      }));
    setBreadcrumbItems(items);
  };

  return (
    <Breadcrumb
      items={breadcrumbItems}
      className={`${styles.breadcrumbContainer}`} // 根据模式动态设置样式
    />
  );
};

export default AppBreadcrumb;
