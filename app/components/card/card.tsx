import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import {SentimentSatisfiedAlt,SentimentVeryDissatisfied} from "@mui/icons-material";

export default function QuestionCard({ label }) {
  return (
    <Card sx={{ minWidth: 275 }} label={label}>
      <CardHeader
        title="heading"
        avatar={
          <Avatar
            alt="user"
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
        }
      />
      <hr />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          variant="solid"
          gutterBottom
        >
            content
        </Typography>

        {label == "answer" && (
          <>
            <CardActions disableSpacing>
              <Button
                variant="outlined"
                color="success"
                endIcon={<SentimentSatisfiedAlt />}
              >
                پاسخ خوب بود
              </Button>
            </CardActions>
            <CardActions disableSpacing>
              <Button
                variant="outlined"
                color="error"
                endIcon={<SentimentVeryDissatisfied />}
              >
                پاسخ خوب نبود
              </Button>
            </CardActions>
          </>
        )}
      </CardContent>
    </Card>
  );
}
