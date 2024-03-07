import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

const PendingForApproval = () => {
    const [pendingEmployees, setPendingEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8088/employee/fetch');
                const employees = response.data;
                const pending = employees.filter(employee => employee.approval === 0);
                setPendingEmployees(pending);
            } catch (error) {
                console.error('Failed to fetch employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleApprove = async (employeeId, employeeEmail) => {
        try {
            await axios.post(`http://127.0.0.1:8088/employee/approve`, {
                email: employeeEmail,
            });
            const updatedPendingEmployees = pendingEmployees.filter(employee => employee.employee_id !== employeeId);
            setPendingEmployees(updatedPendingEmployees);
        } catch (error) {
            console.error('Failed to approve employee:', error);
        }
    };

    return (
        <div>
            {/* Conditional rendering based on pendingEmployees length */}
            {pendingEmployees.length > 0 ? (
                <>
                    <h2>Pending for Approval</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingEmployees.map(employee => (
                                <tr key={employee.employee_id}>
                                    <td>{employee.employee_id}</td>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.contact}</td>
                                    <td>
                                        <Button variant="success" onClick={() => handleApprove(employee.employee_id, employee.email)}>Approve</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            ) : (
                <h2>All Employees Approved</h2>
            )}
        </div>
    );
};

export default PendingForApproval;
