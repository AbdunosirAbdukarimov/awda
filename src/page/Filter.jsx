import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { ApiService } from "../service/apiService";
import { useEffect } from "react";
import { useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const [value, setValue] = React.useState([20, 37]);
  const { subCategory, theme } = useParams();
  const [product, setProduct] = useState([]);
  const getAPi = async () => {
  try {
      const {data} = await ApiService.getProduct(`${subCategory}/${theme}`);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAPi()
  }, [subCategory]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Typography
        variant="h1"
        fontSize={"14px"}
        color={"#626364"}
        margin={"20px 0"}
      >
        Главная › Телефоны, планшеты › Телефоны и гаджеты
      </Typography>
      <Typography
        variant="h1"
        fontSize={"20px"}
        color={"#202020"}
        fontWeight={"600"}
      >
        Смартфоны в Ташкенте
      </Typography>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"start"}
        marginTop={"20px"}
      >
        <Stack width={"360px"} marginRight={"20px"}>
          <Card sx={{ padding: "10px" }}>
            <Accordion elevation={0}>
              <AccordionSummary elevation={0} expandIcon={<ExpandMoreIcon />}>
                Цена (cум)
              </AccordionSummary>
              <AccordionDetails elevation={0}>
                <TextField
                  variant="outlined"
                  placeholder="от 300 000"
                  type="number"
                  sx={{
                    width: "50%",
                    "& label.Mui-focused": {
                      color: "transparent",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "transparent",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#909090",
                      },
                      "&:hover fieldset": {
                        borderColor: "#909090",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#ED3729",
                      },
                    },
                    "& fieldset": {
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  placeholder="до 103 300 000"
                  type="number"
                  sx={{
                    width: "50%",
                    "& label.Mui-focused": {
                      color: "transparent",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "transparent",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#909090",
                      },
                      "&:hover fieldset": {
                        borderColor: "#909090",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#ED3729",
                      },
                    },
                    "& fieldset": {
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    },
                  }}
                />
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  color={"error"}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary elevation={0} expandIcon={<ExpandMoreIcon />}>
                Наличие
              </AccordionSummary>
              <AccordionDetails elevation={0}>
                <FormControlLabel
                  sx={{
                    border: "1px solid #ED3729",
                    display: "flex",
                    justifyContent: "start",
                    borderRadius: "5px",
                  }}
                  control={<Checkbox defaultChecked color="error" />}
                  label="Забрать сегодня"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary elevation={0} expandIcon={<ExpandMoreIcon />}>
                Бренд
              </AccordionSummary>
              <AccordionDetails
                elevation={0}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="LG (30)"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Samsung (30)"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Artel (7)"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Huawei (30)"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary elevation={0} expandIcon={<ExpandMoreIcon />}>
                Емкость аккумулятора
              </AccordionSummary>
              <AccordionDetails
                elevation={0}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  sx={{ color: "#626364" }}
                  control={<Checkbox color="error" />}
                  label="1821 мА⋅ч"
                />
                <FormControlLabel
                  sx={{ color: "#626364" }}
                  control={<Checkbox color="error" />}
                  label="3000 мА⋅ч"
                />
                <FormControlLabel
                  sx={{ color: "#626364" }}
                  control={<Checkbox color="error" />}
                  label="4500 мА⋅ч"
                />
                <FormControlLabel
                  sx={{ color: "#626364" }}
                  control={<Checkbox color="error" />}
                  label="5000 мА⋅ч"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary elevation={0} expandIcon={<ExpandMoreIcon />}>
                Страна производитель
              </AccordionSummary>
              <AccordionDetails
                elevation={0}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Вьетнам"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Китай"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Artel "
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="Huawei "
                />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary elevation={0} expandIcon={<ExpandMoreIcon />}>
                Количество ядер
              </AccordionSummary>
              <AccordionDetails
                elevation={0}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="4"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="6"
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="8 "
                />
                <FormControlLabel
                  control={<Checkbox color="error" />}
                  label="12 "
                />
              </AccordionDetails>
            </Accordion>
            <Button
              variant="contained"
              sx={{
                "&:hover": { backgroundColor: "#ED3729" },
                bgcolor: "#ED3729",
                color: "white",
                width: "100%",
                marginTop: "15px",
              }}
            >
              Показать
            </Button>
          </Card>
        </Stack>
        <Stack
          width={"70%"}
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
              <Card sx={{ width: "230px", margin: "0px 20px 20px 0px" }}>
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
                      {item.discount_price} сум/мес
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

          {/* <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/2.png"
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
                  18 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  99 000 сум
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
                  Наушники Panasonic RP-HJE125E-R
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/3.png"
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
                  9 525 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  10 520 000 сум
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
                  Iphone 13 pro 256 Gb
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/4.png"
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
                  600 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  909 000 сум
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
                  Источник бесперебойного питания AVT 600 AVR (EA260)
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/5.png"
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
                  130 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  200 000 сум
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
                  Беспроводная мышь Logitech M220 SILENT
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/6.png"
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
                  18 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  253 000 сум
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
                  Кард-ридер Earldom OT27
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/7.png"
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
                  7 250 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  9 500 000 сум
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
                  Умные часы Haylou RT-LS05S
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/8.png"
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
                  165 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  256 000 сум
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
                  Умные часы Haylou RT-LS05S
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
          <Card sx={{ width: "260px", margin: "0px 20px 20px 0px" }}>
            <CardActionArea>
              <img
                src="../../img/8.png"
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
                  165 000 сум/мес
                </Typography>
                <span
                  style={{
                    color: "#909090",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  256 000 сум
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
                  Умные часы Haylou RT-LS05S
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
          </Card> */}
          <Stack width={"100%"} alignItems={"center"}>
            <Button
              variant="outlined"
              sx={{
                width: "20%",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "#ED3729",
                },
                color: "#ED3729",
                borderColor: "#ED3729",
                margin: "20px 0",
              }}
            >
              Показать еще
            </Button>
            <Pagination
              count={3}
              variant="outlined"
              shape="rounded"
              color="error"
            />
          </Stack>
          {/* <Stack width={"100%"}>
            <Typography
              variant="h1"
              fontSize={"24px"}
              color={"#202020"}
              margin={"40px 0 20px 0"}
            >
              Популярные категории и модели
            </Typography>
            <Stack flexDirection={"row"} flexWrap={"wrap"}>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#BDBDBD",
                  },
                  color: "#202020",
                  borderColor: "#BDBDBD",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              >
                Realme
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#BDBDBD",
                  },
                  color: "#202020",
                  borderColor: "#BDBDBD",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              >
                Игровые
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#BDBDBD",
                  },
                  color: "#202020",
                  borderColor: "#BDBDBD",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              >
                Оптимальные
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#BDBDBD",
                  },
                  color: "#202020",
                  borderColor: "#BDBDBD",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              >
                Смартфоны Samsung
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#BDBDBD",
                  },
                  color: "#202020",
                  borderColor: "#BDBDBD",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              >
                Смартфоны Apple
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#BDBDBD",
                  },
                  color: "#202020",
                  borderColor: "#BDBDBD",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              >
                Смартфоны
              </Button>
            </Stack>
          </Stack>
          <Stack marginTop={"50px"}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="h2"
                color={"#202020"}
                fontWeight={"600"}
                sx={{ fontSize: { xs: "18px", sm: "20px", md: "24px" } }}
              >
                Товары которые так же могут быть интересны
              </Typography>
              <Typography
                variant="h2"
                color={"#909090"}
                sx={{ fontSize: { xs: "10px", sm: "12px", md: "16px" } }}
              >
                Посмотреть все →
              </Typography>
            </Box>
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
                      458 000 сум/мес
                    </Typography>
                    <span
                      style={{
                        color: "#909090",
                        textDecoration: "line-through",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      529 000 сум
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
                      Умные часы Haylou RT-LS05S
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
              <Card sx={{ width: "260px", margin: "20px 20px 20px 0px" }}>
                <CardActionArea>
                  <img
                    src="../../img/2.png"
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
                      18 000 сум/мес
                    </Typography>
                    <span
                      style={{
                        color: "#909090",
                        textDecoration: "line-through",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      99 000 сум
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
                      Наушники Panasonic RP-HJE125E-R
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
              <Card sx={{ width: "260px", margin: "20px 20px 20px 0px" }}>
                <CardActionArea>
                  <img
                    src="../../img/3.png"
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
                      9 525 000 сум/мес
                    </Typography>
                    <span
                      style={{
                        color: "#909090",
                        textDecoration: "line-through",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      10 520 000 сум
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
                      Iphone 13 pro 256 Gb
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
            </Stack>
          </Stack> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
