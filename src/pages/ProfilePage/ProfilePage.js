import React from 'react'
import { useSelector } from 'react-redux'
import { DEFAULT_IMG_URL, PROFILE_IMG_PLACEHOLDER } from '../../constants'
import { FaBookOpen, FaBookmark } from 'react-icons/fa'
import './ProfilePage.css'

const ProfilePage = () => {
  const addDefaultImageSrc = (e) => {
    e.target.src = DEFAULT_IMG_URL
  }
  const arts = useSelector((state) => state.arts).map((art) => (
    <section className='photo-wrapper'>
      <img
        src={art.images[0] || DEFAULT_IMG_URL}
        alt='street art'
        onError={addDefaultImageSrc}
        className='art-tile'
      />
    </section>
  ))

  return (
    <section className='profile-container'>
      <section className='user-details-container'>
        <section className='user-image'>
          <img
            src={PROFILE_IMG_PLACEHOLDER}
            alt='human-user'
            className='user-profile-image'
          />
        </section>
        <section className='user-stats'>
          <p className='username'>UserName Here</p>
          <p className='user-image-count'>10 Images Saved</p>
          <p className='user-image-count'>55 Posts</p>
          <section className='button-container'>
            <section className='all-button'>
              <FaBookOpen className='art-icon' title='collection-icon' />
            </section>
            <section className='saved-button'>
              <FaBookmark className='art-icon' title='bookmark-icon' />
            </section>
          </section>
        </section>
      </section>
      <section className='photo-container'>{arts}</section>
    </section>
  )
}

export default ProfilePage
