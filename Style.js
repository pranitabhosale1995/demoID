// src/features/auth/pages/LoginStyles.js
import { styled } from "@mui/material/styles";
import { Box, Paper, TextField, Grid } from "@mui/material";

export const RootContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "url('/src/assets/Backgrounds/purpleGlassBg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
}));

export const ContentGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));

export const GlassCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: 25,
  background: "rgba(255, 255, 255, 0.18)",
  backdropFilter: "blur(14px)",
  boxShadow: "0 4px 40px rgba(93, 63, 211, 0.25)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  maxWidth: 400,
  width: "100%",
  margin: "auto",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.65)",
  },
}));
