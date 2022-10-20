import { Item } from '../Item/Item';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <ul className={css.statlist}>
        {data.map(item => (
          <li className={css.statitem} key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
};
