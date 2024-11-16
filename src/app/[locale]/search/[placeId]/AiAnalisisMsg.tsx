import { CafeDetailI } from "@/types/CafeDetail";
import { Box, Stack, Typography } from "@mui/material";

const AiAnalisisMsg = ({ detailInfo }: { detailInfo?: CafeDetailI }) => {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h2">AI Analysis</Typography>
      <Box>
        <Typography variant="body1">{detailInfo?.ai_analysis}</Typography>
      </Box>
    </Stack>
  );
};

export default AiAnalisisMsg;
