import React, { useEffect, useState } from 'react';
import 'antd/dist/reset.css'; // 引入 antd 样式
import { Collapse, Anchor } from 'antd'; // 导入 antd 的 Collapse 组件和 Anchor 组件
import { PartialBlock } from '@blocknote/core';
import styles from './TreeDoc.module.scss';

interface HeadingNode {
  tag: string; // h1, h2, h3
  text: string; // 标题内容
  id: string; // 对应的 ID
  level: number; // 标题级别
  children?: HeadingNode[]; // 子节点
}

const scrollToBlock = (blockId: string) => {
  const target = document.querySelector(`[data-id="${blockId}"]`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// 封装好的目录组件
const TableOfContents: React.FC<{ blocks: PartialBlock[] }> = ({ blocks }) => {
  const [headings, setHeadings] = useState<HeadingNode[]>([]);

  useEffect(() => {
    const extractHeadings = (blocks: PartialBlock[]): HeadingNode[] => {
      const headings: HeadingNode[] = [];

      blocks.forEach(block => {
        if (
          block.type === 'heading' &&
          block.props?.level &&
          block.props.level <= 3
        ) {
          const text = block.content
            ? (block.content as Array<{ text: string }>)
                .map(content => content.text)
                .join('')
                .trim()
            : '';

          headings.push({
            tag: `h${block.props.level}`,
            text,
            id: block.id || '',
            level: block.props.level,
          });
        }
      });

      return headings;
    };

    setHeadings(extractHeadings(blocks));
  }, [blocks]);

  if (headings.length === 0) return null;

  return (
    <div className={styles.tocContainer}>
      <Collapse
        defaultActiveKey={[]}
        bordered={false}
        className={styles.collapse}
      >
        <Collapse.Panel header="此页内容" key="1">
          <Anchor
            items={headings.map(heading => ({
              key: heading.id,
              href: `#${heading.id}`,
              title: heading.text,
              className: `heading-level-${heading.level}`,
            }))}
            onClick={(e, link) => {
              e.preventDefault();
              const targetId = link.href.split('#')[1];
              scrollToBlock(targetId);
            }}
          />
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default TableOfContents;
