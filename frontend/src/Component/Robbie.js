import React , {useState , useEffect } from "react";

import {
 useHistory
} from "react-router-dom";

const RobbieRoom = [{
 RoomId : 20154 , 
 Peple : 1521 , 
 Round : 98 , 
 AdminRoom : 'Admin มารวย' , 
 StartTime : "09.00"
},
{
 RoomId : 20155 , 
 Peple : 1500 , 
 Round : 78 , 
 AdminRoom : 'Admin มานี' , 
 StartTime : "09.00"
},
{
 RoomId : 20156 , 
 Peple : 1301 , 
 Round : 54 , 
 AdminRoom : 'Admin พีพี' , 
 StartTime : "10.00"
}]

export default function Robbie() {
 const history = useHistory()
 const [roomGame , setRoomGame] = useState([])
 useEffect(()=>{
  setRoomGame(RobbieRoom)
 },[])
 return (
  <>
   <div>
    <div className="container">
     <div className="row py-5">
      {(roomGame.length != 0 ? <>
       {(roomGame.map((item, index)=>{
        return(
         <div className="col-md-4 mb-4">
          <div className="bg-light shadow p-3 rounded" style={{background: "url('https://cfmarinecorpsfoundation.org/wp-content/uploads/2019/07/red-casino-background.jpg')", backgroundSize: 'cover'}}>
          <div className="row">
           <div className="col-8">
            <h3 className="text-light">ห้องเลขที่ <span className="badge bg-danger">{item.RoomId}</span></h3>
            <div className="text-light">จำนวนผู้เล่นทั้งหมด {item.Peple} คน</div>
            <div className="text-light">การออกรางวัลแล้ว {item.Round} รอบ</div>
            <small className="text-warning">Admin: {item.AdminRoom}</small><br/>
            <small className="text-light">เริ่มเล่นเวลา {item.StartTime} น.</small>
           </div>
           <div className="col-4">
            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt className="img-fluid shadow" />
             <a href="" onClick={()=>{history.push('/class/'+item.RoomId)}} class="btn btn-sm btn-dark btn-block mt-2">เข้าเล่น</a>
            </div>
           </div>
          </div>
         </div>
        )
       }))}
      </> : null)}
     </div>
    </div>
   </div>
  </>
 )
}
