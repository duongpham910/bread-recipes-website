-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prep" TEXT NOT NULL,
    "bake" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "yield" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
