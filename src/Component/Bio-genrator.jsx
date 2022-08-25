import React from "react";
import { useState } from "react";
import "./Bio-genrator.css"




export const Bio_Genrator = () => {

    const [image , setimage] = useState("https://tse2.mm.bing.net/th?id=OIP.vvjbgjel2AatUUhUOdHISgHaHa&pid=Api&P=0")
    const [name , setname] = useState("Vikas")
    const [gender , setgender] = useState("Male")
    const [location , setLocation] = useState("Delhi")
    const [school , setschool] = useState("GNPS")
    const [CheckedLocation , setCheckedLocation] = useState(true)
    const [CheckedSchool , setCheckedSchool] = useState(true)

    

    



    const UploadImage=(e)=>{
        const file = e.target.files[0];
        setimage(URL.createObjectURL(file));
    }
    console.log(image)

    const RandomName=()=>{
        let Randomname=["vikas","raj","sameer","mohit" , "savita" ]
        setname(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomLocation=()=>{
        let Randomname=["Delhi","Mumbai","Pune","Goa" , "Dheradun" ]
        setLocation(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomSchool=()=>{
        let Randomname=["DPS","GNPS","JPS","LPU" , "GEHU" ]
        setschool(Randomname[Math.floor(Math.random()*5)])
    }

    const Locationstatus  = () => {
        if(CheckedLocation){
            setCheckedLocation(false)
        }
        else if(!CheckedLocation){
            setCheckedLocation(true)
        } 
    }

    const Schoolstatus  = () => {
        if(CheckedSchool){
            setCheckedSchool(false)
        }
        else if(!CheckedSchool){
            setCheckedSchool(true)
        } 
    }





    return(
        <div>
            <div className="topic">  <p> Bio Genrator </p> </div>


            <div className="first_div">

                <div className="left">
                    <p> Option </p> 

                    <div className="Profile_box">
                        <span className="Profile">Profile photo</span>
                        <span>
                            <input type="file"
                                onChange={UploadImage}
                            ></input>
                        </span>
                    </div>

                    <div className="Profile_box">
                        <div>
                            <label> Name</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={((e) => {
                                    setname(e.target.value)
                                })}
                                defaultValue={name}
                            />
                        </div>

                                
                        <div>
                            <label>Gender</label>
                            <select 
                                onChange={((e) => {
                                    setgender(e.target.value)
                                })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                                
                        <div>   
                            <button
                                onClick={RandomName}
                            >
                                Random Name
                            </button>
                        </div>
                    </div>

                    <div className="Profile_box">
                        <span>
                            <input 
                                type="checkbox" 
                                checked={CheckedLocation}
                                onClick={Locationstatus}
                            />
                            <label >Location</label>
                            <input 
                                type="text" 
                                defaultValue={location}
                            />
                        </span>

                        <span>
                            <button
                                onClick={RandomLocation}
                            >
                                Random Location
                            </button>
                        </span>
                    </div>

                    <div className="Profile_box">
                        <span>
                            <input 
                                type="checkbox" 
                                checked={CheckedSchool}
                                onClick={Schoolstatus}
                            />
                            <label >School</label>
                            <input 
                                type="text" 
                                defaultValue={school}
                            />
                        </span>

                        <span>
                            <button
                                onClick={RandomSchool}
                            >
                                Random School
                            </button>
                        </span>
                    </div>



                </div>



                <div className="right">
                    <p> Result </p>
                    <img src={image} alt="" className="uploadImage"/>

                    <div className="box">
                        my name is {name} and the gender is {gender} {CheckedLocation ? `and i am from  ${location}` : null} {CheckedSchool ? `and i am from  ${school}` : null}
                    </div>
                </div>
            </div>
        </div>
    )
}