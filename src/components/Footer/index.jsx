import React from 'react';
import logoGithub from '../../assets/images/logo-github.svg';
import logoLinkedin from '../../assets/images/logo-linkedin.svg';
import './footer.scss';

const Footer = () => (
  <footer>
    <a
      href="https://github.com/erasmogarcia84/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={logoGithub} alt="Github logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/erasmogarciaglez/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={logoLinkedin} alt="Linkedin logo" />
    </a>
  </footer>
);

export default Footer;
