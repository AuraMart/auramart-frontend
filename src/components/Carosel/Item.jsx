import { Paper, Button } from "@mui/material";

export const Item = (props) => {
  return (
    <Paper>
      <img
        src={props.item.image}
        alt={props.item.title}
        style={{ width: "100%", height: "90vh", position: "relative" , zIndex: "10"}}
      />
      <Button
        variant="contained"
        style={{
          position: "absolute",
          top: "70%",
          left: "45%",
          color: "black",
          backgroundColor: "#f0c040",
          zIndex: "40",
          padding: "10px",
          fontSize: "20px",
        }}
         >Shop Now</Button>
      {/* <h1
        style={{
          position:'absolute',
          top: "50%",
          color: "white",
          zIndex: "40",
          left: "5%",
          fontSize: "80px",
        }}
      >
        {props.item.description}
      </h1> */}
      
     
    </Paper>
  );
};
