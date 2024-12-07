import React, { useRef, useEffect,useState } from "react";
import { men } from "./categories";
import { Box } from "@mui/material";
import { Categorycard } from "./CategoryCard";


export const MenCategoryList = () => {

  return (
    <div style={{display:'flex',justifyContent:"stretch",alignContent:'center', marginLeft:"65px"}}>
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        justifyContent:"center",
      }}
    >
      {men.map((men) => (
        <Categorycard
          key={men.id}
          title={men.title}
          image={men.image}
        />
      ))}
    </Box>
  </div>
  );
};
