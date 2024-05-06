import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiMoneyLight } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";



const Bars = () => {
  const [bars, setBars] = useState("-600%");
  return (
    <Stack
      width={"100%"}
      zIndex={"10"}
      position={"fixed"}
      top={"0"}
      left={bars}
      height={"100%"}
      sx={{ backdropFilter: "blur(5px)" }}
    >
      <Stack
        height={"100%"}
        zIndex={"5"}
        p={3}
        sx={{
          width: { xs: "78%", md: "40%" },
          display: { xs: "flex", lg: "none" },
        }}
        bgcolor={"white"}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <img src="../../img/Logo.png" alt="img not fout" />
          </Box>
          <IoClose fontSize={"35px"} onClick={() => setBars("-600%")} />
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
          mt={6}
          mb={4}
        >
          <LuUserCircle2 color="#909090" fontSize={"35px"} />
          <Typography
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            Войти
          </Typography>
          <Stack border={"1px solid #909090"} height={"100%"}></Stack>
          <Typography
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            Регистрация
          </Typography>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Stack>
        <Stack mt={1.6} ml={1} flexDirection={"row"}>
          <FaBook color="#909090" fontSize={"26px"} />
          <Typography
            ml={2}
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            Наши магазины
          </Typography>
        </Stack>
        <Stack mt={1.6} ml={1} flexDirection={"row"}>
          <FaMoneyBillTransfer color="#909090" fontSize={"29px"} />
          <Typography
            ml={2}
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            B2B продажи
          </Typography>
        </Stack>
        <Stack mt={1.6} ml={1} flexDirection={"row"}>
          <PiMoneyLight color="#909090" fontSize={"29px"} />
          <Typography
            ml={2}
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            Покупка в рассрочку
          </Typography>
        </Stack>
        <Stack mt={1.6} ml={1} flexDirection={"row"}>
          <PiWallet color="#909090" fontSize={"30px"} />
          <Typography
            ml={2}
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            Способы оплаты
          </Typography>
        </Stack>
        <Stack mt={1.6} ml={1} flexDirection={"row"}>
          <LuShieldCheck color="#909090" fontSize={"30px"} />
          <Typography
            ml={2}
            variant="h1"
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "28px" } }}
          >
            Гарантия на товары
          </Typography>
        </Stack>

        <Stack flexDirection={"row"} mt={5} ml={1.5}>
          <Button
            sx={{
              display: { xs: "flex", lg: "none" },
              "&:hover": { backgroundColor: "#ED3729" },
              bgcolor: "#ED3729",
              color: "white",
              justifyContent: "center",
              padding: "10px 0",
              fontSize: "18px",
              marginRight: "20px",
              borderRadius: "10px",
            }}
          >
            Рус
          </Button>
          <Button
            sx={{
              display: { xs: "flex", lg: "none" },
              "&:hover": { backgroundColor: "tranparent" },
              bgcolor: "tranparent",
              color: "#202020",
              justifyContent: "center",
              padding: "10px 0",
              fontSize: "18px",
              marginRight: "20px",
              borderRadius: "10px",
              border: "1px solid #909090",
            }}
          >
            Узб
          </Button>
        </Stack>
        <Typography fontWeight={"400"} variant="h1" display={"flex"} mt={7} alignItems={"center"}  color={'#202020'} sx={{fontSize:{xs:'20px',md:'25px'}}}><FiPhone/>+998 95 123 55 88</Typography>
      </Stack>
    </Stack>
  );
};

export default Bars;
