import React, { Component } from 'react';
import '../../SASS/ImageViewer.scss';
import { ImageWithComments } from './ImageWithComments';

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: null,
      allImgs: null,
      modal: false,
      thisProject: { ...this.props.thisProject }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.thumbnails !== prevProps.thumbnails) {
      this.setState({ activeImg: this.props.thumbnails[0] });
    }
  }

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
        <div className="ImageViewer">
          <main className="ImageViewer__body">
            <div className={modal ? 'modal--expand' : 'modal--close'}>
              <span
                className="modal--expand__background-overlay"
                onClick={() => this.setState({ modal: false })}
              />
              {modal && (
                <ImageWithComments
                  activeImg={activeImg}
                  comments={this.props.comments}
                />
              )}
            </div>

            <section className="ImageViewer__main-image">
              <img
                src={activeImg ? activeImg.url : this.props.thumbnails[0].url}
                alt="main project"
                onClick={() => this.setState({ modal: true })}
              />
            </section>
            <section className="ImageViewer__thumbnails">
              {allImgs
                ? allImgs
                : this.props.thumbnails.map(t => (
                    <img
                      key={t.url}
                      src={t.url}
                      alt="project-thumbnail"
                      onClick={() => this.changeImg(t)}
                    />
                  ))}
            </section>
          </main>
        </div>
      );
    }
  }
}

export default ImageViewer;
