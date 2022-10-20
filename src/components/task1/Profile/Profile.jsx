import css from 'components/task1/Profile/Profile.module.css';
import PropTypes from 'prop-types'

export const Profile = ({
  children
}) => {
  return (
    <div className={css.profile}>
        {children}
    </div>
  );
};

Profile.propTypes = {
  children: PropTypes.node.isRequired,
}