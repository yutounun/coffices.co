import { fetchCafeById } from "@/utils/api";

// Server Component
const CafeDetailPage = async () => {
  const cafe = await fetchCafeById("66aa0148bedde5ee532b7be1");
  return <div>{cafe.title}</div>;
};

export default CafeDetailPage;
