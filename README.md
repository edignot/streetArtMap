# Street | ART | Walk - Frontend Service 

[![Build Status](https://travis-ci.org/StreetArtMap/streetArtMap.svg?branch=master)](https://travis-ci.org/StreetArtMap/streetArtMap)

## https://streetartwalk.netlify.app/ 
Login: username: username, password: password

## Introduction

[Street | ART | Walk](https://streetartwalk.netlify.app/ ) is an application that allows a user to search street art locations and information using maps. Leveraging Progressive Web Apps technology, we have designed the application to allow for a user to upload images of street art they find and allow them to pin their location, and any pertinent details like the artist name, artist instagram handle, and a brief description. This project attempts to address the lack of resources for exploring street art in an organized manner. This app allows the artist to post and promote their work, including a description of the artwork and their instagram link in order to facilitate user artist discovery. 

This application was bootstrapped using Create-React-App with Redux and Hooks. We utilized GraphQL and the Apollo Client to handle our APIs. We employed static asset caching by using Progressive Web Apps technologies. The application was deployed using TravisCI and Netlify. 

[Deployed link](https://streetartwalk.netlify.app/)

## Application Demo: 
![Street Art Walk](https://res.cloudinary.com/ds6dxgvxo/image/upload/v1600219353/streetartwalk1_u8uzdd.jpg)

![Street Art Walk](https://res.cloudinary.com/ds6dxgvxo/image/upload/v1600219328/streetartwalk2_pajf7z.jpg)

#### App presentation video:
[![Video App Presentation](https://res.cloudinary.com/ds6dxgvxo/image/upload/v1600546863/Screen_Shot_2020-09-19_at_14.20.04_nilfeq.jpg)](https://vimeo.com/459573196)

#### iPhone demo video:
[![Iphone demo](https://res.cloudinary.com/ds6dxgvxo/image/upload/v1600216366/streetartwalkiphone_hiowh1.jpg)](https://vimeo.com/458368989)

#### iPad demo video:
[![Ipad demo](https://res.cloudinary.com/ds6dxgvxo/image/upload/v1600216366/streetartwalkipad_jpcjdu.jpg)](https://vimeo.com/458365408)

## Tech Stack

- JavaScript
- React with Hooks
- React Router
- Redux
- GraphQL 
- Apollo Client 
- CSS3
- Progressive Web Apps
- React Testing Library
- Jest
- TravisCI
- Netlify 
- Lighthouse 
- Mapbox GL JS
- Cloudinary

## Main Files

### React Components
- [Page Components](https://github.com/StreetArtMap/streetArtMap/tree/master/src/pages) | Each Component has it's own test and CSS styling file
  - e.g. [Camera Page](https://github.com/StreetArtMap/streetArtMap/tree/master/src/pages/CameraPage)
- [Components](https://github.com/StreetArtMap/streetArtMap/tree/master/src/components) | Each Component has it's own test and CSS styling file
  - e.g. [App Component](https://github.com/StreetArtMap/streetArtMap/blob/master/src/components/App/App.js)
    - [App Component Unit and Integration Test File](https://github.com/StreetArtMap/streetArtMap/blob/master/src/components/App/App.test.js)
- [Reusable UI Components](https://github.com/StreetArtMap/streetArtMap/tree/master/src/UIComponents) | Each UI Component has it's own css file
  - e.g. [Loading Spinner Reusable UI Component](https://github.com/StreetArtMap/streetArtMap/tree/master/src/UIComponents/LoadingSpinner)
- [Redux Setup](https://github.com/StreetArtMap/streetArtMap/blob/master/src/index.js)
### Redux
  - [Root Reducer](https://github.com/StreetArtMap/streetArtMap/blob/master/src/reducers/index.js)
    - e.g. [Art Reducer](https://github.com/StreetArtMap/streetArtMap/blob/master/src/reducers/artsReducer.js)
  - [Reducers Test File](https://github.com/StreetArtMap/streetArtMap/blob/master/src/reducers/reducers.test.js)
  - [Actions](https://github.com/StreetArtMap/streetArtMap/blob/master/src/actions/actions.js)
  - [Actions Test File](https://github.com/StreetArtMap/streetArtMap/blob/master/src/actions/actions.test.js)
### PWA
  - [Service Workers](https://github.com/StreetArtMap/streetArtMap/blob/master/public/serviceworker.js)
### GraphQL with Apollo Client
  - [Query example](https://github.com/StreetArtMap/streetArtMap/blob/master/src/pages/LoginPage/LoginPage.js)
  ```
  import { useQuery, gql } from '@apollo/client'

  ...

  const ART_FETCH = gql`
    query {
      streetArts {
        id
        latitude
        longitude
        address
        city
        state
        zipcode
        imageUrls
        description
        artistName
        artName
        instagramHandle
        favorite
        visited
        createdAt
        updatedAt
        userId
      }
    }
  `
  const { loading, error, data } = useQuery(ART_FETCH)
  ```
  - [Mutation Example](https://github.com/StreetArtMap/streetArtMap/blob/master/src/components/CreateForm/CreateForm.js)
  ```
  import { useMutation, gql } from '@apollo/client'

  ...

  const ART_POST = gql`
    mutation createStreetArt(
      $userId: Int!
      $latitude: String!
      $longitude: String!
      $address: String!
      $city: String!
      $state: String!
      $zipcode: String!
      $description: String!
      $artistName: String!
      $artName: String!
      $instagramHandle: String!
      $imageUrls: String!
    ) {
      createStreetArt(
        input: {
          userId: $userId
          latitude: $latitude
          longitude: $longitude
          address: $address
          city: $city
          state: $state
          zipcode: $zipcode
          description: $description
          artistName: $artistName
          artName: $artName
          instagramHandle: $instagramHandle
          imageUrls: $imageUrls
        }
      ) {
        id
        latitude
        longitude
        address
        city
        state
        zipcode
        imageUrls
        description
        artistName
        artName
        instagramHandle
        favorite
        visited
        createdAt
        updatedAt
        userId
      }
    }
  `
  const [createStreetArt, { data, loading, error }] = useMutation(ART_POST)
  ```

## Development Implementation Instructions

First you'll need these installed:

- clone repo 
- cd into repo
- run npm install 
- npm start (begins the server locally)

## Contributors <a name="team"></a>

  ### Frontend Team
   ### [Edita Ignot](https://github.com/edignot) | [MY COMMITS](https://github.com/StreetArtMap/streetArtMap/commits/master?after=03485ade34c92e1eba5047ce69f0473778166856+34&author=edignot&branch=master)

   [Carlos Flores](https://github.com/carflor)

  ### Backend Team

More Details: [Street Art Walk Backend](https://github.com/StreetArtMap/street_art_backend)

   [Stella Bonnie](https://github.com/stellakunzang)

   [Michael Gallup](https://github.com/Gallup93)

   [Jesse Gietzen](https://github.com/elguapogordo)

  ### Project Managers

   [Megan McMahon](https://github.com/memcmahon)

   [Robbie Jaeger](https://github.com/robbiejaeger)

