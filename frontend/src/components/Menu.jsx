import React, { useEffect, useState } from "react";
import './Menu.css'
import Button from "react-bootstrap/Button";
import { BookAppointment, DoctorServices } from "../services/DoctorServices";
import { Alert, Col, Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8088/item/fetch');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToOrder = (itemName) => {
    // Add logic to handle adding the item to the orders page
    window.alert(`${itemName} added to orders`);
  };
  

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Available Quantity</th>
            <th>Item Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.itemId}>
              <td>{item.itemId}</td>
              <td>{item.itemName}</td>
              <td>{item.availableNo}</td>
              <td>Rs {item.itemPrice.toFixed(2)}</td>
              <td>
                <button onClick={() => handleAddToOrder(item.itemName)}>
                  Add to Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};
