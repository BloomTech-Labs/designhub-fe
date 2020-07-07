import React, {useState} from 'react';
import Layout from '../../common/Layout';
import ProfileTabs from './ProfileTabs';
// import { useParams } from 'react-router-dom';
import './styles.scss';

export default function Profile(props, users) {
  // const { username, avatar} = useParams();
  const [currentTab, setCurrentTab] = useState({currentTab: tabIndex})
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
              // src={avatar}
              className="avatar"
              alt="avatar"
            />

            <div className="user-info">
              <h1 className="userFLname">Erik Lambert</h1>
              <h2 className="username">eriklambert</h2>
              <p className="bio">
                An About section is the part of your website where you tell
                visitors and potential customers who you are and what you can do
                for them.
              </p>
              <div className="user-info-location-website">
                <div className="location-website-flex">
                  <p className="location">Austin, TX</p>
                </div>

                <div className="location-website-flex">
                  <a
                    href="www.eriklambert.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website"
                  >
                    eriklambert.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="user-data-container">
            <div className="user-data">
              <div className="count-flex">
                <h6>Projects</h6>
                <p>12</p>
              </div>

              <div className="count-flex">
                <h6>Followers</h6>
                <p>37</p>
              </div>
              <div className="count-flex">
                <h6>Following</h6>
                <p>1</p>
              </div>
              <div className="count-flex">
                <h6>Starred</h6>
                <p>143</p>
              </div>
            </div>
            <div className="teams-container">
              <div className="teams">
                <h6>Teams</h6>
                <p></p>
              </div>

              <div>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
                <ProfileTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          projects={props.projects}
          recentProjects={props.recentProjects}
          followers={props.followersTab}
          following={props.followingTab}
          starred={props.starred}
          isFollowed={props.isFollowed}
          getIsFollowed={props.getIsFollowed}
          followUser={followUser}
          unfollowUser={unfollowUser}
          activeUser={props.activeUser}
          params={props.match.params}
          isProjectsLoading={props.isProjectsLoading}
          acceptedCollabInvites={acceptedCollabInvites} //accepted collab invites  
          getSingleProject={props.getSingleProject}   //collab
          singleProject={props.singleProject} //collab     
          acceptedCollabProjects={acceptedCollabProjects}
          userData={props.userData}
          collabUsers={users}
        />
      </div>
    </Layout>
  );
}
