import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "@/components/Meta";

// The Page which renders an individual article once clicked on, URL is dynamic
const Article = ({ article }) => {
  const router = useRouter();

  // If data takes long to load, show loading...
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If article fails to retrieve, show an Error
  if (!article) {
    return <div>Error: Article not found.</div>;
  }

  const singleArticle = article[0];

  return (
    <>
    {/* Dynamic title change */}
      <Meta title={singleArticle.title}/>

      {/* Data of the article */}
      <h1 className="title">{singleArticle.title}</h1>
      <p>{singleArticle.content}</p>
      <br />

      {/* Button to go back to home page */}
      <Link href="/">
        <strong className="go-back">Go Back</strong>
      </Link>

      {/* Custom styles */}
      <style jsx>{`
        .title {
          margin: 2rem;
          font-weight: 600;
          font-size: 2rem;
        }

        .go-back {
          color: rgb(255, 165, 0);
        }
      `}</style>
    </>
  );
};

// Fetching the data as is needed, taking in the source_id as a prop to find a specific article
export const getServerSideProps = async ({ params }) => {
  const { source_id } = params;

  try {
    // Fetching the data from the API
    const response = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_24755bd15d40781f9550ad3859bfccc52429a&q=elon NOT crypto&language=en"
    );
    const data = await response.json();
    const articles = data.results;

    // Filtering the articles to find the specific one clicked on
    const article = articles.filter((article) => article.source_id === source_id);

    // Handling errors and Returns accordingly
    if (!article.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.log(`Error: ${error}`);

    return {
      props: {
        article: null,
      },
    };
  }
};

export default Article;
