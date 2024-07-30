import LanguageToggle from "@/components/LanguageToggle";

const loginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageToggle />

      {children}
    </>
  );
};

export default loginLayout;
