import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ConfirmationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    request: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Bu joyda API'ga yuborishing yoki boshqa ishlov berishing mumkin
    navigate(-1); // Yopib yuboradi
  };

  return (
    <div 
      className="confirmation-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div 
        className="confirmation-box"
        style={{
          background: "white",
          borderRadius: "10px",
          padding: "2rem",
          width: "600px",
          maxHeight: "80vh",
          overflowY: "auto"
        }}
      >
        <h2>Confirm Your Reservation</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="request"
            placeholder="Add a special request..."
            value={formData.request}
            onChange={handleChange}
            rows={4}
          />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <button type="button" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
