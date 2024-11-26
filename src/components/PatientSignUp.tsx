import React from "react";

const PatientSignUp: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Patient Sign-Up</h2>
      <form>
        <label className="block mb-2">Username</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2">Name</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2">Mobile No</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2">Aadhar No / Other ID</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2">Email ID</label>
        <input type="email" className="w-full mb-4 p-2 border rounded" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientSignUp;

