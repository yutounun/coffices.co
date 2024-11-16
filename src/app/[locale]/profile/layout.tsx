import Header from "@/components/ResponsiveAppBar";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
