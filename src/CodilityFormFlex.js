//import React from 'react'
import './CodilityFormFlex.css'
import React, {useState} from "react";
import {  useRef } from "react";
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
const customStyles = {
    content: {
      width:'100%',
      textAlign:'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
//import './Form3.css'
//import './Form3.css';
export const CodilityFormFlex = () => {
    const [value, onChange] = useState("");
  const [dob,onChange1] =useState(new Date());
  //const myref=useRef("");
  const txtField = React.useRef(null);
 // const txtField = React.useRef(null);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    if(!form.fName || !form.lName || !form.mobile || !form.password || !form.FavLang || !form.cnic
       || !value || !form.confirmPassword || !form.desc ||  !form.education
      || !form.email || !form.games || !form.gender || !form.province || !form.relegion 
      ){
      setIsOpen(false); 
    }else{
    setIsOpen(true);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const myref = useRef("");
  //console.log(Fname.current);
  //var [fields,setFields]=useState({}),
  //const [error,setError]=useState({}),
  const languages=['java','.net','react','php'];
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    cnic: "",
    cnic_issuDate: "",
    mobile: "",
    email: "",
    province: "",

    games: "",
    relegion: "",
    education: "",
    dob: "",
    
    FavLang:"",
    
    desc: "",
    password: "",
    confirmPassword: "",
    gender: "",
    //file:""
   
  });
  const [image, setImage] = useState("");
  
        
  const [error, setError] = useState({
    errFname: "first name should not empty",
    errLname: "last name should not be empty",
    errCnic: "cnic should not be empty",
    errCnicdate:"nis issu date is required",
    errMobile:"mobile number is not empty",
    errProv:"province is needed",
    errEmail:"emial is not empty",
    errGames:"game is needed",
    errRel:"relegion is needed",
    errEdu:"education is needed",
    errDob:"dob is needed",
    errLang:"at least one language is needed",
    errPwd:"password is needed",
    errCpwd:"confirm password is needed",
    errGender:"gender is needed",
    errDesc:"description is needed",
    errfavLang:"at least select one language",
    cnicPattern:"please enter cnic number in required pattern"
  });
  const [choice, setChoice] = useState(false);
 
  const changeImage=(e)=>{
    try {
      setImage(
        URL.createObjectURL(e.target.files[0])
     )
    }
    catch {
      return 0
    }
    

  }

  const handleOnChange = (e) => {
    //console.log(myref.current.value)
    const target = e.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;

    const value = target.value;
    const name = target.name;
   
    setForm({
      ...form, //adds values into forms
      [name]: value,
    });
  
  
  };
  
  const OnChangeHandle=(event)=>{
      const value=event.target.value
      if(event.target.name === "FavLang"){
          let temp=form.FavLang;
          if (event.target.checked) {
            temp = temp + " " + event.target.value;
          } else {
            temp = temp.replace(event.target.value, "");
          }
          settingState(event, temp);
        }
        //Default
        else {
          settingState(event, value);
        }
      };
      const settingState = (event, value) => {
        setForm({
          ...form,
          [event.target.name]: value,
        });
      };


    
  const handleSubmit = (e) => {
    e.preventDefault();
    setChoice(true);
    //  console.log(myref.current.value)
    console.log(form);
    if(form.password === form.confirmPassword){
      handleOnChange(e);
    }else{
      alert("password and confrm password are not matched")
    }
  //  if(form.mobile !== "^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"){
    //  alert("plz enter cnic number in  required pattern")
   // }
  }
   
    return (
      <>
      <form onSubmit={handleSubmit}>
      <div className="box">
            
          
          
           <div className="col1">
               <div className="leftBox">
              <div className="fname">
                  <label for="fname">First Name</label><br/>
              <input type="text" id="fname"
              value={form.fName}
              name="fName"
              id="fn"
              onChange={handleOnChange}
              placeholder="please enter your first name"
              /> <br />
              <span
                style={
                  form.fName === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                      }
                    : { display: "none" }
                }
              >
                {error.errFname}
              </span>
              </div>
              <div className="lname">
              <label for="ln">Last Name</label><br/>
              <input  value={form.lName}
                  name="lName"
                  id="ln"
                  onChange={handleOnChange}
                  placeholder="please enter your last name"/>
                   <br />
                <span
                  style={
                    form.lName === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errLname}</span>
              </div>
              <div className="cnic">
              <label for="nic">nic number</label><br/>
              <input type="text"
                  value={form.cnic}
                  name="cnic"
                  id="cn"
                  
                  onChange={handleOnChange}
                  placeholder="please enter your nic numbr"
                />
                <br />
                <span
                  style={
                    form.cnic === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >
                  {error.errCnic}
                </span>
                <br />
                <span
                  style={
                    form.cnic !== "^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"  && choice==true
                      ?{
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      :{display:"none"}
                  }
                >{error.cnicPattern}</span>
              </div>
              <div className="cnicDate">
              <label for="nicd">nic date</label><br/>
              <br />
                <DateTimePicker
        onChange={onChange}
        value={value}
        name="cnic_issuDate"
        id="nicdate"
      />
              
                <br />
                <span
                  style={
                    value === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >
                  {error.errCnicdate}
                </span>

              
              </div>
            
               </div>
             
           </div>
            
            
            <div className="col2">
            <div className="rightBox">
<div className="pic"> <span>please choose a picture</span>
<input type="file" onChange={changeImage} name="image" id="file" 
  
  / > 
   <img src={image} width="200px" height="190px" style={image === "" ? {display: "none"} : {position:"fixed",top:"100px" ,right:"400px",
   
   }}
   
   />
  
</div>
               </div>
           </div>
            
            
            
            
            
        </div>
        <div className="box1">
                   <div className="li1">
               <div className="leftBox1">
                   <div className="mobile">
                       <label for="cell">Mobile No.</label>
                       <br/>
                       <br />
                <input
                  type="number"
                  value={form.mobile}
                  name="mobile"
                  id="cell"
                  pattern="[7-9]{1}[0-9]{9}" 
                  onChange={handleOnChange}
                  placeholder="please ur cell no"
                />
                <br />
                <span
                  style={
                    form.mobile === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errMobile}</span>
                   </div>
                   <div className="province">
                       <label for="">your state/ province.</label>
                       <br />
                <select
                  value={form.province}
                  name="province"
                  onChange={handleOnChange}
                >
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option selected value="Balochistan">
                    Balochistan
                  </option>
                  <option value="KPK">KPK</option>
                </select>
                <br />
                
                
                <span
                  style={
                    form.province === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errProv}</span>
                      
                   </div>

               </div>
                   </div>
                   <div className="li2">
                    <div className="rightBox1">
                        <div className="email">
                            <label for="email">Email</label>
                            <br/>
                            <input type="email"
                  value={form.email}
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                  placeholder="please email address"
                />
                <br />
                
                
                <span
                  style={
                    form.email=== "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errEmail}</span>
                

                        </div>
                        <div className="games">
                       <label for="games">your games.</label>
                       <br />
                <select
                  value={form.games}
                  name="games"
                  onChange={handleOnChange}
                >
                  <option value="Hockey">Hockey</option>
                  <option value="Kricjet">Cricket</option>
                  <option selected value="foot ball">
                    Foot ball
                  </option>
                  <option value="tennis ball">Tennis ball</option>
                </select>
                <br />
                
                
                <span
                  style={
                    form.games === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errProv}</span>
                      
                   </div>

                       

                    </div>

                   </div>
               </div>
               
               <div className="box2">
               <h2>Religions:</h2>
                   <div className="islam">
                       <br/>
                       <input
                type="radio"
                value="Islam"
                name="relegion"
                id="rd"
                //  checked={form.relegion === "Islam"}
                onChange={handleOnChange}
              />
              <label for="rd">islam </label>

              <input
                type="radio"
                value="christian"
                // text={form.relegion}
                name="relegion"
                id="ch"
                // checked={form.relegion === "christian"}
                onChange={handleOnChange}
              />
              <label for="ch">christian </label>
              <input
                type="radio"
                value="hinduish"
                // text={form.relegion}
                name="relegion"
                id="hindi"
                // checked={form.relegion === "hinduish"}
                onChange={handleOnChange}
              />
              <label for="hindi">Hunduish </label>
              <input
                type="radio"
                value="budhism"
                id="budh"
                // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}
              />
              <label for="budh">Bushism </label>
              <input
                type="radio"
                value="sikhism"
                // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}
                id="sikh"
              />
              <label for="sikh">Sikhism </label>
              <input
                type="radio"
                value="aethist"
                // text={form.relegion}
                name="relegion"
                id="auth"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}
              />
              <label for="auth">Authist </label>
              <input
                type="radio"
                value="other"
                // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleOnChange}
                id="other"
              />
              <label for="other">Other </label>
              
                <br />
                <span
                  style={
                    form.relegion === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errRel}</span>
                   </div>
               </div>
               <div className="box3">
                   <div className="edu">
                    <label for="edu">Qualification</label><br/>
                 <input   type="text"
                  name="education"
                  value={form.education}
                  onChange={handleOnChange}
                />
                
                <br />
                <span
                  style={
                    form.education === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errEdu}</span>

                   </div>
                   <div className="dob">
                       <label for="dob">Date of birth</label><br/>
                       <DateTimePicker
        onChange={onChange1}
        value={dob}
        name="dob"
        id="dob"
      />
               
                
                <br />
                <span
                  style={
                    dob === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errDob}</span>

                   </div>
               </div>
               
               <div className="box4">
               <h2>Languages</h2>
                   <div className="java">
                   <div className="lang" name="favLang" onChange={OnChangeHandle} >
              <ul style={{display:"flex",listStyle:"none",textAlign:"center"}}>
              {languages.map((lang) => (
                <div >
                  <li>
                  <input
                    type="checkbox"
                    value={lang}
                    name="FavLang"
                    // ref={favLangref}
                    // onKeyPress={() => submitEditing(descref)}
                  />
                  <label for={lang}>{lang}</label>
                  </li>
                </div>
              ))}
              </ul>
            </div>
            <span
              style={
                form.FavLang === "" && choice === true
                  ? { display: "block",  border: "2px solid red",
                  color: "red", }
                  : { display: "none" }
              }
            >
              {error.errfavLang}
            </span>

                   </div>
               </div>
               <div className="box5">
                   <div className="desc">
                       <label for="desc">Description</label><br/>
                       <textarea
                  name="desc"
                  value={form.desc}
                  onChange={handleOnChange}
                  style={{ width: "590px" ,height:"220px"}}
                />

<br />
                <span
                  style={
                    form.desc === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errDesc}</span>
                   </div>
               </div>
               <div className="box6">
                   <div className="password">
                    <label for="pwd">Password</label><br/>
                    <input
                  type="password"
                  id="pwd"
                  name="password"
                  onChange={handleOnChange}
                />

<br />
                <span
                  style={
                    form.password === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errPwd}</span>
      
                   </div>
                   <div className="cpass">
                       <label for="cpwd">Confirm password</label>
                       <br />
                <input
                  type="password"
                  value={form.confirmPassword}
                  id="cpwd"
                  name="confirmPassword"
                  onChange={handleOnChange}
                />

<br />
                <span
                  style={
                    form.confirmPassword === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errCpwd}</span>

                   </div>
               </div>
               <div className="box7">
                   
                   <div className="male">
                   <h3>Gender</h3>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  id="gn1"
                  //  checked={form.relegion === "Islam"}
                  onChange={handleOnChange}
                />
                <label for="gn1">Male </label>
                <input
                  type="radio"
                  value="Female"
                  // text={form.relegion}
                  name="gender"
                  id="fm"
                  // checked={form.relegion === "christian"}
                  onChange={handleOnChange}
                />
                <label for="fm">Female </label>
                <input
                  type="radio"
                  value="others"
                  // text={form.relegion}
                  name="gender"
                  id="others"
                  // checked={form.relegion === "hinduish"}
                  onChange={handleOnChange}
                />
                <label for="others">others </label>

                   
                   </div>
                  
               </div>
               <div className="box8">
                   <div className="submit">
                       <input type="submit" value="submit data" onClick={openModal}
                       style={{backgroundColor:"green",width:"100%",height:"100px",
                       fontSize: "20px"}}
                       />
                   </div>
               </div>
        </form>
         
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Submitted Data Successfully</h2>
        <button onClick={closeModal}>close</button>
        <div>
            {
        Object.entries(form).map(([key, value]) => {

return (
<h2>{key} - {value}</h2>
)



})


}
</div>

        
      

      </Modal>
        </>
    )
}
