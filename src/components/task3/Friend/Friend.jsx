import css from 'components/task3/Friend/Friend.module.css';

export const Friend = ({ isOnline, avatar, name } ) => {
  console.log(isOnline, 1)
  return (
    <>
      <span className={isOnline ? (css.statusOffline) : (css.statusOnline)}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
  //   </li>;
};
