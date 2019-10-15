import React, { Component } from 'react';

import ImageWithComments from './ImageWithComments';
import ProjectComments from './ProjectComments.js';
import defaultImage from '../../ASSETS/default_thumbnail.svg';
import Loading from '../Loading';

import '../../SASS/ImageViewer.scss';

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: null,
      comments: [],
      modal: false
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      comments: this.props.comments
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.thumbnails !== prevProps.thumbnails) {
      this.setState({
        activeImg: this.props.thumbnails[0]
      });
    }
  }

  changeImg = imgObj => {
    if (
      this.state.activeImg === null ||
      this.state.activeImg.id !== imgObj.id
    ) {
      this.setState({ activeImg: imgObj });
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { activeImg, modal } = this.state;

    if (activeImg === null) {
      return <Loading />;
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
                    <img
                      src={
                        activeImg ? activeImg.url : this.props.thumbnails[0].url
                      }
                      alt="main project"
                      onClick={() => this.setState({ modal: true })}
                      className="main-image"
                    />
                  )}
                </section>
                <section className="ImageViewer__thumbnails">
                  {this.props.thumbnails.map(t => (
                    <img
                      key={t.url}
                      src={t.url}
                      alt="project-thumbnail"
                      onClick={() => this.changeImg(t)}
                      className="thumbnails"
                    />
                  ))}
                </section>
              </div>
            </main>
          </div>
          <ProjectComments
            activeUser={this.props.activeUser}
            modal={modal}
            thisProject={this.props.thisProject}
          />
        </>
      );
    }
  }
}

export default ImageViewer;
