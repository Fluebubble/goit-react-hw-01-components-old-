import css from 'components/task3/Friend/Friend.module.css';
import PropTypes from 'prop-types';

export const Friend = ({ isOnline, avatar, name } ) => {
  return (
    <>
      <span className={isOnline ? (css.statusOffline) : (css.statusOnline)}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  )
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}