import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Canteen } from "./components/Canteen";
import { Footer } from "./components/Footer";
import { Signup } from "./components/Signup";
import About from "./components/About";
import { EmployeeSignin } from "./components/EmployeeSignin";
import { AdminSignIn } from "./components/AdminSignIn";
import { Menu } from "./components/Menu";
import ProtectedRoute from "./components/ProtectedRoute"; // Make sure this import points to your ProtectedRoute file
import { ContactUs } from "./components/ContactUs";
import { ItemList } from "./components/ItemList";
import { MemberList } from "./components/MemberList";
import { ItemEditForm } from "./components/ItemEditForm";
import { Copyrights } from "./components/Copyrights";
import { OwnerSignIn } from "./components/OwnerSignIn";
import { OwnerSignUp } from "./components/OwnerSignUp";
import PendingForApproval  from "./components/PendingForApproval";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Canteen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminSignIn />} />
        <Route path="/Employeesignin" element={<EmployeeSignin />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/owner/login" element={<OwnerSignIn />} />
        
        <Route
          path="/book-appointment"
          element={
            <ProtectedRoute roles={['employee']}>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MemberList"
          element={
            <ProtectedRoute roles={['admin']}>
              <MemberList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/owner/signup"
          element={
            <ProtectedRoute roles={['admin']}>
              <OwnerSignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MemberEditForm/:itemName"
          element={
            <ProtectedRoute roles={['admin']}> {/* Assuming only admins can edit items */}
              <ItemEditForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ItemList"
          element={
            <ProtectedRoute roles={['owner']}> {/* Allow both admins and owners */}
              <ItemList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pending"
          element={
            <ProtectedRoute roles={['owner']}> {/* Allow both admins and owners */}
              <PendingForApproval />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ItemEditForm/:itemName"
          element={
            <ProtectedRoute roles={['owner']}> {/* Assuming both admins and owners can edit items */}
              <ItemEditForm />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <Copyrights></Copyrights>
    </BrowserRouter>
  );
}

export default App;
