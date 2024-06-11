'use client'

import { Recipe } from "@prisma/client";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

interface RecipeProps {
  recipe: Recipe
}

interface BreadcrumbsProp {
  label: string;
  href: string
}

export default function BreadCrumb({ recipe }: RecipeProps) {

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsProp[]>([
    { label: 'Home', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: recipe.title, href: `/recipes/${recipe.title}` }
  ])

  const breadcrumbMUI = breadcrumbs.map((breadcrumb, index) => {
    const isLast = index === breadcrumbs.length - 1;
    return isLast ? (
      <Typography key={breadcrumb.href} color="textPrimary">
        {breadcrumb.label}
      </Typography>
    ) : (
      <Link key={breadcrumb.href} href={breadcrumb.href} underline="hover">
        {breadcrumb.label}
      </Link>
    );
  });

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 2 }}>
      {breadcrumbMUI}
    </Breadcrumbs>
  )
}