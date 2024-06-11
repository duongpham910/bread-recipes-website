import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

interface breadCardProps {
  image: string;
  title: string;
}

const BreadCard = ({ image, title }: breadCardProps) => (
  <Card sx={{ display: 'flex' }}>
    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f5f0' }}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
    <CardMedia component="img" height="400" image={image} alt={title} />
  </Card>
);

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          height: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2024-04/Sourdough-Beer-Bread_1138.jpg?itok=tFSWwqqa")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold">
          Welcome to the Bread Lovers Paradise
        </Typography>
      </Box>
      <Container sx={{ paddingTop: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <BreadCard
              image="https://www.kingarthurbaking.com/sites/default/files/styles/card_wide/public/2021-10/classic-sourdough-pancakes-or-waffles_marquee.jpg?itok=KaWkNxVW"
              title="15 ways to bake with your extra sourdough starter"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <BreadCard
              image="https://www.kingarthurbaking.com/sites/default/files/styles/card_wide/public/2024-04/Sourdough-Beer-Bread_1138.jpg?itok=jXIqLRRw"
              title="Sourdough Beer Bread"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}