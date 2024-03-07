import { Button, Container, Modal, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../services/APIconstants";
import { useNavigate } from 'react-router-dom';
import { OwnerEditForm } from "./OwnerEditForm"; 
import { EmployeeEditForm } from "./EmployeeEditForm";// Ensure this component accepts `member` and `closeModal` props
// Assume an EmployeeEditForm exists and is set up similarly to OwnerEditForm

export function MemberList() {
    const [members, setMembers] = useState([]);
    const [isEmployeeList, setIsEmployeeList] = useState(true);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedMemberEmail, setSelectedMemberEmail] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetchMembers("employees");
    }, []);

    const fetchMembers = async (memberType) => {
        try {
            const endpoint = memberType === "employees" ? "/employee/fetch" : "/owner/fetch";
            const response = await axios.get(`${BASE_URL}${endpoint}`);
            setMembers(response.data);
            setIsEmployeeList(memberType === "employees");
        } catch (error) {
            console.error("Failed to fetch members:", error);
        }
    };

    const handleMemberDelete = async () => {
        const memberToDelete = { email: selectedMemberEmail };
        const endpoint = isEmployeeList ? "/employee/delete" : "/owner/delete";
        try {
            await axios.post(`${BASE_URL}${endpoint}`, memberToDelete, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            fetchMembers(isEmployeeList ? "employees" : "owners");
            setShowDeleteDialog(false);
        } catch (error) {
            console.error("Failed to delete member:", error);
        }
    };

    const handleEdit = (member) => {
        setSelectedMember(member);
        setShowEditModal(true);
    };

    return (
        <>
            <Container>
                <h1>{isEmployeeList ? "List of all Employees" : "List of all Owners"}</h1>
                <div className="buttons-container-fetch">
                    <Button className="btn-fetch" onClick={() => fetchMembers("employees")}>Fetch Employee Data</Button>
                    <Button className="btn-fetch" onClick={() => fetchMembers("owners")}>Fetch Owner Data</Button>
                </div>

                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.email}>
                                <td>{isEmployeeList ? member.employee_id : member.owner_id}</td>
                                <td>{isEmployeeList ? member.employeeName : member.ownerName}</td>
                                <td>{member.email}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(member)}>Update</Button>{' '}
                                    <Button variant="danger" onClick={() => {
                                        setShowDeleteDialog(true);
                                        setSelectedMemberEmail(member.email);
                                    }}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <div className="buttons-container-add">
                    <Button className="btn-add-new" onClick={() => navigate('/owner/signup')}>Add New Member</Button>
                </div>

                <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this member?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleMemberDelete}>Yes</Button>
                        <Button variant="danger" onClick={() => setShowDeleteDialog(false)}>No</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit {isEmployeeList ? "Employee" : "Owner"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {isEmployeeList ? (
                            // Assuming EmployeeEditForm is similarly set up to OwnerEditForm
                            // <EmployeeEditForm member={selectedMember} closeModal={() => setShowEditModal(false)} />
                            <EmployeeEditForm member={selectedMember} closeModal={() => setShowEditModal(false)} />
                        ) : (
                            <OwnerEditForm member={selectedMember} closeModal={() => setShowEditModal(false)} />
                        )}
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
}
