import React from "react";
import { useState, useEffect, useRef } from "react";
export const Form2 = () => {
  // const myref=useRef("");

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
    picture: "",
    ref: "",
  });
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
  }
  return (
    <div>
      <h1>React trainig form by making object of properties</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <table
            width="600px"
            cellPadding="3px"
            cellSpacing="3px"
            style={{
              textAlign: "center",
              margin: "auto",
              border: "2px solid red",
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
              <td style={{ backgroundColor: "#1abc9c" }} rowSpan="4"></td>
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
                <input
                  type="date"
                  value={form.cnic_issuDate}
                  name="cnic_issuDate"
                  id="nicdate"
                  onChange={handleOnChange}
                  placeholder="please nicissud date"
                />
                <br />
                <span
                  style={
                    form.cnic_issuDate === "" && choice === true
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
              <h4>Relegion</h4>

              <input
                type="radio"
                value="Islam"
                name="relegion"
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
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleOnChange}
                />
                
                <br />
                <span
                  style={
                    form.dob === "" && choice === true
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
              <td>
              <div className="favLanguages">
          <div>
            <label>Favourite Languages:</label> <br />
            <br />
            <div className="lang" name="favLang" onChange={OnChangeHandle}>
              {languages.map((lang) => (
                <div>
                  <input
                    type="checkbox"
                    value={lang}
                    name="FavLang"
                    // ref={favLangref}
                    // onKeyPress={() => submitEditing(descref)}
                  />
                  <label for={lang}>{lang}</label>
                </div>
              ))}
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
            <tr colsPan="2">
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
              <td>
                {" "}
                <h3>Gender</h3>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  //  checked={form.relegion === "Islam"}
                  onChange={handleOnChange}
                />
                <label for="rd">Male </label>
                <input
                  type="radio"
                  value="Female"
                  // text={form.relegion}
                  name="gender"
                  id="fm"
                  // checked={form.relegion === "christian"}
                  onChange={handleOnChange}
                />
                <label for="ch">Female </label>
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
              <td>
                <input type="submit" value="submit form" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <span id="spln"></span>
    </div>
  );
}

