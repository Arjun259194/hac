import React from "react";

const Dashboard: React.FC = () => {
  // Example data for the dashboard table
  const records = [
    {
      id: 1,
      date: "2024-11-20",
      illness: "Flu",
      hospital: "City Hospital",
      admitDate: "2024-11-18",
      dischargeDate: "2024-11-21",
    },
    {
      id: 2,
      date: "2024-10-10",
      illness: "Migraine",
      hospital: "Global Medical Center",
      admitDate: "2024-10-09",
      dischargeDate: "2024-10-12",
    },
    {
      id: 3,
      date: "2024-09-25",
      illness: "Appendicitis",
      hospital: "Sunrise Hospital",
      admitDate: "2024-09-20",
      dischargeDate: "2024-09-30",
    },
    {
      id: 4,
      date: "2024-08-15",
      illness: "Fracture",
      hospital: "Apollo Hospital",
      admitDate: "2024-08-10",
      dischargeDate: "2024-08-20",
    },
    {
      id: 5,
      date: "2024-07-05",
      illness: "COVID-19",
      hospital: "City COVID Center",
      admitDate: "2024-07-01",
      dischargeDate: "2024-07-15",
    },
  ];

  return (
    <div className="p-6">
      {/* User Information */}
      <div className="mb-6 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Welcome, John Doe</h2>
        <p>HAC No: <span className="font-medium">123456</span></p>
        <p>Mobile No: <span className="font-medium">+91 9876543210</span></p>
        <p>Email ID: <span className="font-medium">johndoe@example.com</span></p>
        <p>ID No: <span className="font-medium">Aadhar: 1234-5678-9012</span></p>
      </div>

      {/* Records Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Sr. No.</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Illness</th>
              <th className="border border-gray-300 p-2">Hospital Name</th>
              <th className="border border-gray-300 p-2">Admit Date</th>
              <th className="border border-gray-300 p-2">Discharge Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="border border-gray-300 p-2 text-center">{record.id}</td>
                <td className="border border-gray-300 p-2">{record.date}</td>
                <td className="border border-gray-300 p-2">{record.illness}</td>
                <td className="border border-gray-300 p-2">{record.hospital}</td>
                <td className="border border-gray-300 p-2">{record.admitDate}</td>
                <td className="border border-gray-300 p-2">{record.dischargeDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

