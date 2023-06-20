import Link from 'next/link'
import style from '../styles/Nav.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { darkMode, lightMode } from '@/redux/modeSlice'

// Simple navbar to go to and from home and about
const Nav = () => {
  const mode = useSelector((state) => state.mode.mode)
  const dispatch = useDispatch()

  return (
    <nav className={style.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li className='mode'>
                {mode === "light" && <div
                onClick={() => dispatch(darkMode())}
                ><img src='/moon.png'/></div>}

                {mode === "dark" && <div
                onClick={() => dispatch(lightMode())}
                ><img src='/sun.png'/></div>}
            </li>
        </ul>

        <style jsx>{`
          .mode {
            margin-left: 1rem;
            cursor:pointer;
          }
        `}</style>
    </nav>
  )
}

export default Nav