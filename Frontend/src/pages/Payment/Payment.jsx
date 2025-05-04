// Payment.jsx
import React, { useState } from 'react';
import LayOut from '../../components/Layout/Layout';
import classes from './Payment.module.css';
import { db } from '../../pages/Utility/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Payment() {
  const [form, setForm] = useState({ name: '', address: '', card: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {
    if (form.name && form.address && form.card) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      try {
        await addDoc(collection(db, 'orders'), {
          customerName: form.name,
          address: form.address,
          items: cart,
          totalAmount,
          status: 'pending',
          createdAt: Timestamp.now(),
        });

        setSuccess(true);
        localStorage.removeItem('cart'); // clear cart after order
      } catch (error) {
        console.error("Error saving order:", error);
        alert("Something went wrong. Try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <LayOut />
      <div className={classes.payment_container}>
        <h2>Payment Details</h2>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input type="text" name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} />
        <input type="text" name="card" placeholder="Card Number" value={form.card} onChange={handleChange} />
        <button className={classes.pay_btn} onClick={handlePay}>Submit Order</button>
      </div>

      {success && (
        <div className={classes.success_popup}>
          <div className={classes.popup_box}>
            <h3>Payment Successful!</h3>
            <p>Thank you for your purchase.</p>
            <h4>Ordered Items:</h4>
            <ul>
              {JSON.parse(localStorage.getItem('cart'))?.map((item, i) => (
                <li key={i}>{item.name} (x{item.quantity}) - ${item.price}</li>
              ))}
            </ul>
            <p><strong>Total: </strong>${JSON.parse(localStorage.getItem('cart'))?.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
