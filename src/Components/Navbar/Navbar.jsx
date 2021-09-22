import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  {
    index: 1,
    name: 'Home',
    path: '/',
  },
  {
    index: 2,
    name: 'Dashboard',
    path: '/Dashboard',
  },
];

export default function Navbar() {
  return (
    <div className={styles.navigationBar}>
      <NavLink to="/">
        <div className={styles.logo}>
          HiroskiCompanion
        </div>
      </NavLink>
      <ul className={styles.navList}>
        {links.map(({ name, path, index }) => (
          <li className={styles.link} key={index}>
            <NavLink to={path}>
              <div className={styles.link__item}>
                {name}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
