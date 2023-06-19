import ArticleList from "@/components/ArticleList"

export default function Home(news) {
  return (
    <div>
      <ArticleList articles={news.results}/>
    </div>
  )
}

export const getStaticProps = async function () {
  const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_24755bd15d40781f9550ad3859bfccc52429a&q=elon NOT crypto&language=en')
  const news = await response.json()

  return {
    props: news
  }
}
