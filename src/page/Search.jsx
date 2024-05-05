import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useEffect } from "react";
import AuthService from "../service/auth";

const Search = () => {
  const { word } = useSelector((state) => state.auth);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await AuthService.getSearchProduct(word);
      console.log(response.data.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [word]);

  return (
    <Stack mt={4} mb={4}>
      <Typography>Search:{word}</Typography>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        sx={{
          justifyContent: {
            xs: "center",
            sm: "space-around",
            lg: "space-between",
          },
        }}
      >
        {product &&
          product.map((item) => (
            <Card sx={{ width: "260px", margin: "20px 20px 20px 0px" }}>
              <CardActionArea>
                <img
                  src="../../img/1.png"
                  alt=""
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    marginBottom={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"18px"}
                    color={"#ED3729"}
                    fontWeight={"600"}
                    textAlign={"center"}
                    variant="h1"
                    component="div"
                  >
                    {item.discount_price} сум
                  </Typography>
                  <span
                    style={{
                      color: "#909090",
                      textDecoration: "line-through",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {item.price} сум
                  </span>
                  <Typography
                    height={"40px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h1"
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"800"}
                    color={"black"}
                    marginTop={"15px"}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"25px"}
                fontWeight={"100"}
                color={"#BDBDBD"}
                padding={"10px"}
                borderTop={"2px solid #F2F2F2"}
              >
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <LuShoppingCart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <FaRegHeart />
                </Button>
                |
                <Button
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    bgcolor: "transparent",
                    fontSize: "22px",
                    color: "#BDBDBD",
                  }}
                >
                  <PiScales />
                </Button>
              </Stack>
            </Card>
          ))}
      </Stack>
    </Stack>
  );
};

export default Search;
