import { Link } from "react-router-dom";
import './header.css'

const Header = ()=>{
    return <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom myHeader">
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4 myTitle">AptiCrack</span>
    </Link>

    <ul className="nav nav-pills">
      <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link">FAQs</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link">About</Link></li>
    </ul>
  </header>
}

export default Header;