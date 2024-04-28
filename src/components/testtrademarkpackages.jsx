//nextstepform.jsx

// src/components/NextStepForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NextStepForm.css'; // Ensure you have a CSS file for styling

const NextStepForm = () => {
  const navigate = useNavigate();
  const [ownershipType, setOwnershipType] = useState('individual');

  const [individualFormData, setIndividualFormData] = useState({
    firstName: '',
    lastName: '',
    // ...other individual form fields
    address: '',
    city: '',
    stateProvinceRegion: '',
    zipPostalCode: '',
    country: 'United States',
    phone: '',
    email: '',
    consentSMS: false
  });

  const [organizationFormData, setOrganizationFormData] = useState({
    organizationName: '',
    // ...other organization form fields
    address: '',
    city: '',
    stateProvinceRegion: '',
    zipPostalCode: '',
    country: 'United States',
    phone: '',
    email: '',
    consentSMS: false
  });

  const handleOwnershipChange = (event) => {
    setOwnershipType(event.target.value);
  };

  const handleIndividualChange = (event) => {
    const { name, value } = event.target;
    setIndividualFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleOrganizationChange = (event) => {
    const { name, value } = event.target;
    setOrganizationFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = ownershipType === 'individual' ? individualFormData : organizationFormData;
    // Submit formData to backend or state management
    console.log(formData);
    navigate('/next-step');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Trademark Application Process - Step 2</h1>

      <div>
        <label>
          <input
            type="radio"
            name="ownershipType"
            value="individual"
            checked={ownershipType === 'individual'}
            onChange={handleOwnershipChange}
          />
          Individual
        </label>
        <label>
          <input
            type="radio"
            name="ownershipType"
            value="organization"
            checked={ownershipType === 'organization'}
            onChange={handleOwnershipChange}
          />
          Organization
        </label>
      </div>

      {ownershipType === 'individual' && (
        <div>
          <input
            type="text"
            name="firstName"
            value={individualFormData.firstName}
            onChange={handleIndividualChange}
            placeholder="First Name"
          />
         <input
            type="text"
            name="address"
            value={individualFormData.address}
            onChange={handleIndividualChange}
            placeholder="Address"
          />
          <input
            type="text"
            name="city"
            value={individualFormData.city}
            onChange={handleIndividualChange}
            placeholder="City"
          />
          {/* Add dropdown for State/Province/Region if needed */}
          {/* Add dropdown for Country if needed */}
          <input
            type="text"
            name="phone"
            value={individualFormData.phone}
            onChange={handleIndividualChange}
            placeholder="Phone"
          />
          <input
            type="email"
            name="email"
            value={individualFormData.email}
            onChange={handleIndividualChange}
            placeholder="Email"
          />
          <label>
            <input
              type="checkbox"
              name="consentSMS"
              checked={individualFormData.consentSMS}
              onChange={handleIndividualChange}
            />
            I consent to receiving SMS text messages and phone calls from Trademark Engine.
          </label>
        </div>
      )}

      {ownershipType === 'organization' && (
        <div>
          <input
            type="text"
            name="organizationName"
            value={organizationFormData.organizationName}
            onChange={handleOrganizationChange}
            placeholder="Organization Name"
          />
          <input
            type="text"
            name="firstName"
            value={individualFormData.firstName}
            onChange={handleIndividualChange}
            placeholder="First Name"
          />
         <input
            type="text"
            name="address"
            value={individualFormData.address}
            onChange={handleIndividualChange}
            placeholder="Address"
          />
          <input
            type="text"
            name="city"
            value={individualFormData.city}
            onChange={handleIndividualChange}
            placeholder="City"
          />
          {/* Add dropdown for State/Province/Region if needed */}
          {/* Add dropdown for Country if needed */}
          <input
            type="text"
            name="phone"
            value={individualFormData.phone}
            onChange={handleIndividualChange}
            placeholder="Phone"
          />
          <input
            type="email"
            name="email"
            value={individualFormData.email}
            onChange={handleIndividualChange}
            placeholder="Email"
            />
          {/* Add other organization input fields here */}
          
        </div>
      )}

      {/* Common fields can go outside the conditional rendering */}
      
      <Link to="/application-form-info" className="continue-button">
        Continue
      </Link>
    </form>
  );
};

export default NextStepForm;
