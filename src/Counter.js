import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";


export function Counter() {
  let [like, setLike] = useState(0);

  let [disLike, setDisLike] = useState(0);

  const increamentLike = () => setLike(like + 1);
  const increamentDisLike = () => setDisLike(disLike + 1);

  useEffect(()=>{
    console.log("The like Value is Updated", like)
  },[like, disLike])

  return (
    <div>
      <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="Dislike"
        color="error"
        onClick={increamentDisLike}
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
