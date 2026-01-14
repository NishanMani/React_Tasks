import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    college: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    return newErrors;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({
        name: "",
        email: "",
        gender: "",
        college: "",
        phone: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

       <div className="gender-group">
  <label><b>Gender</b></label>

  <div className="gender-options">
    <label>
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      />
      Male
    </label>

    <label>
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />
      Female
    </label>

    <label>
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={formData.gender === "Other"}
        onChange={handleChange}
      />
      Other
    </label>
  </div>

  {errors.gender && <p className="error">{errors.gender}</p>}
</div>


        <div>
          <input
            type="text"
            name="college"
            placeholder="Enter college name"
            value={formData.college}
            onChange={handleChange}
          />
          {errors.college && <p className="error">{errors.college}</p>}
        </div>

        <div>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Submitted Data</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Gender:</b> {submittedData.gender}</p>
          <p><b>College:</b> {submittedData.college}</p>
          <p><b>Phone:</b> {submittedData.phone}</p>
        </div>
      )}
    </div>
  );
}

export default App;
