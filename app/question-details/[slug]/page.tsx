import React from "react";
import QuestionCard from "@/app/components/card/card";
import Header from "@/app/components/header/header";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/base";
import {TextField} from "@mui/material";

export default function Page() {
  return (
    <>
      <Header title="جزییات سوال" />
      <QuestionCard />
      <h1>پاسخ ها</h1>
      <QuestionCard />
      <h1>پاسخ خود را ثبت کنید:</h1>
        <TextField
            sx={{
                width: 300
            }}
            InputProps={{ sx: { height: 80 } }}
            placeholder="متن پاسخ"
        />
        <div>
      <Button variant="contained" color="success">
        ارسال پاسخ
      </Button></div>
    </>
  );
}
