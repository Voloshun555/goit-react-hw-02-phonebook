import css from './filter.module.css';
import PropType from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.fiterForm}>
        filter
        <input
          className={css.inputTitle}
          type="name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propType = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};
