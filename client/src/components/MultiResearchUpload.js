import React from 'react';
import UploadCloud from './Icons/UploadCloud.js';
import remove from '../ASSETS/remove.svg';

import '../SASS/ProjectForm.scss';

import { useDropzone } from 'react-dropzone';

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

export function MultiResearchUpload(props) {
    const { files, setFiles } = props;
    const {
        isDragActive,
        isDragReject,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'application/pdf',
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
                    alt=""
                    src={remove}
                    className="remove"
                    onClick={() => removeThumbnail(index)}
                />
                <div className="thumb" key={index}>
                    <div style={thumbInner}>
                        <p>PDF</p>
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
                                Drag and drop pdfs or click here to upload your user research!
              </p>
                        </>
                    )}
                    {isDragActive && !isDragReject && (
                        <>
                            <UploadCloud color="#5557fe" />
                            <p className="drop-text">drop your pdfs here</p>
                        </>
                    )}
                    {isDragReject && (
                        <div className="error">
                            <UploadCloud color="#e64c4d" />
                            <p className="drop-text">Pdf files only please</p>
                        </div>
                    )}
                </div>
            </div>
            <aside className="thumbnail-container">{thumbs()}</aside>
        </section>
    );
}
