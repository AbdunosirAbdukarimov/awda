import { Fab, Stack, Typography } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import { MdProductionQuantityLimits } from "react-icons/md";

const Admin = () => {
  return (
    <Stack>
      <Stack width={'350px'}>
        <Stack flexDirection={"row"} alignItems={"center"} margin={"20px 0"} sx={{cursor:'pointer'}}>
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
        <Stack flexDirection={"row"} alignItems={"center"} padding={"20px 0"} sx={{cursor:'pointer'}} borderTop={"1px solid #909090"}>
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
            <MdProductionQuantityLimits />
          </Fab>

          <Typography variant="h1" fontSize={"16px"}>
            Product
          </Typography>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
};

export default Admin;
