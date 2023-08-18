import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {Input, TextField, useMediaQuery} from "@mui/material";
import { Control, Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { postNewQuestion } from "@/app/services/api";
import {useTheme} from "@mui/system";

export default function Modal({ handleClose, open }) {
  const { mutate } = useMutation({
    mutationFn: (data) => postNewQuestion(data),
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
    >
      <DialogTitle id="alert-dialog-title">ایجاد سوال جدید </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
            <Controller
              control={control}
              render={({ field }) => {
                return <TextField margin="normal" fullWidth {...field} variant="outlined" label='عنوان سوال'/>;
              }}
              name="title"
            />
            </div>
            <div>
            <Controller
              control={control}
              render={({ field }) => {
                return <TextField margin="normal" fullWidth {...field} variant="outlined" label='متن سوال'/>;
              }}
              name="question"
            />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button
                  sx={{ background: "#27AE60",color:'#ffffff' }} type="submit" onClick={handleClose}>ثبت سوال</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
