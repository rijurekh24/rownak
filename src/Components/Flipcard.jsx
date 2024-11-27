import React from "react";
import { Card, Typography, Box } from "@mui/material";

const FlipCard = ({ cardData }) => {
  return (
    <Box
      sx={{
        perspective: "1000px", // Enables 3D space for the flip effect
        width: 200,
        height: 200,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          "&:hover": {
            transform: "rotateY(180deg)", // Flips the card on hover
          },
        }}
      >
        {/* Front Side */}
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundImage: `url(${cardData.bg})`,
            backgroundSize: "cover",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={cardData.image}
            alt={cardData.text}
            style={{
              width: "80px",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            {cardData.text}
          </Typography>
        </Card>

        {/* Back Side */}
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: cardData.hexcode,
            color: "#fff",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            overflow: "hidden",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {cardData.counts.publications}
          </Typography>
          <Typography>Publications</Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            {cardData.counts.conferences}
          </Typography>
          <Typography>Conferences</Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default FlipCard;
