import React, { useState } from "react";
import axios from "axios";

type BookingProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Booking: React.FC<BookingProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Static list of services
  const services = [
    "Nail Art",
    "Acrylic Extensions",
    "Gel Extensions",
    "Russian Manicure and Pedicure",
    "Birthday Nails",
    "Customized Stick-Ons",
    "French Nails",
    "Eyelash Extensions",
    "Eyelash Training",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate time: allow only times between 10:00 and 19:00
    const [hourStr] = formData.time.split(":");
    const hour = parseInt(hourStr, 10);
    if (hour < 10 || hour > 18) {
      setError("Please select a time between 10:00 AM and 7:00 PM.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );
      if (res.data.success) {
        setSuccess("Booking submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "",
          date: "",
          time: "",
        });
      }
      setTimeout(() => {
        setSuccess("");
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data?.error || "Error submitting booking");
      setTimeout(() => {
        setError("");
        onClose();
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-md w-[90%] md:w-[80%] lg:w-[60%]">
        <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-2 md:gap-4"
        >
          <div>
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block">Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              //display only time from 10 am to 7 pm

              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-salon-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
