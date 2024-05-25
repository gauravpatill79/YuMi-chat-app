import ChatterList from "./chatList/ChatterList";
import "./list.css"
import UserInfo from "./userInfo/Userinfo";

const List = () =>{
    return (
        <div className="list">
        <UserInfo/>
        <ChatterList/>
        </div>
    )
}
export default List;