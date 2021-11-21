import React , {useState , useEffect } from "react";
import {useHistory} from "react-router-dom";

export default function Class() {
 const history = useHistory()
 return (
  <>
   <div className="container">
    <div className="row">
     <div className="col-md-12">
      <div className="py-2">
       <div className="row">
        <div className="col-auto">
         <div className="text-light">
          Room 032528 | 
          ผู้เล่นทั้งหมด <span className="badge bg-dark">1,895 คน</span>
         </div>
        </div>
        <div className="col-auto ml-auto">
         <a onClick={()=>{history.push("/")}} className="btn btn-sm btn-danger"><i className="bi bi-reply-fill" />ออก</a>
        </div>
       </div>
      </div>
     </div>
     <div className="col-md-9 pr-md-0">
      <div className="embed-responsive embed-responsive-16by9 rounded shadow mb-2">
       <iframe className="embed-responsive-item" width={560} height={315} src="https://www.youtube.com/embed/U6EbPcoguTc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="my-2 rounded px-2 py-1 shadow" style={{backgroundColor: '#000'}}>
       <div className="row">
        <div className="col-4">
         <small className="text-warning">
          สวัสดี <strong>คุณทดสอบ ลองเล่น</strong>
         </small>
        </div>
        <div className="col-4 text-center text-light">
         <span className="bg-dark text-warning px-2 rounded">120</span> 
         ชนะ | แพ้
         <span className="bg-danger text-light px-2 rounded">120</span> 
        </div>
        <div className="col-4 text-right text-light">
         <small>เครดิตที่เหลือ 19,528</small>
        </div>
       </div>
      </div>
      <div className="my-2 rounded shadow " style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/A1+zR5quiCL._AC_SY450_.jpg")'}}>
       <table>
        <tbody><tr>
         <td width="17%" style={{verticalAlign: 'top'}}>
          <table>
           <tbody>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
            </tr>
           </tbody>
          </table>
         </td>
         <td width="66%">
          <table>
           <tbody>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-01.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-02.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-03.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-04.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-05.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-06.png" className="img-fluid" alt /></a></td>
            </tr>
           </tbody>
          </table>
          <table>
           <tbody>
            <tr>
             <td><a href className="btn btn-warning p-1"><img src="../assets/images/icon-09.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-warning p-1"><img src="../assets/images/icon-09.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-warning p-1"><img src="../assets/images/icon-09.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-warning p-1"><img src="../assets/images/icon-09.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-warning p-1"><img src="../assets/images/icon-09.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-warning p-1"><img src="../assets/images/icon-09.png" className="img-fluid" alt /></a></td>
            </tr>
           </tbody>
          </table>
         </td>
         <td width="17%" style={{verticalAlign: 'top'}}>
          <table>
           <tbody>
            <tr>
              <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-08.png" className="img-fluid" alt /></a></td>
              <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-07.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-08.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-08.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-08.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-08.png" className="img-fluid" alt /></a></td>
            </tr>
            <tr>
             <td><a href className="btn btn-success p-1"><img src="../assets/images/icon-08.png" className="img-fluid" alt /></a></td>
             <td><a href className="btn btn-danger p-1"><img src="../assets/images/icon-10.png" className="img-fluid" alt /></a></td>
            </tr>
           </tbody>
          </table>
         </td>
        </tr>
       </tbody>
      </table>
      </div>
     </div>
     <div className="col-md-3">
      <div className="bg-dark rounded shadow p-2 mb-2">
       <div className="font-weight-bold rounded px-3 py-1 mb-2 shadow-sm" style={{backgroundColor: '#000 !important', color: '#fff'}}>
        เงื่อนไขและกติกา
       </div> 
       <div className="text-light rounded border p-2">
        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores expedita eius harum deleniti, enim similique tempore libero molestiae quas, laboriosam voluptatum dolorem quam nisi fugit nesciunt temporibus sequi earum et!</small>
       </div>
      </div>
      <div className="bg-dark rounded shadow p-2 mb-2">
       <table className="table table-sm table-borderless text-light mb-0">
        <tbody>
         <tr>
          <td>บ่าโคกโหล๋ก</td>
          <td>032528</td>
         </tr>
         <tr>
          <td>ผู้ดูแล</td>
          <td>แอดมินเสียว</td>
         </tr>
         <tr>
          <td>ผู้เล่นทั้งหมด</td>
          <td>1,895 คน</td>
         </tr>
        </tbody>
       </table>
      </div>
      <img src="https://bacarabet888.com/wp-content/uploads/2018/06/%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%9A%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2-bacara.jpg" alt className="img-fluid rounded mb-2" />
      <div className="bg-dark rounded shadow p-2 mb-2">
       <div className="font-weight-bold rounded px-3 py-1 mb-2 shadow-sm" style={{backgroundColor: '#000 !important', color: '#fff'}}>
         ประวัติการออกรางวัล
       </div> 
       <table className="table table-sm table-borderless text-light mb-0">
        <tbody>
         <tr>
         <td>เสือ</td>
         <td><span className="badge bg-warning text-dark">x5</span></td>
        </tr>
        <tr>
         <td>นกยูง</td>
         <td><span className="badge bg-warning text-dark">x10</span></td>
        </tr>
        <tr>
         <td>ม้า</td>
         <td><span className="badge bg-warning text-dark">x69</span></td>
        </tr>
        <tr>
         <td>ปลา</td>
         <td><span className="badge bg-warning text-dark">x18</span></td>
        </tr>
        <tr>
         <td>กระต่าย</td>
         <td><span className="badge bg-warning text-dark">x1</span></td>
        </tr>
        <tr>
         <td>ช้าง</td>
         <td><span className="badge bg-warning text-dark">x0</span></td>
        </tr>
        </tbody>
       </table>
      </div>
      <img src="https://www.casinoclubbet.com/wp-content/uploads/2021/01/bacara.jpg" alt className="img-fluid rounded" />
     </div>
    </div>
   </div>
  </>
 )
}
