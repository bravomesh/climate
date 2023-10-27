import './App.css';
import { Routes, Route,  Link } from 'react-router-dom';
import Home from './home'; 
import Causes from './causes';
import Effects from './effects';
import Solutions from './solutions';
import Blog from './blog';
import News from './News';
import  { useState, useEffect } from 'react';
import axios from 'axios';

 function App() { 
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://climate-news-feed.p.rapidapi.com/page/1', {
          params: { limit: '10' },
          headers: {
            'X-RapidAPI-Key': '035bf3af9emsh258bda578110c5bp1baa11jsn5e3684364235',
            'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
      <div>
        <header>
        <nav className="bg-zinc-900 p-4">
    <ul className="flex space-x-6">
        <li className="relative group">
            <a href="/" className="block text-white hover:text-blue-300 transition duration-300 ease-in-out py-2 px-3">Home</a>
        </li>
        <li className="relative group">
            <a href="/causes" className="block text-white hover:text-blue-300 transition duration-300 ease-in-out py-2 px-3">Causes</a>
        </li>
        <li className="relative group">
            <a href="/effects" className="block text-white hover:text-blue-300 transition duration-300 ease-in-out py-2 px-3">Effects</a>
        </li>
        <li className="relative group">
            <a href="/solutions" className="block text-white hover:text-blue-300 transition duration-300 ease-in-out py-2 px-3">Solutions</a>
        </li>
        <li className="relative group">
            <a href="/blog" className="block text-white hover:text-blue-300 transition duration-300 ease-in-out py-2 px-3">Blog</a>
        </li>
        <li className="relative group">
            <a href="/news" className="block text-white hover:text-blue-300 transition duration-300 ease-in-out py-2 px-3">News</a>
        </li>
    </ul>
</nav>


        </header>


        <Routes>
          <Route path="/" exact element={<Home /> } />
          <Route path="/causes" element={<Causes /> } />
          <Route path="/effects" element={<Effects /> } />
          <Route path="/solutions" element={<Solutions /> } />
          <Route path="/blog" element={<Blog />} />
          <Route path='/News' element={<News articles={articles} /> } />
          
        </Routes>

        </div>
    
  
   
  );
}

export default App;
