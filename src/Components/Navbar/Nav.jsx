import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchIcon from "@mui/icons-material/Search";
import { FiUser } from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItem } from "../../helpers/persistance-storage";
import AuthService from "../../service/auth";
import { seachProduct, signUserSuccess } from "../../slice/auth";
import { useState } from "react";
import Bars from "../Bars/Bars";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiMoneyLight } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [bars, setBars] = useState("-600%");

  const { loggedIn, user } = useSelector((state) => state.auth);

  const getUsers = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = () => {
    navigate("/search");
    dispatch(seachProduct(word));
  };

  useEffect(() => {
    const token = getItem("token");

    if (token) {
      getUsers();
    }
  }, []);
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      padding={"20px 0"}
      justifyContent={"space-between"}
    >
      <Box marginRight={"20px"} sx={{ display: { xs: "none", lg: "flex" } }}>
        <Link to={"/"}>
          <img src="../../img/Logo.png" alt="" />
        </Link>
      </Box>
      <Button
      onClick={() => setBars('0')}
        sx={{
          display: { xs: "flex", lg: "none" },
          "&:hover": { backgroundColor: "#ED3729" },
          bgcolor: "#ED3729",
          color: "white",
          justifyContent: "center",
          padding: "16px 0",
          fontSize: "25px",
          marginRight: "20px",
          borderRadius: "10px",
        }}
      >
        <FaBars />
      </Button>
      <Stack
        width={"100%"}
        zIndex={"10"}
        position={"fixed"}
        top={"0"}
        left={bars}
        height={"100%"}
        sx={{ backdropFilter: "blur(5px)", transition:'all .3s linear' }}
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
          <Typography
            fontWeight={"400"}
            variant="h1"
            display={"flex"}
            mt={7}
            alignItems={"center"}
            color={"#202020"}
            sx={{ fontSize: { xs: "20px", md: "25px" } }}
          >
            <FiPhone />
            +998 95 123 55 88
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        sx={{
          width: { xs: "85%", md: "80%", lg: "57%" },
          border: "2px solid #ED3729",
          borderRadius: "7px",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Select
          sx={{
            display: { xs: "none", md: "flex" },
            color: "#202020",
            "& fieldset": { border: "none" },
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "21%",
          }}
          defaultValue={10}
        >
          <MenuItem value={10}>Все категории</MenuItem>
          <MenuItem value={20}>Телефоны, планшеты</MenuItem>
          <MenuItem value={30}>Ноутбуки</MenuItem>
          <MenuItem value={40}>Сетевое оборудование</MenuItem>
          <MenuItem value={50}>Видеонаблюдение</MenuItem>
          <MenuItem value={60}>Компьютеры</MenuItem>
          <MenuItem value={70}>Техника для офиса</MenuItem>
        </Select>
        <TextField
          placeholder="Телефоны и бытовая"
          variant="outlined"
          onChange={(e) => setWord(e.target.value)}
          sx={{
            "& fieldset": { border: "none" },
            width: { xs: "85%", md: "50%" },
            left: { sx: "0", md: "-20px" },
          }}
        />
        <MicNoneIcon
          sx={{ display: { xs: "none", md: "flex" }, color: "#BDBDBD" }}
        />
        <Button
          onClick={() => handleSearch()}
          sx={{
            display: { xs: "none", md: "flex" },
            "&:hover": { backgroundColor: "#ED3729" },
            bgcolor: "#ED3729",
            color: "white",
            justifyContent: "space-between",
            padding: "16px 15px",
            borderStartStartRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <SearchIcon sx={{ marginRight: "10px" }} /> Поиск
        </Button>
        <Button
          sx={{
            display: { xs: "flex", md: "none" },
            "&:hover": { backgroundColor: "#ED3729" },
            bgcolor: "#ED3729",
            color: "white",
            justifyContent: "center",
            padding: "16px",
            borderStartStartRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <SearchIcon />
        </Button>
      </Stack>
      <Stack sx={{ display: { xs: "none", lg: "flex" } }} flexDirection={"row"}>
        <Typography
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          variant="h6"
          fontSize={"25px"}
          margin={"0 10px"}
        >
          {loggedIn ? (
            <Link style={{ height: "30px", color: "#202020" }} to={"/profile"}>
              <FiUser />
            </Link>
          ) : (
            <Link style={{ height: "30px", color: "#202020" }} to={"/login"}>
              <FiUser />
            </Link>
          )}
          {loggedIn ? (
            <Typography variant="h6" fontSize={"14px"}>
              {user?.name}
            </Typography>
          ) : (
            <Typography variant="h6" fontSize={"14px"}>
              Войти
            </Typography>
          )}
        </Typography>
        <Typography
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          variant="h6"
          fontSize={"25px"}
          margin={"0 10px"}
        >
          <Link
            style={{ height: "30px", color: "#202020" }}
            to={"/filter/Laptops/get_laptops"}
          >
            <PiScales />
          </Link>
          <Typography variant="h6" fontSize={"14px"}>
            Сравнение
          </Typography>
        </Typography>
        <Typography
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          variant="h6"
          fontSize={"25px"}
          margin={"0 10px"}
        >
          <Link style={{ height: "33px", color: "#202020" }} to={"/favourites"}>
            <FaRegHeart />
          </Link>
          <Typography variant="h1" fontSize={"14px"}>
            Избранное
          </Typography>
        </Typography>
        <Typography
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          variant="h6"
          fontSize={"25px"}
          margin={"0 10px"}
        >
          <Link style={{ height: "30px", color: "#202020" }} to={"/prduct"}>
            <LuShoppingCart />
          </Link>
          <Typography variant="h6" fontSize={"14px"}>
            Корзина
          </Typography>
        </Typography>
        {user?.role == "admin" ? (
          <Typography
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            variant="h6"
            fontSize={"25px"}
            margin={"0 10px"}
          >
            <Link
              style={{ height: "30px", color: "#202020" }}
              to={"/admin/users"}
            >
              <MdAdminPanelSettings />
            </Link>
            <Typography variant="h6" fontSize={"14px"}>
              Admin
            </Typography>
          </Typography>
        ) : (
          <Typography></Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default Nav;
