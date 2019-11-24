import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
      {/* TODO: place meta for facebook, twitter, and apple */}
    </title>
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
