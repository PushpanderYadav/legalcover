import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FAQ from "../components/home/FAQ";
import Teaser from "../components/home/Teaser";
import CardMedia from '@mui/material/CardMedia';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CarouselComponent from "../components/Carousel";
import ControlledAccordions from "../components/Accordion";
import { Container } from "@mui/material";

const HomePage = ()=>{
    return (
      <>
        <Header />
        <Teaser />
        <CardMedia
          component="iframe"
          height="350"
          width='90'
          src="https://www.youtube.com/embed/03jMSIRrf2Q?rel=0&showinfo=0"
        />
        <CarouselComponent/>
         <div className="bg-dark text-light p-5">
            <div className="container">
                <div className="text-start">
                    <h1 className="mb-3 title-colorYellow">What's covered and what's not</h1>
                </div>
                <div className="text-start">
                    <p className="mb-3 w-50">We integrate with promising startups across the seed to growth trajectory, with multidisciplinary design solutions.</p>
                </div>
                <div className="text-start">
                    <button className="btn btn-yellow">Download Document <span className="ms-2 me-3"><FileDownloadOutlinedIcon/></span> </button>
                </div>
            </div>
        </div>
        <Container maxWidth="md" sx={{ marginTop: '5rem', marginBottom: '4rem' }}>
        <ControlledAccordions/>
        </Container>
        <Footer/>
      </>
    );
}

export default HomePage;