import React from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      activeImg: { ...allImgs[0] },
      allImgs: [...allImgs],
      thisProject: { ...props.thisProject },
      modal: false
    };
  }
  render() {
    const { close, expand, state } = this;
    return (
      <div className="ImageViewer">
        <main>
          <section className="ImageViewer__main-image">
            <img
              src={state.activeImg.url}
              alt="main project"
              onClick={expand}
            />
          </section>
          <section
            className={state.modal === true ? 'modal--expand' : 'modal--close'}
          >
            <img src={state.activeImg.url} alt="main project" />
            <span className="background-overlay" onClick={close} />
          </section>
          <section className="ImageViewer__thumbnails">
            {state.allImgs.map(t => (
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

  expand = () => {
    this.setState({ modal: true });
  };
  close = () => {
    this.setState({ modal: false });
  };
  changeImg = imgObj => {
    if (this.state.activeImg.id !== imgObj.id) {
      this.setState({ activeImg: imgObj });
    }
  };
}

export default ImageViewer;
