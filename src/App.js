import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.jpeg';
import Section from "./components/Section/Section";
import List from "./components/List/List";
import GridItem from "./components/GridItem/GridItem";
import Navigation from "./components/Navigation/Navigation";

function App() {
  useEffect(() => {
    fetch('https://devtalks-events-ad2nk4diqq-ew.a.run.app/events')
      .then(data => data.json())
      .then(data => console.log('data', data));
  }, []);
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="grid">
          <div className="subscribeYoutube">
            <p>Due to COVID-19 outbreak we have moved all of our meetups online.<br /> Please subscribe to our YouTube channel for updates and sessions</p>
            <a href="https://www.youtube.com/channel/UCebZQVd6GoLtf6Y1uGlqKcQ" target="_blank"><i className="fab fa-youtube"></i> Devtalks India</a>
          </div>
          <Section>
            <h4>Past Events</h4>
            <List title="Live React Coding" description="on 16th May 2020 by Sarab" />
            <List title="Git Basics+ and Docker" description="on 18th April 2020 by Jagdeep" />
            <List title="Git Basics" description="on 11th April 2020 by Tarun" />
          </Section>
          <Section>
            <h4>Upcoming Events</h4>
            <List title="Redux Intro" description="on 23th May 2020 by Tarun" />
            <List title="Getting Started with Flutter" description="on 30th May 2020 by Abhishek" />
            <List title="Swift App development" description="on 06th June 2020 by Yatin" />
          </Section>
          <Section>
            <h4>Social Accounts</h4>
            <div className="socialIconContainers">
              <GridItem className="border" icon="fa-youtube" link="https://www.youtube.com/channel/UCebZQVd6GoLtf6Y1uGlqKcQ" />
              <GridItem icon="fab fa-twitter" link="https://twitter.com/DevtalksIndia" />
              <GridItem className="border" icon="fab fa-slack" link="https://devtalks01.slack.com/" />
              <GridItem icon="fab fa-github" link="https://github.com/Devtalks-India" />
            </div>

          </Section>
        </div>
        {/*<a
          className="App-link"
          href="https://www.meetup.com/DevTalks-India/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk!
        </a>*/}
      </header>
    </div>
  );
}

export default App;
