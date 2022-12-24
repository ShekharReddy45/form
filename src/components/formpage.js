import { useState } from 'react';
import {LoginPageForm} from './loginpage';



export function FromDataPage(props){

    const [valueInfo, setValueInfo] = useState({
        Fname:"",
        Lname:"",
        Age:"",
        Gender:""
    });
    const [userData, setUserData] = useState([]);
    const [editAt, setEditAt] = useState();
    const [updateBtn, setUpdateBtn] = useState(false);
    

    

    const onChangeValue = (event) => {
        setValueInfo({...valueInfo, [event.target.name]:event.target.value});
    }

    const handleSubmit = () => {
       if(valueInfo.Fname.length > 0){ 
        if(editAt == undefined){  
        const details = [...userData, valueInfo];
        setUserData(details);
        
    }else{
        const updatedUserData = userData.map((value, index) => {
            if (index === editAt){
                return valueInfo;
            }else{
                return value;
            }
        });
        setUserData(updatedUserData);
        setEditAt(undefined);
        
    }


    }
    setValueInfo({Fname:"",Lname:"",Age:"",Gender:""});
    setUpdateBtn(false);
        
    }

    const handleEdit = (event,index) => {
        setEditAt(index);
        const newObj = userData[index];
        setValueInfo(newObj);
        setUpdateBtn(true);
    }

    return (
        <>
        <div style={{width: 300, margin:20}}>
            <p>Logged in by {props.username}</p>
            <form className="d-flex flex-column" >
                <label for="fname">FirstName</label>
                <input type="text" id="fname" name='Fname' className="form-control" value={valueInfo.Fname} onChange={onChangeValue} />
                <label for="lname">LastName</label>
                <input type="text" id="lname" name='Lname' className="form-control" value={valueInfo.Lname} onChange={onChangeValue} />
                <label for="yrs">Age</label>
                <input type="text" id="yrs" name='Age' className="form-control" value={valueInfo.Age} onChange={onChangeValue} />
                <label for="gndr">Gender</label>
                <input type="text" id="gndr" name='Gender' className="form-control" value={valueInfo.Gender} onChange={onChangeValue} />
                <button style={{marginTop:20,width:90}}>Back</button>
            </form>
            {updateBtn ? <button className='btn btn-primary' style={{marginTop: 14}} onClick={handleSubmit}>Update</button>:<button style={{marginTop:20,width:90}} onClick={handleSubmit}>Add</button>}
            
        </div>

        <div>
            <center>
                <table className='table table-dark' style={{width:500}}>
                    <thead>
                        <tr>
                            <th>SL.NO</th>
                            <th>FName</th>
                            <th>LName</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        userData.map((value, index)=>{

                        return (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{value.Fname}</td>
                            <td>{value.Lname}</td>
                            <td>{value.Age}</td>
                            <td>{value.Gender}</td>
                            
                            <td>
                                <button>Delete</button>
                                <button style={{marginLeft: 18}} onClick={(event) => {handleEdit(event,index)}}>Edit</button>
                            </td>
                        </tr>
                        )
                        })
                        }
                    </tbody>
                </table>
            </center>
        </div>
        </>
    );
}