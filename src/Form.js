import React from 'react'
import {useState,useEffect,useRef} from 'react'
export const Form = () => {
 // const myref=useRef("");
 
 const myref=useRef("");
  //console.log(Fname.current);
//var [fields,setFields]=useState({}),
//const [error,setError]=useState({}),
    const [form,setForm]=useState({
        fName:"",
        lName:"",
        cnic:"",
        cnic_issuDate:"",
        mobile:"",
        email:"",
        province:"",
        
        games:"",
        relegion:"",
        education:"",
        dob:"",
        js:"java script",
        react:"React",
        python:"Pthon",
        cLang:"C++",
        desc:"",
        password:"",
        confirmPassword:"",
        gender:"",
        picture:"",
        ref:""
    });
    const [error,setError]=useState({
      err:"first name should not empty"
    })
   // const [error,setError]=useState({});
   // const [fields,setFields]=useState({form});
    useEffect(()=>{
//alert("form validator")

    },[]);
 
const handleOnChange =(e)=>{
  //console.log(myref.current.value)
        const target = e.target;
       // const value = target.type === 'checkbox' ? target.checked : target.value;
        
       const value=target.value;
       const name = target.name;
    
        setForm({
            ...form,   //adds values into forms
          [name]: value
        });
       
      //  const { name1, value } = event.target;
        //let errors = this.state.errors;
        if (form.fName) {
         // console.log( 'Please Enter Employee Name')
          //setError("first name should not be empty")
          console.log(error.err);
          document.getElementById("error").style.display="none"
        }else{
          document.getElementById("error").style.display="block"
        } 
               
      }

//}
function handleSelectChange(e) {
  const target = e.target;
  const value1 = target.type === 'checkbox' ? target.checked : target.value;
   
  //const value=target.value;
  const name = target.name;

   setForm({
      ...form,   //adds values into forms
     [name]: target.value1
   });

   
}
const handleSubmit=(e)=>{
    e.preventDefault();
   
  //  console.log(myref.current.value)
   // console.log(form);
    //const errors = {};
   
 //   const errors = {};

  if (!form.fName) {
    console.log( 'Please Enter Employee Name')
    //setError("first name should not be empty")
    console.log(error.err);
    document.getElementById("error").style.display="block"
  }
  //else{document.getElementById("error").style.display="none"}
  
  else if (form.fName.length >20) {
    console.log('Name should be lee thean20 characters');
  }
  if(!form.lName){
   // console.log('plz enter last name')
   document.getElementById('spln').innerHTML="enet  last name";

  }
  
  if (!form.password) {
    //console.log( 'password is not empty')
    
    myref.current.value="plz pwd required";
    console.log(myref.current.value);
  
    myref.current.style.display= "block"
    

  } else if (form.password.length <8) {
    console.log('Password should be minimum 8 characters');
  }
 // myref.current.style.display= "block"
    //console.log(JSON.stringify({form}));
}
    return (
        <div>
            <h1>React trainig form by making object of properties</h1>
            
           
          
          <div>
            
            <form onSubmit={handleSubmit}>
            <table width="600px" 
            cellPadding="3px" cellSpacing="3px"
            style={{textAlign:"center",margin:"auto",border:"2px solid red"
            ,backgroundColor:"#27ae60"
            }}>
              <tr><td>
              <label for="fn">First Name</label><br/>
              <input type="text" value={form.fName} name="fName" id="fn" 
                            onChange={handleOnChange} placeholder="please enter your first name"/>
             
             <span name="error" style={{display:"none",border:"2px solid red"
            ,width:"300px",height:"30px" ,textAlign:"center", rowGap:"30px"
            }}
             id="error" 
             onChange={(e)=>{
                 const target = e.target;
                 
                 // const value = target.type === 'checkbox' ? target.checked : target.value;
                  
                 const value=target.value;
                 const name = target.name;
              
                  setError({
                      ...error,   //adds values into forms
                    [name]: value
                  });
                 
             }}><h5 style={{paddingBottom:"20px"}}>{error.err}</h5></span>
              </td>
              <td style={{backgroundColor:"#1abc9c"}} rowSpan="4">

              </td>
              </tr>
              <tr><td>              <label for="ln">last Name</label><br/>
               <input type="text" value={form.lName} name="lName" id="ln"
              onChange={handleOnChange} placeholder="please enter your last name"/>
              </td></tr>
              <tr>
                <td>
               <label for="cn">cnic number</label><br/>
               <input type="text" value={form.cnic} name="cnic" id="cn"
              onChange={handleOnChange} placeholder="please enter your nic numbr"/>
              </td>
              </tr>
              <tr><td>
               <label for="nicdate">NIC Issu date</label><br/>
               <input type="date" value={form.cnic_issuDate} name="cnic_issuDate" id="nicdate"
              onChange={handleOnChange} placeholder="please nicissud date"/>
              </td>
              </tr>
              <tr><td>
              <label for="cell">Mobile number</label><br/>
               <input type="number" value={form.mobile} name="mobile" id="cell" 
              onChange={handleOnChange} placeholder="please ur cell no"/>
              </td>
              

              <td>
                              <label for="email">Email address</label>
                              <br/>
               <input type="email" value={form.email} name="email" id="email"
              onChange={handleOnChange} placeholder="please email address"/>
              </td><td></td></tr>
              <tr>
                <td>
              <label>select your Province</label><br/>
              <select  value={form.province} name="province" onChange={handleOnChange}>
  <option value="Punjab" >Punjab</option>
  <option value="Sindh" >Sindh</option>
  <option selected value="Balochistan" >Balochistan</option>
  <option value="KPK" >KPK</option>
</select></td>
<td>
<label>select Games</label><br/>
              <select  value={form.games} name="games" onChange={handleOnChange}>
  <option value="Kricket" >Cricket</option>
  <option value="Hockey" >Hockey</option>
  <option selected value="football" >football</option>
  <option value="Tennis ball" >Tennis ball</option>
</select>
</td>
</tr>
<tr>
<h4>Relegion</h4>

< input type="radio"
                value='Islam'
                name="relegion"
              //  checked={form.relegion === "Islam"}
                onChange={handleOnChange}/>
          <label for="rd">islam      </label>
                
< input type="radio"
                value='christian'
               // text={form.relegion}
                name="relegion"
               // checked={form.relegion === "christian"}
                onChange={handleOnChange}/>
             <label for="ch">christian   </label>
             < input type="radio"
                value='hinduish'
               // text={form.relegion}
                name="relegion"
               // checked={form.relegion === "hinduish"}
                onChange={handleOnChange}/>
             <label for="hindi">Hunduish  </label>
             < input type="radio"
                value='budhism'
               // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}/>
             <label for="budh">Bushism  </label>
             < input type="radio"
                value='sikhism'
               // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}/>
             <label for="sikh">Sikhism </label>
             < input type="radio"
                value='aethist'
               // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}/>
             <label for="auth">Authist </label>
             < input type="radio"
                value='other'
               // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}/>
             <label for="other">Other </label>
             </tr>
             <tr>
               <td>
             <label for="edu">Enetr ur higest qualification</label>
             <input type="text" name="education" value={form.education} onChange={handleOnChange}/>
             </td><td>
             <label for="dob">Please choose your date of birth</label>
             <input type="date" id="dob" name="dob" value={form.dob} onChange={handleOnChange}/>
           </td>
           </tr>
           <tr><td>
            <h3>Favourite Languages</h3>
            <label for="js">Java script</label>
            <input type="checkbox" value={form.js} name="js"
            id="js"
            onChange={handleOnChange}/>
             <label for="react">React js</label>
            <input type="checkbox" value={form.react} name="react"
            id="react"
            onChange={handleOnChange}/>
            </td></tr>
            <tr colsPan="2">
              
              <div>
            <label>Description</label>
            <textarea name="desc" value={form.desc} onChange={handleOnChange}
            style={{width:"590px"}}
            />
            </div>
            
            </tr>
            <tr><td>
            <label for="pwd">Password</label>
            <input type="password"  id="pwd" name="password" 
            
            onChange={handleOnChange}/>
            <br/>
            <span value={form.ref} ref={myref} onChange={handleOnChange} style={{display:"none"}}
       
       >{myref.current.value}</span>
        
        

            
            
            </td>
            <td>
            <label for=" cpwd">Confirm Password</label><br/>
            <input type="password" value={form.confirmPassword} id="cpwd" name="confirmPassword" onChange={handleOnChange}/>
            </td></tr>
            <tr>
              <td>           <h3>Gender</h3>
             
< input type="radio"
                value="male"
                name="gender"
              //  checked={form.relegion === "Islam"}
              onChange={handleOnChange}/>
          <label for="rd">Male      </label>
                
< input type="radio"
                value='Female'
               // text={form.relegion}
                name="gender"
                id="fm"
               // checked={form.relegion === "christian"}
                onChange={handleOnChange}/>
             <label for="ch">Female  </label>
             < input type="radio"
                value='others'
               // text={form.relegion}
                name="gender"
                id="others"
               // checked={form.relegion === "hinduish"}
                onChange={handleOnChange}/>
             <label for="others">others  </label>
             </td></tr>
            
           <tr><td>
              <input type="submit" value="submit form"/>
              
              </td></tr>
              </table>
            </form>
            
            </div>
            <span id="spln"></span>
        </div>
    )
}
