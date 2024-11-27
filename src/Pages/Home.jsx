import React, { useEffect, useState } from "react";
import CardCom from "../Components/Card";
import axios from "axios";
import { Container, Grid } from "@mui/material";
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
      <Grid container gap={4} alignItems="center" justifyContent="center">
        {data.map((item, index) => (
          <Grid item key={index}>
            <CardCom cardData={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
