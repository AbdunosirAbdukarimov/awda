import { Box, Input, Stack, Typography } from '@mui/material'
import React from 'react'

const ShopCard = () => {
  return (
    <Stack zIndex={'5'} position={'fixed'} width={'100%'} height={'100%'} bgcolor={'#20202085'} justifyContent={'center'} alignItems={'center'}>
        <Stack bgcolor={'white'} padding={'50px'}>
            <Typography variant='h1' fontSize={'20px'} color={'#202020'}>
            Корзина
            </Typography>
            <Stack>
              <img src="" alt="" />
              <Box className='text'>
                <Typography variant='h1' fontSize={'16px'} color={'#909090'}>MacBook Pro 13 MXK32ZP/A Space Gray</Typography>
                <Typography variant='h1' fontSize={'18px'} color={'#202020'}>16 559 000 cум</Typography>
              </Box>
              <Box>
                <Box>
                  
                </Box>
                <Box></Box>
              </Box>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default ShopCard