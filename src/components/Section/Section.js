import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Choose our level below &#8595;</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
