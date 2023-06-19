import articleStyle from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
  return (
    <Link href="/article/[source_id]" as={`/article/${article.source_id}`}>
        <div className={articleStyle.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.description}</p>
        </div>

    </Link>
  )
}

export default ArticleItem