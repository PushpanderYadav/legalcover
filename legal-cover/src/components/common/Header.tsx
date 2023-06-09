import logo from '../../assets/Legal Cover logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Container, Typography } from '@mui/material';



export default function Header () {
 
    return(
    <Container maxWidth="xl">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Typography textAlign="center" className="nav-link">About</Typography>   
            </li>
            <li className="nav-item">
              <Typography textAlign="center"  className="nav-link">Pricing</Typography>
            </li>
            <li className="nav-item">
              <Typography textAlign="center" className="nav-link">How it works</Typography>
            </li>
            <li className="nav-item">
              <Typography textAlign="center" className="nav-link" >FAQ's</Typography>
            </li>
            <li className="nav-item">
              <Typography textAlign="center" className="nav-link">CONTACT US</Typography>
            </li>
          </ul>
        </div>
        <div className="d-flex">   
          <SearchIcon  className="me-2" />
         <PermIdentityIcon/>
        </div>
      </div>
    </nav>
    </Container>
    )
}