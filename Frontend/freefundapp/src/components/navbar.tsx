const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-fixed my-2 py-2 start-0 end-0 mx-5">
  <div className="container-fluid px-1">
    <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/astro/">FreeFund</a>
    <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon mt-2">
      <span className="navbar-toggler-bar bar1"></span>
      <span className="navbar-toggler-bar bar2"></span>
      <span className="navbar-toggler-bar bar3"></span>
    </span>
    </button>
    <div className="collapse navbar-collapse" id="navigation">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="#ourmission">
          About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://github.com/creativetimofficial/astro-ecommerce">
          <i className="fab text-lg fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://discord.com/invite/TGZqBvZB" rel="nofollow" target="_blank">
          <i className="fab text-lg fa-discord" aria-hidden="true"></i>
          </a>
        </li>
        </ul>
      <ul className="navbar-nav d-lg-block d-none">
        <li className="nav-item ms-2">
          <a href="https://www.creative-tim.com/learning-lab/astro/quick-start/astro-ecommerce" className="btn btn-sm mb-0 bg-gradient-dark border-radius-sm">Get Started</a>
        </li>
      </ul>
      </div>
  </div>
</nav>
  );
};

export default Navbar;
