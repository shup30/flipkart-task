import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import axios from "axios";

const ProductList = ({ data }) => {

  // const Loading =()=>{
  //   return(<>
  //     Loading....
  //   </>)
  // }

  // const ShowProduct = () =>{

  // }

  return (
    <>
      <div className="row justify-content-center">
        <h1>Products</h1>
        {data.map((prod, index) => {
          return (
              <div className="col-md-4">
                <Card sx={{ maxWidth: 245 }} key={prod?.id}>
                  <CardActionArea>
                    {/* {prod?.images?.map((imageData, index) => ( */}
                    <CardMedia
                      component="img"
                      height="140"
                      image={prod.images[0]}
                      alt={prod?.title}
                    />
                    {/* ))} */}

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {prod?.title}
                      </Typography>
                      <button style={{ backgroundColor: "green" }}>
                        {prod?.rating?.rate}
                      </button>
                      <h3>$:{prod?.price}</h3>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
