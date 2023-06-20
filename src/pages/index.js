import { useState, useEffect } from 'react';
import Articles from '@/components/Articles';

export default function Home({ news }) {
  // Setting up state variables to manage loading and error states
  const [isLoading, setIsLoading] = useState(!news);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Setting up a timer to check if the data is still loading after 5 seconds
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasError(true); // If still loading, set the error state to true
      }
    }, 5000);

    // Clearing the timer when the component unmounts or when the isLoading value changes
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (hasError) {
    // Displaying an error message if fetching data failed
    return <div>Error: Failed to fetch data.</div>;
  }

  if (isLoading) {
    // Displaying a loading message while fetching data
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Rendering the Articles component with the fetched news data */}
      <Articles articles={news.results} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Fetching news data from the API
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
