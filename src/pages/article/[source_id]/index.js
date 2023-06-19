import Link from "next/link"
import Meta from "@/components/Meta"

const article = ({article}) => {
  const singleArticle = article[0]

  return (
    <>
      <Meta title={singleArticle.title} description={singleArticle.excerpt} />
        <h1 className="title">{singleArticle.title}</h1>
        <p>{singleArticle.content}</p>
        <br/>
        <Link href='/'>Go Back</Link>
      <style jsx>{`
        .title {
          margin: 2rem;
          font-weight: 600;
          font-size: 2rem;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async ({params}) => {
    const { source_id } = params
    const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_24755bd15d40781f9550ad3859bfccc52429a&q=elon NOT crypto&language=en')
    const data = await res.json()
    const articles = data.results
    const article = articles.filter((article) => article.source_id === source_id)

    return {
        props: {
            article
        }
    }
}

export default article