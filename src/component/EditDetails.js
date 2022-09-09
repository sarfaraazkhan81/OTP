import React from "react";

function EditDetails() {
  return (
    <div className="MainDiv">
      <div className="perosnalDetails">
        <form>
          <span>Personal info</span>
          <div className="firstRow">
            <div>
              <label>First name</label>
              <h3>sarfaraaz</h3>
            </div>
            <div>
              <label>Middle Name</label>
              <h3>khan</h3>
            </div>
            <div>
              <label>LastName</label>
              <h3>khan</h3>
            </div>
          </div>
          <div className="secondRow">
            <div className="datepicker">
              <label> Date of Birth</label>
              <h3>01/02/2022</h3>
            </div>

            <div>
              <label>Gender</label>
              <h3>Male</h3>
            </div>

            <div>
              <label>Marital Status</label>
              <h3>Single</h3>
            </div>
          </div>
          <div className="thirdRow">
            <div>
              <label>PAN number</label>
              <h3>IGSD11350E</h3>
            </div>
            <div>
              <label>Occupation</label>
              <h3>salaried</h3>
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

export default EditDetails;
