import React from 'react';
import '../../SASS/ImageViewer.scss';
import { allImgs, thisProject } from './db';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: { ...allImgs[0] },
      allImgs: [...allImgs],
      thisProject: { ...thisProject },
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

export default ProjectImageViewer;
