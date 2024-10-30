import { useState } from "react";
import "./App.css";
// import { fetchQuotes } from "./assets/fetchData";
// import apiKey from "./assets/fetchData";
import quotes from "./assets/quotes.json";

type Quote = {
  quote: string;
  author: string;
};

const getRandomQuote = (): Quote => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadQuotes = async () => {
//       try {
//         const fetchedQuotes = await fetchQuotes();
//         setQuote(fetchQuotes);
//       } catch (error) {
//         setError("Failed to load quotes");  
//       }
//     };

//     loadQuotes();
//   }, []);

  return <>hello</>;
};



export default App;
