import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li className={css.item} key={id}>
                    <p className={css.contact}>
                        {name}: {number}
                    </p>
                    <button
                        className={css.button}
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                    >
                        Видалити
                    </button>
                </li>
            ))}
        </ul>
    );
};
