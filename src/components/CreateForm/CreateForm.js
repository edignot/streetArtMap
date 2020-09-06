import React, { useState } from 'react'
import Input from '../../UIComponents/Input/Input'
import Button from '../../UIComponents/Button/Button'
import './CreateForm.css'

const CreateForm = ({ images, setPostImage }) => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [title, setTitle] = useState('')
  const [artistName, setArtistName] = useState('')
  const [artistInstagram, setArtistInstagram] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')

  const getLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      alert('Geo Location is not supported by your device')
    }
  }

  const showPosition = (position) => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    }
    setCurrentLocation(location)
    return location
  }

  const artCreateHandler = async (e) => {
    e.preventDefault()
    await getLocation()
  }

  const mappedImages = images.map((image) => {
    return (
      <img src={image} alt='new-shoot' className='form-image' key={image} />
    )
  })

  return (
    <>
      <section className='form-images-container'>{mappedImages}</section>
      <Button onClick={() => setPostImage(false)}>ADD MORE PHOTOS</Button>
      <form onSubmit={artCreateHandler} className='create-art-form'>
        <Input
          className='create-art-input'
          type='text'
          placeholder='art title'
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
        <Input
          className='create-art-input'
          type='text'
          placeholder='artist name'
          value={artistName}
          onInput={(e) => setArtistName(e.target.value)}
        />
        <Input
          className='create-art-input'
          type='text'
          placeholder='artist instagram'
          value={artistInstagram}
          onInput={(e) => setArtistInstagram(e.target.value)}
        />
        <Input
          className='create-art-input'
          type='text'
          placeholder='address'
          value={address}
          onInput={(e) => setAddress(e.target.value)}
        />
        <Input
          className='create-art-input'
          type='text'
          element='textarea'
          placeholder='description'
          rows='5'
          value={description}
          onInput={(e) => setDescription(e.target.value)}
        />
        <Button type='submit'>POST ART</Button>
        {/* <p>
          {currentLocation
            ? `${currentLocation.latitude}, ${currentLocation.longitude}`
            : 'no location'}
        </p> */}
      </form>
    </>
  )
}

export default CreateForm
