import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    const fetchingNews = async () => {
      const { data } = await axios.get('/newsapi/us');

      console.log(data);
      const { articles } = data;

      setNews(articles);
    };
    fetchingNews();
  }, []);

  return (
    <div className='App'>
      {news.map((article: any, i: number) => (
        <h1 key={i}>{article.title}</h1>
      ))}
    </div>
  );
}

export default App;
