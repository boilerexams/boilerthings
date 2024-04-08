import React, { useEffect } from 'react';
import { Card, Button, Navbar, Alignment } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import './App.css';

function App() {
  useEffect(() => {
    // Set page title
    document.title = "Boilerthings.com";
    // Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.content = "Websites for Boilermakers, by Boilermakers";
    }
    // Set favicon to a black square emoji
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='black'/></svg>";
    }
  }, []);

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
