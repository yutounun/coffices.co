import { CafeAnalysisI } from "@/types/CafeAnalysis";
import { Box, Stack, Typography } from "@mui/material";

const AiAnalisisMsg = ({ detailInfo }: { detailInfo?: CafeAnalysisI }) => {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h2">AI Review</Typography>
      <Box>
        <Typography variant="body1">{detailInfo?.ai_analysis}</Typography>
      </Box>
    </Stack>
  );
};

export default AiAnalisisMsg;
