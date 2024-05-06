import { Fab, Stack, Typography } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import { IoBagAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AdminProduct = () => {
    const navilgate = useNavigate()
  return (
    <Stack>
      <Typography variant="h1" fontSize={"22px"} mt={2}>
        Product
      </Typography>
      <Stack flexDirection={'row'} ml={2}>
        <Stack width={"350px"} borderRight={"1px solid #f2f2f2"}>
          <Stack
            
            flexDirection={"row"}
            alignItems={"center"}
            margin={"20px 0"}
            sx={{ cursor: "pointer" }}
          >
            <Fab
            onClick={() => navilgate('/admin/users')}
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

            <Typography variant="h1" fontSize={"16px"} onClick={() => navilgate('/admin/users')}>
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

            <Typography variant="h1" fontSize={"16px"}>
              Product
            </Typography>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};

export default AdminProduct;
