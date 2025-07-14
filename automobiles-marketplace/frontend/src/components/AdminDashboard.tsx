import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchOrders } from '../utils/api';

const AdminDashboard = () => {
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
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Products</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Orders</h2>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            Order #{order.id} - Status: {order.status}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminDashboard;