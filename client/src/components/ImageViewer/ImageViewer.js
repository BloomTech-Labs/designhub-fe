import React, { Component } from 'react';
import '../../SASS/ImageViewer.scss';
import { ImageWithComments } from './ImageWithComments';
import ProjectComments from './ProjectComments.js';
import defaultImage from '../../ASSETS/default_thumbnail.svg';

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: null,
      allImgs: null,
      comments: this.props.comments,
      modal: false,
      thisProject: { ...this.props.thisProject },
      thumbnails: [],
      deletePhotoLoading: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.thumbnails !== prevProps.thumbnails) {
      this.setState({
        activeImg: this.props.thumbnails[0],
        thumbnails: this.props.thumbnails
      });
    }
  }

  addComments = newComments => {
    this.setState({
      ...this.state,
      comments: newComments
    });
  };

  changeImg = imgObj => {
    if (
      this.state.activeImg === null ||
      this.state.activeImg.id !== imgObj.id
    ) {
      this.setState({ activeImg: imgObj }, () =>
        console.log('ImageViwer.js changeImg() activeImg', this.state.activeImg)
      );
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { activeImg, modal, allImgs } = this.state;
    console.log('ImageViewer.js render() activeImg', activeImg);
    console.log(
      'ImageViewer.js render() this.props.comments',
      this.props.comments
    );
    if (activeImg === null) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <div className="ImageViewer">
            <main className="ImageViewer__body">
              <div className={modal ? 'modal--expand' : 'modal--close'}>
                <span
                  className="modal--expand__background-overlay"
                  onClick={this.closeModal}
                />
                {modal && (
                  <ImageWithComments
                    activeUser={this.props.activeUser}
                    activeImg={activeImg}
                    addComments={this.addComments}
                    closeModal={this.closeModal}
                    comments={
                      this.state.comments.length > 0
                        ? this.state.comments
                        : this.props.comments
                    }
                    thisProject={this.props.thisProject}
                  />
                )}
              </div>
              <div className="main-image-container">
                <section className="ImageViewer__main-image">
                  {!activeImg ? (
                    <img
                      style={{ cursor: 'default' }}
                      src={defaultImage}
                      alt="main project"
                      className="main-image"
                    />
                  ) : (
                    <div>
                      {this.props.thisProject.userId ===
                        this.props.activeUser.id && <h2>delete</h2>}
                      {console.log(this.props)}
                      <img
                        src={
                          activeImg
                            ? activeImg.url
                            : this.props.thumbnails[0].url
                        }
                        alt="main project"
                        onClick={() => this.setState({ modal: true })}
                        className="main-image"
                      />
                    </div>
                  )}
                </section>
                <section className="ImageViewer__thumbnails">
                  {allImgs
                    ? allImgs
                    : this.state.thumbnails.map(t => (
                        <div>
                          {this.props.thisProject.userId ===
                            this.props.activeUser.id && <h2>delete</h2>}
                          <img
                            key={t.url}
                            src={t.url}
                            alt="project-thumbnail"
                            onClick={() => this.changeImg(t)}
                            className="thumbnails"
                          />
                        </div>
                      ))}
                </section>
              </div>
            </main>
          </div>
          <ProjectComments
            activeUser={this.props.activeUser}
            addComments={this.addComments}
            comments={
              this.state.comments.length > 0
                ? this.state.comments
                : this.props.comments
            }
            modal={modal}
            thisProject={this.props.thisProject}
          />
        </>
      );
    }
  }
}

export default ImageViewer;
