import React from 'react';
import Layout from '../../common/Layout';
import './styles.scss';

export default function LinkedProfiles() {
  return (
    <Layout>
    <div className="linked-form-container">
      <form className="linked-form">
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input
            required
            id="url"
            name="url"
            type="text"
            value="{url}"
            placeholder="http://www.twiter.com/eriklambert"
            maxLength='100'
          />
        </div>
        <div>
          <label htmlFor="dribble">Dribble</label>
          <input
            required
            id="url"
            name="url"
            type="text"
            value="{url}"
            placeholder="http://www.dribble.com/eriklambert"
            maxLength='100'
          />
        </div>
        <div>
          <label htmlFor="instagram">Instagram</label>
          <input
            required
            id="url"
            name="url"
            type="text"
            value="{url}"
            placeholder="http://www.instagram.com/eriklambert"
            maxLength='100'
          />
        </div>
        
        <button>Save</button>
      </form>
    </div>
    </Layout>
  );
}
