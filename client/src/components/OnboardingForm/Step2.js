import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import DottedLine from '../Icons/DottedLine.js';
import UploadCloud from '../Icons/UploadCloud.js';
import ProfileIcon from '../Icons/ProfileIcon.js';

import remove from '../../ASSETS/remove.svg';

const Step2 = ({ formUser, files, setFiles }) => {
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

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const thumbs = () => {
    const removeThumbnail = index => {
      const newList = files.filter(file => files[index] !== file);
      setFiles(newList);
    };
    if (files.length === 0)
      return (
        <div className="avatarBlank">
          <ProfileIcon />
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
    <>
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
              {/* <img src={upload} className="upload-icon" alt="upload" /> */}
              <UploadCloud />
            </div>
          </div>
        </section>

        <span className="DottedLine">
          <DottedLine />
        </span>

        <aside className="Step2-thumbnail-container">{thumbs()}</aside>
      </div>
    </>
  );
};

export default Step2;
