import { Box, CardMedia, List, Stack, Typography } from '@mui/material'
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <>
    <Stack bgcolor={'#202020'} marginTop={'80px'} flexDirection={'row'} flexWrap={'wrap'} position={'relative'} justifyContent={'space-around'} sx={{padding:{xs:'60px 10px',sm:'30px 50px',md:'50px 80px', lg:'70px 100px'}}}>
        <Box width={'280px'} sx={{textAlign:{xs:'center',md:'start'}}}>
            <Box width={'120px'} >            
            <CardMedia
            component="img"
            image="../../img/Frame.png"
            alt="Paella dish"
            sx={{position:'relative' , left:{xs:'50%',md:'0'},transform:{xs:'translate('-50%')',md:'translate(0)' }}}
            />
            </Box>
            <Typography variant='h1' fontSize={'14px'} color={'white'} marginTop={'20px'}>
            График работы колл-центра<br /><br />
            Понедельник - Суббота: 9:00–18:00
            </Typography>
            <Typography variant='h1' fontSize={'14px'} color={'white'} marginTop={'51px'}>
            Колл-центр: <br /><br />
            + 998 (71) 205-93-93
            </Typography>
            <Stack flexDirection={'row'} marginTop={'40px'} sx={{display:{xs:'none',lg:'flex'}}}>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <FaTelegramPlane fontSize='20px'/>
                </Box>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <IoLogoInstagram fontSize='20px'/>
                </Box>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <FaFacebookF fontSize='20px'/>
                </Box>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <FaYoutube fontSize='20px'/>
                </Box>
            </Stack>
        </Box>
        <Box width={'280px'} sx={{textAlign:{xs:'center',md:'start'}}}>
            <List sx={{fontSize:'16px', color:'#909090'}}>
            <Typography variant='h1' fontSize={'20px'} fontWeight={'500'} color={'white'}>
                Категории
            </Typography>
            <li style={{marginTop:'15px'}}>Ноутбуки</li>
            <li style={{marginTop:'15px'}}>Игровые кресла</li>
            <li style={{marginTop:'15px'}}>Телефоны</li>
            <li style={{marginTop:'15px'}}>Моноблоки</li>
            <li style={{marginTop:'15px'}}>Модули памяти</li>
            </List>
        </Box>
        <Box width={'280px'} sx={{textAlign:{xs:'center',md:'start'}}}>
            <List sx={{fontSize:'16px', color:'#909090'}}>
            <Typography variant='h1' fontSize={'20px'} fontWeight={'500'} color={'white'}>
            Общее
            </Typography>
            <li style={{marginTop:'15px'}}>Новости</li>
            <li style={{marginTop:'15px'}}>О нас</li>
            <li style={{marginTop:'15px'}}>Наши магазины</li>
            <li style={{marginTop:'15px'}}>Политика конфиденциальности</li>
            <li style={{marginTop:'15px'}}>Правила программы лояльности</li>
            <li style={{marginTop:'15px'}}>Контакты</li>
            </List>
        </Box>
        <Box width={'280px'} sx={{textAlign:{xs:'center',md:'start'}}}>
            <List sx={{fontSize:'16px', color:'#909090'}}>
            <Typography variant='h1' fontSize={'20px'} fontWeight={'500'} color={'white'}>
            Покупателям
            </Typography>
            <li style={{marginTop:'15px'}}>Покупка в рассрочку</li>
            <li style={{marginTop:'15px'}}>Доставка и оплата</li>
            <li style={{marginTop:'15px'}}>Правила покупок с cashback</li>
            <li style={{marginTop:'15px'}}>Возврат / Обмен</li>
            <li style={{marginTop:'15px'}}>Правила пользования купонами</li>
            </List>
        </Box>
        <Stack flexDirection={'row'} marginTop={'40px'} sx={{display:{xs:'flex',lg:'none'}}} position={'absolute'} bottom={'10px'}>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <FaTelegramPlane fontSize='20px'/>
                </Box>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <IoLogoInstagram fontSize='20px'/>
                </Box>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <FaFacebookF fontSize='20px'/>
                </Box>
                <Box marginRight={'15px'} padding={'6px 7px'} border={'1px solid #8F8E94'} borderRadius={'50%'} color={'#8F8E94'}  sx={{"&:hover": { backgroundColor: "#ED3729",borderColor:'#ED3729',color:'white' }, transition:'all .3s linear'}}>
                    <FaYoutube fontSize='20px'/>
                </Box>
            </Stack>
    </Stack>
    </>
  )
}

export default Footer