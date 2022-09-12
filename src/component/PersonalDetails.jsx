import React from "react";
import { useState } from "react";
import "./PersonalDetails.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-date-picker";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

function PersonalDetails() {
  const [value, onChange] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.firstName);
    if (data.firstName.length <= 0) {
    }
  };
  return (
    <div className="MainDiv">
      <div className="perosnalDetails">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Personal info</span>
          <div className="firstRow">
            <div>
              <label>First name</label>
              <input {...register("firstName", { required: true })} />
            </div>
            <div>
              <label>Middle Name</label>
              <input {...register("middleName")} />
            </div>
            <div>
              <label>LastName</label>
              <input {...register("lastName", { required: true })} />
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
              <input {...register("pannumber", { required: true })} />
            </div>
            <div>
              <label>Occupation</label>
              <select id="gender" name="gender">
                <option value="female">Salaried</option>
                <option value="male">Self Employee</option>
              </select>
            </div>
          </div>
          {errors.firstName && (
            <div className="warning">
              <h2>
                <ReportGmailerrorredIcon />
                Pls enter your first name
              </h2>
            </div>
          )}
          {errors.lastName && (
            <div className="warning">
              <h2>
                <ReportGmailerrorredIcon />
                Pls enter your last name
              </h2>
            </div>
          )}
          {errors.pannumber && (
            <div className="warning">
              <h2>
                <ReportGmailerrorredIcon />
                Pls enter your pan card number
              </h2>
            </div>
          )}

          {/* <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>} */}
          {/* <input type="submit" /> */}
          <div className="buttonContainer">
            <button id="discard">Discard Change</button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
