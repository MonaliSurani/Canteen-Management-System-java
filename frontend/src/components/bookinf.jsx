import React, { useEffect, useState } from 'react';
import { DoctorServices } from '../services/DoctorServices';
import { Container, Table } from 'react-bootstrap';

export function Bookings() {
    const [doctors, setDoctors] = useState([]);

    async function populateDoctorState() {
        try {
            const doctorData = await DoctorServices();
            if (doctorData && Array.isArray(doctorData.doctors)) {
                setDoctors(doctorData.doctors);
            } else {
                console.log('No doctor data found or incorrect format');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateDoctorState();
    }, []);

    return (
        <Container>
            <Table className="mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((d, index) => (
                        <tr key={index}>
                            <td>{d.name}</td>
                            <td>{d.area}</td>
                            <td>{d.profile}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
