import React, { useState } from "react";
import {
  TextField,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { PageWrapper, CardWrapper } from "./Style";

import bulbo from "../../Assets/Bulbo.png";
import charmendar from "../../Assets/Char.png";
import Squrt from "../../Assets/Squr.png";

import Chikorita from "../../Assets/Chiko.png";
import Cydaquil from "../../Assets/Cyndaquil.png";
import Totodyle from "../../Assets/Totodyle.png";

import Treeko from "../../Assets/Treeko.png";
import Torchik from "../../Assets/Torchik.png";
import Mudkip from "../../Assets/Mudkip.png";

import Order from "../Order/Order";
import Data from "../Data/Data";

export default function Home() {
  const [name, setName] = useState("");
  const [codeName, setCodeName] = useState("");
  const [distance, setDistance] = useState();
  const [region, setRegion] = useState("");
  const [regionName, setRegionName] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [pokeCss, setPokeCss] = useState();
  const [orderPageState, setOrderPageState] = useState(false);
  const [dataPageState, setDataPageState] = useState(false);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const imgData = [
//     Starter pokemon by region are Kanto: Bulbasaur, Charmander, Squirtle. 

    {
      id: 1,
      name: "Kanto",
      pokemon: "Bulbo",
      imgUrl: bulbo,
    },
    {
      id: 2,
      name: "Kanto",
      pokemon: "Charmendar",
      imgUrl: charmendar,
    },
    {
      id: 3,
      name: "Kanto",
      pokemon: "Squirtle",
      imgUrl: Squrt,
    },
    //Kanto, Jhoto and Hoenn
    // Jhoto: Chikorita, Cyndaquil, Totodyle. 

    {
      id: 4,
      name: "Jhoto",
      pokemon: "Chikorita",
      imgUrl: Chikorita,
    },
    {
      id: 5,
      name: "Jhoto",
      pokemon: "Cyndaquil",
      imgUrl: Cydaquil,
    },
    {
      id: 6,
      name: "Jhoto",
      pokemon: "Totodyle",
      imgUrl: Totodyle,
    },
// Hoenn: Treeko, Torchik, Mudkip
    {
      id: 7,
      name: "Hoenn",
      pokemon: "Treeko",
      imgUrl: Treeko,
    },
    {
      id: 8,
      name: "Hoenn",
      pokemon: "Torchik",
      imgUrl: Torchik,
    },
    {
      id: 9,
      name: "Hoenn",
      pokemon: "Mudkip",
      imgUrl: Mudkip,
    },
  ];
  const pokeSearch = (pokeData) => {
    // console.log(regionName)
    return pokeData.filter((info) => info.name === regionName);
  };
  const setImageData = (imageInfo) => {
    setPokeCss(imageInfo.id);
    setPokemon(imageInfo.pokemon);
  };
  const setRegiondata = (val) => {
    setRegion(val);
    // console.log(val)
    if (val === 1) {
      // console.log(val)
      setRegionName("Kanto");
    }
    if (val === 2) {
      setRegionName("Jhoto");
    }
    if (val === 3) {
      setRegionName("Hoenn");
    }
  };
  const setDataFinal = (name, Quantity, Price) => {
    setData([...data, { name: name, Quantity: Quantity, Price: Price }]);
    setTotal(total + Price);
  };
  const resetData = (index) => {
    var Temp = data;
    setTotal(total - data[index].Price);
    console.log(Temp, index);
    Temp.splice(index, 1);
    setData([...Temp]);
  };

  const dataPage = () => {
    setDataPageState(false);
  };
  // const setValues = (val) => {
  //   console.log("working !!!!! ", val);
  // };
  return (
    <PageWrapper>
      {!orderPageState && !dataPageState && (
        <CardWrapper>
          <div className="heading row">Fill This Form</div>
          <div className="subheading">
            we will use this info to dominate the poke
            <p style={{ fontSize: "14px" }}>world! Muhahahaha</p>
          </div>
          <div className="text row">
            <TextField
              id="outlined-required"
              label="Full Name"
              defaultValue="Enter Your Name"
              helperText={name !== "" ? "" : "We Know that's not your Name"}
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "300px", color: "MenuText" }}
              color={name !== "" ? "primary" : "error"}
              // FormHelperTextProps={{}}
              FormHelperTextProps={{ style: { color: "red" } }}
            />
            <TextField
              id="filled-basic"
              label="Code Name"
              color="info"
              variant="filled"
              value={codeName}
              onChange={(e) => setCodeName(e.target.value)}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </div>
          <div className="slide row">
            <Slider
              min={0}
              max={100}
              step={1}
              value={distance}
              style={{
                width: "300px",
                color: "#f05a03",
                height: "2px",
                marginTop: 50,
              }}
              valueLabelDisplay="on"
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <p>How far is your nearest pokemon center?(in Km)</p>
          <div className="Select row">
            <FormControl>
              <InputLabel> What is ur Starting region?</InputLabel>
              <Select
                variant="filled"
                label="What is ur Starting region?"
                value={region}
                onChange={(e) => setRegiondata(e.target.value)}
                disableUnderline
                style={{ width: "300px", color: "black" }}
              >
                <MenuItem value={1}>Kanto</MenuItem>
                <MenuItem value={2}>Jhoto</MenuItem>
                <MenuItem value={3}>Hoenn</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="sub-t">Choose Your starter Pokemon</div>
          <div className="images">
            {pokeSearch(imgData).map((item, index) => (
              <div
                className="imageM"
                key={index}
                onClick={() => setImageData(item)}
                style={{
                  border: item.id === pokeCss ? "2px solid #f05a03" : "",
                }}
              >
                <img src={item.imgUrl} alt="poke" />
              </div>
            ))}
          </div>
          <div className="sub-t">
            <p>What do you whant to pack?</p>
            <AddCircleRoundedIcon
              style={{ color: "#f05a03" }}
              onClick={() => setOrderPageState(true)}
            />
          </div>
          <div className="dataDisp">
            {data.map((items, index) => (
              <div className="dataItem" key={index}>
                <p>{items.name}:</p>
                <p>{items.Quantity}</p>
                <div className="cross">
                  <CloseRoundedIcon
                    fontSize="12px"
                    onClick={() => resetData(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="Cost">
            <p className="p-1">Total Cost:</p>
            <p className="p-2">${total}</p>
          </div>
          <div className="btn row" onClick={() => setDataPageState(true)}>
            <button>START MY JOURNEY</button>
          </div>
        </CardWrapper>
      )}
      {orderPageState && (
        <Order
          data={(orderPageState) => setOrderPageState(orderPageState)}
          setFinalData={(name, Quantity, Price) =>
            setDataFinal(name, Quantity, Price)
          }
        />
      )}
      {dataPageState && (
        <Data 
        state={dataPageState} 
        stateReset={() => dataPage()}
        name = {name}
        region = {regionName}
        distance = {distance}
        pokemon = {pokemon} 
        inventory = {data}/>
      )}
    </PageWrapper>
  );
}
