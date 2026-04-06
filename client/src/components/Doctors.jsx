function Doctors({ handleProtectedAction }) {
  const doctors = [
    { name: "Dr. Ankit Sharma", specialization: "Cardiologist" },
    { name: "Dr. Priya Kapoor", specialization: "General Physician" },
    { name: "Dr. Rajesh Verma", specialization: "Pediatrician" },
  ];

  return (
    <div className="px-6 md:px-10 mt-12">
      <h2 className="text-2xl font-bold text-green-700">
        Meet Our Top Doctors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center hover:scale-105"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${i + 3}`}
              className="w-16 h-16 rounded-full mx-auto mb-2"
            />

            <h3 className="font-semibold text-lg">👨‍⚕️ {doc.name}</h3>
            <p className="text-gray-500 text-sm">{doc.specialization}</p>

            <button
              onClick={() => handleProtectedAction("/appointments")}
              className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;