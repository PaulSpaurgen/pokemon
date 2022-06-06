import React, { useEffect, useState } from "react";
import { CardWrap } from "./Style";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import bulbo from "../../Assets/Bulbo.png";
import charmendar from "../../Assets/Char.png";
import Squrt from "../../Assets/Squr.png";

import Chikorita from "../../Assets/Chiko.png";
import Cydaquil from "../../Assets/Cyndaquil.png";
import Totodyle from "../../Assets/Totodyle.png";

import Treeko from "../../Assets/Treeko.png";
import Torchik from "../../Assets/Torchik.png";
import Mudkip from "../../Assets/Mudkip.png";

export default function Data(props) {
    const [Propsstate] = useState(props.pokemon)
  const [image, setImagestate] = useState();

  useEffect(()=>{
   
        if(Propsstate === "Bulbo" ){
            setImagestate(bulbo)
        }
        if(Propsstate === "Charmendar" ){
            setImagestate(charmendar)
        }
        if(Propsstate === "Squirtle" ){
            setImagestate(Squrt)
        }
        if(Propsstate === "Chikorita" ){
            setImagestate(Chikorita)
        }
        if(Propsstate === "Cyndaquil" ){
            setImagestate(Cydaquil)
        }
        if(Propsstate === "Totodyle" ){
            setImagestate(Totodyle)
        }
        if(Propsstate === "Mudkip" ){
            setImagestate(Mudkip)
        }
        if(Propsstate === "Torchik" ){
            setImagestate(Torchik)
        }
        if(Propsstate === "Treeko" ){
            setImagestate(Treeko)
        }

  },[image,Propsstate])
  return (
    <CardWrap>
      <div className="cross" onClick={() => props.stateReset()}>
        <CloseRoundedIcon />
      </div>
      <div className="heading">
          Welcome {props.name}
      </div>
      <div className="partner">
          <div className="name">
            Start your journey with :<p>{props.pokemon}</p>
          </div>
          <div className="img">
            <img src={image} alt='pokemon'/>
          </div>
      </div>
      <div className="extradets">
          <p>You will start you're journey in the region: {props.region}</p>
          <p>Your nearest pokemon center: {props.distance} Km</p>
      </div>
      <p className="int">Inventory:</p>
      <div className="items">
          {props.inventory.map((item)=>(
              <div className="item">
                <p>Item Name: {item.name}</p>
                <p>Quantity:{item.Quantity}</p>
              </div>
              
          ))}
      </div>
    </CardWrap>
  );
}
