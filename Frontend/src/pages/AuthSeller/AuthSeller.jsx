import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../Utility/firebase';
import './AuthSeller.css';

function SellerRegister() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    shopName: '',
    productType: '',
    story: '',
    experience: '',
    paymentMethod: '',
    needsTraining: false,
    password: '',
    confirmPassword: '',
    photo: null,
    idUpload: null
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const isPasswordValid = (password) => {
    return password.length >= 8 && /[a-zA-Z]/.test(password);
  };

  const isFormComplete = () => {
    const requiredFields = ['fullName', 'email', 'phone', 'location', 'shopName', 'productType', 'story', 'experience', 'paymentMethod', 'password', 'confirmPassword', 'photo', 'idUpload'];
    return requiredFields.every(field => form[field] !== '' && form[field] !== null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isFormComplete()) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (!isPasswordValid(form.password)) {
      setError("Password must be at least 8 characters and contain letters.");
      setLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      await db.collection('sellers').doc(user.uid).set({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        location: form.location,
        shopName: form.shopName,
        productType: form.productType,
        story: form.story,
        experience: form.experience,
        paymentMethod: form.paymentMethod,
        needsTraining: form.needsTraining,
        status: 'pending',
        createdAt: new Date()
      });

      alert("🎉 Registration successful! Await admin approval.");
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      setError(err.message);
    }

    setLoading(false);
  };

  const getInputClass = (field) => {
    return touched[field] && (!form[field] || form[field] === '') ? 'invalid' : '';
  };

  return (
    <div className="seller-register-page">
      <div className="form-card">
        <h2>Become a Seller</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid-two-columns">
            <div className="form-group">
              <label>Full Name</label>
              <input className={getInputClass("fullName")} type="text" name="fullName" value={form.fullName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className={getInputClass("email")} type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="grid-two-columns">
            <div className="form-group">
              <label>Phone Number</label>
              <input className={getInputClass("phone")} type="text" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input className={getInputClass("location")} type="text" name="location" value={form.location} onChange={handleChange} />
            </div>
          </div>

          <div className="grid-two-columns">
            <div className="form-group">
              <label>Shop/Brand Name</label>
              <input className={getInputClass("shopName")} type="text" name="shopName" value={form.shopName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Product Type</label>
              <select className={getInputClass("productType")} name="productType" value={form.productType} onChange={handleChange}>
                <option value="">Select product type</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Beauty">Beauty</option>
                <option value="Home Goods">Home Goods</option>
              </select>
            </div>
          </div>

          <div className="grid-two-columns">
            <div className="form-group">
              <label>Experience (years)</label>
              <input className={getInputClass("experience")} type="text" name="experience" value={form.experience} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select className={getInputClass("paymentMethod")} name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
                <option value="">Select a method</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Tell Something About You😊</label>
            <textarea className={getInputClass("story")} name="story" value={form.story} onChange={handleChange} rows="4" />
          </div>

          <div className="grid-two-columns">
            <div className="form-group">
              <label>Upload Your Photo</label>
              <input className={getInputClass("photo")} type="file" name="photo" accept="image/*" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Upload Your ID</label>
              <input className={getInputClass("idUpload")} type="file" name="idUpload" accept="image/*" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group checkbox">
            <label>
              <input type="checkbox" name="needsTraining" checked={form.needsTraining} onChange={handleChange} />
              I want training/mentorship
            </label>
          </div>

          <div className="grid-two-columns">
            <div className="form-group">
              <label>Password</label>
              <input className={getInputClass("password")} type="password" name="password" value={form.password} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input className={getInputClass("confirmPassword")} type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Submitting...' : 'Register as Seller'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellerRegister;
