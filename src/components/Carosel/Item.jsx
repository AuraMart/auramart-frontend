import { Paper, Button } from "@mui/material";

export const Item = (props) => {
  return (
    <Paper>
      <img
        src={props.item.image}
        alt={props.item.title}
        style={{ width: "100%", height: "90vh", position: "relative" , zIndex: "10"}}
      />
      <div style={{width:'100%', height:"20vh", position:"absolute",zIndex:"20",backgroundColor:"black",opacity:"0.7",bottom:"0"}}> </div>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "35%",
          color: "white",
          fontSize: "96px",
          fontFamily: "font-rusilla",
          zIndex: "40",
        }}
      >
        Aura Mart
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "75%",
          left: "28%",
          color: "white",
          fontSize: "96px",
          // fontFamily: "Basic Commercial",
          zIndex: "40",
        }}
        className="font-mogra"
      >
        New Collection
      </h1>
     
    </Paper>
  );
};
