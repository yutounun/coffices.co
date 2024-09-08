import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, "profile")}>
      <ProfileContent />
    </NextIntlClientProvider>
  );
};

export default Profile;
