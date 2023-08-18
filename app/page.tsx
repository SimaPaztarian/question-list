"use client";

import { fetchList } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";
import ListPage from "@/app/containers/listPage";
import Header from "@/app/components/header/header";
import {Container} from "@mui/system";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["questionList"],
    queryFn: fetchList,
  });


    return (
    <main>
      <Container maxWidth='100%'>
      <Header title='لیست سوالات'/>
      <div>
        {data?.data?.map((item) => {
          return <ListPage title={item.title} question={item.question} id={item.id} />;
        })}
      </div>
      </Container>
    </main>
  );
}
