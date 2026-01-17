import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} вже є у контактах.`);
            return;
        }

        dispatch(addContact({ name, number }));
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                Ім'я
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>
                Номер
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit">Додати контакт</button>
        </form>
    );
};
