"use client";

import React from "react";
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
    formState: { errors, isDirty, isValid },
  } = useForm<CafeFormInput>({
    mode: "onChange",
    defaultValues: {
      title: "",
      rate: null,
      image: "",
      area: "",
      openHour: null,
      closeHour: null,
      isWifi: false,
      isSmoking: false,
      isOutlet: false,
    },
  });
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
          {...register("title", { required: "店名を入力してください" })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <Autocomplete
          label="エリア"
          sx={{ width: "100%" }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          error={!!errors.area}
          helperText={errors.area?.message}
          options={Areas.map((area) => area.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.station}
              helperText={errors.station?.message}
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
          label="駅名"
          sx={{ width: "100%" }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          error={!!errors.station}
          helperText={errors.station?.message}
          options={Stations.map((station) => station.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("station", { required: "駅名を入力してください" })}
              error={!!errors.station}
              helperText={errors.station?.message}
              label="駅名"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
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
                  sx={{ width: "45%" }}
                  label="開店時間"
                  {...field}
                  renderInput={(params) => <TextField {...params} />}
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
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
        <TextField
          id="outlined-basic"
          label="評価(1 ~ 5)"
          type="number"
          variant="outlined"
          InputProps={{ inputProps: { min: 0, max: 5 } }}
          sx={{ width: "20%" }}
          {...register("rate", { required: "評価を入力してください" })}
          error={!!errors.rate}
          helperText={errors.rate?.message}
        />
        <FormControl sx={{ width: "80%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Wifi</FormLabel>
          <Controller
            name="isWifi"
            control={control}
            render={({ field }) => (
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...field}
              >
                <FormControlLabel value={true} control={<Radio />} label="有" />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="無"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
        <FormControl sx={{ width: "80%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">電源席</FormLabel>
          <Controller
            name="isOutlet"
            control={control}
            render={({ field }) => (
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...field}
              >
                <FormControlLabel value={true} control={<Radio />} label="有" />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="無"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
        <FormControl sx={{ width: "80%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">喫煙所</FormLabel>
          <Controller
            name="isSmoking"
            control={control}
            render={({ field }) => (
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...field}
              >
                <FormControlLabel value={true} control={<Radio />} label="有" />
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
