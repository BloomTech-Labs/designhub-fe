import React from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    let file = uploadInput.files[0];
    let fileParts = uploadInput.files[0].name.split('.');
    let fileType = fileParts[1];

    const projectId = 99;

    const data = new FormData();

    data.append('id', projectId);
    data.append('image', file);

    const photoProjectBody = {};

    axios
      .post(`http://localhost:8000/api/v1/photo/projects/signed`, data)
      .then(res => {
        console.log(res.data);
      });
    //   .then(() => {
    //     axios
    //       .post(`http://localhost:8000/api/v1/photo/projects`, photoProjectBody)
    //       .then(() => {});
    //   });
  };
  const handleChanges = () => {};

  let uploadInput;
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          ref={ref => {
            uploadInput = ref;
          }}
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChanges}
        />
        <button>Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
