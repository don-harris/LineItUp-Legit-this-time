import React from 'react'
import pData from '../../../profileData.json'

const ProfilePage = (props) => {
  return (
    <div>
      {pData.profile.map((profile) => {
        return (
          <div className="card">
            <div className="card-image">
              <figure className="billImage">
                <img src={profile.image} alt="Placeholder image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">{profile.firstName} {profile.lastName}</p>
                  <div className="profileInfo">
                    <p className="subtitle is-6 ">email: {profile.email}</p>
                    <br/>
                    <p className="subtitle is-6 ">age: {profile.Age}</p>
                    <br/>
                    <p className="subtitle is-6 ">Friends: {profile.FriendsList}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )
      }
      )}
    </div>
  )
}

export default ProfilePage
