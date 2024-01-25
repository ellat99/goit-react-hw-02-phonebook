import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <>
        <h2 className={styles.title}>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
