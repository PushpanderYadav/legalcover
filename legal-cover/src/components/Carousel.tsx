import Slider from 'react-slick';
import { Card, CardContent, Typography, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
        <Container maxWidth="md" sx={{ marginTop: '5rem' }}>
          <Slider {...settings}>
            {items.map((item, index) => (
              <Card key={index}>
                <img src={item.image} alt="Card image cap" />
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