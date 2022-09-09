import React from "react";
import { useState } from "react";
import "./PersonalDetails.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-date-picker";

function PersonalDetails() {
  const [value, onChange] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="MainDiv">
      <div className="perosnalDetails">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Personal info</span>
          <div className="firstRow">
            <div>
              <label>First name</label>
              <input {...register("firstName")} />
            </div>
            <div>
              {" "}
              <label>Middle Name</label>
              <input {...register("middleName", { required: true })} />
            </div>
            <div>
              <label>LastName</label>
              <input {...register("lastName", { required: true })} />
              {errors.lastName && <p>Last name is required.</p>}
            </div>
          </div>
          <div className="secondRow">
            <div className="datepicker">
              <label> Date of Birth</label>
              <DatePicker onChange={onChange} value={value} />
            </div>

            <div>
              <label>Gender</label>
              <select id="gender" name="gender">
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            <div>
              <label>Marital Status</label>
              <select id="gender" name="gender">
                <option value="female">Single</option>
                <option value="male">Married</option>
              </select>
            </div>
          </div>
          <div className="thirdRow">
            <div>
              <label>PAN number</label>
              <input {...register("pannumber")} />
            </div>
            <div>
              <label>Occupation</label>
              <select id="gender" name="gender">
                <option value="female">Salaried</option>
                <option value="male">Self Employee</option>
              </select>
            </div>
          </div>
          {/* <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>} */}
          {/* <input type="submit" /> */}
        </form>
      </div>
      <div className="buttonContainer">
        <button id="discard">Discard Change</button>
        <button>Update</button>
      </div>
    </div>
  );
}

export default PersonalDetails;
