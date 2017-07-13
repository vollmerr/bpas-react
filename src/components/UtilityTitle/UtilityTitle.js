import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

/** Title for Utility Header  */
function UtilityTitle({ 
  title,
}) {
  return (
    <div className={styles.title}>{title}</div>
  )
}

UtilityTitle.propTypes = {
  /** Title for navigation */
  title: PropTypes.string.isRequired,
};

export default UtilityTitle;
