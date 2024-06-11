import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { db } from '@/db';

export default async function SecondHeader() {
  
  const recipes = await db.recipe.findMany();

  const links = recipes.map((recipe) => {
    return (
      <Link key={`/recipes/${recipe.id}`} href={`/recipes/${recipe.id}`} underline="none" color="inherit">
        {recipe.title}
      </Link>
    );
  });

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f8f5f0'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          p: 2,
        }}
      >
        {links}
      </Box>
    </Box>
  );
}
