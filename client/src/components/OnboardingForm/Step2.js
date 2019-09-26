import React from 'react';
import { useDropzone } from 'react-dropzone';

import upload from '../../ASSETS/upload-cloud.svg';
import remove from '../../ASSETS/remove.svg';

const Step2 = ({ formUser, files, setFiles }) => {
  // const { avatar } = formUser;
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles([
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ]);
    }
  });

  const thumbs = () => {
    const removeThumbnail = index => {
      const newList = files.filter(file => files[index] !== file);
      setFiles(newList);
    };
    return files.map((file, index) => (
      <div key={index}>
        <img
          src={remove}
          className="remove"
          onClick={() => removeThumbnail(index)}
        />
        <div className="thumb" key={index}>
          <div
            style={{
              display: 'flex',
              minWidth: 0,
              overflow: 'hidden'
            }}
          >
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
      <label htmlFor="avatarImage">Avatar</label>

      <section className="container">
        <div
          {...getRootProps({ className: 'dropzone' })}
          className="upload-container"
        >
          <input {...getInputProps()} multiple={false} name="avatarImage" />
          <div className="drop-text-container">
            <img src={upload} className="upload-icon" alt="upload" />
            <p className="drop-text">
              Drag and drop images or <mark>click here</mark> to choose a file
            </p>
          </div>
        </div>
        <aside className="thumbnail-container">{thumbs()}</aside>
      </section>
    </>
  );
};

export default Step2;
