"use client";

import { getQuestions } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";
import Header from "@/app/components/header/header";
import { Container } from "@mui/system";
import QuestionCard from "@/app/components/card/card";
import { Grid } from "@mui/material";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["questionList"],
    queryFn: getQuestions,
  });

  return (
    <main>
      <Grid container>
        <Grid item xs={24}>
          <Header title="لیست سوالات" />
          {data?.data?.map((item) => {
            return <QuestionCard key={item.id} label="question" item={item} />;
          })}
        </Grid>
      </Grid>
    </main>
  );
}
