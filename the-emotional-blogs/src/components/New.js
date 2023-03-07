import "../Bootstrap.min.css";
import Navbar from "./Navbar";

const New = () => {
  return (
    <div className="new-container">
      <Navbar />
      <div class="mb-3 m-4">
        <label for="exampleFormControlInput1" class="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
        />
      </div>
      <div class="mb-3 m-4">
        <label for="exampleFormControlInput1" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Username"
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
        ></textarea>
      </div>
      <input class="btn btn-primary" type="submit" value="Submit"></input>
    </div>
  );
};

export default New;
