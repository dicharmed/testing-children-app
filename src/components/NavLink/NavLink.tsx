import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import styles from './NavLink.module.css'
import type { ButtonProps } from '../../app/types/types'

type NavLinkProps = Omit<ButtonProps, 'children'> & {
  path: string
  title: string
}

export const NavLink: React.FC<NavLinkProps> = ({ path, title, ...props }) => {
  return (
    <Link className={styles.wrapper} to={path}>
      <Button {...props}>{title}</Button>
    </Link>
  )
}
