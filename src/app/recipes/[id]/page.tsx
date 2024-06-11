import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import BreadCrumb from '@/components/recipe/breadcumb';



interface ShowRecipesProps {
  params: {
    id: string
  }
}

export default async function ShowRecipesPage(props: ShowRecipesProps) {
  const id = parseInt(props.params.id)
  
  const recipe = await db.recipe.findFirst({
    where: { id }
  });

  if (!recipe) {
    return notFound();
  }

  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Box paddingTop={4} paddingRight={8}>
          <BreadCrumb recipe={recipe}></BreadCrumb>
          <Typography variant="h3" gutterBottom>{recipe?.title}</Typography>

          <Typography variant="body1" gutterBottom>
            {recipe?.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              pt: 2,
              pb: 4,
              borderBottom: '1px solid #e4e4e4'
            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <AccessTimeIcon fontSize='large'/>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  ml: 1
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  Prep
                </Typography>
                <Typography variant="subtitle2" gutterBottom>{recipe?.prep}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 4
              }}
            >
              <Typography variant="subtitle2" gutterBottom>Bake</Typography>
              <Typography variant="subtitle2" gutterBottom>{recipe?.bake}</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 4
              }}
            >
              <Typography variant="subtitle2" gutterBottom>TOTAL</Typography>
              <Typography variant="subtitle2" gutterBottom>{recipe?.total}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              pt: 4,
            }}
          >
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <AddCircleOutlineIcon fontSize='large'/>
              <Box
                display="flex"
                flexDirection="column"
                marginLeft={1}
              >
                <Typography variant="subtitle2" gutterBottom>YIELD</Typography>
                <Typography variant="subtitle2" gutterBottom>{recipe?.yield}</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
            >
              <Button variant="outlined" startIcon={<AddOutlinedIcon />} sx={{ color: "black", borderColor: "red" }}>Save Recipe</Button>
              <Button variant="outlined" startIcon={<LocalPrintshopOutlinedIcon />} sx={{ mt: 1, color: "black", borderColor: "red" }} >Print</Button>
            </Box>
          </Box>
        </Box>

        <Box paddingTop={4}>
          <Box
            component="img"
            sx={{
              height: 400,
              width: 600,
              maxHeight: { xs: 200, md: 400 },
              maxWidth: { xs: 300, md: 600 },
            }}
            alt={recipe.title}
            src={recipe.url}
          />
        </Box>
      </Container>
    </Box>
  );
}
