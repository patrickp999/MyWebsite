import React from "react";
import PropTypes from "prop-types";
import { Head } from "@components";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={(data) => (
        <div id='root'>
          <Head metadata={data.site.siteMetadata} />
          <div className='container'>{children}</div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
