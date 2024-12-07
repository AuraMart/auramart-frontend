import React from "react";
import { women } from "./categories";
import { Box } from "@mui/material";
import { Categorycard } from "./CategoryCard";

export const WomenCategoryList = () => {
  return (
    <div style={{display:'flex',justifyContent:"stretch",alignContent:'center',marginLeft:"65px"}}>
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        justifyContent:"center",
      }}
    >
      {women.map((woman) => (
        <Categorycard
          key={woman.id}
          title={woman.title}
          image={woman.image}
        />
      ))}
    </Box>
  </div>
  );
};
