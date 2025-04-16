import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"; // No need for Article component here

console.log(blogData);

function App() {
  const defaultImage = "https://via.placeholder.com/215";
  // const validImage = image && image.trim() !== "" ? image : defaultImage;

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
