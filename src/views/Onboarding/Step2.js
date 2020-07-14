import React from 'react';
import { useDropzone } from 'react-dropzone';

import DottedLine from '../../ASSETS/Icons/DottedLine.js';

import UploadCloud from '../../ASSETS/Icons/UploadCloud.js';
import remove from '../../ASSETS/remove.svg';
import welcome from '../../ASSETS/welcome.svg';

const Step2 = ({
  formUser,
  files,
  setFiles,
  picture,
  showPrev,
  handleNextButton,
  handlePrevButton,
  logout,
  submitButton,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };

  const thumbs = () => {
    const removeThumbnail = (index) => {
      const newList = files.filter((file) => files[index] !== file);
      setFiles(newList);
    };
    if (files.length === 0)
      return (
        <div className="avatarBlank">
          <img src={picture} alt="default avatar" className="Step2-thumbnail" />
        </div>
      );
    return files.map((file, index) => (
      <div key={file.preview}>
        <img
          alt="remove thumbnail"
          src={remove}
          className="remove"
          onClick={() => removeThumbnail(index)}
        />
        <div className="thumb">
          <div style={thumbInner}>
            <img
              alt="thumbnail"
              src={file.preview}
              className="Step2-thumbnail"
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="FormStep">
      <div className="left-side">
        <h6 className="steps">Step 2 / 2</h6>
        <div className="left-container">
          <header>
            <h1>Welcome to the community, {`${formUser.firstName}`}!</h1>
            <h2>
              Customize your profile even more by uploading a profile picture.
            </h2>
          </header>

          <div className="avatar-upload-container">
            <section className="dropzone-container">
              <div
                {...getRootProps({ className: 'dropzone' })}
                className="upload-container"
              >
                <input
                  {...getInputProps()}
                  id="avatarImage"
                  name="avatarImage"
                />
                <div className="drop-text-container">
                  <UploadCloud />
                </div>
              </div>
            </section>

            <span
              className={files.length > 0 ? 'DottedLine active' : 'DottedLine'}
            >
              <DottedLine />
            </span>
            <span className="avatarBlank-container">
              <aside className="Step2-thumbnail-container">{thumbs()}</aside>
            </span>
          </div>
          <p className="upload-help">
            Click or drag and drop on the upload icon to upload your profile
            picture
          </p>
          <div className="buttons">
            {showPrev ? (
              <button
                name="prev"
                className="prev-btn"
                onClick={handlePrevButton}
              >
                Previous
              </button>
            ) : (
              <button name="cancel" className="prev-btn" onClick={logout}>
                Cancel
              </button>
            )}
            {submitButton ? (
              <button className="next-btn" type="submit">
                Submit
              </button>
            ) : (
              <button
                name="next"
                className="next-btn"
                onClick={handleNextButton}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="right-side">
        <header>
          <img src={welcome} alt="welcome to designhub" className="welcome" />
          <h2>
            Discover new designers, get inspiration, and share your work with
            the community
          </h2>
        </header>
      </div>
    </div>
  );
};

export default Step2;
