import css from 'components/task2/Item/Item.module.css';
import PropTypes from 'prop-types';

export const Item = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.label}>{percentage}%</span>
    </>
  );
};

Item.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
}