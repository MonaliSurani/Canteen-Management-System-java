import { Button, Col, Container, Row, Table } from "react-bootstrap";
import profilepagepic from "../Photos/Mentalhealth1.png";
import { getUserProfile } from "../services/UserServices";
import { useState, useEffect } from "react";
import {
  DeleteAppointment,
  UpdateAppointment,
} from "../services/DoctorServices";

export function Profile() {
  const [user, setUsers] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    phone: "",
  });
  const [bookings, setBookings] = useState([]);

  const getUserInfo = async () => {
    try {
      const result = await getUserProfile();
      console.log(result);
      if (result.status == 401) {
        // setIsLoggedIn(false);
      } else {
        // setIsLoggedIn(true);
        setUsers(result.user);
        setBookings(result.booking);
        console.log(bookings);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [bookingDate, setBookingDate] = useState("");

  const handleNewDate = (e) => {
    setBookingDate(e.target.value);
  };

  const handleUpdate = (dctr_name) => {
    const updatedRec = { doctor_id: dctr_name, date: bookingDate };
    const result = UpdateAppointment(updatedRec);
    setBookingDate("");
    alert("Appointment updated successfully");
    getUserInfo();
  };

  const handleDelete = async (dctr_id) => {
    const Record = { _id: dctr_id };
    const result = await DeleteAppointment(Record);
    alert("Appointment deleted successfully");
    getUserInfo();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <img src={profilepagepic} width="1000" alt="" />
          </Col>
        </Row>
        <Row>
          <Table className="mt-4">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee name</th>
                <th>Email</th>
                <th>Phone</th>
                {/*<th>Date Of Birth</th>
                <th>Gender</th>
                <th>City</th>
  <th>State</th>*/}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.employeeId}</td>
                <td> {user.username}</td>
                <td> {user.email}</td>
                <td> {user.phone}</td>
               {/* <td> {user.dob}</td>
                <td> {user.gender}</td>
                <td> {user.city}</td>
  <td> {user.state}</td>*/}
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
     { /*<Container>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Name of Doctor</th>
              <th>Appointment Date</th>
              <th>Change Date</th>
              <th>Update Booking</th>
              <th>Delete Booking</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((d) => {
              return (
                <tr>
                  <td>{d.doctor_id}</td>
                  <td>{d.date}</td>
                  <td>
                    <input type="date" name="date" onChange={handleNewDate} />
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(d.doctor_id)}
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(d._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Col lg={4}>
          {/* {isLoggedIn ? null : <Alert variant="danger">Please Login First</Alert>} 
        </Col>
      </Container>*/}
    </>
  );
}