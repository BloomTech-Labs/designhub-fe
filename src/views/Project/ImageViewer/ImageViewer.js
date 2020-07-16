import React, { useState } from 'react';
import ImageWithComments from './ImageWithComments';
import ProjectComments from './ProjectComments.js';
import defaultImage from '../../../ASSETS/default_thumbnail.svg';
import Loading from '../../../common/Loading';

const ImageViewer = ({ props, project, projectImg, userData, projectData }) => {
  //changed all activeImg to projectImg
  //changed all activeUser to userData
  const [activeImg, setActiveImg] = useState();
  // const [comments, setComments] = useState();
  const [modal, setModal] = useState(false);

  function changeImg(imgObj) {
    if (activeImg === null || projectImg.id !== imgObj.id) {
      setActiveImg({ ...projectImg, activeImg: imgObj });
    }
    console.log('active', activeImg);
  }

  function closeModal() {
    setModal({ modal: false });
  }
  console.log('ImageVue', projectImg);
  if (projectImg === null) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="ImageViewer">
          <main className="ImageViewer_body">
            <div className={modal ? 'modal--expand' : 'modal--close'}>
              <span
                className="modal--expand__background-overlay"
                onClick={closeModal}
              />
              {/* {modal && (
                <ImageWithComments
                  userData={projectData}
                  projectImg={projectImg}
                  closeModal={closeModal}
                  // comments={comments.length > 0 ? comments : project.comments}
                  comments={
                    projectImg?.length > 0 ? projectImg : projectData?.comments
                  }
                  // thisProject={project.thisProject}
                  projectData={projectData}
                />
              )} */}
            </div>
            <div className="main-image-container">
              <section className="ImageViewer__main-image">
                {!projectImg ? (
                  <img
                    src={defaultImage}
                    alt="main project"
                    style={{ cursor: 'default' }}
                    className="main-image"
                  />
                ) : (
                  <img
                    src={activeImg ? activeImg : projectData?.project?.photos}
                    alt="main project"
                    onClick={() => setModal({ modal: true })}
                    className="main-image"
                  />
                )}
              </section>
              <section className="ImageViewer__thumbnails">
                {projectData?.project?.photos.map((t) => (
                  <img
                    src={t.url}
                    key={t.url}
                    alt="project-thumbnail"
                    onClick={() => changeImg(t)}
                    className="thumbnails"
                  />
                ))}
              </section>
            </div>
          </main>
        </div>
        <ProjectComments
          // activeUser={props.activeUser}
          userData={userData}
          modal={modal}
          // thisProject={props.thisProject}
          projectData={projectData}
        />
      </>
    );
  }
};

export default ImageViewer;
