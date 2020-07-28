import React, {useState} from 'react';
import Layout from '../../common/Layout';
import ProfileTabs from './ProfileTabs';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '../../utilities/auth-spa';
import { useHistory } from 'react-router';

import './styles.scss';

import { useQuery } from '@apollo/react-hooks';
import {GET_USER_BY_ID_QUERY, GET_ALL_PROJECTS_QUERY, GET_ALL_USERS_QUERY} from '../../graphql';


export default function Profile(props, users) {
  // const { username, avatar} = useParams();
  const history = useHistory();
  const { id } = useParams();
  const { user } = useAuth0();

  const { data: projectData } = useQuery(GET_ALL_PROJECTS_QUERY, {
    variables: {id: id},
    });

  const { data: activeUserData } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: {id: user?.sub},
    });
    const { data: allUsers } = useQuery(GET_ALL_USERS_QUERY);

    console.log('AUD:', activeUserData)
    console.log('AUPROJ:', projectData)

    // const { data: activeUserFollowers } = useQuery(GET_USER_BY_ID_QUERY, {
    //   variables: {id: user?.sub},
    //   });

  // const { data: userProfile } = useQuery(GET_USER_BY_ID_QUERY, {
  //   variables: {id: userProjects?.project?.userId},
  //   });

  // console.log(`USER PROFILE ${userProjects}`)
    // console.log(userProjects);

  const [currentTab, setCurrentTab] = useState(1)
  const followUser = null
  const unfollowUser = null
  const acceptedCollabInvites = null
  const acceptedCollabProjects = null
  return (
    <Layout>
      <div className="user-profile-container">
        <div className="user-header">
          <div className="user-left-content">
            <img
              src={activeUserData?.user.avatar}
              className="avatar"
              alt="avatar"
            />

            <div className="user-info">
              <h1 className="userFLname">{activeUserData?.user.firstName && activeUserData.user.lastName}</h1>
              <h2 className="username">{activeUserData?.user.username}</h2>
              <p className="bio">
              {activeUserData?.user.bio}
              </p>
              <div className="user-info-location-website">
                <div className="location-website-flex">
                  <p className="location">{activeUserData?.location}</p>
                </div>

                <div className="location-website-flex">
                  <a
                    href="www.eriklambert.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website"
                  >
                    {activeUserData?.user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="user-data-container">
            <div className="user-data">
              <div className="count-flex">
                <h6>Projects</h6>
                <p>{activeUserData?.user.projects.length}</p>

              </div>

              <div className="count-flex">
                <h6>Followers</h6>
                <p>{activeUserData?.user.followers.length}</p>
              </div>
              <div className="count-flex">
                <h6>Following</h6>
                <p>{activeUserData?.user.followers.length}</p>
              </div>
              <div className="count-flex">
                <h6>Starred</h6>
                <p>{activeUserData?.user.followers.length}</p>
              </div>
            </div>
            <div className="teams-container">
              <div className="teams">
                <h6>Teams</h6>
                <p>{activeUserData?.user.followers.length}</p>
              </div>

              <button onClick={() => history.push('/settings')}
                  to={`/settings`} className="edit-profile-btn">Edit Profile</button>
              <div>
              </div>
            </div>
          </div>
        </div>
                <ProfileTabs
          // userProfile={userProfile}
          users={allUsers}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          projects={projectData?.projects}
          // recentProjects={props.recentProjects}
          followers={activeUserData?.user.followers}
          following={activeUserData?.followers}
          starred={activeUserData?.starred}
          // isFollowed={props.isFollowed}
          // getIsFollowed={props.getIsFollowed}
          followUser={followUser}
          unfollowUser={unfollowUser}
          activeUser={activeUserData?.user}
          // params={props.match.params}
          // isProjectsLoading={props.isProjectsLoading}
          acceptedCollabInvites={acceptedCollabInvites} //accepted collab invites  
          // getSingleProject={props.getSingleProject}   //collab
          // singleProject={props.singleProject} //collab     
          acceptedCollabProjects={acceptedCollabProjects}
          // userData={props.userData}
          collabUsers={users}
        />
      </div>
    </Layout>
  );
}
