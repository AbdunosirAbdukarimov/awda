import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
  } from "@mui/material";
  import { Stack } from "@mui/system";
  import { PiScales } from "react-icons/pi";
  import { FaRegHeart } from "react-icons/fa";
  import { LuShoppingCart } from "react-icons/lu";

const Favourites = () => {

  
  return (
    <Stack marginTop={"60px"}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="h2"
          color={"#202020"}
          fontWeight={"60"}
          sx={{fontSize:{xs:'18px', sm:'20px',md:'24px' }}}
        >
          Избранное
        </Typography>
        <Typography variant="h2" color={"#909090"}  sx={{fontSize:{xs:'10px', sm:'12px',md:'16px' }}}>
         ⨂ Удалит все
        </Typography>
      </Box>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        sx={{justifyContent:{xs:'center', sm:'space-around', lg:'space-between'}}}
      >
        <Card sx={{ width: "260px", margin: "20px 20px 20px 0px", position:'relative'}}>
            <Button sx={{fontWeight:'100', position:'absolute', top:'-10px', right:'-10px', color:'#BDBDBD', fontSize:'25px'}}>
                ⨂
            </Button>
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
            fontSize={"25px"}
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
              <PiScales />
            </Button>
          </Stack>
        </Card>
              
      </Stack>
    </Stack>
  )
}

export default Favourites