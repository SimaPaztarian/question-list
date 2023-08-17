"use client";

import { fetchList } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";
import ListPage from "@/app/containers/listPage";
import Header from "@/app/components/header/header";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["questionList"],
    queryFn: fetchList,
  });
    console.log(data?.data['posts']);

    return (
    <main>
      <Header title='لیست سوالات'/>
      <div>
        {data?.data['posts'].map((item) => {
          return <ListPage title={item.title} id={item.id} />;
        })}
      </div>
    </main>
  );
}
