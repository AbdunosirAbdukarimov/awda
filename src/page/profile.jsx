import { Box, Button, Fab, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { IoDocumentSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FiCreditCard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";
import { LiaEditSolid } from "react-icons/lia";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/");
  };
  console.log(user);
  return (
    <Stack>
      <Typography
        variant="h1"
        fontSize={"14px"}
        color={"#626364"}
        margin={"20px 0"}
      >
        Главная › Личный кобинет
      </Typography>
      <Stack flexDirection={"row"}>
        <Stack
          borderRight={"1px solid #f2f2f2"}
          marginRight={"30px"}
          sx={{ width: { xs: "16%", md: "8%", lg: "300px" } }}
        >
          <Box>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                sx={{
                  transition: "all .2s linear",
                  fontSize: "22px",
                  color: "#909090",
                  bgcolor: "#F7F7F7",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                  },
                }}
              >
                <FiUser />
              </Fab>
              <Stack
                sx={{ display: { xs: "none", lg: "flex" } }}
                textAlign={"center"}
                marginLeft={"10px"}
              >
                <Typography variant="h1" fontSize={"16px"} fontWeight={"600"}>
                  {user?.username}
                </Typography>
                <Typography variant="h1" fontSize={"14px"}>
                  +{user?.phone_number}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box borderTop={"1px solid #f2f2f2"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                sx={{
                  transition: "all .2s linear",
                  fontSize: "22px",
                  color: "#909090",
                  bgcolor: "#F7F7F7",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                  },
                }}
              >
                <LuShoppingCart />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                Мои рассрочки
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                sx={{
                  transition: "all .2s linear",
                  fontSize: "22px",
                  color: "#909090",
                  bgcolor: "#F7F7F7",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                  },
                }}
              >
                <IoDocumentSharp />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                История платежей
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                sx={{
                  transition: "all .2s linear",
                  fontSize: "22px",
                  color: "#909090",
                  bgcolor: "#F7F7F7",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                  },
                }}
              >
                <MdOutlineAccessTime />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                Онлайн заказы
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              margin={"20px 0"}
            >
              <Fab
                onClick={() => logoutHandler()}
                sx={{
                  transition: "all .2s linear",
                  fontSize: "22px",
                  color: "#909090",
                  bgcolor: "#F7F7F7",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                  },
                }}
              >
                <CiLogout />
              </Fab>
              <Typography
                variant="h1"
                fontSize={"14px"}
                width={"150px"}
                marginLeft={"10px"}
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                Выйти
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack sx={{ width: { xs: "80%", md: "50%", lg: "550px" } }}>
          <Box
            border={"1px solid #f2f2f2"}
            borderRadius={"4px"}
            marginBottom={"30px"}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              borderBottom={"1px solid #f2f2f2"}
              padding={"15px"}
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Fab
                  sx={{
                    transition: "all .2s linear",
                    fontSize: "22px",
                    color: "#909090",
                    bgcolor: "#F7F7F7",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                    },
                  }}
                >
                  <FiUser />
                </Fab>
                <Typography
                  variant="h1"
                  fontSize={"14px"}
                  width={"150px"}
                  marginLeft={"10px"}
                  fontWeight={"600"}
                >
                  Личные данные
                </Typography>
              </Stack>
              <Button
                variant="outlined"
                sx={{
                  width: "25%",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#ED3729",
                  },
                  color: "#ED3729",
                  borderColor: "#ED3729",
                  margin: "20px 0",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Изменит
              </Button>
              <Button
                variant="outlined"
                sx={{
                  // width: "25%",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#ED3729",
                  },
                  color: "#ED3729",
                  borderColor: "#ED3729",
                  margin: "20px 0",
                  display: { xs: "flex", md: "none" },
                }}
              >
                <LiaEditSolid fontSize={"20px"} />
              </Button>
            </Stack>
            <Stack padding={"20px"}>
              <Typography
                variant="h1"
                fontSize={"14px"}
                color={"#626364"}
                margin={"15px 0"}
              >
                Имя:{" "}
                <span
                  style={{
                    color: "#202020",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  {user?.name}
                </span>
              </Typography>
              <Typography
                variant="h1"
                fontSize={"14px"}
                color={"#626364"}
                margin={"15px 0"}
              >
                Имя пользователя:{" "}
                <span
                  style={{
                    color: "#202020",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  {user?.username}
                </span>
              </Typography>
              <Typography
                variant="h1"
                fontSize={"14px"}
                color={"#626364"}
                margin={"15px 0"}
              >
                Пароль:{" "}
                <span
                  style={{
                    color: "#202020",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  *********
                </span>
              </Typography>
              <Typography
                variant="h1"
                fontSize={"14px"}
                color={"#626364"}
                margin={"15px 0"}
              >
                Телефон:{" "}
                <span
                  style={{
                    color: "#202020",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  +{user?.phone_number}
                </span>
              </Typography>
            </Stack>
          </Box>
          <Box border={"1px solid #f2f2f2"} borderRadius={"4px"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              borderBottom={"1px solid #f2f2f2"}
              padding={"15px"}
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Fab
                  sx={{
                    transition: "all .2s linear",
                    fontSize: "22px",
                    color: "#909090",
                    bgcolor: "#F7F7F7",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                    },
                  }}
                >
                  <FiCreditCard />
                </Fab>
                <Typography
                  variant="h1"
                  fontSize={"14px"}
                  width={"150px"}
                  marginLeft={"10px"}
                  fontWeight={"600"}
                >
                  Моя карта
                </Typography>
              </Stack>
            </Stack>
            <Stack padding={"20px"}>
              <Typography
                variant="h1"
                fontSize={"14px"}
                color={"#626364"}
                margin={"15px 0"}
              >
                Отсутствует
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
