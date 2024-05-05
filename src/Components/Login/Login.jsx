import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../service/auth";
import { useEffect } from "react";
import { setItem } from "../../helpers/persistance-storage";
import { signUserError, signUserStart, signUserSuccess } from "../../slice/auth";

const Login = () => {
  const navigate = useNavigate();
	const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading , loggedIn} = useSelector((state) => state.auth);
  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };

	const loginHandler = async (e) => {
		// e.preventDefault();
		dispatch(signUserStart());
		const user = { username: userName, password };
		try {
      const response = await AuthService.userLogin(user);
      setItem("token", response?.data?.access_token);
			dispatch(signUserSuccess(response.data));
      getUser()
			navigate('/')
		} catch (error) {
      dispatch(signUserError(error.response.data.errors));
		}
	};

	useEffect(() => {
		if(loggedIn){
			navigate('/')
		}
	} , [loggedIn])

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
        <Box display={"flex"} justifyContent={"center"} mb={3}>
          <img src="../../img/Logo.png" alt="img not fount" />
        </Box>
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            color={"#333333"}
            mb={1}
            sx={{fontSize:{xs:'14px',lg:'18px'}}}
          >
            <FaRegUser fontSize={"18px"} />
            Имя пользователь
          </Typography>
          <TextField
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
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
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            color={"#333333"}
            mb={1}
            sx={{fontSize:{xs:'14px',lg:'18px'}}}
          >
            <RiLockPasswordLine fontSize={"21px"} />
            Пароль
          </Typography>
          <TextField
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
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
        <Stack flexDirection={'row'} justifyContent={"space-between"} mt={3} sx={{display:{xs:'none', md:'flex'}}}>
          <Button
            onClick={() => navigate(`/register`)}
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
            зарегистрироваться
          </Button>
          <Button
            onClick={() => loginHandler()}
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#ED3729", boxShadow: "none" },
              bgcolor: "#ED3729",
              boxShadow: "none",
            }}
          >
            Войти
          </Button>
        </Stack>
        <Stack justifyContent={"space-between"} mt={3} sx={{display:{xs:'flex', md:'none'}}}>
        <Button
            onClick={() => loginHandler()}
            variant="contained"
            sx={{
              "&:hover": { backgroundColor: "#ED3729", boxShadow: "none" },
              bgcolor: "#ED3729",
              boxShadow: "none",
            }}
          >
            Войти
          </Button>
          <Button
            onClick={() => navigate(`/register`)}
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
            зарегистрироваться
          </Button>          
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
