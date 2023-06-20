import Meta from './Meta'
import style from '../styles/Layout.module.css'
import Nav from "./Nav"
import Header from "./Header"

// Layout function that determines a global layout and styles, excepts children as a prop
export const Layout = ({children}) => {
  return (
    <>
    <Meta/>
    <Nav/>
      <div className={style.container}>
          <main className={style.main}>
            <Header/>
              {children}
          </main>
      </div>
    </>
  )
}
