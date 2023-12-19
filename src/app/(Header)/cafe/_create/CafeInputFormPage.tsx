"use client";

import React from "react";
import Stations from "../../../json/stations.json";
import Areas from "../../../json/areas.json";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface propTypes {
  handleCafePostSubmit: any;
}

interface CafeFormInput extends FieldValues {
  openHour: Date | null;
  closeHour: Date | null;
}
const CafeInputForm = ({ handleCafePostSubmit }: propTypes) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CafeFormInput>({
    mode: "onChange",
    defaultValues: {
      title: null,
      image: "",
      area: "",
      station: "",
      openHour: null,
      closeHour: null,
      isWifi: false,
      isSmoking: false,
      isOutlet: false,
    },
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <form
      onSubmit={handleSubmit(handleCafePostSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          height: "100%",
          display: "flex",
          px: { xs: "3em", sm: "5em" },
          py: "3em",
          gap: { xs: 2, sm: 4 },
        }}
      >
        <TextField
          size={isMobile ? "small" : "medium"}
          id="outlined-basic"
          label="店名"
          variant="outlined"
          sx={{ width: "100%" }}
          error={!!errors.title}
          helperText={errors.title?.message?.toString()}
          {...register("title", { required: "店名を入力してください" })}
        />
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Autocomplete
            sx={{ width: { xs: "100%", sm: "45%" }, mb: { xs: "1em", md: 0 } }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size={isMobile ? "small" : "medium"}
            options={Areas.map((area) => area.name)}
            renderInput={(params: any) => (
              <TextField
                size={isMobile ? "small" : "medium"}
                {...params}
                error={!!errors.area}
                helperText={errors.area?.message?.toString()}
                {...register("area", { required: "エリアを入力してください" })}
                label="エリア"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
          <Autocomplete
            sx={{ width: { xs: "100%", sm: "45%" } }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={Stations.map((station) => station.name)}
            size={isMobile ? "small" : "medium"}
            renderInput={(params: any) => (
              <TextField
                size={isMobile ? "small" : "medium"}
                {...params}
                {...register("station", { required: "駅名を入力してください" })}
                error={!!errors.station}
                helperText={errors.station?.message?.toString()}
                label="駅名"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Controller
              name="openHour"
              control={control}
              render={({ field }) => (
                <TimePicker
                  label="開店時間"
                  {...field}
                  sx={{
                    mb: { xs: "1em", md: 0 },
                    width: { xs: "100%", sm: "45%" },
                  }}
                  slotProps={{
                    textField: { size: isMobile ? "small" : "medium" },
                  }}
                />
              )}
            />
            {!isMobile && (
              <Typography
                sx={{ display: { sx: "none", sm: "block" } }}
                variant="h5"
              >
                ~
              </Typography>
            )}
            <Controller
              name="closeHour"
              control={control}
              render={({ field }) => (
                <TimePicker
                  sx={{ width: { xs: "100%", sm: "45%" } }}
                  label="閉店時間"
                  {...field}
                  slotProps={{
                    textField: { size: isMobile ? "small" : "medium" },
                  }}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControl sx={{ width: { xs: "100%", sm: "30%" } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Wifi</FormLabel>
            <Controller
              name="isWifi"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  {...field}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="有"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="無"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <FormControl sx={{ width: { xs: "100%", sm: "30%" } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              電源席
            </FormLabel>
            <Controller
              name="isOutlet"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  {...field}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="有"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="無"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <FormControl sx={{ width: { xs: "100%", sm: "30%" } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              喫煙所
            </FormLabel>
            <Controller
              name="isSmoking"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  {...field}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="有"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="無"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Stack>
      </Stack>
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "30%", borderRadius: 1 }}
        >
          登録
        </Button>
      </Stack>
    </form>
  );
};

export default CafeInputForm;
