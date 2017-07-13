import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/Ca-Gov-Logo-Gold.svg';
import styles from './style.scss';

/** Logo for Utility Header */
function UtilityLogo({ 
  href = "http://www.ca.gov/",
  src = logo,
  alt = "Ca Gov Logo",
}) {
  return (
    <div>
      <a href={href}>
        <img 
          src={src} 
          alt={alt}
          className={styles.logo}
        />
      </a>
    </div>
  )
}

UtilityLogo.propTypes = {
  /** href for logo image link */
  href: PropTypes.string,

  /** src for logo image */
  src: PropTypes.string,

  /** alt text for logo image */
  alt: PropTypes.string
};


export default UtilityLogo;
