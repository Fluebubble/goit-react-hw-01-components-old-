import { Profile } from 'components/task1/Profile/Profile';
import { Description } from 'components/task1/Description/Description';
import 'components/task1/styles.css';
import user from 'components/task1/user.json';
import { Stats } from 'components/task1/Stats/Stats';
import { Statistics } from 'components/task2/Statistics/Statistics';
import data from 'components/task2/data.json';
import { FriendList } from 'components/task3/FriendList/FriendList';
import friends from 'components/task3/friends.json';
import transactions from 'components/task4/transactions.json';
import { TransactionHistory } from './task4/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile>
        <Description user={user} />
        <Stats user={user} />
      </Profile>
      <Statistics data={data}  />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
