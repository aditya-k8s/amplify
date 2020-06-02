import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import User from "../../components/User/User";
import './speakers.css';

const speakers = [
  {
    id: 8,
    name: 'Yatin M.',
    twitter: 'https://twitter.com/255_255_255_255',
    linkedin: 'https://www.linkedin.com/in/yatinpy/',
    github: 'https://github.com/y471n',
    personal: 'http://yatin.space',
    image: 'https://media-exp1.licdn.com/dms/image/C5603AQFjXKg-NUTvEw/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=qZR6geKfuxnETKpJ0daRUyFQ_BjdfhFAD5itH7E7CTs',
    pastEvent: {
      title: 'Getting started with ActionheroJs',
      date: '14th June 2020',
      link: 'https://www.meetup.com/DevTalks-India/events/270827408/'
    },
  },
  {
    id: 1,
    name: 'Abhishek Garg',
    twitter: 'https://twitter.com/iamimpatience',
    linkedin: '',
    github: '',
    personal: '',
    image: 'https://pbs.twimg.com/profile_images/956175302043906048/7nsuD1ml_400x400.jpg',
    pastEvent: {
      title: 'Getting started with Flutter',
      date: '30th May 2020',
      link: ''
    },
  },
  {
    id: 6,
    name: 'Tarun Nagpal',
    twitter: 'https://twitter.com/tarunnagpal78',
    linkedin: '',
    github: '',
    personal: '',
    image: 'https://pbs.twimg.com/profile_images/454562424360681473/Tve5mLrO_400x400.jpeg',
    pastEvent: {
      title: 'Getting started with Redux',
      date: '23th May 2020',
      link: ''
    },
  },
  {
    id: 7,
    name: 'Sarabjeet Singh',
    twitter: 'https://twitter.com/sarabs3',
    linkedin: '',
    github: 'https://github.com/sarabs3',
    personal: '',
    image: 'https://pbs.twimg.com/profile_images/1176864218814877697/t-XZQ94b_400x400.jpg',
    pastEvent: {
      title: 'Live React Coding',
      date: '16th May 2020',
      link: ''
    },
  },
  {
    id: 5,
    name: 'Jagdeep Singh',
    twitter: 'https://twitter.com/jdecode',
    linkedin: '',
    github: '',
    personal: '',
    image: 'https://pbs.twimg.com/profile_images/615106464785391616/cJajHefE_400x400.jpg'
  },
  {
    id: 3,
    name: 'Varun Sahdev',
    twitter: '',
    linkedin: '',
    github: '',
    personal: '',
    image: 'https://media-exp1.licdn.com/dms/image/C5103AQESv44NTaaHOA/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=y3Y8kB3QQMhCUmPdw6IlvtiAFs12NgqbG_y9zBm_neQ'
  },
  {
    id: 2,
    name: 'Abhineet Tandon',
    twitter: 'https://twitter.com/abhineet_tandon',
    linkedin: '',
    github: '',
    personal: '',
    image: 'https://pbs.twimg.com/profile_images/580945343975567360/YndgAQeb_400x400.jpg'
  },
  {
    id: 4,
    name: 'Rishabh Jain',
    twitter: 'https://twitter.com/CodeRishabh',
    linkedin: '',
    github: '',
    personal: '',
    image: 'https://pbs.twimg.com/profile_images/515887073392222210/yRj2duXw_400x400.jpeg'
  },
];

const Speakers = () => {
  return (
      <div>
        <Navigation withLogo />
        <div className="speakers">
          {speakers.map((speaker) => <User user={speaker} key={speaker.id} />)}
        </div>
      </div>
  );
};

export default Speakers;
