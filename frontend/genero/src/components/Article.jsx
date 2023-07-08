import React from "react";
import "../styles/Article.css";
import Search from '../components/Search';
import ArticlesF from '../components/ArticlesF';
import Articledes from '../components/Articledes';

export const Article = () => {
  return (
    <div>

      <Articledes />
       <br />
      <Search />
      
      <ArticlesF />
      <br />
      <div className="mbt"><a href="/Cancer" className="btn">Espace cancer</a></div>
     
    </div>
  );
};