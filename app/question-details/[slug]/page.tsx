"use client";
import React, {useEffect, useState} from "react";
import QuestionCard from "@/components/card";
import Header from "@/components/header";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewAnswer } from "@/services/api";
import { Controller, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
export default function DetailPage({ params }) {

  //refetching getAnswer request
  const queryClient = useQueryClient();
  const [answerList,setAnswerList]=useState()
  const handleRefetch = () => {
    queryClient.refetchQueries(["answerList"]).then(()=>
       setAnswerList(queryClient.getQueryData(["answerList"])?.data)
  );
  };
  useEffect(
    (answerList) => {
      if (typeof answerList == "undefined") {
        handleRefetch();
      }
    },
    [answerList]
  );

  //get questionData from storage
  const selectedQuestion = JSON.parse(
    sessionStorage.getItem(`/question-details/${params?.slug}`)
  );
  const parentId = selectedQuestion?.item?.id;
  //form values
  const { control, handleSubmit, resetField } = useForm({
    defaultValues: {
      postId: parentId,
      body: "",
    },
  });
  //post new answer
  const { mutate } = useMutation({
    mutationFn: (data) => postNewAnswer(data),
    onSuccess() {
      handleRefetch();
    },
    onError() {
      console.log("there is an error.");
    },
  });
  const onSubmit = (data) => {
    mutate(data);
    resetField("body");
  };
  return (
    <div style={{ direction: "rtl" }}>
      <Header title="جزییات سوال" />
      <QuestionCard label="question" item={selectedQuestion?.item} />
      <Typography
        variant="h6"
        sx={{
          margin: "1rem 3.5rem 0 3.5rem",
        }}
      >
        پاسخ ها
      </Typography>
      {answerList
        ?.filter((item) => item.postId === selectedQuestion?.item?.id)
        .map((answer) => {
          return <QuestionCard key={answer?.id} label="answer" item={answer} />;
        })}
      <Typography
        variant="h6"
        sx={{
          margin: "1rem 3.5rem 0 3.5rem",
        }}
      >
        پاسخ خود را ثبت کنید:
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "90%" }}>
        <Controller
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                fullWidth
                InputProps={{
                  sx: {
                    height: 80,
                    margin: "1rem 3.5rem 0 3.5rem",
                    background: "#ffffff",
                  },
                }}
                placeholder="متن پاسخ"
              />
            );
          }}
          name="body"
        />
        <div>
          <Button
            variant="contained"
            sx={{
              background: "#27AE60",
              color: "#ffffff",
              "&:hover": {
                background: "#1f8c4d",
              },
              margin: "1rem 3.5rem 0 3.5rem",
            }}
            type="submit"
          >
            ارسال پاسخ
          </Button>
        </div>
      </form>
    </div>
  );
}
