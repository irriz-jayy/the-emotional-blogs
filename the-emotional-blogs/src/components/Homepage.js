import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Bootstrap.min.css";

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      {blogs.map((blog) => (
        <div class="card text-center">
          <div className="card-header">{blog.username}</div>
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.content}</p>
            <a href={`/blogs/${blog.id}`} class="btn btn-primary">
              View
            </a>
          </div>
          <div class="card-footer text-muted">{blog.created_at}</div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
