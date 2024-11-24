import { useContext, useEffect, useRef, useState } from "react";
import { Usercontext } from './App.jsx';
import { useParams } from "react-router-dom";

export default function AddUser() {
    const fullname=useRef(null);
    const country=useRef(null);
    const param=useParams();
    const Context=useContext(Usercontext);
    const [updated,setupdated]=useState([]);

    useEffect(()=>{
        const {id}=param;
        const clients = Context.users.filter(client=>client.id==id);
        if(clients.length > 0){
            setupdated(clients[0])
            
        }else{
            console.log('no user found')
        }
    },[])
    
    const handelSubmit= (e)=>{
        e.preventDefault();
        Context.UpdateUser({ 
                paylood:{                
                    fullName:fullname.current.value,
                    country:country.current.value,
                    id:param.id,
                }}
            );
    }
 ;
  return (
    <div className='container my-5 w-50 '>
    <h2 className="bg-primary px-4 py-1 rounded">UPDATE USER</h2>
    <form onSubmit={handelSubmit}>
  <div className="mb-3">
    <label className="form-label">ID :</label>
    <input type="text" className="form-control-plaintext" readOnly defaultValue={updated.id} name="id"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Full name</label>
    <input type="text" className="form-control" name='full-name' ref={fullname} defaultValue={updated.fullName}
    />
  </div>
  <div className="mb-3">
  <select className="form-select" aria-label="Default select example" ref={country} name="Country" defaultValue={updated.country}>
  <option value=" "> select Country</option>
  <option value="Morroco" selected={updated.country=="Morroco"}>Morroco</option>
  <option value="USA" selected={updated.country=="USA"}>USA</option>
  <option value="ENGLAND" selected={updated.country=="ENGLAND"}>ENGLAND</option>
  <option value="Canada" selected={updated.country=="Canada"}>Canada</option>
</select>
  </div>
  <button type="submit" className="btn btn-primary">Update</button>
</form>
    </div>
  )
}
