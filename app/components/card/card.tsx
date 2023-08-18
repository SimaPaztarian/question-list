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
export default function QuestionCard(props) {
  const { label, item } = props;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
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
        title={item?.title || 'مهسا موحد'}
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
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.75 2C5.02208 2 2 5.02208 2 8.75C2 9.43791 2.14554 10.1468 2.35732 10.8091L2.36068 10.8196C2.57868 11.5014 2.74647 12.0261 2.86295 12.4222C2.97485 12.8028 3.05981 13.1293 3.08134 13.3849C3.10678 13.6867 3.12001 13.9487 3.08147 14.2236C3.04294 14.4985 2.9582 14.7467 2.85076 15.0299C2.79524 15.1763 2.71923 15.3302 2.6228 15.5H8.75C12.4779 15.5 15.5 12.4779 15.5 8.75C15.5 5.02208 12.4779 2 8.75 2ZM0.631647 15.8254C0.548607 15.9462 0.5 16.0924 0.5 16.25C0.5 16.6642 0.835786 17 1.25 17H8.75C13.3063 17 17 13.3063 17 8.75C17 4.19365 13.3063 0.5 8.75 0.5C4.19365 0.5 0.5 4.19365 0.5 8.75C0.5 9.63943 0.686196 10.5079 0.928582 11.2659C1.15063 11.9604 1.31298 12.4683 1.42388 12.8454C1.53994 13.2401 1.57966 13.4281 1.58664 13.5109C1.61071 13.7964 1.60979 13.9169 1.59599 14.0154C1.58219 14.1138 1.54994 14.2299 1.44829 14.4979C1.3664 14.7137 1.17416 15.0116 0.631647 15.8254Z"
                      fill="#9CAEBB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.66675 7.08334C4.66675 6.66913 5.00253 6.33334 5.41675 6.33334H12.0834C12.4976 6.33334 12.8334 6.66913 12.8334 7.08334C12.8334 7.49756 12.4976 7.83334 12.0834 7.83334H5.41675C5.00253 7.83334 4.66675 7.49756 4.66675 7.08334Z"
                      fill="#9CAEBB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.66675 10.4167C4.66675 10.0024 5.00253 9.66666 5.41675 9.66666H8.75008C9.16429 9.66666 9.50008 10.0024 9.50008 10.4167C9.50008 10.8309 9.16429 11.1667 8.75008 11.1667H5.41675C5.00253 11.1667 4.66675 10.8309 4.66675 10.4167Z"
                      fill="#9CAEBB"
                    />
                  </svg>

                  {/*<ChatOutlined />*/}
                  <span>15</span>
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
                sx={{ color: "#27AE60", borderColor: "#27AE60" }}
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
