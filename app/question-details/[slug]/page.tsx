"use client";
import React from "react";
import QuestionCard from "@/app/components/card/card";
import Header from "@/app/components/header/header";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAnswers, postNewAnswer } from "@/app/services/api";
import { Controller, useForm } from "react-hook-form";
export default function DetailPage({ searchParams }) {
  console.log('eee',searchParams);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      postId: "",
      body: "",
    },
  });
  const { mutate } = useMutation({ mutationFn: (data) => postNewAnswer(data) });
  const onSubmit = (data) => {
    mutate(data);
  };
  const { data: answerList, isLoading } = useQuery({
    queryKey: ["answerList"],
    queryFn: getAnswers,
  });
  return (
    <>
      <Header title="جزییات سوال" />
      <QuestionCard label="question" />
      <h4>پاسخ ها</h4>
      {answerList?.data?.map((answer) => {
        return <QuestionCard label="answer" item={answer} />;
      })}
      <QuestionCard label="answer" item={answerList?.data} />
      <h4>پاسخ خود را ثبت کنید:</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                sx={{
                  width: 300,
                }}
                InputProps={{ sx: { height: 80 } }}
                placeholder="متن پاسخ"
              />
            );
          }}
          name="answer"
        />
      </form>
      <div>
        <Button variant="contained" color="success" type="submit">
          ارسال پاسخ
        </Button>
      </div>
    </>
  );
}
