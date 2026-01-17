import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Ім'я користувача
                <input className={css.input} type="text" name="name" required />
            </label>
            <label className={css.label}>
                Пошта
                <input className={css.input} type="email" name="email" required />
            </label>
            <label className={css.label}>
                Пароль
                <input className={css.input} type="password" name="password" required />
            </label>
            <button className={css.button} type="submit">Зареєструватися</button>
        </form>
    );
};
