import { FromDataPage } from "./formpage";
import {useState} from 'react';



export function LoginPageForm(){
    const [obj, setObj] = useState({candidate:"",password:""});
    const [formpage,setFormpage] = useState(false);
    const onChangeData = (event) => {
        setObj({...obj,[event.target.name]:event.target.value});
        console.log(event.target.name);
        console.log(event.target.value);
        console.log(obj);
    }
    const loginClickBtn = () =>{
        setFormpage(true);
    }

    if(formpage){return(<FromDataPage username={obj.candidate}/>);}
    else{
        
        return (
        
            <>
            <div className="lgn-page d-flex flex-column justify-content-center">
            
            <div>
            <label for="lgn">UserName</label>
            <input id="lgn" type="text" name="candidate" value={obj.candidate} onChange={onChangeData}/>
            
            </div>
            <div style={{marginTop: 50}}>
                <label for="psw">Password</label>
                <input type="password" id="psw" name="password" value={obj.password} onChange={onChangeData}/>
            </div>
            <button className="btn btn-primary" style={{marginTop: 50}} onClick={loginClickBtn}>Login</button>
            
            </div>
            </>
        )
    }
}

export default LoginPageForm;