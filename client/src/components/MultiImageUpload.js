import React, { useEffect, useState } from 'react';
import UploadCloud from './Icons/UploadCloud';

import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

export function MultiImageUpload(props) {
  const { files, setFiles } = props.filesArray;
  console.log('HYYYY', files, setFiles);
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

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={index}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          border: '1.2px dashed white',
          padding: '20px'
        }}
      >
        <input {...getInputProps()} multiple={true} />

        <UploadCloud />
        <p style={{ margin: '20px' }}>
          Drag 'n' drop some files here, or click to icon
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}
