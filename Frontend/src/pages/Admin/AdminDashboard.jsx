// src/pages/Admin/Admin.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../Utility/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
// import './Admin.module.css';

function Admin() {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'sellers'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSellers(data);
      } catch (error) {
        console.error("Error fetching sellers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      const sellerRef = doc(db, 'sellers', id);
      await updateDoc(sellerRef, { status });
      setSellers(prev =>
        prev.map(seller => seller.id === id ? { ...seller, status } : seller)
      );
    } catch (error) {
      console.error("Error updating seller status:", error);
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
            <th>Shop Name</th>
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
    </div>
  );
}

export default Admin;
