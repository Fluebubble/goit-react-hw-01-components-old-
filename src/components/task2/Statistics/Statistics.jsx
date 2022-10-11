import { Item } from '../Item/Item';
import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {data.map(item => (
          <li key={item.id}>
            <Item item = {item}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
