import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProject } from '../store/actions';

import avatar1 from '../ASSETS/avatar.jpg';
import avatar2 from '../ASSETS/avatar_2.jpg';
import avatar3 from '../ASSETS/avatar_3.jpg';
import figmaIcon from '../ASSETS/figma-icon.png';
import invisionIcon from '../ASSETS/invision-icon.png';
import DownloadIcon from './Icons/DownloadIcon';
import StarIcon from './Icons/StarIcon';
import SendIcon from './Icons/SendIcon';

import '../SASS/Project.scss';

const Project = props => {
  const [state, setState] = useState({
    modal: false
  });

  const expand = () => {
    setState({
      modal: true
    });
  };

  const close = () => {
    setState({
      modal: false
    });
  };

  const dispatch = useDispatch();

  const id = props.match.params.id;
  useEffect(() => {
    dispatch(getSingleProject(id));
  }, [id]);

  const singleProjects = useSelector(state => state.projects.singleProject);
  console.log(singleProjects);

  const thumbnails = [
    {
      source:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    },
    {
      source:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    },
    {
      source:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    },
    {
      source:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    },
    {
      source:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    },
    {
      source:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    }
  ];

  const comments = [
    {
      user_id: 2,
      username: 'davidmoss',
      avatar:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      comment: 'Hey, I love design! But can we tweak the hero section???'
    },
    {
      user_id: 1,
      username: 'eriklambert',
      avatar: avatar1,
      comment:
        'Yeah sure! I was wondering what I could do to it to make it different I guess. Ive been playing around with different looks and what not, what do you think?'
    },
    {
      user_id: 2,
      username: 'davidmoss',
      avatar:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      comment:
        'Ya, i think maybe bring the text down a little bit and making the text maybe a tad bit smaller may help! Also, the image is a bit too much, kinda distracting away from the content, do we have another image other than that?'
    },
    {
      user_id: 3,
      username: 'kimmielong',
      avatar:
        'https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      comment:
        'Yea, I have more pictures saved on my hard drive I think may can work better because I agree, one is too distracting.'
    },
    {
      user_id: 1,
      username: 'eriklambert',
      avatar: avatar1,
      comment:
        'Okay, sounds good! Yeah if you can send that over to me when you can that would be super helpful!!'
    }
  ];

  if (!singleProjects) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="projects-container">
      <div className="project-header">
        <div className="project-details">
          <h2>{singleProjects.name}</h2>
          <h3>{singleProjects.description}</h3>
          <p>
            <span>
              Created by{' '}
              <span className="project-header-username">
                <Link to={`/profile/`}>eriklambert</Link>
              </span>
            </span>
            <span>Created on June 11, 2020</span>
          </p>
        </div>
        <div className="project-header-right">
          <div className="project-header-team">
            <img src={avatar1} alt="user avatar" />
            <img src={avatar2} alt="user avatar" />
            <img src={avatar3} alt="user avatar" />
          </div>
          <div className="project-header-links">
            <div className="project-header-button">
              <img
                src={figmaIcon}
                className={
                  singleProjects.figma === null
                    ? 'link-disabled'
                    : 'link-enabled'
                }
                alt="figma"
              />
            </div>
            <div className="project-header-button">
              <img
                src={invisionIcon}
                className={
                  singleProjects.invision === null
                    ? 'link-disabled'
                    : 'link-enabled'
                }
                alt="invision"
              />
            </div>
            <div className="download project-header-button">
              <DownloadIcon />
            </div>
            <div className="star project-header-button">
              <StarIcon />
            </div>
            <div className="edit project-header-button">Edit</div>
          </div>
        </div>
      </div>
      <div className="project-body">
        <div className="project-main-image">
          <img
            src={singleProjects.mainImg}
            alt="main project"
            onClick={expand}
          />
        </div>
        <div className={state.modal === true ? 'modal-expand' : 'modal-close'}>
          <img src={singleProjects.mainImg} alt="main project" />
          <span className="background-overlay" onClick={close} />
        </div>
        <div className="project-thumbnails">
          {thumbnails.map(images => (
            <img src={images.source} alt="project-thumbnail" />
          ))}
        </div>
        <div className="project-comments">
          <div className="comments-header">Comments</div>
          <div className="comments-body">
            {comments.map(comment => (
              <div
              // className={
              //   state.user_id === comment.user_id
              //     ? 'comment'
              //     : 'comment-li-user'
              // }
              >
                <img src={comment.avatar} alt="avatar" className="avatar" />
                {/* {state.user_id === comment.user_id ? (
                  <p className="you">You</p>
                ) : null} */}
                <p className="message">{comment.comment}</p>
              </div>
            ))}
          </div>
          <div className="comments-form">
            <form>
              <div className="form-wrapper">
                <input type="text" placeholder="Leave a comment..." />
                <button>
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

// class Project extends Component {
//   constructor(props) {
//     super(props);
//     state = {
//       modal: false,
//     };
//   }

//   expand = () => {
//     setState({
//       modal: true
//     });
//   };

//   close = () => {
//     setState({
//       modal: false
//     });
//   };

//   render() {

//     const thumbnails = [
//       {
//         source:
//           'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
//       },
//       {
//         source:
//           'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
//       },
//       {
//         source:
//           'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
//       },
//       {
//         source:
//           'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
//       },
//       {
//         source:
//           'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
//       },
//       {
//         source:
//           'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
//       }
//     ];

//     const comments = [
//       {
//         user_id: 2,
//         username: 'davidmoss',
//         avatar:
//           'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
//         comment: 'Hey, I love design! But can we tweak the hero section???'
//       },
//       {
//         user_id: 1,
//         username: 'eriklambert',
//         avatar: avatar1,
//         comment:
//           'Yeah sure! I was wondering what I could do to it to make it different I guess. Ive been playing around with different looks and what not, what do you think?'
//       },
//       {
//         user_id: 2,
//         username: 'davidmoss',
//         avatar:
//           'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
//         comment:
//           'Ya, i think maybe bring the text down a little bit and making the text maybe a tad bit smaller may help! Also, the image is a bit too much, kinda distracting away from the content, do we have another image other than that?'
//       },
//       {
//         user_id: 3,
//         username: 'kimmielong',
//         avatar:
//           'https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//         comment:
//           'Yea, I have more pictures saved on my hard drive I think may can work better because I agree, one is too distracting.'
//       },
//       {
//         user_id: 1,
//         username: 'eriklambert',
//         avatar: avatar1,
//         comment:
//           'Okay, sounds good! Yeah if you can send that over to me when you can that would be super helpful!!'
//       }
//     ];

//     return (

//       <div className="projects-container">
//         <div className="project-header">
//           <div className="project-details">
//             <h2>{singleProjects.name}</h2>
//             <h3>{singleProjects.description}</h3>
//             <p>
//               <span>
//                 Created by{' '}
//                 <span className="project-header-username">
//                   <Link to={`/profile/${state.username}`}>
//                     eriklambert
//                   </Link>
//                 </span>
//               </span>
//               <span>Created on June 11, 2020</span>
//             </p>
//           </div>
//           <div className="project-header-right">
//             <div className="project-header-team">
//               <img src={avatar1} alt="user avatar" />
//               <img src={avatar2} alt="user avatar" />
//               <img src={avatar3} alt="user avatar" />
//             </div>
//             <div className="project-header-links">
//               <div className="project-header-button">
//                 <img
//                   src={figmaIcon}
//                   className={
//                     singleProjects.figma === null
//                       ? 'link-disabled'
//                       : 'link-enabled'
//                   }
//                   alt="figma"
//                 />
//               </div>
//               <div className="project-header-button">
//                 <img
//                   src={invisionIcon}
//                   className={
//                     singleProjects.invision === null
//                       ? 'link-disabled'
//                       : 'link-enabled'
//                   }
//                   alt="invision"
//                 />
//               </div>
//               <div className="download project-header-button">
//                 <DownloadIcon />
//               </div>
//               <div className="star project-header-button">
//                 <StarIcon />
//               </div>
//               <div className="edit project-header-button">Edit</div>
//             </div>
//           </div>
//         </div>
//         <div className="project-body">
//           <div className="project-main-image">
//             <img
//               src={singleProjects.mainImg}
//               alt="main project"
//               onClick={expand}
//             />
//           </div>
//           <div
//             className={
//               state.modal === true ? 'modal-expand' : 'modal-close'
//             }
//           >
//             <img src={singleProjects.mainImg} alt="main project" />
//             <span className="background-overlay" onClick={close} />
//           </div>
//           <div className="project-thumbnails">
//             {thumbnails.map(images => (
//               <img src={images.source} alt="project-thumbnail" />
//             ))}
//           </div>
//           <div className="project-comments">
//             <div className="comments-header">Comments</div>
//             <div className="comments-body">
//               {comments.map(comment => (
//                 <div
//                   className={
//                     state.user_id === comment.user_id
//                       ? 'comment'
//                       : 'comment-li-user'
//                   }
//                 >
//                   <img src={comment.avatar} alt="avatar" className="avatar" />
//                   {state.user_id === comment.user_id ? (
//                     <p className="you">You</p>
//                   ) : null}
//                   <p className="message">{comment.comment}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="comments-form">
//               <form>
//                 <div className="form-wrapper">
//                   <input type="text" placeholder="Leave a comment..." />
//                   <button>
//                     <SendIcon />
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Project;
