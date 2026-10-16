import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaEye,
  FaLock,
  FaUser,
  FaLaptop,
  FaLeaf
} from 'react-icons/fa';

function Login(){
     return (
    <div className="container-fluid login-page">

      <div className="card login-card overflow-hidden">
        <div className="row g-0 h-100">

          {/* Left Panel */}
          <div className="col-md-6 left-panel p-5">
            <div className="d-flex align-items-center gap-2">
              <FaCalendarAlt className="brand-icon" />
              <h3 className="fw-bold mb-0">LeavePro</h3>
            </div>

            <p className="brand-subtitle">
              Employee Leave Management System
            </p>

            <div className="hero-art">
              <div className="art-circle"></div>

              <FaClock className="art-clock" />
              <FaCalendarAlt className="art-calendar" />
              <FaUser className="art-person" />
              <FaLaptop className="art-laptop" />
              <FaLeaf className="art-plant" />
            </div>

            <p className="description mt-4">
              Manage your leaves,
              <br />
              track your balance and
              <br />
              keep your work-life balance.
            </p>
          </div>

          {/* Right Panel */}
          <div className="col-md-6 right-panel p-5">
            <div className="login-content">
              <h4 className="fw-bold mb-1">Welcome Back!</h4>

              <p className="text-secondary small mb-4">
                Login to your account to continue
              </p>

              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <div className="input-group">
                    <span className="input-group-text">
                      <FaEnvelope />
                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />

                    <span className="input-group-text">
                      <FaEye />
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100 mt-2"
                >
                  Login
                </button>
              </form>

              <p className="contact-text mt-3">
                Don't have an account?{' '}
                <a href="#" className="text-decoration-none">
                  Contact your HR
                </a>
              </p>

              {/* Demo Accounts */}
              <div className="demo-box mt-5">
                <div className="demo-title">
                  Demo Accounts
                </div>

                <div className="demo-item">
                  <div className="avatar">
                    <FaUser />
                  </div>

                  <div>
                    <div className="demo-name">
                      Employee Login
                    </div>
                    <div className="demo-email">
                      employee@company.com / 123456
                    </div>
                  </div>
                </div>

                <div className="demo-item">
                  <div className="avatar">
                    <FaUser />
                  </div>

                  <div>
                    <div className="demo-name">
                      Manager Login
                    </div>
                    <div className="demo-email">
                      manager@company.com / 123456
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Login;