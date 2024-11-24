import { createContext, useState } from "react";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLayout from "./UserLayout";

export const Usercontext = createContext([
  {
    users: [],
    Lastid: 0,
    addusers:()=>null,
    UpdateUser:()=>null,
    DeleteUser:()=>null
  },
]
);

function App() {
  const [users, setuser] = useState([]);
  const [Lastid, setLastid] = useState(0);

  const addusers = (data) => {
    setLastid((previous) => previous + 1);
    setuser((previous) => [...previous, data.paylood]);
  };
  
  const UpdateUser = (data) => {
    const {id}=data.paylood;
    console.log(id)
    setuser(previous =>previous.map(user=>{
      if(user.id==id){
        return data.paylood
      }
      return user
    }
    ));
  };

  const dalatUser = (data) => {
    alert("ok");
    const {id} = data.paylood;
    const clients = users.filter(client => client.id != id);
      console.log(clients);
      setuser(clients);
  };

  return (
    <Usercontext.Provider
      value={
        {
          users: users,
          Lastid: Lastid,
          addusers:addusers,
          UpdateUser:UpdateUser,
          dalatUser:dalatUser
        }
      }
    >
      <UserLayout/>
    </Usercontext.Provider>
  );
}

export default App;
