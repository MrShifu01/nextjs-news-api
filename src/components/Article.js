import style from '../styles/Article.module.css'
import Link from 'next/link'

// Function for displaying an individual article on the home page, has article as a prop
const Article = ({article}) => {
  return (
    // A link that shows the article title and a short excerpt from the article
    <Link href="/article/[source_id]" as={`/article/${article.source_id}`}>
        <div className={style.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.description}</p>
        </div>
    </Link>
  )
}

export default Article