import React, {useState} from "react";
import {  useRef } from "react";
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
//import './Form3.css'
import './Form3.css';
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
export const Form3 = () => {
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
    errfavLang:"at least select one language"
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
    <div>
      

      <div>
        <form onSubmit={handleSubmit}>
          <table
            width="100%"
            cellsPadding="3px"
            cellSpacing="3px"
            border="2px"
            style={{
              textAlign: "center",
              margin: "auto",
              border: "2px solid black",
              backgroundColor: "#27ae60",
            }}
          >
            <tr>
              <td>
                <label for="fn">First Name</label>
                <br />
                <input
                  type="text"
                  value={form.fName}
                  name="fName"
                  id="fn"
                  onChange={handleOnChange}
                  placeholder="please enter your first name"
                />

                <br />
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
              </td>
              <td style={{ backgroundColor: "#1abc9c",padding:"50px auto" }} rowSpan="4">please choose a picture
           
  <input type="file" onChange={changeImage} name="image" id="file" 
  
 / > 
  <img src={image} width="200px" height="190px" style={image === "" ? {display: "none"} : {position:"fixed",top:"0px" ,right:"400px",
  
  }}
  
  />
   

    
        
              
              </td>
              
            </tr>
            <tr>
              <td>
                {" "}
                <label for="ln">last Name</label>
                <br />
                <input
                  type="text"
                  value={form.lName}
                  name="lName"
                  id="ln"
                  onChange={handleOnChange}
                  placeholder="please enter your last name"
                />
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
                
              </td>
            </tr>
            <tr>
              <td>
                <label for="cn">cnic number</label>
                <br />
                <input
                  type="text"
                  value={form.cnic}
                  name="cnic"
                  id="cn"
                  pattern="^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"
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
              </td>
            </tr>
            <tr>
              <td>
                <label for="nicdate">NIC Issu date</label>
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
              </td>
            </tr>
            <tr>
              <td>
                <label for="cell">Mobile number</label>
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
              </td>

              <td>
                <label for="email">Email address</label>
                <br />
                <input
                  type="email"
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
                
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <label>select your Province</label>
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
              </td>
              <td>
                <label>select Games</label>
                <br />
                <select
                  value={form.games}
                  name="games"
                  onChange={handleOnChange}
                >
                  <option value="Kricket">Cricket</option>
                  <option value="Hockey">Hockey</option>
                  <option selected value="football">
                    football
                  </option>
                  <option value="Tennis ball">Tennis ball</option>
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
                >{error.errGames}</span>
              </td>
            </tr>
            <tr>
              <td colsPan="2">
              <h4>Relegion</h4>

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
                // checked={form.relegion === "christian"}
                onChange={handleOnChange}
              />
              <label for="ch">christian </label>
              <input
                type="radio"
                value="hinduish"
                // text={form.relegion}
                name="relegion"
                // checked={form.relegion === "hinduish"}
                onChange={handleOnChange}
              />
              <label for="hindi">Hunduish </label>
              <input
                type="radio"
                value="budhism"
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
              />
              <label for="sikh">Sikhism </label>
              <input
                type="radio"
                value="aethist"
                // text={form.relegion}
                name="relegion"
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
                </td>
            </tr>
            <tr>
              <td>
                <label for="edu">Enetr ur higest qualification</label>
                <input
                  type="text"
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
              </td>
              <td>
                <label for="dob">Please choose your date of birth</label>
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
              </td>
            </tr>
            <tr>
              <td colsPan="2" >
              <div className="favLanguages" >
          <div>
            <label>Favourite Languages:</label> <br />
            <br />
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





               
              </td>
            </tr>
            <tr>
              <td colsPan="2">
              <div>
                <label>Description</label>
                <textarea
                  name="desc"
                  value={form.desc}
                  onChange={handleOnChange}
                  style={{ width: "590px" }}
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
              </td>
            </tr>
            <tr>
              <td>
                <label for="pwd">Password</label>
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
                
              </td>
              <td>
                <label for=" cpwd">Confirm Password</label>
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
              </td>
            </tr>
            <tr>
              <td colsPan="2">
               
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

                <br />
                <span
                  style={
                    form.gender === "" && choice === true
                      ? {
                          display: "block",
                          border: "2px solid red",
                          color: "red",
                        }
                      : { display: "none" }
                  }
                >{error.errGender}</span>
              </td>
            </tr>

            <tr>
              <td colsPan="2">
                <input type="submit" value="submit form" style={{display:"block",width:"100%",
                 background :"green",color:"white",fontSize:"30px"}}
                onClick={openModal}
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
      
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
    </div>
  );
}

