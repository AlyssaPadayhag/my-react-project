import React, { useState } from "react";

function SubscriberFormTwo() {
    const initialFormState = {
        name: "",
        email: "",
        referral: "",
        age: "",
        subscription: true,
      };
    const [formData, setFormData] = useState({ ...initialFormState });
    const handleChange = ({ target }) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
          ...formData,
          [target.name]: value,
        });
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Submitted:", formData);
      setFormData({ ...initialFormState });
    };

  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br />
        <label htmlFor="referral">
            How did you hear about us?
            <select
                id="referral"
                name="referral"
                onChange={handleChange}
                value={formData.referral} >
                <option value="">-- Select an Option --</option>
                <option value="twitter">Twitter</option>
                <option value="wom">Word of Mouth</option>
                <option value="youtube">YouTube</option>
            </select>
        </label>    
        <fieldset>
        <legend>How old are you?</legend>
            <label htmlFor="low">
            Under 18
            <input
                id="low"
                type="radio"
                name="age"
                onChange={handleChange}
                value="low"
                checked={formData.age === "low"}
            />
            </label>
            <label htmlFor="middle">
                18 - 60
            <input
                id="middle"
                type="radio"
                name="age"
                onChange={handleChange}
                value="middle"
                checked={formData.age === "middle"}
            />
            </label>
            <label htmlFor="high">
            Over 60
            <input
                id="high"
                type="radio"
                name="age"
                onChange={handleChange}
                value="high"
                checked={formData.age === "high"}
            />
            </label>
        </fieldset>
        <label htmlFor="subscription">
            Receive email notifications?
            <input
                id="subscription"
                type="checkbox"
                name="subscription"
                onChange={handleChange}
                checked={formData.subscription}
                value="subscription"
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

export default SubscriberFormTwo;