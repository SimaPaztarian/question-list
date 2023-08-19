import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader } from "@mui/material";
import {
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  ChatOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAnswers } from "@/services/api";
export default function QuestionCard(props) {
  const { label, item } = props;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const { data: answerList } = useQuery({
    queryKey: ["answerList"],
    queryFn: getAnswers,
  });
  const comments = answerList?.data?.filter(
    (answer) => answer?.postId === item?.id
  ).length;

  return (
    <Card
      sx={{
        margin: "1rem 3.5rem 0 3.5rem",
        boxShadow:
          "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
      label={label}
    >
      <CardHeader
        sx={{
          background: "#FFFFFF",
          boxShadow:
            "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
          borderRadius: "8px",
          fontSize: "16px",
        }}
        title={item?.title || "مهسا موحد"}
        avatar={<Avatar alt="user" src="/static/avatar.jpg" />}
        action={
          <>
            <span>
              ساعت: 13:03 | تاریخ: 1402/05/27
              {label == "answer" && (
                <>
                  <SentimentSatisfiedAlt />
                  <span>{like}</span>
                  <SentimentVeryDissatisfied />
                  <span>{disLike}</span>
                </>
              )}
              {label == "question" && (
                <>
                  <ChatOutlined />
                  <span>{comments || 0}</span>
                </>
              )}
            </span>
          </>
        }
      />
      <CardContent sx={{ background: "#F9F9F9" }}>
        <Typography variant="solid" gutterBottom>
          {label === "question" ? item?.question : item?.body}
        </Typography>
        {label == "answer" && (
          <div style={{ direction: "ltr" }}>
            <CardActions disableSpacing>
              <Button
                variant="outlined"
                sx={{
                  display: "inline-block",
                  color: "#66CB9F",
                  borderColor: "#E4E9EC",
                }}
                endIcon={<SentimentSatisfiedAlt />}
                onClick={() => setLike(like + 1)}
              >
                پاسخ خوب بود
              </Button>
            </CardActions>
            <CardActions disableSpacing>
              <Button
                variant="outlined"
                sx={{
                  display: "inline-block",
                  color: "#F16063",
                  borderColor: "#E4E9EC",
                }}
                endIcon={<SentimentVeryDissatisfied />}
                onClick={() => setDisLike(disLike + 1)}
              >
                پاسخ خوب نبود
              </Button>
            </CardActions>
          </div>
        )}
        <div style={{ direction: "ltr" }}>
          {(label == "question") & (document.location.pathname == "/") && (
            <Link
              href={{
                pathname: `/question-details/${item?.id}`,
              }}
              onClick={() =>
                sessionStorage.setItem(
                  `/question-details/${item?.id}`,
                  JSON.stringify(props)
                )
              }
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#27AE60",
                  color: "#27AE60",
                  "&:hover": {
                    borderColor: "#1f8c4d",
                    color: "1f8c4d",
                  },
                }}
              >
                مشاهده جزییات
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
