"use client";

import React, { useState, useEffect } from "react";
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
import { postCafe, putCafe } from "@/utils/api";
import { extractHourMinute } from "@/utils/commonFn";
import { CreateReviewRequestI } from "@/types/cafes";
import dayjs, { Dayjs } from "dayjs";
import useSelectedCafeStore from "@/store/selectedCafe";
import useCafeModalStore from "@/store/openCafeModal";

interface propTypes {
  handleModalClose: () => void;
}

const CafeInputForm = ({ handleModalClose }: propTypes) => {
  const { t } = useTranslate();
  const { selectedCafe: initialData } = useSelectedCafeStore();
  const { modalType } = useCafeModalStore();

  const isEdit = modalType === "edit";
  const initialOpenHour = isEdit ? dayjs(initialData?.openHour) : null;
  const initialCloseHour = isEdit ? dayjs(initialData?.closeHour) : null;
  console.log("initialData?.area", initialData?.area);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CafePostRequestI>({
    mode: "onChange",
    defaultValues: {
      title: isEdit ? initialData?.title : "",
      image: isEdit ? initialData?.image : "",
      area: isEdit ? initialData?.area : "",
      station: isEdit ? initialData?.station : "",
      openHour: initialOpenHour,
      closeHour: initialCloseHour,
      isWifi: isEdit ? initialData?.isWifi : false,
      isSmoking: isEdit ? initialData?.isSmoking : false,
      isOutlet: isEdit ? initialData?.isOutlet : false,
    },
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setInputName(initialData.title);
      setInputArea(initialData.area);
      setInputStation(initialData.station);
    }
  }, [isEdit, initialData]);

  /** Submit action */
  async function handleCafePostSubmit(data: CafePostRequestI) {
    const postData = {
      ...data,
      ...selectedIcons,
      openHour: extractHourMinute(data.openHour),
      closeHour: extractHourMinute(data.closeHour),
      reviews: [],
    };

    if (modalType === "edit") {
      putCafe(postData).then((res) => {
        handleModalClose();
      });
    } else {
      postCafe(postData).then((res) => {
        handleModalClose();
      });
    }
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
  const [inputCloseHour, setInputCloseHour] = useState<Dayjs | null>(null);

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
          <Controller
            name="area"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                freeSolo
                id="area-autocomplete"
                disableClearable
                options={Areas.map((area) => area.name)}
                value={value}
                size="small"
                onInputChange={(event, newValue) => onChange(newValue)}
                renderInput={(params) => (
                  <TextField
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
            )}
          />
        </Box>

        {/* Station */}
        <Box>
          <Typography variant="body1">Station</Typography>
          <Controller
            name="station"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                size="small"
                freeSolo
                id="area-autocomplete"
                disableClearable
                options={Stations.map((station) => station.name)}
                value={value}
                onInputChange={(event, newValue) => onChange(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.station}
                    helperText={errors.station?.message?.toString()}
                    {...register("station", {
                      required: t?.cafePostModal.form.station.required,
                    })}
                    label={
                      inputStation ? "" : t?.cafePostModal.form.station.label
                    }
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    InputLabelProps={{ shrink: false }}
                    onChange={(e) => setInputStation(e.target.value)}
                  />
                )}
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

        {/* Closing Hour */}
        <Box sx={{ mt: -2 }}>
          <Typography variant="body1">Closing Hours</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="closeHour"
              control={control}
              render={({ field }) => (
                <TimePicker
                  label={
                    inputCloseHour ? "" : t?.cafePostModal.form.closedTime.label
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
                    setInputCloseHour(newValue);
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
