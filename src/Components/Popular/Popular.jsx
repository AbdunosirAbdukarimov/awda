import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Popular = () => {
  return (
    <>
      <Typography
        variant="h1"
        fontSize={"24px"}
        fontWeight={"600"}
        margin={"40px 0 20px 0"}
      >
        Популярные категории
      </Typography>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={3.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          510: {
            slidesPerView: 1.5,
          },
          660: {
            slidesPerView: 2,
          },
          770: {
            slidesPerView: 2.1,
          },
          900: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.7,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"   
      >
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Компьютеры
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Computer 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Телефоны, <br />
                планшеты
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/phone 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Ноутбуки
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Notebook 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Ноутбуки
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Notebook 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Ноутбуки
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Notebook 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height:'150px', margin: "0 30px 0 0" }}>
          <CardActionArea
            sx={{
              display: "flex",
              border: "1px solid #F2F2F2",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                fontSize={"20px"}
                color={"#202020"}
                fontWeight={"600"}
                marginTop={"20px"}
              >
                Ноутбуки
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "auto" }}
              component="img"
              image="../../img/Notebook 1.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </SwiperSlide>
      </Swiper>      
    </>
  );
};

export default Popular;
