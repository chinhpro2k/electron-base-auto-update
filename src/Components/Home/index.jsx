import LeftBar from "../LeftBar";
import Devices from "../Devices";

const Home = () => {
    return (
        <div style={{display:'flex',height:'100vh'}}>
         <div style={{marginRight:"16px",backgroundColor:"#001529"}}>
             <LeftBar/>
         </div>
            <Devices/>
        </div>
    )
}
export default Home