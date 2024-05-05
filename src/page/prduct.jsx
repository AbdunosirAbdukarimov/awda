import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FiInfo } from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { LuRefreshCcw } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";


const Prduct = () => {
  return (
    <Stack >
      <Typography
        variant="h1"
        fontSize={"14px"}
        color={"#626364"}
        margin={"20px 0"}
      >
        Главная › Ноутбуки › Apple
      </Typography>
      <Stack sx={{flexDirection:{sx:'column',lg:'row'}}}>
        <Stack sx={{width:{xs:'100%',lg:'360px'}}}>
          <Box>
            <img
              src="../../img/Rectangle 216.png"
              alt="green iguana"
              />
          </Box>
          <Box display={'flex'} gap={'16px'}>
          <Box sx={{width:'78px'}}>
            <img
              src="../../img/Rectangle 220.png"
              alt="green iguana"
              />
          </Box>
          <Box sx={{width:'78px'}}>
            <img
              src="../../img/Rectangle 218.png"
              alt="green iguana"
              />
          </Box>
          <Box sx={{width:'78px'}}>
            <img
              src="../../img/Rectangle 219.png"
              alt="green iguana"
              />
          </Box>
          <Box sx={{width:'78px'}}>
            <img
              src="../../img/Rectangle 217.png"
              alt="green iguana"
              />
          </Box>
          </Box>
        </Stack>
        <Stack width={'45%'} sx={{marginLeft:{xs:'0',lg:'30px'}}}>
          <Typography
            variant="h1"
            fontSize={"32px"}
            color={"#202020"}
            fontWeight={"600"}
          >
            MacBook Pro 13 MXK32ZP/A Space Gray
          </Typography>
          <Box display={"flex"} margin={'30px 0 60px 0'}>
            <Typography
              variant="h1"
              fontSize={"20px"}
              color={"#202020"}
              fontWeight={"500"}
              display={"flex"}
              alignItems={"center"}
            >
              16 559 000 cум{" "}
              <FiInfo style={{ margin: "0 5px" }} color="#909090" />
            </Typography>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-around"}
              fontSize={"25px"}
              fontWeight={"100"}
              marginLeft={"50px"}
              color={"#BDBDBD"}
              padding={"10px"}
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
          </Box>
          <Box display={'flex'}>
            <Button
              sx={{
                "&:hover": { backgroundColor: "#ED3729" },
                bgcolor: "#ED3729",
                color: "#FFFFFF",
                width: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:'5px'
              }}
            >
              <Typography width={"50%"} variant={"h1"} fontSize={"16px"}>
                Купить сейчас
              </Typography>
            </Button>
            <Button
              sx={{
                "&:hover": { backgroundColor: "#202020" },
                bgcolor: "#202020",
                color: "#FFFFFF",
                width: "260px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft:'15px',
                borderRadius:'5px'
              }}
            >
              <Typography width={"70%"} variant={"h1"} fontSize={"16px"}>
              Купить в рассрочку сейчас
              </Typography>
            </Button>
            
          </Box>
          <Box display={'flex'} alignItems={'start'} justifyContent={'space-around'} borderBottom={'1px solid #F2F2F2'} borderTop={'1px solid #F2F2F2'} margin={'50px 0'} padding={'30px 0'} textAlign={'justify'}>
            <Typography variant="h1" fontSize={'14px'} color={'#909090'}>
            Название для договора
            </Typography>
            <Typography variant="h1" fontSize={'14px'} color={'#202020'} width={'45%'}>
            MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS / Core™ i7-1165G7 / 8GB RAM / 256GB SSD
            </Typography>
          </Box>
          <Typography variant="h1" fontSize={'20px'} fontWeight={'600'} color={'#202020'}>Технические параметры</Typography>
          <Box marginTop={'25px'}>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Название</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>MacBook Pro 13 MXK32ZP/A Space Gray</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Состояние</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>Новый</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} borderBottom={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Технические параметры</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>MacBook Pro 13 MXK32ZP/A Space Gray</Typography>
            </Box>
            
          </Box>
          <Typography variant="h1" fontSize={'20px'} fontWeight={'600'} color={'#202020'} marginTop={'40px'}>Информация о модели</Typography>
          <Box marginTop={'25px'}>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Парт Номер</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>NX.A5UAA.006.</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} borderBottom={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Линейка</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>Swift</Typography>
            </Box>            
          </Box>
          <Typography variant="h1" fontSize={'20px'} fontWeight={'600'} color={'#202020'} marginTop={'40px'}>Классификация</Typography>
          <Box marginTop={'25px'}>
            <Box display={'flex'} alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} borderBottom={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Тип</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>Ультрабук</Typography>
            </Box>            
          </Box>
          <Typography variant="h1" fontSize={'20px'} fontWeight={'600'} color={'#202020'} marginTop={'40px'}>Аудитория</Typography>
          <Box marginTop={'25px'}>
            <Box display={'flex'} alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} borderBottom={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Подходит для</Typography>
              <Typography variant="h1" fontSize={'14px'} width={'30%'} color={'#202020'}>Руководителей Студентов и учителей Офисных сотрудников</Typography>
            </Box>            
          </Box>
          <Typography variant="h1" fontSize={'20px'} fontWeight={'600'} color={'#202020'} marginTop={'40px'}>Процессор</Typography>
          <Box marginTop={'25px'}>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Бренд</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>Intel®</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Модель </Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>1165G7</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Поколение</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>11</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Количество ядер</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>4</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Количество потоков</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>8</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Минимальная частота</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>2.8 ГГц</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Максимальная частота </Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>4.7 ГГц</Typography>
            </Box>
            <Box display={'flex'}  alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Кэш  </Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>12 Мб</Typography>
            </Box>          
            <Box display={'flex'} alignItems={'center'} padding={'15px 18px'} borderTop={'1px solid #F2F2F2'} borderBottom={'1px solid #F2F2F2'} sx={{"&:hover": { backgroundColor: "#F2F2F2" }, bgcolor:"transparent",transition:'all .1s linear'}}>
              <Typography variant="h1" width={'50%'} fontSize={'14px'} color={'#909090'}>Встроенная видеокарта</Typography>
              <Typography variant="h1" fontSize={'14px'} color={'#202020'}>Intel® Iris® Xe Graphics</Typography>
            </Box>  
          </Box>
        </Stack>
        <Stack width={'365px'} marginLeft={'30px'}>
          <Box border={'1px solid #F2F2F2'} borderRadius={'5px'} padding={'40px'} bgcolor={'#F7F7F7'}>
              <Typography variant="h1" fontSize={'16px'} color={"#202020"} fontWeight={'600'}>
              <LuRefreshCcw color="#909090" /> 30 дней на обмен и возврат.
              </Typography>
              <Typography variant="h1" fontSize={'14px'} color={"#909090"} margin={'10px 0'}>
              Если купите товар сегодня, до 06 мая можете вернуть или обменять.
              </Typography>
              <Typography variant="h1" fontSize={'14px'} color={"#2F80ED"}>
              Подробнее о программе.
              </Typography>
          </Box>
          <Box border={'1px solid #F2F2F2'} borderRadius={'5px'} padding={'40px'} bgcolor={'#F7F7F7'} margin={'20px 0'}>
              <Typography variant="h1" fontSize={'16px'} color={"#202020"} fontWeight={'600'}>
              <FaHeadphones color="#909090" /> Есть вопросы?
              </Typography>
              <Typography variant="h1" fontSize={'14px'} color={"#909090"} margin={'10px 0'}>
              Телефон: <span style={{color:"#2F80ED"}}>+998 99 990 45 27</span>
              </Typography>
              <Typography variant="h1" fontSize={'14px'} color={"#909090"} margin={'10px 0'}>
              Телеграм: <span style={{color:"#2F80ED"}}>@mixel_uz</span>
              </Typography>
              <Typography variant="h1" fontSize={'14px'} color={"#909090"}>
              Эл. почта: <span style={{color:"#2F80ED"}}>mixel@emali.uz</span> 
              </Typography>
          </Box>
          <Box border={'1px solid #F2F2F2'} borderRadius={'5px'} padding={'40px'} bgcolor={'#F7F7F7'}>
              <Typography variant="h1" fontSize={'16px'} color={"#202020"} fontWeight={'600'}>
              <TbTruckDelivery color="#909090" /> Доставка: <span style={{color:"#909090"}}>Бесплатно</span>
              </Typography>
              <Typography variant="h1" fontSize={'16px'} color={"#202020"} fontWeight={'600'} margin={'10px 0'}>
              <GiWallet color="#909090" /> Cпособ оплаты:
              </Typography>
              <ul className="qwe" style={{color:'#909090'}}>
                <li>Наличными (При Доставке)</li>
                <li>Payme / Click</li>
                <li>Перечислением с НДС</li>
              </ul>
              
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Prduct;
