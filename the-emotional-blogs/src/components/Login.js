import "../App.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-image">
          <img
            src="https://raw.githubusercontent.com/irriz-jayy/images/main/logo.png"
            alt="login image"
            className="imagel"
          />
        </div>
        <div className="login-form">
          <h2 className="login-header">Login</h2>
          <form className="login">
            <div className="form-item">
              <label htmlFor="" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-item">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-item">
              <button type="submit" className="submit-login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
