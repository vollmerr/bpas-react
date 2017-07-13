import React from 'react';
import PropTypes from 'prop-types';

import {
  UtilityLinks,
  UtilityLogo,
  UtilityTitle,
} from 'bpas-react';

import styles from './style.scss';


/** Renders the Utility Header */
function UtilityHeader({
  title,
}) {
  return (
    <div className={styles.utilityHeader}>
      <UtilityLogo />
      <UtilityTitle title={title} />
      <UtilityLinks />
    </div>
  );
}

UtilityHeader.propTypes = {
  /** title to pass to UtilityLogo */
  title: PropTypes.string.isRequired,
};

export default UtilityHeader;
