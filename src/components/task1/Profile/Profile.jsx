import css from 'components/task1/Profile/Profile.module.css';

export const Profile = ({
  children
}) => {
  return (
    <div className={css.profile}>
        {children}
    </div>
  );
};
