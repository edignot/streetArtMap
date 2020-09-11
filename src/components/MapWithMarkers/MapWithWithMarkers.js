import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectArt } from '../../actions/userAction'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import Modal from '../../UIComponents/Modal/Modal'
import Button from '../../UIComponents/Button/Button'
import { FaHeart, FaRegHeart, FaSearch, FaRoute } from 'react-icons/fa'
import { FaMapMarkerAlt, FaMapPin } from 'react-icons/fa'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'
import './MapWithMarkers.css'

const MapWithMarkers = ({ setRoute, formMap, paintingMap, zoom, lat, lng }) => {
  const dispatch = useDispatch()

  const selectedId = useSelector((state) => state.session.selectedArt)
  const selectedArt = useSelector((state) =>
    state.arts.find((art) => art.id === selectedId)
  )
  // const [selectedArt, setSelectedArt] = useState(null)
  const [geolocationSupported, setGeolocationSupported] = useState(true)
  const [myLocation, setMyLocation] = useState({
    latitude: 39.744137,
    longitude: -104.95005,
  })

  const [viewport, setViewport] = useState({
    latitude: lat || myLocation.latitude,
    longitude: lng || myLocation.longitude,
    zoom: zoom || 10,
    width: '100%',
    height: '100%',
  })

  const getLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      setGeolocationSupported(false)
    }
  }

  const showPosition = (position) => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    }
    setMyLocation(location)
    return location
  }

  useEffect(() => {
    getLocation()
    //eslint-disable-next-line
  }, [myLocation])

  useEffect(() => {
    selectedArt &&
      setViewport({
        latitude: +selectedArt.latitude,
        longitude: +selectedArt.longitude,
        zoom: 10,
        width: '100%',
        height: '100%',
      })
  }, [selectedArt])

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        dispatch(selectArt(''))
        // setSelectedArt(null)
      }

      if (
        e.target.className &&
        typeof e.target.className.includes !== 'undefined' &&
        (!e.target.className.includes('active') ||
          !e.target.className.includes('active'))
      ) {
        dispatch(selectArt(''))
        // setSelectedArt(null)
      }
    }
    window.addEventListener('keydown', listener)
    window.addEventListener('click', listener)
  }, [])

  const markers = useSelector((state) => state.arts).map((art) => (
    <Marker
      key={art.id}
      latitude={+art.latitude}
      longitude={+art.longitude}
      offsetLeft={-20}
      offsetTop={-20}
    >
      <FaMapPin
        id={art.id}
        className='art-location-icon'
        onClick={(e) => {
          e.preventDefault()
          dispatch(selectArt(art.id))
          // setSelectedArt(art)
          e.target.classList.add('active')
        }}
      />
    </Marker>
  ))

  const myMarker = (
    <Marker latitude={myLocation.latitude} longitude={myLocation.longitude}>
      <FaMapMarkerAlt className='my-location-icon' />
    </Marker>
  )

  return (
    <section className='markers-map-container'>
      {/* {!formMap && !paintingMap && (
        <section className='toggle-maps-btn' onClick={() => setRoute(true)}>
          <FaRoute />
          <p className='route'>routes</p>
        </section>
      )} */}
      <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/edignot/ckemah34j0amm19oe5hjne20p'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        className='react-map-container'
      >
        <NavigationControl className='navigation-control' />
        {!formMap && markers}
        {myMarker}
        {selectedArt && (
          <Popup
            latitude={+selectedArt.latitude}
            longitude={+selectedArt.longitude}
            closeOnClick={false}
            closeButton={false}
            isOpen={true}
          >
            <section className='map-image-carousel-container'>
              <ImageCarousel images={selectedArt.images} height={200} />
            </section>
            <section className='map-art-details-container'>
              <section className='map-art-icons-wrapper'>
                {selectedArt.favorite ? (
                  <FaHeart className='map-art-icon' />
                ) : (
                  <FaRegHeart className='map-art-icon' />
                )}
                {selectedArt.visited ? (
                  <RiCheckboxCircleLine className='map-art-icon' />
                ) : (
                  <RiCheckboxBlankCircleLine className='map-art-icon' />
                )}
                <FaSearch className='map-art-icon' />
              </section>

              <p className='map-artist-name'>{selectedArt.artist_name}</p>
            </section>
          </Popup>
        )}
      </ReactMapGL>
      <Modal show={!geolocationSupported}>
        <p className='modal-message error-message'>
          Geolocation is not supported on your device...
        </p>
        <Button styling='padding' onClick={() => setGeolocationSupported(true)}>
          back
        </Button>
      </Modal>
    </section>
  )
}

export default MapWithMarkers
