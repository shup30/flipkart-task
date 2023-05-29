import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FilterSection from "../comp/Filtersection/FilterSection";
import Sort from "../comp/Sort/Sort";
import ProductList from "../comp/ProductList/ProductList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Ui = () => {
  const [finalData, setFinalData] = useState([]);
  const [sorts, setSorts] = useState('');

  const filterData = (data) => {
    if (sorts !== '') {
      if (sorts === 'lowToHigh') {
        const sortedData = data.sort((a, b) => Number(a.price) - Number(b.price));
        return sortedData;
      } if (sorts === 'highToLow') {
        const sortedData = data.sort((a, b) => Number(b.price) - Number(a.price));
        return sortedData;
      }
    }
    else {
      return data
    }
  }

  useEffect(() => {
    fetch("https://jsonblob.com/api/jsonBlob/1111502705150672896").then((result) => {
      result.json().then((resp) => {
        console.log(resp.products);
        let data = resp.products;
        setFinalData(filterData(data));
      });
    });
  }, [sorts]);

  const handleLowToHigh = () => {
    setSorts('lowToHigh')
  }

  const handleHighToLow = () => {
    setSorts('highToLow')
  }

  const clearSorts = () => {
    setSorts('')
  }

  console.log('final Data : ', finalData);

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <FilterSection />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <h6> Showing 12 results for "Shoes" </h6>
              <Sort handleLowToHigh={handleLowToHigh} handleHighToLow={handleHighToLow} clearSorts={clearSorts} />
            </Item>

            <Item style={{ marginTop: 10 }}>
              <ProductList data={finalData} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Ui;
