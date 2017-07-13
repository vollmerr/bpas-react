import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Navigation = ({components}) => {
  return (
    <ul className={styles.navigation}>
      {
        components.map( name => {
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
