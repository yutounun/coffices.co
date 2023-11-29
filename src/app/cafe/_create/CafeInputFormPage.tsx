"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "../../../../node_modules/@mui/material/index";

const CafeInputForm = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  function handleCafePostSubmit(e) {
    console.log("e :", e);
  }
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
          py: "5em",
        }}
        spacing={4}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("title")}
        />
        <TextField
          id="outlined-basic"
          label="Rating"
          type="number"
          variant="outlined"
          sx={{ width: "20%" }}
          {...register("rating")}
        />
        <FormControl sx={{ width: "80%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Wifi</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            {...register("isWifi")}
          >
            <FormControlLabel value="有" control={<Radio />} label="有" />
            <FormControlLabel value="無" control={<Radio />} label="無" />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ width: "80%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">電源席</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            {...register("isOutlet")}
          >
            <FormControlLabel value="有" control={<Radio />} label="有" />
            <FormControlLabel value="無" control={<Radio />} label="無" />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ width: "80%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">喫煙所</FormLabel>
          <RadioGroup
            row
            {...register("isSmokingArea")}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="有" control={<Radio />} label="有" />
            <FormControlLabel value="無" control={<Radio />} label="無" />
          </RadioGroup>
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
