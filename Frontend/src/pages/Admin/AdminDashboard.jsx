// src/pages/Admin/Admin.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../Utility/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import './Admin.css'; // Keep your existing styles

function Admin() {
  const [sellers, setSellers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch sellers
        const sellersSnap = await getDocs(collection(db, 'sellers'));
        const sellersData = sellersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Fetch orders
        const ordersSnap = await getDocs(collection(db, 'orders'));
        const ordersData = ordersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setSellers(sellersData);
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      const sellerRef = doc(db, 'sellers', id);
      await updateDoc(sellerRef, { status });
      setSellers(prev => prev.map(s => s.id === id ? { ...s, status } : s));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-dashboard">
      <h2>Seller Requests</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Shop</th>
            <th>Product Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map(seller => (
            <tr key={seller.id}>
              <td>{seller.fullName}</td>
              <td>{seller.email}</td>
              <td>{seller.shopName}</td>
              <td>{seller.productType}</td>
              <td>{seller.status || 'Pending'}</td>
              <td>
                <button onClick={() => handleApproval(seller.id, 'approved')}>Approve</button>
                <button onClick={() => handleApproval(seller.id, 'rejected')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Orders</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName || 'N/A'}</td>
              <td>
                {order.items && Array.isArray(order.items)
                  ? order.items.map((item, idx) => (
                      <div key={idx}>
                        {item.name} (x{item.quantity})
                      </div>
                    ))
                  : order.productName || 'N/A'}
              </td>
              <td>{order.totalAmount || order.amount || 'N/A'}</td>
              <td>{order.status || 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
