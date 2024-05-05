import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { ApiService } from "../../service/apiService";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const [categories, setCategoties] = useState([]);
  useEffect(() => {
    try {
      const getAPi = async () => {
        const data = await ApiService.getProduct(`categories/get_categories`);
        setCategoties(data);
      };
      getAPi();
    } catch (error) {
      console.log(error);
    }
  }, [setCategoties]);
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"20px"}>
      <Button
        sx={{
          "&:hover": { backgroundColor: "#ED3729" },
          bgcolor: "#ED3729",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px 15px",
          width: { xs: "100%", md: "35%", lg: "23%" },
        }}
      >
        <Typography marginRight={"20px"} fontSize={"24px"}>
          <AiOutlineBars />
        </Typography>
        <Typography fontSize={"14px"}>Категории</Typography>
      </Button>
      <List
        sx={{
          textWrap: "nowrap",
          fontSize: "16px",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: "15px",
          fontWeight: "600",
          overflowX: { md: "none", lg: "hidden" },
        }}
      >
        {categories &&
          categories.map((item) => (
            <Link to={`/filter${item.link}`} style={{ color: "black" }} key={item.id}>
              <ListItem
                sx={{
                  "&:hover": { color: "red" },
                  cursor: "pointer",
                  transition: "all .1s linear",
                }}
              >
                {item.name}
              </ListItem>
            </Link>
          ))}
      </List>
    </Stack>
  );
};

export default Category;
