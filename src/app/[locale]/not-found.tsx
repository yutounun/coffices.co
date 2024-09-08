import { useTranslations } from "next-intl";
import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import GoBack from "@/components/ui/GoBack";

export default function NotFound() {
  const t = useTranslations("notFound");
  const messages = useMessages();

  return (
    <div>
      <h2>{t("errorCode")}</h2>
      <NextIntlClientProvider messages={pick(messages, "notFound")}>
        <GoBack />
      </NextIntlClientProvider>
    </div>
  );
}
