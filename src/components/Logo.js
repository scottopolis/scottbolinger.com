import React from 'react';
import { Link } from 'gatsby';
import siteLogo from '../images/logo.png';

const Logo = ({ data }) => (
  <Link to="/" className="h-10 overflow-hidden block" rel="home" itemProp="url">
    <img
      src={siteLogo}
      alt="Logo"
      width="150"
      height="150"
      className="h-full w-auto block"
      alt={data.site.siteMetadata.title}
      itemProp="logo"
    />
  </Link>
);

export default Logo;
