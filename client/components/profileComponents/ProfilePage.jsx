import React from 'react'
import pData from '../../../profileData.json'

const ProfilePage = (props) => {
  return (
    <div>
      {pData.profile.map((profile) => {
        return (
          <div className="profile">
            <h2>First name: {profile.firstName}</h2>
            <h2>Last name: {profile.lastName}</h2>
          </div>
        )
      }
      )}
    </div>
  )
}

export default ProfilePage
