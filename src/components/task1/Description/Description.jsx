import css from 'components/task1/Description/Description.module.css';
import PropTypes from 'prop-types';

export const Description = ({ user: { username, tag, location, avatar } }) => {
  return (
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt={username} />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
