import React from 'react';

import '../SASS/Project.scss';

const AddProject = () => {
  return (
    <div style={{ marginTop: '78px' }}>
      <form>
        <input type="text" placeholder="some stuff" />
        <input type="text" placeholder="some stuff" />
        <input type="text" placeholder="some stuff" />
        <input type="text" placeholder="some stuff" />
        <input type="text" placeholder="some stuff" />
        <button>Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
