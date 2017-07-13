import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

/** Links for Utility Header 
 *  - Maps over links object passed in
 */
function UtilityLinks({ 
  links = [{text: 'Contact Us', href: '/help'}],
}) {
  return (
    <div>
      <ul className={styles.links}>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} className={styles.link}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

UtilityLinks.propTypes = {
  /** Links object to map over */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

export default UtilityLinks;
