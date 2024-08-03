"use client";

import React, { useState } from "react";
import Stations from "@/data/stations.json";
import Icons from "#/cafe/_create/Icons";
import Areas from "@/data/areas.json";
import { useForm, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import useTranslate from "@/hooks/useTranslate";
import CustomButton from "@/components/ui/CustomButton";
import { postCafe } from "@/utils/api";
import { extractHourMinute } from "@/utils/commonFn";
import { CreateReviewRequestI } from "@/types/cafes";
import { Dayjs } from "dayjs";

interface propTypes {
  handleModalClose: () => void;
}

const CafeInputForm = ({ handleModalClose }: propTypes) => {
  const { t } = useTranslate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CafePostRequestI>({
    mode: "onChange",
    defaultValues: {
      title: "",
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

  /** Submit action */
  async function handleCafePostSubmit(data: CafePostRequestI) {
    const postData = {
      ...data,
      ...selectedIcons,
      openHour: extractHourMinute(data.openHour),
      closeHour: extractHourMinute(data.closeHour),
      reviews: [],
    };

    // Upload image and retrieve url
    postCafe(postData).then((res) => {
      handleModalClose();
    });
  }

  const [selectedIcons, setSelectedIcons] = useState({
    isWifi: false,
    isOutlet: false,
    isSmoking: false,
  });

  const [inputName, setInputName] = useState("");
  const [inputArea, setInputArea] = useState("");
  const [inputStation, setInputStation] = useState("");
  const [inputOpenHour, setInputOpenHour] = useState<Dayjs | null>(null);

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
          py: 3,
          gap: 2,
        }}
      >
        {/* Name */}
        <Box>
          <Typography variant="body1">Name</Typography>
          <TextField
            sx={{ width: "100%" }}
            label={inputName ? "" : t?.cafePostModal.form.cafeName.label}
            error={!!errors.title}
            helperText={errors.title?.message?.toString()}
            size="small"
            {...register("title", {
              required: t?.cafePostModal.form.cafeName.required,
            })}
            InputLabelProps={{
              shrink: false,
            }}
            onChange={(e) => setInputName(e.target.value)}
          />
        </Box>

        {/* Area */}
        <Box>
          <Typography variant="body1">Area</Typography>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size="small"
            options={Areas.map((area) => area.name)}
            renderInput={(params: any) => (
              <TextField
                size="small"
                {...params}
                error={!!errors.area}
                helperText={errors.area?.message?.toString()}
                {...register("area", {
                  required: t?.cafePostModal.form.area.required,
                })}
                label={inputArea ? "" : t?.cafePostModal.form.area.label}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                InputLabelProps={{ shrink: false }}
                onChange={(e) => setInputArea(e.target.value)}
              />
            )}
          />
        </Box>

        {/* Station */}
        <Box>
          <Typography variant="body1">Station</Typography>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={Stations.map((station) => station.name)}
            size="small"
            renderInput={(params: any) => (
              <TextField
                size="small"
                {...params}
                {...register("station", {
                  required: t?.cafePostModal.form.station.required,
                })}
                error={!!errors.station}
                helperText={errors.station?.message?.toString()}
                label={inputStation ? "" : t?.cafePostModal.form.station.label}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                InputLabelProps={{ shrink: false }}
                onChange={(e) => setInputStation(e.target.value)}
              />
            )}
          />
        </Box>

        {/* Opening Hour */}
        <Box>
          <Typography variant="body1">Opening Hours</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="openHour"
              control={control}
              render={({ field }) => (
                <TimePicker
                  label={
                    inputOpenHour ? "" : t?.cafePostModal.form.openHour.label
                  }
                  {...field}
                  sx={{
                    width: "100%",
                    mb: "1em",
                  }}
                  slotProps={{
                    textField: { size: "small" },
                  }}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                    setInputOpenHour(newValue);
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Box>

        {/* Icons */}
        <Icons
          selectedIcons={selectedIcons}
          setSelectedIcons={setSelectedIcons}
        />

        {/* Submit */}
        <Stack
          sx={{
            justifyContent: "flex-end",
            mt: 2,
            flexDirection: "row",
          }}
        >
          <CustomButton
            onClick={handleModalClose}
            sx={{
              mr: 2,
              width: 120,
              backgroundColor: "primary.main",
              color: "custom.grey",
              ":hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Cancel
          </CustomButton>
          <CustomButton type="submit" variant="contained" sx={{ width: 120 }}>
            Submit
          </CustomButton>
        </Stack>
      </Stack>
    </form>
  );
};

export default CafeInputForm;

export interface CafePostRequestI {
  title: string;
  image?: string;
  area: string;
  openHour: Dayjs | null;
  closeHour: Dayjs | null;
  isWifi: boolean | string;
  isSmoking: boolean | string;
  isOutlet: boolean | string;
  station: string;
  reviews?: CreateReviewRequestI[];
}
