import { CafeI } from "@/types/cafes";
import { fetchAllCafes, fetchCafeById } from "@/utils/api";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import CafeDetail from "#/[locale]/cafe/[id]/CafeDetail";
import pick from "lodash/pick";

interface CafeDetailPageProps {
  params: {
    id: string;
  };
}

const CafeDetailPage = async ({ params }: CafeDetailPageProps) => {
  const cafeId = params.id;

  const cafe: CafeI = await fetchCafeById(cafeId);
  const cafes: CafeI[] = await fetchAllCafes();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "detail")}>
      <CafeDetail initialCafeData={cafe} initialCafesData={cafes} />
    </NextIntlClientProvider>
  );
};

export default CafeDetailPage;
