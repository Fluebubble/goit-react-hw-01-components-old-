import css from 'components/task3/FriendList/FriendList.module.css';
import { Friend } from '../Friend/Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <Friend avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
};
