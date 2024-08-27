import React, { useState } from 'react';
import './WarrantyClaim.css';

const WarrantyClaim = () => {
  const [brand, setBrand] = useState('');
  const [productType, setProductType] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    // Handle the claim submission logic here
    alert(`Warranty claim submitted for ${brand} ${productType} with Serial Number: ${serialNumber}`);
  };

  return (
    <div className="warranty-claim">
        <h2 style={{color:'blue'}}>Commig Soon for My Users</h2>
      <h2>Claim Your Warranty or Guarantee</h2>
      <form onSubmit={handleClaimSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Select Brand</label>
          <select 
            id="brand" 
            value={brand} 
            onChange={(e) => setBrand(e.target.value)} 
            required
          >
            <option value="">Choose a Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="HP">HP</option>
            <option value="LG">LG</option>
            <option value="Sony">Sony</option>
            {/* Add more brands as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="productType">Select Product Type</label>
          <select 
            id="productType" 
            value={productType} 
            onChange={(e) => setProductType(e.target.value)} 
            required
          >
            <option value="">Choose a Product Type</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="TV">TV</option>
            <option value="AC">AC</option>
            <option value="Mixer">Mixer</option>
            {/* Add more product types as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="serialNumber">Serial Number</label>
          <input 
            type="text" 
            id="serialNumber" 
            value={serialNumber} 
            onChange={(e) => setSerialNumber(e.target.value)} 
            required 
            placeholder="Enter Serial Number"
          />
        </div>

        <button type="submit" className="claim-button">Submit Claim</button>
      </form>
    </div>
  );
};

export default WarrantyClaim;
