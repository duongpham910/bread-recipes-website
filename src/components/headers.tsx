import Box from '@mui/material/Box';
import ActiveLink from './active-link';

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
        <ActiveLink href="/shop">SHOP</ActiveLink>
        <ActiveLink href="/recipes">RECIPES</ActiveLink>
        <ActiveLink href="/learn">LEARN</ActiveLink>
        <ActiveLink href="/about">ABOUT</ActiveLink>
        <ActiveLink href="/blog">BLOG</ActiveLink>
      </Box>
    </Box>
  );
}