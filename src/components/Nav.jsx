import { useState } from 'react'

const links = ['about', 'skills', 'experience', 'education', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="logo">&lt;KP /&gt;</div>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}><a href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a></li>
        ))}
      </ul>

      <button
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
