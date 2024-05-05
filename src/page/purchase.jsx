import {
  Box,
  Button,
  CardMedia,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";

const Purchase = () => {
  return (
    <Stack>
      <Typography
        variant="h1"
        fontSize={"14px"}
        color={"#626364"}
        margin={"20px 0"}
      >
        Главная › Оформить покупку
      </Typography>
      <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
        <Stack sx={{width:{xs:'100%',lg:'65%'}}}>
          <Box>
            <Typography
              variant="h1"
              fontSize={"28px"}
              color={"#202020"}
              fontWeight={"600"}
            >
              Оформить покупку
            </Typography>
          </Box>
          <Box>
            <Box display={"flex"} alignItems={"center"} marginTop={"25px"}>
              <Box
                border={"1px solid #E0E0E0"}
                padding={"5px 10px"}
                borderRadius={"5px"}
                color={"#202020"}
                marginRight={"10px"}
                fontWeight={"600"}
              >
                1
              </Box>
              <Typography variant="h1" fontSize={"18px"} color={"#202020"}>
                Ваши данные
              </Typography>
            </Box>
            <TextField
              required
              id="outlined-basic"
              label="Телефон"
              variant="outlined"
              type="number"
              sx={{
                width: "40%",
                margin: "30px 0",
                "& label": {
                  color: "gray",
                },
                "& label.Mui-focused": {
                  color: "gray",
                },
                "& .MuiInput-underline:after": {
                  borderColor: "gray",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
              }}
            />
            <Box display={"flex"}>
              <TextField
                required
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                sx={{
                  width: "40%",
                  marginRight: "30px",
                  "& label": {
                    color: "gray",
                  },
                  "& label.Mui-focused": {
                    color: "gray",
                  },
                  "& .MuiInput-underline:after": {
                    borderColor: "gray",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "gray",
                    },
                  },
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                sx={{
                  width: "40%",
                  "& label": {
                    color: "gray",
                  },
                  "& label.Mui-focused": {
                    color: "gray",
                  },
                  "& .MuiInput-underline:after": {
                    borderColor: "gray",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "gray",
                    },
                  },
                }}
              />
            </Box>
            <Box display={"flex"} alignItems={"center"} margin={"25px 0"}>
              <Box
                border={"1px solid #E0E0E0"}
                padding={"5px 10px"}
                borderRadius={"5px"}
                color={"#202020"}
                marginRight={"10px"}
                fontWeight={"600"}
              >
                2
              </Box>
              <Typography variant="h1" fontSize={"18px"} color={"#202020"}>
                Ваш заказ
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <img src="../../img/image 5.png" />
              <Typography>Galaxy A03 Core 2/32Gb Black</Typography>
              <Typography>1 шт</Typography>
              <Typography>1 334 000 cум</Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              margin={"35px 0 20px 0"}
            >
              <Box
                border={"1px solid #E0E0E0"}
                padding={"5px 10px"}
                borderRadius={"5px"}
                color={"#202020"}
                marginRight={"10px"}
                fontWeight={"600"}
              >
                3
              </Box>
              <Typography variant="h1" fontSize={"18px"} color={"#202020"}>
                Выберите способ оплаты
              </Typography>
            </Box>
            <Box>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="Оплата через Payme"
                  control={<Radio />}
                  label="Оплата через Payme"
                />
                <FormControlLabel
                  value="Онлайн оплата по карте UZCARD и HUMO"
                  control={<Radio />}
                  label="Онлайн оплата по карте UZCARD и HUMO"
                />
                <FormControlLabel
                  value="Наличными при получении"
                  control={<Radio />}
                  label="Наличными при получении"
                />
                <FormControlLabel
                  value="Картой при получении"
                  control={<Radio />}
                  label="Картой при получении"
                />
              </RadioGroup>
            </Box>
            
          </Box>
        </Stack>
        <Stack
          border={"1px solid #E0E0E0"}
          bgcolor={"#F7F7F7"}
          padding={"42px 30px"}
          sx={{width:{xs:'100%',lg:'35%'}}}
        >
          <Typography
            variant="h1"
            fontSize={"18px"}
            color={"#202020"}
            fontWeight={"600"}
          >
            Ваши данные
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            margin={"15px 0"}
          >
            <Typography color={"#202020"} fontSize={"14px"}>
              4 товара на сумму
            </Typography>
            <Typography color={"#202020"} fontSize={"18px"}>
              5 262 000 cум
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography color={"#202020"} fontSize={"14px"}>
              Доставка
            </Typography>
            <Typography color={"#202020"} fontSize={"18px"}>
              бесплатно
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"15px"}
            borderTop={"1px solid #E0E0E0"}
          >
            <Typography color={"#202020"} fontSize={"14px"}>
              Всего к оплате
            </Typography>
            <Typography color={"#202020"} fontSize={"18px"}>
              5 262 000 cум
            </Typography>
          </Box>
          <Button
            sx={{
              "&:hover": { backgroundColor: "#ED3729" },
              bgcolor: "#ED3729",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 15px",
              width: "100%",
              marginTop:'24px'
            }}
          >
            <Typography fontSize={"14px"}>Оформить покупку</Typography>
          </Button>
          <Typography fontSize={"14px"} color={"#202020"} marginTop={"20px"}>
            Подтверждая заказ, я принимаю условия
          </Typography>
          <Typography fontSize={"14px"} color={"#2F80ED"}>
            Пользовательского соглашения
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Purchase;
