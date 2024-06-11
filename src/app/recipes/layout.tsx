import SecondHeader from "@/components/recipe/second-headers";

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SecondHeader />
      {children}
    </div>
  );
}
