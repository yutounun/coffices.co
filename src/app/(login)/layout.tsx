import LanguageToggle from "@/components/ui/LanguageToggle";

const loginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageToggle sx={{ position: "fixed" }} />
      {children}
    </>
  );
};

export default loginLayout;
