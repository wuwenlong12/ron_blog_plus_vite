import React, { useCallback, useEffect, useState } from 'react';
import styles from './Infolist.module.scss';
import { Button, Modal, Empty } from 'antd';
import { FcLike } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { getProject, likeProject } from '../../../../api/project';
import { ProjectItem } from '../../../../api/project/type';
import dayjs from 'dayjs';
import Editor from '../../../../components/Editor/Editor';
import { debounce } from 'lodash';

interface InfoListProps {
  style?: React.CSSProperties;
}

const InfoList: React.FC<InfoListProps> = ({ style }) => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await getProject();
    if (res.code == 0) {
      setProjects(res.data);
    }
  };

  const handleViewDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const hanlderLikeClick = useCallback(
    debounce(
      async (id: string, isModal: boolean = false) => {
        setProjects(prevProjects =>
          prevProjects.map(project =>
            project._id === id
              ? { ...project, likes: project.likes + 1 }
              : project
          )
        );
        if (isModal && selectedProject) {
          setSelectedProject(prev => {
            if (!prev) return null;
            return { ...prev, likes: prev.likes + 1 };
          });
        }

        const res = await likeProject(id);
        if (res.code !== 0) {
          setProjects(prevProjects =>
            prevProjects.map(project =>
              project._id === id
                ? { ...project, likes: project.likes - 1 }
                : project
            )
          );
        }
      },
      1000,
      { leading: true, trailing: false }
    ),
    [selectedProject]
  );

  return (
    <div style={style} className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>项目产品</div>
        <div className={styles.desc}>
          设计及开发项目总结，不限于开发完成的项目，包括一些产品概念...
        </div>
      </div>

      {projects.length > 0 ? (
        <div className={styles.list}>
          {projects.map(info => (
            <div className={styles.projectCard} key={info._id}>
              <img className={styles.img} src={info.img_url} alt="" />
              <div className={styles.title}>{info.title}</div>
              <div className={styles.date}>
                {dayjs(info.createdAt).format('YYYY-MM-DD')}
              </div>
              <div className={styles.classify}>{info.category}</div>
              <div className={styles.bottomBtn}>
                <Button
                  icon={<FcLike />}
                  className={styles.leftBtn}
                  onClick={() => hanlderLikeClick(info._id)}
                >
                  {info.likes}
                </Button>
                <Button
                  className={styles.rightBtn}
                  onClick={() => handleViewDetails(info)}
                >
                  瞧一瞧
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <div className={styles.emptyContent}>
                <p className={styles.emptyText}>作者还没有发布过项目</p>
                <p className={styles.emptySubText}>敬请期待~</p>
              </div>
            }
          />
        </div>
      )}

      <Modal
        title={selectedProject?.title}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className={styles.detailModal}
        width={'100%'}
      >
        {selectedProject && (
          <>
            <img
              src={selectedProject.img_url}
              alt="项目图片"
              className={styles.modalImage}
            />
            <div className={styles.modalContent}>
              <div className={styles.infoRow}>
                <p>{selectedProject.category}</p>
                <p>{dayjs(selectedProject.createdAt).format('YYYY-MM-DD')}</p>
              </div>
              {selectedProject.content ? (
                <Editor
                  isSummary={true}
                  editable={false}
                  initialContent={selectedProject.content}
                ></Editor>
              ) : null}

              <div className={styles.modalButtons}>
                <Button
                  icon={<FcLike />}
                  className={styles.likeButton}
                  onClick={() => {
                    hanlderLikeClick(selectedProject._id, true);
                  }}
                >
                  {selectedProject.likes}
                </Button>
                <Button
                  type="primary"
                  href={selectedProject.button_url}
                  target="_blank"
                  className={styles.githubButton}
                  icon={<FaGithub />}
                >
                  访问 GitHub
                </Button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default InfoList;
