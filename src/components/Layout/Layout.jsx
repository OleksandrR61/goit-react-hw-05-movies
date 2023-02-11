import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    margin: 0 8px;
    padding: 4px;

    &.active {
        color: red;
    }
`;

export const Layout = ({children}) => (
    <>
        <header className={styles.header}>
            <h1>Movies</h1>
            <nav>
                <StyledNavLink to='/'>Home</StyledNavLink>
                <StyledNavLink to='/movies'>Movies</StyledNavLink>
            </nav>
        </header>
        {children}
    </>
);

Layout.propTypes = {
    children: PropTypes.node,
};