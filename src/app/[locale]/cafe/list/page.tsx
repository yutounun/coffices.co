import pick from "lodash/pick";
import { fetchAllCafes } from "@/utils/api";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { CafeI } from "@/types/cafes";
import CafeListContent from "#/[locale]/cafe/list/CafeListContent";

const ServerShopsList = async () => {
  const cafes: CafeI[] = await fetchAllCafes();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "list")}>
      <CafeListContent initialCafes={cafes} />
    </NextIntlClientProvider>
  );
};

export default ServerShopsList;
