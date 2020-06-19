import React from 'react';
import UploadCloud from '../../ASSETS/Icons/UploadCloud.js';
import remove from '../../ASSETS/remove.svg';

import './styles.scss';

import { useDropzone } from 'react-dropzone';

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

export function MultiImageUpload(props) {
  const { files, setFiles } = props;
  const {
    isDragActive,
    isDragReject,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const thumbs = () => {
    const removeThumbnail = (index) => {
      const newList = files.filter((file) => files[index] !== file);
      setFiles(newList);
    };
    return files.map((file, index) => (
      <div key={index}>
        <img
          alt=""
          src={remove}
          className="remove"
          onClick={() => removeThumbnail(index)}
        />
        <div className="thumb" key={index}>
          <div style={thumbInner}>
            <img
              alt="project thumbnail"
              src={file.preview}
              className="thumbnail"
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="image-dropzone-container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={`upload-container${isDragActive ? ' active' : ''}${
          isDragReject ? ' rejected' : ''
        }`}
      >
        <input {...getInputProps()} multiple={true} />
        <div className="drop-text-container">
          {!isDragActive && (
            <>
              <UploadCloud />
              <p className="drop-text">
                Drag and drop images or click here to upload your design files!
              </p>
            </>
          )}
          {isDragActive && !isDragReject && (
            <>
              <UploadCloud color="#5557fe" />
              <p className="drop-text">drop your images here</p>
            </>
          )}
          {isDragReject && (
            <div className="error">
              <UploadCloud color="#e64c4d" />
              <p className="drop-text">Image files only please</p>
            </div>
          )}
        </div>
      </div>
      <aside className="thumbnail-container">{thumbs()}</aside>
    </section>
  );
}