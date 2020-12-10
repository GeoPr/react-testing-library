import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const NavBar: FC = () => {
  const pages = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Contact', to: '/contact/hello' },
  ]

  return (
    <header>
      <nav>
        <ul>
          {pages.map(({ title, to }, idx) => (
            <li key={idx}>
              <Link to={to} data-testid={title}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
