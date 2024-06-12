'use client'
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

interface CustomLinkProps {
  pathname: string;
  href: string;
}

interface ActiveLinkProps {
  href: string;
  children: string;
}

const CustomLink = styled(Box)(({ pathname, href }: CustomLinkProps) => ({
  margin: '0 10px',
  padding: '10px',
  borderBottom: pathname === href ? `2px solid #da1a32` : 'none',
  color: pathname === href ? '#e60023' : '#000000',
  textDecoration: 'none',
}));

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname()

  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <CustomLink pathname={pathname} href={href}>{children}</CustomLink>
    </Link>
  );
};

export default ActiveLink;
