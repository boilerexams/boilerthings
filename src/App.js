import React from 'react';
import { Card, Button, Navbar, Alignment, Classes } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import './App.css'; // Make sure to create this CSS file in your src directory

function App() {
  return (
    <div className="App">
      <Navbar className="bp3-dark custom-navbar">
        <Navbar.Group align={Alignment.LEFT} className="navbar-header">
          <h1 className="main-title">Boilerthings.com</h1>
          <p className="description">Websites for Boilermakers, by Boilermakers</p>
        </Navbar.Group>
      </Navbar>

      <div className="content">
        <Card className="custom-card" interactive={true}>
          <h2>Study</h2>
          <Button className="custom-button" icon="arrow-right" text="Boilerexams.com" onClick={() => window.open('https://boilerexams.com', '_blank')} />
          <Button className="custom-button" icon="arrow-right" text="CHENFLIX" onClick={() => window.open('https://chenflix.vercel.app', '_blank')} />
        </Card>

        <Card className="custom-card" interactive={true}>
          <h2>Travel</h2>
          <Button className="custom-button" icon="arrow-right" text="BoilerBookings.com" onClick={() => window.open('https://boilerbookings.com', '_blank')} />
          <Button className="custom-button" icon="arrow-right" text="PurduePool.com" onClick={() => window.open('https://purduepool.com', '_blank')} />
        </Card>

        <Card className="custom-card" interactive={true}>
          <h2>Classes</h2>
          <Button className="custom-button" icon="arrow-right" text="BoilerClasses.com" onClick={() => window.open('https://boilerclasses.com', '_blank')} />
          <Button className="custom-button" icon="arrow-right" text="BoilerGrades.com" onClick={() => window.open('https://boilergrades.com', '_blank')} />
        </Card>

        <Card className="custom-card" interactive={true}>
          <h2>Contact</h2>
          <p>Email <a href="mailto:team@boilerbookings.com" className="email-link">team@boilerbookings.com</a> if you'd like to put something on here and we will decide if you're worthy enough...</p>
        </Card>
      </div>

      <footer className="bp3-navbar bp3-dark custom-footer">
        <p>UConn sucks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;