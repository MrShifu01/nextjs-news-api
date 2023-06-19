import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Elon</span>News
        </h1>
        <p className={headerStyles.description}>
            What has Elon been up to?
        </p>

    </div>
  )
}

export default Header