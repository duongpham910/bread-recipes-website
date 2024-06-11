import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { db } from '@/db';

export default async function MediaCard() {
  const recipes = await db.recipe.findMany();

  const mediaCards = recipes.map((recipe) => {
    return (
      <Card sx={{ maxWidth: 563 }} key={recipe.id}>
        <CardMedia
          sx={{ height: 381 }}
          image={recipe.url}
          title="Bread"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
          <Link href={`/recipes/${recipe.id}`} underline="none" color="inherit">
            Learn More
          </Link>
        </CardActions>
      </Card>
    );
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 4,
        gap: 4
      }}
    >
      {mediaCards}
    </Box>
  );
}