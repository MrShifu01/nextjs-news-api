import style from '../styles/Article.module.css'
import Article from './Article'

// Function for displaying the list of individual articles, excepts articles as a prop
const Articles= ({articles}) => {
  return (
    // Mapping throught the articles and rendering the Article component for each article
    <div className={style.grid}>
      {articles.map((article) => (
        <Article key={`${articles.source_id}, ${articles.title}`} article={article} />
      ))}
    </div>
  )
}

export default Articles