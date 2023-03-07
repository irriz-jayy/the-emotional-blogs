import Navbar from "./Navbar";
import "../Bootstrap.min.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div class="card text-center">
        <div class="card-header">Author</div>
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/view" class="btn btn-primary">
            View
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

export default Homepage;
