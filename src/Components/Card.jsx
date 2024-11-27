import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";

export default function CardCom({ cardData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box
      sx={{
        perspective: "1000px",
        width: 220,
        height: 220,
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
      >
        {/* Front Side */}
        <Card
          sx={{
            position: "absolute",
            backfaceVisibility: "hidden",
            borderRadius: "12px",
            overflow: "hidden",
            width: "100%",
            height: "100%",
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
                fontSize: "40px",
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

        {/* Back Side */}
        <Card
          sx={{
            position: "absolute",
            backfaceVisibility: "hidden",
            borderRadius: "12px",
            overflow: "hidden",
            width: 220,
            height: 220,
            backgroundColor: cardData.hexcode,
            color: "#fff",
            transform: "rotateY(180deg)",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              zIndex: 2,
            }}
          >
            <img
              src={cardData.image}
              alt={cardData.text}
              style={{
                width: "120px",
                borderRadius: "8px",
              }}
            />
          </Box>

          <Box>
            <Box display={"flex"} alignItems={"center"} gap={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                  }}
                >
                  {cardData.counts.publications}
                </Typography>
                <Typography color="#eee" fontWeight={600} fontSize={"14px"}>
                  Publications
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                  }}
                >
                  {cardData.counts.conferences}
                </Typography>
                <Typography color="#eee" fontWeight={600} fontSize={"14px"}>
                  Conferences
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={4}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                  }}
                >
                  0
                </Typography>
                <Typography color="#eee" fontWeight={600} fontSize={"14px"}>
                  Paper
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                  }}
                >
                  0
                </Typography>
                <Typography color="#eee" fontWeight={600} fontSize={"14px"}>
                  Poster
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                  }}
                >
                  0
                </Typography>
                <Typography color="#eee" fontWeight={600} fontSize={"14px"}>
                  IPR
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
