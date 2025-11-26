
import {io} from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection=()=>{
  if(location.hostname==="localhost"){
    return io(BASE_URL,{
      transports:["websocket"],
      path:"/socket.io",
    });
  }
  else{
    return io("/",{
      transports:["websocket"],
      path:"/socket.io"})
  }

}