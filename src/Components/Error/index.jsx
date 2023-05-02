import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const onRedirect = () => {
    navigate("/");
  };
  return (
    <Box sx={{ textAlign: "center", alignItems: "center" }}>
      <Typography variant="h1">Sorry...!</Typography>
      <Typography variant="h3" color={"#3E5E5E"}>
        This Page is not Found...!
      </Typography>
      <Button onClick={() => onRedirect()} variant="contained">
        Back to Home
      </Button>
    </Box>
  );
};

export default Error;
