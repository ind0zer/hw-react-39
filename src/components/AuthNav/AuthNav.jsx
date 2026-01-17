import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
    return (
        <div className={css.wrapper}>
            <NavLink className={({ isActive }) => (isActive ? css.activeLink : css.link)} to="/register">
                Реєстрація
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? css.activeLink : css.link)} to="/login">
                Увійти
            </NavLink>
        </div>
    );
};
