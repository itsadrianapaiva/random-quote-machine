import { useEffect, useState } from "react";
import "./App.css";

const apiKey = import.meta.env.VITE_API_KEY;


type Quote = {
  text: string;
  author: string;
};

const App = () => {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [data, setData] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiKey);
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <div></div>;
};

const getRandomQuote = (): Quote => {
  return quotes;
};

export default App;
