
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderUser = () => {
  let navigate = useNavigate();

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");
    setTimeout(() => {
      window.location.reload(true);
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item dropdown">
        <button
          class="nav-link dropdown-toggle text-color border-0 bg-transparent"
          type="button"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b>Bookings</b>
        </button>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item">
            <Link
              to="/customer/show/bookings"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> My Bookings</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <button
          class="nav-link dropdown-toggle text-color border-0 bg-transparent"
          type="button"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> Wallet</b>
        </button>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item">
            <Link
              to="/customer/wallet/detail"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color">My Wallet</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HeaderUser;
