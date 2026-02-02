import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item dropdown">
        <button
          class="nav-link dropdown-toggle text-color border-0 bg-transparent"
          id="navbarDropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b>Register User</b>
        </button>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item">
            <Link
              to="/user/theatre/register"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> Theatre</b>
            </Link>
          </li>

          <li class="nav-item">
            <Link
              to="/user/customer/register"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> Customer</b>
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link to="/user/login">
          <button
            className="btn btn-outline-danger ms-2 fw-bold"
            style={{ borderRadius: "30px" }}
          >
            Login User
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
