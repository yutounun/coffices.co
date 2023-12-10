"use client";
import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import SelectImagePage from "./SelectImagePage";
import CafeInputForm from "./CafeInputFormPage";
import { postCafe } from "_utils/api";
import { CafePostRequestI } from "types/cafes";
import { extractHourMinute } from "_utils/commonFn";
import { cafeImageUpload } from "_utils/api";
import { CafeListContext } from "../../../contexts/CafeListContext";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
}

const CafeModal = ({ showModal, handleModalClose }: propTypes) => {
  const { setCafeList } = useContext(CafeListContext);
  const [pageNumber, setPageNumber] = useState(1);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [cafeImageFile, setCafeImageFile] = useState<any>(null);

  const height = pageNumber === 1 ? "60%" : "auto";
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    pb: 5,
    height: height,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  };

  function incrementPageNumber() {
    setPageNumber((prev) => prev + 1);
  }
  function decrementPageNumber() {
    setPageNumber((prev) => prev - 1);
  }

  /**
   * Retrieves the selected image file from the input file reference.
   *
   * @return {File} The selected image file.
   */
  function getImageFile() {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    setCafeImageFile(inputFileRef.current.files[0]);
  }

  /** Submit action */
  async function handleCafePostSubmit(data: CafePostRequestI) {
    data.isWifi = data.isWifi === "true";
    data.isOutlet = data.isOutlet === "true";
    data.isSmoking = data.isSmoking === "true";
    data.openHour = extractHourMinute(data.openHour);
    data.closeHour = extractHourMinute(data.closeHour);

    // Upload image and retrieve url
    if (cafeImageFile) {
      await cafeImageUpload(cafeImageFile).then((res: any) => {
        data.image = res.url || "";
        data.reviews = [
          {
            title: "sampleです",
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam error impedit illo omnis! Quas magni architecto dolorum nihil aut enim voluptas optio repellat fugit temporibus, veritatis consequatur magnam recusandae dicta!",
            userId: "4389h384",
            rate: 4,
          },
        ];
        // And then, post detailed cafe data
        postCafe(data).then((res) => {
          setCafeList(res);
          handleModalClose();
        });
      });
    } else {
      data.reviews = [
        {
          title: "sampleです",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam error impedit illo omnis! Quas magni architecto dolorum nihil aut enim voluptas optio repellat fugit temporibus, veritatis consequatur magnam recusandae dicta!",
          userId: "4389h384",
          rate: 4,
        },
      ];
      postCafe(data).then((res) => {
        setCafeList(res);
        handleModalClose();
      });
    }
  }
  return (
    <Modal
      open={showModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {/* Modal Header */}
        <Stack
          direction="row"
          sx={{
            borderBottom: "solid 1px",
            px: 5,
            py: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={decrementPageNumber} sx={{ fontWeight: "bold" }}>
            {pageNumber !== 1 && "前へ"}
          </Button>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            カフェを新規追加
          </Typography>
          <Button onClick={incrementPageNumber} sx={{ fontWeight: "bold" }}>
            {pageNumber !== 2 && "次へ"}
          </Button>
        </Stack>

        {/* Modal Body */}
        {pageNumber === 1 && (
          <SelectImagePage
            inputFileRef={inputFileRef}
            getImageFile={getImageFile}
          />
        )}
        {pageNumber === 2 && (
          <CafeInputForm handleCafePostSubmit={handleCafePostSubmit} />
        )}
      </Box>
    </Modal>
  );
};

export default CafeModal;
