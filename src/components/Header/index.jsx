import React from 'react';

const Header = () => (
  <header>
    <div className="header__image">
      <div className="header__text">
        <h1>Glofox Beers</h1>
        <p>
          A Punk API demo for{' '}
          <a target="_blank" rel="noreferrer" href="https://www.glofox.com/">
            Glofox
          </a>
          , made with{' '}
          <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
            React
          </a>
          {' & '}
          <a target="_blank" rel="noreferrer" href="https://redux.js.org/">
            Redux
          </a>
          .
        </p>
      </div>
    </div>
  </header>
);

export default Header;
