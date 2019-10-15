import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImageWithComments from './ImageWithComments';
import ProjectComments from './ProjectComments.js';
import defaultImage from '../../ASSETS/default_thumbnail.svg';
import Loading from '../Loading';

import { getProjectComments } from '../../store/actions';

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
    const { activeImg, modal } = this.state;

    console.log('comments in ImageViewer', this.state.comments);
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
            addComments={this.addComments}
            /* comments={
              this.state.comments.length > 0
                ? this.state.comments
                : this.props.comments
            } */
            modal={modal}
            thisProject={this.props.thisProject}
          />
        </>
      );
    }
  }
}

export default connect(
  null,
  { getProjectComments }
)(ImageViewer);
