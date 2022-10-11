import { Profile } from 'components/task1/Profile/Profile';
import { Description } from 'components/task1/Description/Description';
import 'components/task1/styles.css';
import user from 'components/task1/user.json';
import { Stats } from 'components/task1/Stats/Stats';
import { Statistics } from 'components/task2/Statistics/Statistics';
import data from 'components/task2/data.json'

export const App = () => {
  return (
    <>
      <Profile>
        <Description user={user} />
        <Stats user={user} />
      </Profile>
      <Statistics data={data} />
    </>
  );
};
