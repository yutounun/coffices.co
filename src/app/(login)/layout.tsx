import LanguageToggle from "@/components/ui/LanguageToggle";

const loginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageToggle />

      {children}
    </>
  );
};

export default loginLayout;
