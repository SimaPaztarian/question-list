"use client";
import React from "react";
import QuestionCard from "@/app/components/card/card";
import Header from "@/app/components/header/header";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAnswers, postNewAnswer } from "@/app/services/api";
import { Controller, useForm } from "react-hook-form";
export default function DetailPage({ params }) {
  const selectedQuestion = JSON.parse(
    sessionStorage.getItem(`/question-details/${params?.slug}`)
  );
  const parentId=selectedQuestion?.item?.id
  const { control, handleSubmit } = useForm({
    defaultValues: {
      postId: parentId,
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
      <QuestionCard label="question" item={selectedQuestion?.item} />
      <h4>پاسخ ها</h4>
      {answerList?.data
        ?.filter((item) => item.postId === selectedQuestion?.item?.id)
        .map((answer) => {
          return <QuestionCard key={answer?.id} label="answer" item={answer} />;
        })}
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
          name="body"
        />
            <div>
                <Button variant="contained" color="success" type="submit">
                    ارسال پاسخ
                </Button>
            </div>
      </form>

    </>
  );
}
