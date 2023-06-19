import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={`${articles.source_id}, ${articles.title}`} article={article} />
      ))}
    </div>
  )
}

export default ArticleList