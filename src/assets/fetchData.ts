const apiKey = import.meta.env.VITE_API_KEY;

interface Quote {
    text: string;
    author: string;
}

async function fetchQuotes(): Promise<{ quotes: Quote[]}> {
        const response = await fetch(`${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
}

export default fetchQuotes;