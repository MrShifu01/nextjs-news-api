import style from '../styles/Header.module.css'

// Basic header function that displays this on all pages
const Header = () => {
  return (
    <div>
        <h1 className={style.title}>
            <span>Elon</span>News
        </h1>
        <p className={style.description}>
            What has Elon been up to?
        </p>
    </div>
  )
}

export default Header