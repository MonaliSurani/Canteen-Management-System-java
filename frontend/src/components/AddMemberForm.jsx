import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { BASE_URL } from '../services/APIconstants';

const AddMemberForm = ({ onAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    role: '', // Assuming 'role' is a string like 'owner' or 'employee'
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleAddMember = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/member/save`, newMember, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { status, data } = response;
      if (status === 200) {
        onAdd(data); // Adapt based on your API's response structure
        handleCloseModal();
      } else {
        console.error('Error adding member:', data);
      }
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Add New Member
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter member's name"
                name="name"
                value={newMember.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter member's email"
                name="email"
                value={newMember.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter member's role"
                name="role"
                value={newMember.role}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMember}>
            Add Member
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMemberForm;
