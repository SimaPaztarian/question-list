import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input } from "@mui/material";
import {Control, Controller, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {postNewQuestion} from "@/app/services/api";

export default function Modal({ handleClose, open }) {
  const{mutate}=useMutation({mutationFn:(data)=>postNewQuestion(data)})

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      question: "",
    },
  });
  const onSubmit = (data) => {
    mutate(data)
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Controller
              control={control}
              render={({ field }) => {
                return <Input {...field} />;
              }}
              name="title"
            />
            <Controller
                control={control}
                render={({ field }) => {
                return <Input {...field} />;
              }}
              name="question"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button type="submit">ثبت سوال</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
