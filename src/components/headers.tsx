import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export default function Header() {
  return (
    <Box
      sx={{
        width: '50%',
        pl: 10,
        color: '#000000'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 10,
          p: 4,
        }}
      >
        <Link href="/shop" underline="none" color="inherit">
          SHOP
        </Link>
        <Link href="/recipes" underline="none" color="inherit">
          RECIPES
        </Link>
        <Link href="/learn" underline="none" color="inherit">
          LEARN
        </Link>
        <Link href="/about" underline="none" color="inherit">
          ABOUT
        </Link>
        <Link href="/blog" underline="none" color="inherit">
          BLOG
        </Link>
      </Box>
    </Box>
  );
}