"use client";

import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import Header from "@/components/header";
import QuestionCard from "@/components/card";
import {getAnswers, getQuestions} from "@/services/api";

export default function Home() {
  const { data:questionList } = useQuery({
    queryKey: ["questionList"],
    queryFn: getQuestions,
  });
  return (
    <main>
      <Grid container>
        <Grid item xs={24}>
          <Header title="لیست سوالات" />
          {questionList?.data?.map((item) => {
            return <QuestionCard key={item.id} label="question" item={item} />;
          })}
        </Grid>
      </Grid>
    </main>
  );
}
