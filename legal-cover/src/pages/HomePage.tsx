import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Teaser from "../components/home/Teaser";
import CardMedia from '@mui/material/CardMedia';
import img from '../assets/card2image3.png'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CarouselComponent from "../components/Carousel";
import ControlledAccordions from "../components/Accordion";
import { Container } from "@mui/material";
import LatestNewsCard from "../components/NewsCards";

const HomePage = ()=>{

  const cardData= [
    {
      image: img,
      date: 'June 7, 2023',
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      image: img,
      date: 'June 7, 2023',
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: img,
      date: 'June 7, 2023',
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    // Add more card data objects as needed
  ];
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
        <LatestNewsCard cardData={cardData} />;
        <CarouselComponent/>
        <Container  maxWidth="lg"  sx={{ marginTop: '2rem', marginBottom: '4rem',height:'8rem' }}>
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
        </Container>
        <Container maxWidth="md" sx={{ marginTop: '5rem', marginBottom: '4rem' }}>
        <ControlledAccordions/>
        </Container>
        <Footer/>
      </>
    );
}

export default HomePage;