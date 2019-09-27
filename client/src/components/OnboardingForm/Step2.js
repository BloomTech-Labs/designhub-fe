import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import upload from '../../ASSETS/upload-cloud.svg';
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
      console.log('clicked');
      const newList = files.filter(file => files[index] !== file);
      setFiles(newList);
    };
    if (files.length === 0) return <div className="avatarBlank">{''}</div>;
    else
      return files.map((file, index) => (
        <div>
          <img
            src={remove}
            className="remove"
            onClick={() => removeThumbnail(index)}
          />
          <div className="thumb" key={index}>
            <div style={thumbInner}>
              <img src={file.preview} className="thumbnail" />
            </div>
          </div>
        </div>
      ));
  };

  return (
    <>
      <header>
        <h1>Welcome {`${formUser.firstName}`}</h1>
        <h2>Upload a picture to complete your profile</h2>
      </header>

      <div className="avatar-upload-container">
        <section className="dropzone-container">
          <div
            {...getRootProps({ className: 'dropzone' })}
            className="upload-container"
          >
            <input {...getInputProps()} id="avatarImage" name="avatarImage" />
            <div className="drop-text-container">
              <img src={upload} className="upload-icon" alt="upload" />
              <p className="drop-text">
                Drag and drop images or <mark>click here</mark> to choose a file
              </p>
            </div>
          </div>
        </section>

        <aside className="thumbnail-container">{thumbs()}</aside>
      </div>
    </>
  );
};

export default Step2;
