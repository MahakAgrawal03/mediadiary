import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from "../LogoSearch/LogoSearch"
import ProfileCard from '../ProfileCard'

function ProfileSide() {
  return (
    <div className="ProfileSide">
    <LogoSearch />
    <ProfileCard location="homepage"/>
    <FollowersCard/>
 </div>
  )
}

export default ProfileSide