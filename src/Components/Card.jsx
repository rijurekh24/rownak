import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function CardCom({ cardData }) {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        width: 200,
        height: 200,
        backgroundImage: `url(${cardData.bg})`,
        backgroundSize: "cover",
        color: "#fff",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 0,
          borderRadius: "8px",
          padding: "8px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={cardData.image}
          alt={cardData.text}
          style={{
            width: "120px",
            marginBottom: "8px",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
          fontSize: "1rem",
          fontWeight: "bold",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            transform: "scaleY(1.4)",
            display: "inline-block",
          }}
        >
          {cardData.counts.publications}
        </Typography>
        <Typography color="#ddd" fontWeight={600}>
          Publications
        </Typography>
      </Box>
    </Card>
  );
}
