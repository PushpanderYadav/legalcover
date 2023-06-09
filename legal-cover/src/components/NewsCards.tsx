import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

interface CardData {
    image: string;
    date: string;
    category: string;
    title: string;
    description: string;
  }
  
  interface LatestNewsCardProps {
    cardData: CardData[];
  }
  
  const LatestNewsCard: React.FC<LatestNewsCardProps> = ({ cardData }) => {  
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="cardheadings pb-4">
            <div className="latestnew">Latest News</div>
            <div className="allnews">
              <button className="btn btn-dark pb-1 pt-1">All news <span><img src="./forward icon.png" alt="Your Image" /></span></button>
            </div>
          </div>
        </Grid>
        {cardData.map((data, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={data.image}
                alt="Card image cap"
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {data.date}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {data.category}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestNewsCard;