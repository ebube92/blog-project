import { useState } from "react";
import posts from "../data/posts.js";
import Header from "../components/header.jsx";
import FilterBar from "../components/filterBar.jsx";
import PostsGrid from "../components/postsGrid.jsx";

export default function BlogHome() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <Header />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PostsGrid posts={filteredPosts} />
    </div>
  );
}
