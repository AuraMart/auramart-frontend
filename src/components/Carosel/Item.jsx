import { Paper, Button } from "@mui/material";

export const Item = (props) => {
  return (
    <Paper>
      <img
        src={props.item.image}
        alt={props.item.title}
        style={{ width: "100%", height: "90vh", position: "relative" }}
      />
      <h1 style={{ position: "absolute", top: "70%", left: "35%",color:'white', fontSize:'96px',fontFamily:''  }}>
        Aura Mart
      </h1>
    </Paper>
  );
};
