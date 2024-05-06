import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import { IoBagAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const navilgate = useNavigate();

  

  return (
    <Stack>
      <Typography variant="h1" fontSize={"22px"} mt={2}>
        Users
      </Typography>
      <Stack flexDirection={"row"} ml={2}>
        <Stack width={"350px"} borderRight={"1px solid #f2f2f2"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            margin={"20px 0"}
            sx={{ cursor: "pointer" }}
          >
            <Fab
              sx={{
                transition: "all .2s linear",
                fontSize: "22px",
                color: "#909090",
                bgcolor: "#F7F7F7",
                boxShadow: "none",
                marginRight: "10px",
                "&:hover": {
                  boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                },
              }}
            >
              <FiUser />
            </Fab>

            <Typography variant="h1" fontSize={"16px"}>
              Users
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            padding={"20px 0"}
            sx={{ cursor: "pointer" }}
            borderTop={"1px solid #f2f2f2"}
          >
            <Fab
              onClick={() => navilgate("/admin/product")}
              sx={{
                transition: "all .2s linear",
                fontSize: "22px",
                color: "#909090",
                bgcolor: "#F7F7F7",
                boxShadow: "none",
                marginRight: "10px",
                "&:hover": {
                  boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.2)",
                },
              }}
            >
              <IoBagAddOutline />
            </Fab>

            <Typography
              variant="h1"
              fontSize={"16px"}
              onClick={() => navilgate("/admin/product")}
            >
              Product
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection={'row'} flexWrap={'wrap'}>
          <Box
          width={'450px'}
            ml={5}
            border={"1px solid #f2f2f2"}
            borderRadius={"4px"}
            marginBottom={"30px"}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
              borderBottom={"1px solid #f2f2f2"}
              padding={"15px"}
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-around"}
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
                  User
                </Typography>
              </Stack>
              <Button
                variant="outlined"
                sx={{
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
                Удалить
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
                ></span>
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
                ></span>
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
                ></span>
              </Typography>
            </Stack>
          </Box>
          
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdminUsers;
