import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <title>Ваші контакти</title>
            <div style={{ padding: '20px' }}>
                <h1>Телефонна книга</h1>
                <ContactForm />
                <h2>Контакти</h2>
                <Filter />
                <div>{isLoading && 'Завантаження...'}</div>
                <ContactList />
            </div>
        </>
    );
}
