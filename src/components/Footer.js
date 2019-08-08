import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FaTwitter, FaMicrophoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
  <StaticQuery
      query={graphql`
        query footerQuery {
          site {
            siteMetadata {
              author
            }
          }
        }
      `}
      render={data => (
      <footer className="site-footer bg-gray-900 p-8 w-full">
        <div className="max-w-6xl m-auto clearfix">
        <p className="text-sm text-gray-600 float-left">© 2019 {data.site.siteMetadata.author} | Built with Gatsby</p>
        <div className="float-right text-sm flex flex-row text-xl">
          <a className="text-gray-600 mr-4" href="https://twitter.com/scottbolinger"><FaTwitter /> </a> <a className="text-gray-600" href="https://theproductbusiness.com/podcast"><FaMicrophoneAlt /></a>
        </div>
        </div>
      </footer>
      )}
    />
  )
};

export default Footer;
