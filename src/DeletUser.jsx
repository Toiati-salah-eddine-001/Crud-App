import { useContext, useEffect, useRef, useState } from "react";
import { Usercontext } from './App.jsx';
import { useParams } from "react-router-dom";

export default function AddUser() {

    const param=useParams();
    const Context=useContext(Usercontext);
    const [personDlated,setpersonDlated] = useState();
    useEffect(()=>{
        const {id}=param;
        const clients = Context.users.filter(client=>client.id != id);
        setpersonDlated(clients)
    },[])
    console.log(personDlated);
    const handelSubmit= (e)=>{
        e.preventDefault();
        Context.dalatUser({ 
            paylood:{
                id:param.id
            }
            }
            );
    }
 ;
  return (
    <button type="submit" className="btn btn-danger" onClick={handelSubmit}>delet</button>
  )
}
