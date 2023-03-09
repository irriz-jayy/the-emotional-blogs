import "../Bootstrap.min.css";
import Navbar from "./Navbar";
import { useState } from "react";

const New = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    const data = { username, title, content };
    try {
      const response = await fetch("http://localhost:9292/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      alert("Successful blog!");
      setUsername("");
      setTitle("");
      setContent("");
      e.target.reset();
    } catch (error) {
      console.error(error);
      const errorMessage = await error.text();
      console.error(errorMessage);
    }
  };
  return (
    <div className="new-container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div class="mb-3 m-4">
          <label for="exampleFormControlInput1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="mb-3 m-4">
          <label for="exampleFormControlInput1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3 m-4">
          <label for="exampleFormControlTextarea1" class="form-label">
            Content
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default New;
