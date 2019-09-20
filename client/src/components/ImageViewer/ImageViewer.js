import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../../SASS/ImageViewer.scss';

const allImgs = [
  {
    id: 2,
    projectId: 17,
    url:
      'https://lh5.googleusercontent.com/-B3qA_VCoiqg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdq-G2W_cTDdR3fIpVBe7s_j1Y3Dw/photo.jpg',
    description: null,
    title: 'my first photo',
    created_at: '2019-09-20T14:42:34.161Z'
  },
  {
    id: 4,
    projectId: 17,
    url:
      'https://s.gravatar.com/avatar/a70f8b0c3761764491eebc5d0484a738?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fer.png',
    description: null,
    title: 'my first photo',
    created_at: '2019-09-20T14:44:30.301Z'
  },
  {
    id: 6,
    projectId: 17,
    url:
      'https://cdn.dribbble.com/users/182336/screenshots/7150621/media/b0a6aa5b2a19029479da7d91972b2774.png',
    description: null,
    title: 'my first photo',
    created_at: '2019-09-20T14:44:30.301Z'
  }
];

class ImageViewer extends React.Component {
  state = {
    activeImg: { ...allImgs[0] },
    allImgs: [...allImgs],
    isOpen: false,
    lightBox: [],
    photoIndex: 0,
    thisProject: { ...this.props.thisProject }
  };

  render() {
    const { lightBox, photoIndex, isOpen } = this.state;
    return (
      <div className="ImageViewer">
        {isOpen && (
          <Lightbox
            mainSrc={lightBox[photoIndex]}
            nextSrc={lightBox[(photoIndex + 1) % lightBox.length]}
            prevSrc={
              lightBox[(photoIndex + lightBox.length - 1) % lightBox.length]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + lightBox.length - 1) % lightBox.length
              })
            }
            onMoveNextRequest={() =>
              this.setState(ps => ({
                ...ps,
                photoIndex: (photoIndex + 1) % lightBox.length
              }))
            }
          />
        )}
        <main>
          <section className="ImageViewer__main-image">
            <img
              src={this.state.activeImg.url}
              alt="main project"
              onClick={() => this.setState({ isOpen: true })}
            />
          </section>
          <section className="ImageViewer__thumbnails">
            {this.state.allImgs.map(t => (
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

  componentDidMount() {
    const urls = this.state.allImgs.map(i => i.url);
    this.setState({ lightBox: urls });
  }

  changeImg = imgObj => {
    const i = this.state.lightBox.findIndex(url => url === imgObj.url);
    if (this.state.activeImg.id !== imgObj.id) {
      this.setState({ activeImg: imgObj, photoIndex: i });
    }
  };
}

export default ImageViewer;
