import { useState, useEffect } from 'react';
import Articles from '@/components/Articles';

export default function Home({ news }) {
  const [isLoading, setIsLoading] = useState(!news);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (hasError) {
    return <div>Error: Failed to fetch data.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Articles articles={news.results} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      'https://newsdata.io/api/1/news?apikey=pub_24755bd15d40781f9550ad3859bfccc52429a&q=elon NOT crypto&language=en'
    );
    const news = await response.json();

    return {
      props: {
        news,
      },
    };
  } catch (e) {
    console.log(`Error: ${e}`);
    return {
      props: {
        news: null,
      },
    };
  }
}
