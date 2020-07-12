import React, { useState } from 'react';
import ImageWithComments from './ImageWithComments';
import ProjectComments from './ProjectComments.js';
import defaultImage from '../../../ASSETS/default_thumbnail.svg';
import Loading from '../../../common/Loading';

const ImageViewer = ({ props, project }) => {
  const [activeImg, setActiveImg] = useState(null);
  const [comments, setComments] = useState();
  const [modal, setModal] = useState(false);

  function changeImg(imgObj) {
    if (activeImg === null || activeImg.id !== imgObj.id) {
      setActiveImg({ activeImg: imgObj });
    }
    console.log('active', imgObj);
  }
  function closeModal() {
    setModal({ modal: false });
  }
  console.log('ImageVue', project);
  if (activeImg === null) {
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
              {modal && (
                <ImageWithComments
                  activeUser={project.activeUser}
                  activeImg={activeImg}
                  closeModal={closeModal}
                  comments={comments.length > 0 ? comments : project.comments}
                  thisProject={project.thisProject}
                />
              )}
            </div>
            <div className="main-image-container">
              <section className="ImageViewer__main-image">
                {!activeImg ? (
                  <img
                    src={defaultImage}
                    alt="main project"
                    style={{ cursor: 'default' }}
                    className="main-image"
                  />
                ) : (
                  <img
                    src={activeImg ? activeImg.url : props.thumbnails[0].url}
                    alt="main project"
                    onClick={() => setModal({ modal: true })}
                    className="main-image"
                  />
                )}
              </section>
              <section className="ImageViewer__thumbnails">
                {props.thumbnails.map((t) => (
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
          activeUser={props.activeUser}
          modal={modal}
          thisProject={props.thisProject}
        />
      </>
    );
  }
};

export default ImageViewer;
