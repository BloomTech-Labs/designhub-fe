import React, { useEffect, useState } from 'react';
import upload from '../ASSETS/upload-cloud.svg';
import remove from '../ASSETS/remove.svg';

import '../SASS/ProjectForm.scss';

import { useDropzone } from 'react-dropzone';

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

export function MultiImageUpload(props) {
  const { files, setFiles } = props.filesArray;
  console.log('HYYYY', files);
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

  const thumbs = () => {
    const removeThumbnail = index => {
      const newList = files.filter((file, i) => files[index] !== file);
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
          <div style={thumbInner}>
            <img src={file.preview} className="thumbnail" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="upload-container"
      >
        <input {...getInputProps()} multiple={true} />
        <div className="drop-text-container">
          <img src={upload} className="upload-icon" alt="upload" />
          <p className="drop-text">
            Drag and drop images or <mark>browse</mark> to choose a files
          </p>
        </div>
      </div>
      <aside className="thumbnail-container">{thumbs()}</aside>
    </section>
  );
}
