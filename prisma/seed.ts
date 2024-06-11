import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  return await prisma.recipe.createMany({
    data: [
      { 
        title: "Whole Grain Banana Bread", 
        prep: "10 mins", 
        bake: "1 hr to 1 hr 15 mins", 
        total: "1 hr 25 mins", 
        yield: "1 loadf, 12 generous servings", 
        description: "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.", 
        url: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-09/whole-grain-banana-bread-3_0822.jpg?itok=-nAdBJa7" 
      },
      { 
        title: "Rustic Sourdough Bread", 
        prep: "12 mins", 
        bake: "25 to 30 mins", 
        total: "3 hrs 7 mins", 
        yield: "two 10 loaves", 
        description: "This chewy loaf has rich, deep, flavor with mild sourdough tang. Since it includes commercial yeast as well as starter, you're guaranteed a good, strong rise — even if your starter isn't quite up to snuff.",
        url: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2021-07/Rustic-Sourdough-Loaf_0049__0.jpg?itok=ZpXUOjJR" 
      },
      { 
        title: "Classic Sandwich Bread", 
        prep: "12 mins", 
        bake: "30 to 40 mins", 
        total: "2 hrs 42 mins", 
        yield: "1 loaf", 
        description: "Made with all of the ingredients that make homemade white bread superior to storebought — butter, milk, and high-quality flour — this sandwich bread recipe is our version of a classic, perfected. The soft and tender interior makes this loaf ideal for sandwiches, toast, or even French toast. It's a timeless recipe you'll come back to time and time again.",
        url: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2019-08/classic-sandwich-bread.jpg?itok=ZA2g6TUf" 
      },
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  