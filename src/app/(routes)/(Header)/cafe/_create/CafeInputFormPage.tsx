"use client";

import React from "react";
import Stations from "../../../../_json/stations.json";
import Areas from "../../../../_json/areas.json";
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
} from "@mui/material";
import useMobile from "_custom/useMobile";
import useTranslate from "_custom/useTranslate";

interface propTypes {
  handleCafePostSubmit: any;
}

interface CafeFormInput extends FieldValues {
  openHour: Date | null;
  closeHour: Date | null;
}
const CafeInputForm = ({ handleCafePostSubmit }: propTypes) => {
  const { t } = useTranslate();
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
  const { isMobile } = useMobile();
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
          label={t?.cafePostModal.form.cafeName.label}
          variant="outlined"
          sx={{ width: "100%" }}
          error={!!errors.title}
          helperText={errors.title?.message?.toString()}
          {...register("title", {
            required: t?.cafePostModal.form.cafeName.required,
          })}
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
                {...register("area", {
                  required: t?.cafePostModal.form.area.required,
                })}
                label={t?.cafePostModal.form.area.label}
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
                {...register("station", {
                  required: t?.cafePostModal.form.station.required,
                })}
                error={!!errors.station}
                helperText={errors.station?.message?.toString()}
                label={t?.cafePostModal.form.station.label}
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
                  label={t?.cafePostModal.form.openHour.label}
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
                  label={t?.cafePostModal.form.closedTime.label}
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
            <FormLabel id="demo-row-radio-buttons-group-label">
              {t?.cafePostModal.form.wifi.label}
            </FormLabel>
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
                    label={t?.cafePostModal.form.exist}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label={t?.cafePostModal.form.notExist}
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <FormControl sx={{ width: { xs: "100%", sm: "30%" } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              {t?.cafePostModal.form.outlet.label}
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
                    label={t?.cafePostModal.form.exist}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label={t?.cafePostModal.form.notExist}
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <FormControl sx={{ width: { xs: "100%", sm: "30%" } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              {t?.cafePostModal.form.smoking.label}
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
                    label={t?.cafePostModal.form.exist}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label={t?.cafePostModal.form.notExist}
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
          {t?.common.register}
        </Button>
      </Stack>
    </form>
  );
};

export default CafeInputForm;
