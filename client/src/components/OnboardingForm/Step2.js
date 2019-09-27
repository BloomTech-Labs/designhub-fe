import React from 'react';
import { useDropzone } from 'react-dropzone';

import upload from '../../ASSETS/upload-cloud.svg';
import remove from '../../ASSETS/remove.svg';

const Step2 = ({ formUser, files, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles([
        ...files,
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ]);
    }
  });

  const Thumbs = () => {
    const removeThumbnail = index => {
      const newList = files.filter(file => files[index] !== file);
      setFiles(newList);
    };
    if (files.length === 0) return <div className="avatarBlank">{''}</div>;
    else
      return files.map((file, index) => (
        <>
          <img
            src={remove}
            className="remove"
            onClick={() => removeThumbnail(index)}
          />
          <div className="thumb" key={index}>
            <img src={file.preview} className="thumbnail" />
          </div>
        </>
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

        <aside className="thumbnail-container">
          <Thumbs />
        </aside>
      </div>
    </>
  );
};

export default Step2;
