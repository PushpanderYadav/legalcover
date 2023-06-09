import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/Legal Cover logo.jpg'

export default function Footer() {
    return (
        <footer className="bg-dark-custom text-white p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <img src={logo} alt="social_icon0" className="me-2" />
              <h6>Drop us an email on</h6>
              <h6 className="colortextyellow">info@legalcover.com</h6>
              <div>
                <FacebookRoundedIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>
            <div className="col-lg">
              <h6 className="headings1">Learn more</h6>
              <div className="textFooteritems">
                <p>How it works</p>
                <p>About</p>
                <p>Pricing</p>
                <p>The Journal</p>
                <p>FAQs</p>
              </div>
            </div>
            <div className="col-lg">
              <h6 className="headings1">Legal</h6>
              <div className="textFooteritems">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </div>
            </div>
            <div className="col-lg">
              <h6 className="headings1">About</h6>
              <div className="textFooteritems">
                <p>Why Us</p>
                <p>Advantages</p>
                <p>News</p>
                <p>Blogs</p>
                <p>Testimonials</p>
              </div>
            </div>
            <div className="col-lg">
              <h6 className="headings1">Services</h6>
              <div className="textFooteritems">
                <p>Motorcycle Warranty</p>
                <p>Return & Exchange</p>
                <p>Buying process</p>
                <p>Insurance</p>
              </div>
            </div>
          </div>
        </div>
       
          <div className="container">
            <div className="d-flex justify-content-between border-top-custom pt-3">
              <div>
                <span className="fontsizesub-footer">© 2022. Legal Cover</span>
              </div>
              <div className="ms-auto textFooteritems">
                <span className="me-3">FAQ</span>
                <span className="me-3">Terms & Conditions</span>
                <span className="me-3">Privacy Policy</span>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
       
      </footer>
    )
}