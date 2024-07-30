import LanguageToggle from "@/components/LanguageToggle";

const NoHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageToggle />
      {children}
    </>
  );
};

export default NoHeaderLayout;
