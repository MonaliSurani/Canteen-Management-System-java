import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { BASE_URL } from '../services/APIconstants';

const AddItemForm = ({ onAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: '',
    itemPrice: 0, // Initialize as a number
    availableNo: 0, // Initialize as a number
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'itemPrice' || name === 'availableNo' ? parseFloat(value) : value; // Convert to number if needed
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: updatedValue,
    }));
  };

  const handleAddItem = async () => {
    try {
      // Ensure numeric fields are sent as numbers
      const payload = {
        ...newItem,
        itemPrice: parseFloat(newItem.itemPrice),
        availableNo: parseInt(newItem.availableNo, 10),
      };

      const response = await axios.post(`${BASE_URL}/item/save`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { status, data } = response;
      if (status === 200) { // Assuming a status of 200 indicates success
        onAdd(data); // You may need to adjust based on your API response
        handleCloseModal();
      } else {
        console.error('Error adding item:', data);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Add New Item
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                name="itemName"
                value={newItem.itemName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter item price"
                name="itemPrice"
                value={newItem.itemPrice}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Available Items</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter available items"
                name="availableNo"
                value={newItem.availableNo}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddItemForm;
