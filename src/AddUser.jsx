import { useContext, useEffect, useRef } from "react";
import { Usercontext } from './App.jsx';

export default function AddUser() {
    const fullname=useRef(null);
    const country=useRef(null);

    const Context=useContext(Usercontext);
    useEffect(()=>{
        console.log(Context)
    },[Context])
    
    const handelSubmit= (e)=>{
        e.preventDefault();
        Context.addusers({ 
                paylood:{                
                    fullName:fullname.current.value,
                    country:country.current.value,
                    id:Context.Lastid+1,
                }}
            );
            fullname.current.value="";
    }
 ;
  return (
    <div className='container my-5 w-50 '>
    <h2 className="bg-primary px-4 py-1 rounded">Add User</h2>
    <form onSubmit={handelSubmit}>
  <div className="mb-3">
    <label className="form-label">ID :</label>
    <input type="text" className="form-control-plaintext" readOnly value={Context.Lastid+1} name="id"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Full name</label>
    <input type="text" className="form-control" name='full-name' ref={fullname} 
    />
  </div>
  <div className="mb-3">
  <select className="form-select" aria-label="Default select example" ref={country} name="Country">
  <option value=" "> select Country</option>
  <option value="Morroco">Morroco</option>
  <option value="USE">USE</option>
  <option value="ENGLAND">ENGLAND</option>
</select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
