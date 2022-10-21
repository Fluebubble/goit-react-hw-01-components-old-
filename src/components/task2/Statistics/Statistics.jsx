import { Item } from '../Item/Item';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
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
  title: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
