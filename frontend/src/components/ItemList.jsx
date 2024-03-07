import { Button, Container, Modal, Table } from "react-bootstrap";
//import { Header } from "./Header";
import { useEffect, useState } from "react";
//import { deleteUser, fetchUsers } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import axios, { Axios } from "axios";
import { BASE_URL } from "../services/APIconstants";
import AddItemForm from "./AddItemForm";
import {  Row, Col, Card } from 'react-bootstrap';

export function ItemList() {

    const [items, setItems] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedItemId,setSelectedItemId] = useState("");
    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populateItemState() {
        try {
            const response = await axios.get(`${BASE_URL}/item/fetch`);
            setItems(response.data); // Extract data from the response
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        populateItemState();
    }, []);

    const handleItemDelete = async () => {
        try {
            await axios.delete(`${BASE_URL}/item/delete/${selectedItemId}`);
            populateItemState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddItemToList = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
        // Assuming setItems is a state setter function for the 'items' state
      };

    return (
        <>
        <Container>

        <h1 style={{textAlign:'center',marginTop:'2rem',color:'#72c3e3'}}>List of all the items in Today's Menu</h1>
      <Row className="mt-4" style={{textAlign:'center',marginTop:'1rem'}}>
        {items.map((item) => (
          <Col key={item.itemId} sm={6} md={4} lg={3}>
            <Card className="mb-4" style={{color:'#b5e9fd'}}>
              <Card.Body>
                <Card.Title>{item.itemName}</Card.Title>
                {/*<Card.Subtitle className="mb-2 text-muted">Item ID: {item.itemId}</Card.Subtitle>
                */}
                <Card.Text>
                  <strong>Price:</strong> {item.itemPrice}
                  <br />
                  <strong>Available items:</strong> {item.availableNo}
                </Card.Text>
                <Button variant="danger" onClick={() => {
                  openModalDialog();
                  setSelectedItemId(item.itemId);
                }}>Delete</Button>{' '}
                <Button variant="primary" onClick={() => {
                  navigate(`/ItemEditForm/${item.itemName}`)
                }}>Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   
            {/*
            <h1>List of all the items in Today's Menu</h1>
            <AddItemForm onAdd={handleAddItemToList}/>
            <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Available items</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((s) => {
                            return (
                                <tr key={s.itemId}>
                                    <td>{s.itemId}</td>
                                    <td>{s.itemName}</td>
                                    <td>{s.itemPrice}</td>
                                    <td>{s.availableNo}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedItemId(s.itemId);
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/ItemEditForm/${s.itemName}`)
                                        }}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </Table>*/}
            
            

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete {selectedItemId} from today's menu?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleItemDelete();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </>
    );
}