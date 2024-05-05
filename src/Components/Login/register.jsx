import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserPen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthService from "../../service/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  signUserError,
  signUserStart,
  signUserSuccess,
} from "../../slice/auth";
import { useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    // e.preventDefault();
    dispatch(signUserStart());

    const user = {
      name,
      username,
      password,
      phone_number,
    };
    try {
      const response = await AuthService.userRegister(user);
      // dispatch(signUserSuccess(response.user))
      navigate("/login");
    } catch (error) {
      console.log(error);
      dispatch(signUserError(error))
    }
  };
  // useEffect(() => {
  // 	if(loggedIn){
  // 		navigate('/')
  // 	}
  // } , [loggedIn])

  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"15"}
      bgcolor={"white"}
      position={"fixed"}
      top={"0"}
      left={"0"}
    >
      <Stack
        boxShadow={"0px 0px 33px 4px rgba(34, 60, 80, 0.2)"}
        borderRadius={"5px"}
        sx={{width:{xs:'80%',md:'50%',lg:'40%'},padding:{xs:'42px 40px',md:'52px 65px',lg:'62px 90px'}}}
      >
        <Box display={"flex"} justifyContent={"center"} mb={2}>
          <img src="../../img/Logo.png" alt="img not fount" />
        </Box>
        <Stack mt={2}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            sx={{fontSize:{xs:'14px',lg:'18px'}}}
            color={"#333333"}
            mb={1}
          >
            <FaUserPen fontSize={"21px"} />
            Имя
          </Typography>
          <TextField
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            sx={{
              "& label.Mui-focused": {
                color: "#EDEDED",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#EDEDED",
                },
                "&:hover fieldset": {
                  borderColor: "#EDEDED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#EDEDED",
                },
                bgcolor: "#EDEDED",
                border: "none",
                height: '45px',
                fontSize: '15px',
              },
            }}
          />
        </Stack>
        <Stack mt={2}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            sx={{fontSize:{xs:'14px',lg:'18px'}}}
            color={"#333333"}
            mb={1}
          >
            <FaRegUser fontSize={"18px"} />
            Имя пользователь
          </Typography>
          <TextField
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              "& label.Mui-focused": {
                color: "#EDEDED",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#EDEDED",
                },
                "&:hover fieldset": {
                  borderColor: "#EDEDED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#EDEDED",
                },
                bgcolor: "#EDEDED",
                border: "none",
                height: '45px',
                fontSize: '15px',
              },
            }}
          />
        </Stack>
        <Stack mt={2}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            sx={{fontSize:{xs:'14px',lg:'18px'}}}
            color={"#333333"}
            mb={1}
          >
            <RiLockPasswordLine fontSize={"21px"} />
            Пароль
          </Typography>
          <TextField
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            sx={{
              "& label.Mui-focused": {
                color: "#EDEDED",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#EDEDED",
                },
                "&:hover fieldset": {
                  borderColor: "#EDEDED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#EDEDED",
                },
                bgcolor: "#EDEDED",
                border: "none",
                height: '45px',
                fontSize: '15px',
              },
            }}
          />
        </Stack>
        <Stack mt={2}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            color={"#333333"}
            mb={1}
            sx={{fontSize:{xs:'14px',lg:'18px'}}}
          >
            <MdOutlineLocalPhone fontSize={"21px"} />
            Номер телефона
          </Typography>
          <TextField
            variant="outlined"
            onChange={(e) => setPhone_number(e.target.value)}
            type="number"
            sx={{
              "& label.Mui-focused": {
                color: "#EDEDED",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#EDEDED",
                },
                "&:hover fieldset": {
                  borderColor: "#EDEDED",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#EDEDED",
                },
                bgcolor: "#EDEDED",
                border: "none",
                height: '45px',
                fontSize: '15px',
              },
            }}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} mt={3} sx={{display:{xs:'none', md:'flex'}}}>
          <Button
            onClick={() => navigate(`/login`)}
            variant="contained"
            sx={{
              fontSize: "15px",
              height: "42px",
              "&:hover": { backgroundColor: "#E0E0E0", boxShadow: "none" },
              bgcolor: "#E0E0E0",
              boxShadow: "none",
              color: "#636363",
            }}
          >
            Войти
          </Button>
          <Button
            onClick={() => registerHandler()}
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#ED3729", boxShadow: "none" },
              bgcolor: "#ED3729",
              boxShadow: "none",
            }}
          >
            зарегистрироваться
          </Button>
        </Stack>
        <Stack justifyContent={"space-between"} mt={3} sx={{display:{xs:'flex', md:'none'}}}>
        <Button
            onClick={() => registerHandler()}
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#ED3729", boxShadow: "none" },
              bgcolor: "#ED3729",
              boxShadow: "none",
            }}
          >
            зарегистрироваться
          </Button>
          <Button
            onClick={() => navigate(`/login`)}
            variant="contained"
            sx={{
              fontSize: "15px",
              height: "42px",
              "&:hover": { backgroundColor: "#E0E0E0", boxShadow: "none" },
              bgcolor: "#E0E0E0",
              boxShadow: "none",
              color: "#636363",
              marginTop: "20px",
            }}
          >
            Войти
          </Button>          
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
