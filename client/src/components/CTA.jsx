function CTA({ handleProtectedAction }) {
  return (
    <div className="mx-6 md:mx-10 mt-12 bg-white p-8 rounded-xl shadow text-center hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-green-700">
        Need an Appointment?
      </h2>

      <p className="text-gray-500 mt-2">
        Book your visit with a specialist easily.
      </p>

      <button
        onClick={() => handleProtectedAction("/appointments")}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition duration-300"
      >
        Book Now
      </button>
    </div>
  );
}

export default CTA;