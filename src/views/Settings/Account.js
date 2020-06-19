import React from 'react';
import Layout from '../../common/Layout';
import './styles.scss';

export default function Account() {
  return (
    <Layout>
    <div className="account-form-container">
      <form className="account-form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            id="firstName"
            name="firstName"
            type="text"
            value="{firstName}"
            placeholder="i.e. Erik"
            maxLength='40'
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            id="lastName"
            name="lastName"
            type="text"
            value="{lastName}"
            placeholder="i.e. Lambert"
            maxLength="40"
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            value="{username}"
            placeholder="i.e. eriklambert"
            maxLength="80"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            name="email"
            type="text"
            value="{email}"
            readOnly
            placeholder="i.e. eriklambert@designhubx.com"
            maxLength="80"
          />
        </div>

        <label htmlFor="bio">Bio</label>
        <textarea
          cols="30"
          rows="4"
          name="bio"
          id="bio"
          value="{bio}"
          placeholder="Describe yourself! This will appear on your profile in your bio!"
          maxLength="240"
        />
        
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value="{location}"
          maxLength="180"
          placeholder="i.e. Austin, TX"
        />
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value="{website}"
          placeholder="i.e. https://eriklambert.ux"
        />
        
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
    </Layout>
  );
}
