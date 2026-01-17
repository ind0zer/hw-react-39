import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.nav}>
            <NavLink className={({ isActive }) => (isActive ? css.activeLink : css.link)} to="/">
                Головна
            </NavLink>
            {isLoggedIn && (
                <NavLink className={({ isActive }) => (isActive ? css.activeLink : css.link)} to="/contacts">
                    Контакти
                </NavLink>
            )}
        </nav>
    );
};
