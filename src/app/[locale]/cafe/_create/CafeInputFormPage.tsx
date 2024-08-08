"use client";

import React, { useState, useEffect } from "react";
import Stations from "@/data/stations.json";
import Icons from "#/[locale]/cafe/_create/Icons";
import Areas from "@/data/areas.json";
import { useForm, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import CustomButton from "@/components/ui/CustomButton";
import { postCafe, putCafe } from "@/utils/api";
import { extractHourMinute } from "@/utils/commonFn";
import { CafeI, CreateReviewRequestI } from "@/types/cafes";
import dayjs, { Dayjs } from "dayjs";
import useSelectedCafeStore from "@/store/selectedCafe";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import useSnackbarStore from "@/store/snackbar";

interface propTypes {
  handleModalClose: () => void;
}

const CafeInputForm = ({ handleModalClose }: propTypes) => {
  const t = useTranslations("cafePostModal");
  const { selectedCafe: initialData } = useSelectedCafeStore();
  const { openSnackbar } = useSnackbarStore();
  const { modalType } = useCafeModalStore();
  const router = useRouter();

  const [inputName, setInputName] = useState("");
  const [inputArea, setInputArea] = useState("");
  const [inputStation, setInputStation] = useState("");

  const isEdit = modalType === "edit";

  const today = dayjs().startOf("day"); // 現在の日付の 00:00:00.000 を取得

  const initialOpenHour =
    isEdit && initialData?.openHour
      ? dayjs(
          `${today.format("YYYY-MM-DD")}T${initialData.openHour}:00.000Z`
        ).subtract(9, "hour")
      : null;
  const initialCloseHour =
    isEdit && initialData?.openHour
      ? dayjs(
          `${today.format("YYYY-MM-DD")}T${initialData.closeHour}:00.000Z`
        ).subtract(9, "hour")
      : null;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<CafePostRequestI>({
    mode: "onChange",
    defaultValues: {
      title: isEdit ? initialData?.title : "",
      image: isEdit ? initialData?.image : "",
      area: isEdit ? initialData?.area : "",
      station: isEdit ? initialData?.station : "",
      openHour: initialOpenHour,
      closeHour: dayjs(initialCloseHour),
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
  async function handleCafeSubmit(data: CafePostRequestI) {
    const postData = {
      ...data,
      ...selectedIcons,
      openHour: extractHourMinute(data.openHour),
      closeHour: extractHourMinute(data.closeHour),
      reviews: [],
    };

    try {
      if (modalType === "edit" && initialData) {
        const cafe: CafeI = await putCafe({
          ...postData,
          _id: initialData._id,
          id: initialData.id,
        });
        openSnackbar("success", `${cafe.title} is just edited`);
        handleModalClose();
      } else {
        const cafe: CafeI = await postCafe(postData);
        handleModalClose();
        openSnackbar("success", `${cafe.title} is just posted`);
        router.push(`/cafe/${cafe._id}`);
      }
    } catch (err: any) {
      const errorMessage = err.message || "An unknown error occurred";
      openSnackbar("error", errorMessage);
    }
  }

  const [selectedIcons, setSelectedIcons] = useState({
    isWifi: isEdit && initialData ? initialData.isWifi : false,
    isOutlet: isEdit && initialData ? initialData.isOutlet : false,
    isSmoking: isEdit && initialData ? initialData.isSmoking : false,
  });

  return (
    <form
      onSubmit={handleSubmit(handleCafeSubmit)}
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
          <Typography variant="body1">{t("form.cafeName.label")}</Typography>
          <TextField
            color="secondary"
            sx={{ width: "100%" }}
            label={inputName ? "" : t("form.cafeName.label")}
            error={!!errors.title}
            helperText={errors.title?.message?.toString()}
            size="small"
            {...register("title", {
              required: t("form.cafeName.label.required"),
            })}
            InputLabelProps={{
              shrink: false,
            }}
            onChange={(e) => setInputName(e.target.value)}
          />
        </Box>
        {/* Area */}
        <Box>
          <Typography variant="body1">{t("form.area.label")}</Typography>
          <Controller
            name="area"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                freeSolo
                id="area-autocomplete"
                disableClearable
                options={Areas.map((area) => area.en)}
                value={value}
                onChange={(event, newValue) => {
                  onChange(newValue); // フォームの値を更新
                  setValue("area", newValue); // useFormの値も更新
                  setInputArea(newValue);
                }}
                size="small"
                onInputChange={(event, newValue) => {
                  onChange(newValue); // フォームの値を更新
                  setValue("area", newValue); // useFormの値も更新
                  setInputArea(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    color="secondary"
                    {...params}
                    error={!!errors.area}
                    helperText={errors.area?.message?.toString()}
                    label={inputArea ? "" : t("form.area.label")}
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
          <Typography variant="body1">{t("form.station.label")}</Typography>
          <Controller
            name="station"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                size="small"
                freeSolo
                id="station-autocomplete"
                disableClearable
                options={Stations.map((station) => station.en)}
                value={value}
                onChange={(event, newValue) => {
                  onChange(newValue); // フォームの値を更新
                  setValue("station", newValue); // useFormの値も更新
                  setInputStation(newValue);
                }}
                onInputChange={(event, newValue) => {
                  onChange(newValue); // フォームの値を更新
                  setValue("station", newValue); // useFormの値も更新
                  setInputStation(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    color="secondary"
                    {...params}
                    error={!!errors.station}
                    helperText={errors.station?.message?.toString()}
                    label={inputStation ? "" : t("form.station.label")}
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
          <Typography variant="body1">{t("form.openHour.label")}</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="openHour"
              control={control}
              render={({ field }) => (
                <TimePicker
                  {...field}
                  sx={{
                    width: "100%",
                    mb: "1em",
                  }}
                  slotProps={{
                    textField: {
                      size: "small",
                      color: "secondary",
                      InputLabelProps: { shrink: false },
                    },
                  }}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        {/* Closing Hour */}
        <Box>
          <Typography variant="body1">{t("form.closedTime.label")}</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="closeHour"
              control={control}
              render={({ field }) => (
                <TimePicker
                  {...field}
                  sx={{
                    width: "100%",
                    mb: "1em",
                    borderColor: "red",
                  }}
                  slotProps={{
                    textField: {
                      size: "small",
                      color: "secondary",
                      InputLabelProps: { shrink: false },
                    },
                  }}
                  onChange={(newValue) => {
                    field.onChange(newValue);
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
