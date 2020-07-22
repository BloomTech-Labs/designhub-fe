import React, { useState } from 'react';
import SendIcon from '../../../ASSETS/Icons/SendIcon.js';

// export class TempComment extends React.Component {
//   state = {
//     comment: '',
//   };

//   render() {
//     const { comment } = this.state;
//     const { c } = this.props;
//     const { top, left } = c;
//     return (
//       <>
//         <div
//           className="StickyComment__hover-space"
//           style={{
//             top: top,
//             left: left,
//           }}
//         >
//           <section className="StickyComment__dot">
//             <div className="StickyComment__dot-center"> </div>
//           </section>
//         </div>

//         <main
//           className="StickyComment__container TempComment"
//           style={{
//             display: 'flex',
//             position: 'absolute',
//             top: top,
//             left: left,
//           }}
//         >
//           {/* this <hr> is part of the UX design that became problematic to implement, it is currently display:none */}
//           <hr className="StickyComment__midbar" />

//           <form
//             className="StickyComment__form"
//             onSubmit={(e) => this.onSubmit(e, c)}
//           >
//             <textarea
//               autoFocus={true}
//               type="text"
//               value={comment}
//               onKeyDown={(e) => this.handleKeyDown(e, c)}
//               onChange={this.handleChange}
//             />
//             <button
//               className="StickyComments__submit-btn"
//               onClick={(e) => this.onSubmit(e, c)}
//             >
//               <SendIcon />
//             </button>
//           </form>
//         </main>
//       </>
//     );
//   }

//   handleChange = (e) => {
//     this.setState({ comment: e.target.value });
//   };

//   handleKeyDown(e, c) {
//     if (e.key === 'Enter') {
//       e.preventDefault(); // Prevents the addition of a new line in the <textarea/>
//       this.onSubmit(e, c);
//     }
//   }

//   // not currently implemented
//   // handleDelete(e, id) {
//   //   e.preventDefault();
//   //   this.props.commentDelete(id);
//   // }

//   onSubmit = (e, c) => {
//     e.preventDefault();
//     const newComment = {
//       ...c,
//       text: this.state.comment,
//     };
//     this.props.onSubmit(e, newComment);
//   };
// }

export const TempComment = (props) => {
  const [comment, setComment] = useState();

  const { c } = this.props;
  const { top, left } = c;

  const handleChange = (e) => {
    setComment({ comment: e.target.value });
  };

  const onSubmit = (e, c) => {
    e.preventDefault();

    const newComment = setComment({ comment, ...c });
  };

  return (
    <>
      <div
        className="StickyComment__hover-space"
        style={{
          top: top,
          left: left,
        }}
      >
        <section className="StickyComment__dot">
          <div className="StickyComment__dot-center"> </div>
        </section>
      </div>

      <main
        className="StickyComment__container TempComment"
        style={{
          display: 'flex',
          position: 'absolute',
          top: top,
          left: left,
        }}
      >
        {/* this <hr> is part of the UX design that became problematic to implement, it is currently display:none */}
        <hr className="StickyComment__midbar" />

        <form className="StickyComment__form" onSubmit={(e) => onSubmit(e, c)}>
          <textarea
            autoFocus={true}
            type="text"
            value={comment}
            onKeyDown={(e) => handleKeyDown(e, c)}
            onChange={handleChange}
          />
          <button
            className="StickyComments__submit-btn"
            onClick={(e) => onSubmit(e, c)}
          >
            <SendIcon />
          </button>
        </form>
      </main>
    </>
  );
};

const handleKeyDown = (e, c) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevents the addition of a new line in the <textarea/>
    this.onSubmit(e, c);
  }
};

// not currently implemented
// handleDelete(e, id) {
//   e.preventDefault();
//   this.props.commentDelete(id);
// }
