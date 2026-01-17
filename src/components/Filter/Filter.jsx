import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { selectNameFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={css.wrapper}>
            <label className={css.label}>
                Пошук контактів за ім'ям
                <input
                    className={css.input}
                    type="text"
                    value={filter}
                    onChange={e => dispatch(changeFilter(e.target.value))}
                />
            </label>
        </div>
    );
};
