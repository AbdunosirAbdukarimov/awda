import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Brend, Cheaper, Main, Popular, Swipers } from "../Components";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <>
      <Swipers />
      <Main />
      <Popular />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Stack
            alignItems={"center"}
            padding={"30px"}
            justifyContent={"space-between"}
            margin={"70px 0"}
            sx={{ flexDirection: { xs: "column", lg: "row" } }}
          >
            <Box sx={{ width: { sx: "100%", lg: "37%" } }}>
              <Typography
                variant="h1"
                color={"#202020"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "18px", md: "25px", lg: "42px" },
                }}
              >
                Apple iPhone X 64 ГБ
              </Typography>
              <Typography
                variant="h1"
                fontSize={"16px"}
                color={"#909090"}
                marginTop={"20px"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "10px", md: "12px", lg: "16px" },
                }}
              >
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </Typography>
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "auto", height: "250px" }}
                component="img"
                image="../../img/892 1.png"
                alt="green iguana"
              />
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={"#ED3729"}
                fontWeight={"900"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "16px", md: "20px", lg: "42px" },
                }}
              >
                1 300 900 Сум
              </Typography>
              <Typography
                variant="h1"
                color={"#909090"}
                sx={{
                  margin: { xs: "5px 0", md: "10px 0", lg: "20px 0" },
                  textDecoration: "line-through",
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "10px", md: "14px", lg: "20px" },
                }}
              >
                2 220 900 Сум
              </Typography>
              <Button
                sx={{
                  "&:hover": { borderColor: "#ED3729" },
                  borderColor: "#ED3729",
                  color: "#ED3729",
                  fontSize: "16px",
                  padding: { xs: "8px 34px", md: "10px 45px", lg: "12px 51px" },
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                Показать еще
              </Button>
            </Box>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            alignItems={"center"}
            padding={"30px"}
            justifyContent={"space-between"}
            margin={"70px 0"}
            sx={{ flexDirection: { xs: "column", lg: "row" } }}
          >
            <Box sx={{ width: { sx: "100%", lg: "37%" } }}>
              <Typography
                variant="h1"
                color={"#202020"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "18px", md: "25px", lg: "42px" },
                }}
              >
                Apple iPhone X 64 ГБ
              </Typography>
              <Typography
                variant="h1"
                fontSize={"16px"}
                color={"#909090"}
                marginTop={"20px"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "10px", md: "12px", lg: "16px" },
                }}
              >
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </Typography>
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "auto", height: "250px" }}
                component="img"
                image="../../img/892 1.png"
                alt="green iguana"
              />
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={"#ED3729"}
                fontWeight={"900"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "16px", md: "20px", lg: "42px" },
                }}
              >
                1 300 900 Сум
              </Typography>
              <Typography
                variant="h1"
                color={"#909090"}
                sx={{
                  margin: { xs: "5px 0", md: "10px 0", lg: "20px 0" },
                  textDecoration: "line-through",
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "10px", md: "14px", lg: "20px" },
                }}
              >
                2 220 900 Сум
              </Typography>
              <Button
                sx={{
                  "&:hover": { borderColor: "#ED3729" },
                  borderColor: "#ED3729",
                  color: "#ED3729",
                  fontSize: "16px",
                  padding: { xs: "8px 34px", md: "10px 45px", lg: "12px 51px" },
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                Показать еще
              </Button>
            </Box>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            alignItems={"center"}
            padding={"30px"}
            justifyContent={"space-between"}
            margin={"70px 0"}
            sx={{ flexDirection: { xs: "column", lg: "row" } }}
          >
            <Box sx={{ width: { sx: "100%", lg: "37%" } }}>
              <Typography
                variant="h1"
                color={"#202020"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "18px", md: "25px", lg: "42px" },
                }}
              >
                Apple iPhone X 64 ГБ
              </Typography>
              <Typography
                variant="h1"
                fontSize={"16px"}
                color={"#909090"}
                marginTop={"20px"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "10px", md: "12px", lg: "16px" },
                }}
              >
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </Typography>
            </Box>
            <Box>
              <CardMedia
                sx={{ width: "auto", height: "250px" }}
                component="img"
                image="../../img/892 1.png"
                alt="green iguana"
              />
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={"#ED3729"}
                fontWeight={"900"}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "16px", md: "20px", lg: "42px" },
                }}
              >
                1 300 900 Сум
              </Typography>
              <Typography
                variant="h1"
                color={"#909090"}
                sx={{
                  margin: { xs: "5px 0", md: "10px 0", lg: "20px 0" },
                  textDecoration: "line-through",
                  textAlign: { xs: "center", lg: "start" },
                  fontSize: { xs: "10px", md: "14px", lg: "20px" },
                }}
              >
                2 220 900 Сум
              </Typography>
              <Button
                sx={{
                  "&:hover": { borderColor: "#ED3729" },
                  borderColor: "#ED3729",
                  color: "#ED3729",
                  fontSize: "16px",
                  padding: { xs: "8px 34px", md: "10px 45px", lg: "12px 51px" },
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                Показать еще
              </Button>
            </Box>
          </Stack>
        </SwiperSlide>
      </Swiper>
      <Cheaper />
      <Stack>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={"40px 0 30px 0"}
        >
          <Typography
            variant="h2"
            color={"#202020"}
            fontWeight={"600"}
            sx={{ fontSize: { xs: "18px", sm: "20px", md: "24px" } }}
          >
            Рекомендуем
          </Typography>
          <Typography
            variant="h2"
            color={"#909090"}
            sx={{ fontSize: { xs: "10px", sm: "12px", md: "16px" } }}
          >
            Посмотреть все →
          </Typography>
        </Box>
        <Stack flexDirection={"row"}>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img src="../../img/newHotRus 1.png" alt="" />
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
              marginLeft: { sx: "0", lg: "30px" },
            }}
          >
            <Card sx={{ width: "280px", margin: "20px 20px 20px 0px" }}>
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
                fontSize={"30px"}
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
            <Card sx={{ width: "280px", margin: "20px 20px 20px 0px" }}>
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
                    Наушники Panasonic RP-HJE130E-R
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
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
            <Card sx={{ width: "280px", margin: "20px 20px 20px 0px" }}>
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
                    9 530 000 сум/мес
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
                    Iphone 13 pro 306 Gb
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                fontSize={"30px"}
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
            <Card sx={{ width: "280px", margin: "20px 20px 20px 0px" }}>
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
                fontSize={"30px"}
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
            <Card sx={{ width: "280px", margin: "20px 20px 20px 0px" }}>
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
                fontSize={"30px"}
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
            <Card sx={{ width: "280px", margin: "20px 20px 20px 0px" }}>
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
                    303 000 сум
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
                fontSize={"30px"}
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
        </Stack>
      </Stack>
      <Brend />
    </>
  );
};

export default Home;
