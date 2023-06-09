import Slider from 'react-slick';
import { Card, CardContent, Typography, Container, Rating } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CarouselComponent.css'

function CarouselComponent() {
    const items = [
        {
          title: 'June 7, 2023',
          description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          image: 'image1.jpg',
        },
        {
          title: 'June 7, 2023',
          description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          image: 'image2.jpg',
        },
        {
          title: 'June 7, 2023',
          description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          image: 'image3.jpg',
        },
        {
          title: 'June 7, 2023',
          description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          image: 'image3.jpg',
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      return (
      <Container maxWidth="md" sx={{ marginTop: '5rem',
                                       marginBottom: '5rem' }}>
       <Typography variant="h5" textAlign="center"sx={{ marginTop: '5rem',marginBottom: '5rem' }} >What our users say</Typography>
          <Slider {...settings}>
            {items.map((item, index) => (
              <Card key={index} style={{ margin: '0 160px' }}>
               <Rating name="size-small" defaultValue={5} size="small" />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Container>
      );
}

export default CarouselComponent;