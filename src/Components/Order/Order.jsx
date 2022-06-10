import React, {  useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CardWrap } from "./Style";
import {
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Switch from "@mui/material/Switch";

export default function Order(props) {
  const [openStatus, setOpenStatus] = useState(true);
  const [pokeballVal, setPokeballVal] = useState("");
  const [pokevalues, setPokebalValues] = useState({
    name: "",
    value: 0,
    bag: false,
  });
  const [editState, setEditState] = useState('Place')
  const [pokeBalls, setpokeBalls] = useState(0);
  const [needBag, setNeedBag] = useState(false);


  useEffect(()=>{
    if(props.editState){
      setEditState('Edit')
    }
    
  },[props])
  const BagState = () => {
    if (needBag) {
      setNeedBag(false);
    } else {
      setNeedBag(true);
    }
  };
  const setPageDisplatState = () => {
    setOpenStatus(false);
    props.data(false);
  };
 
  //   Poke Ball: $5 Each
  // Great Ball: $10 Each
  // Super Potion: $10 Each
  // Hyper Potion: $20 Each
  // Bag: $2 Each
  const setPokeballValUpdate = (val) => {
    setPokeballVal(val);
    if (val === 1) {
      setPokebalValues({
        name: "Poke Ball",
        value: 5,
      });
    }
    if (val === 2) {
      setPokebalValues({
        name: "Great Ball",
        value: 10,
      });
    }
    if (val === 3) {
      setPokebalValues({
        name: "Super Potion",
        value: 10,
      });
    }
    if (val === 4) {
      setPokebalValues({
        name: "Hyper Potion",
        value: 20,
      });
    }
  };

  const finalSetState = () => {
    setPageDisplatState();
    const Fprice = pokeBalls * pokevalues.value + (needBag ? 2 : 0);
    props.setFinalData(pokevalues.name, pokeBalls, Fprice,needBag,pokeballVal);
  };

  if (openStatus) {
    return (
      <CardWrap>
        <div className="cross" onClick={() => setPageDisplatState()}>
          <CloseRoundedIcon />
        </div>
        <div className="heading row"> {editState} Your Order </div>
        <div className="subheading">
          we will use this info to pack your order!
          <p style={{ fontSize: "14px" }}> Muhahahaha</p>
        </div>
        <div className="Select row">
          <FormControl>
            <InputLabel>Select Item</InputLabel>
            <Select
              variant="filled"
              value={pokeballVal}
              //   label="Select Item"
              onChange={(e) => setPokeballValUpdate(e.target.value)}
              displayEmpty
              disableUnderline
              style={{ width: "300px", color: "black" }}
            >
              <MenuItem value=" " disabled>
                Choose Item
              </MenuItem>
              <MenuItem value={1}>Poke Ball</MenuItem>
              <MenuItem value={2}>Great Ball</MenuItem>
              <MenuItem value={3}>Super Potion</MenuItem>
              <MenuItem value={4}>Hyper Potion</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="slide row">
          <Slider
            min={0}
            max={10}
            step={1}
            value={pokeBalls}
            style={{
              width: "280px",
              color: "#f05a03",
              height: "2px",
              marginTop: 50,
            }}
            valueLabelDisplay="on"
            onChange={(e) => setpokeBalls(e.target.value)}
          />
        </div>
        <p>Select Quantity</p>
        <div className="bag row">
          <p>I Need a bag for that :</p>
          <Switch style={{ color: "#f05a03" }} onClick={() => BagState()} />
        </div>
        <div className="cost">
          <p className="p-1">Cost:</p>
          <p className="p-2">
            ${pokeBalls * pokevalues.value + (needBag ? 2 : 0)}
          </p>
        </div>
        <div className="btn row" onClick={() => finalSetState()}>
          <button>ADD TO CART</button>
        </div>
      </CardWrap>
    );
  }
}
