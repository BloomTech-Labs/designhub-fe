// import React from 'react';
// import {useAuth0} from '../../utilities/auth-spa';

// import x from '../../ASSETS/logo.svg';
// import './styles.scss';


// export default function LandingPage() {
//   const { loginWithRedirect } = useAuth0();
//   return (
//     <>
//       <div className="Login-container">
//         <section className="left-side">
//           <p>WELCOME TO</p>
//           <h1>
//             DESIGN<em>HUB</em>
//           </h1>

//           <div className="paragraphs">
//             <span role="img" aria-label="handshake">
//               🤝
//             </span>
//             <h2>
//               Join and start creating projects and collaborating with teams!
//             </h2>

//             <span role="img" aria-label="briefcase">
//               💼
//             </span>
//             <h2>
//               House your case studies, deliverables, assets, links, and design
//               files all in one place!
//             </h2>

//             <span role="img" aria-label="megaphone" className="megaphone">
//               📢
//             </span>
//             <h2>
//               Give and recieve feedback with ease. No more worrying about your
//               feedback getting lost in Slack messages!
//             </h2>
//           </div>
//         </section>
//         <section className="right-side">
//           <div className="cta">
//             <img src={x} className="logo" alt="logo" />
//             <h1>
//               Super-charge your design workflow now and start collaborating like
//               a beast
//             </h1>
//             <div>
//               <h6 className="join-head">Join DesignHub today.</h6>
//               <button
//                 className="auth0-redirect-btn"
//                 onClick={() => loginWithRedirect({})}
//               >
//                 Create an account or Sign in
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
