import React, { useEffect, useState } from "react";
import CardCom from "../Components/Card";
import axios from "axios";
import { Container, Grid2 } from "@mui/material";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.dpu.openscholar.in/sdg/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid2 container gap={2} alignItems="center" justifyContent="center">
        {data.map((item, index) => (
          <Grid2 item key={index}>
            <CardCom cardData={item} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;
