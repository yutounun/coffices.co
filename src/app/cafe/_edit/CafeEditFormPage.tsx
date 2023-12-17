"use client";

import React from "react";
import { DevTool } from "@hookform/devtools";
import dayjs from "dayjs";
import Stations from "../../json/stations.json";
import Areas from "../../json/areas.json";
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
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";

interface propTypes {
  handleCafePutSubmit: any;
  cafe: CafeI;
}

const CafeUpdateForm = ({ handleCafePutSubmit, cafe }: propTypes) => {
  const env = process.env.NEXT_PUBLIC_ENV;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      _id: cafe._id,
      title: cafe.title ? cafe.title : "",
      station: cafe.station ? cafe.station : "",
      rate: cafe.rate,
      area: cafe.area ? cafe.area : "",
      openHour: cafe.openHour ? dayjs(cafe.openHour, "HH:mm") : null,
      closeHour: cafe.closeHour ? dayjs(cafe.closeHour, "HH:mm") : null,
      isWifi: cafe.isWifi,
      isSmoking: cafe.isSmoking,
      isOutlet: cafe.isOutlet,
      image: cafe.image,
    },
  });
  return (
    <>
      <form
        onSubmit={handleSubmit(handleCafePutSubmit)}
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
            px: "5em",
            py: "3em",
          }}
          spacing={4}
        >
          <TextField
            id="outlined-basic"
            label="店名"
            variant="outlined"
            sx={{ width: "100%" }}
            error={!!errors.title}
            helperText={errors.title?.message?.toString()}
            {...register("title", { required: "店名を入力してください" })}
          />
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Controller
              name="area"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  sx={{ width: "45%" }}
                  freeSolo
                  id="area-autocomplete"
                  disableClearable
                  options={Areas.map((area) => area.name)}
                  value={value}
                  onInputChange={(event, newValue) => onChange(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="エリア"
                      error={!!errors.area}
                      helperText={errors.area?.message?.toString()}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="station"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  sx={{ width: "45%" }}
                  freeSolo
                  id="area-autocomplete"
                  disableClearable
                  options={Stations.map((station) => station.name)}
                  value={value}
                  onInputChange={(event, newValue) => onChange(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="駅名"
                      error={!!errors.station}
                      helperText={errors.station?.message?.toString()}
                    />
                  )}
                />
              )}
            />
          </Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Controller
                name="openHour"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    label="開店時間"
                    {...field}
                    sx={{ width: "45%" }}
                  />
                )}
              />

              <Typography variant="h5">~</Typography>
              <Controller
                name="closeHour"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    sx={{ width: "45%" }}
                    label="閉店時間"
                    {...field}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <FormControl sx={{ width: "30%" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Wifi
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
            <FormControl sx={{ width: "30%" }}>
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
            <FormControl sx={{ width: "30%" }}>
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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
      {/* {(env === "dev" || env === "local") && <DevTool control={control} />} */}
    </>
  );
};

export default CafeUpdateForm;
