import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchOrders } from '../utils/api';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const productData = await fetchProducts();
            setProducts(productData);
        };

        const loadOrders = async () => {
            const orderData = await fetchOrders();
            setOrders(orderData);
        };

        loadProducts();
        loadOrders();
    }, []);

    return (
        <div className="admin-page">
            <h1>Admin Dashboard</h1>
            <AdminDashboard products={products} orders={orders} />
        </div>
    );
};

export default Admin;