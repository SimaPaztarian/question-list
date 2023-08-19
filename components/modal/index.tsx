import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, InputLabel, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewQuestion } from "@/services/api";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

export default function Modal({ handleClose, open }) {
  const queryClient = useQueryClient();
  const handleRefetch = () => {
    queryClient.refetchQueries(["questionList"]);
  };
  const { mutate } = useMutation({
    mutationFn: (data) => postNewQuestion(data),
    onSuccess() {
      handleRefetch();
    },
    onError() {
      console.log("there is an error.");
    },
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      question: "",
    },
  });
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">
        ایجاد سوال جدید
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            <div>
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <>
                      <InputLabel>عنوان سوال</InputLabel>
                      <TextField
                        margin="normal"
                        fullWidth
                        {...field}
                        variant="outlined"
                      />
                    </>
                  );
                }}
                name="title"
              />
            </div>
            <div>
              <Controller
                control={control}
                render={({ field }) => {
                  return (
                    <>
                      <InputLabel>متن سوال</InputLabel>
                      <TextField
                        margin="normal"
                        multiline
                        maxRows={5}
                        fullWidth
                        {...field}
                        variant="outlined"
                      />
                    </>
                  );
                }}
                name="question"
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button
            sx={{
              background: "#27AE60",
              color: "#ffffff",
              "&:hover": {
                background: "#1f8c4d",
              },
            }}
            type="submit"
            onClick={handleClose}
          >
            ثبت سوال
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
