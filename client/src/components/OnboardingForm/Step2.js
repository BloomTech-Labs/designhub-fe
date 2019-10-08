import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import DottedLine from '../Icons/DottedLine.js';
import UploadCloud from '../Icons/UploadCloud.js';
import ProfileIcon from '../Icons/ProfileIcon.js';

import remove from '../../ASSETS/remove.svg';

const Step2 = ({ formUser, files, setFiles, picture }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };

  const thumbs = () => {
    const removeThumbnail = index => {
      const newList = files.filter(file => files[index] !== file);
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
      <header>
        <h1>Welcome, {`${formUser.firstName}`}!</h1>
        <h2>
          Customize your profile even more by uploading a profile picture!
        </h2>
        <p>
          Click or drag and drop on the upload icon to upload your profile
          picture
        </p>
      </header>

      <div className="avatar-upload-container">
        <section className="dropzone-container">
          <div
            {...getRootProps({ className: 'dropzone' })}
            className="upload-container"
          >
            <input {...getInputProps()} id="avatarImage" name="avatarImage" />
            <div className="drop-text-container">
              <UploadCloud />
            </div>
          </div>
        </section>

        <span className={files.length > 0 ? 'DottedLine active' : 'DottedLine'}>
          <DottedLine />
        </span>
        <span className="avatarBlank-container">
          <aside className="Step2-thumbnail-container">{thumbs()}</aside>
        </span>
      </div>
    </div>
  );
};

export default Step2;
