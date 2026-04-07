function Features({ handleProtectedAction }) {
  const features = [
    {
      title: "Order Medicines",
      desc: "Get medicines delivered quickly",
      // icon: "💊",
      path: "/medicines",
    },
    {
      title: "Consult a Doctor",
      desc: "Talk to certified doctors online",
      // icon: "👨‍⚕️",
      path: "/doctors",
    },
    {
      title: "Book Appointments",
      desc: "Schedule visits with specialists",
      // icon: "📅",
      path: "/appointments",
    },
  ];

  return (
   
    <div className="grid md:grid-cols-3 gap-6 px-6 md:px-10 mt-6">
     
      {features.map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <div className="text-3xl">{item.icon}</div>

          <h3 className="font-semibold text-lg mt-2">
            {item.title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {item.desc}
          </p>

          <button
            onClick={() => handleProtectedAction(item.path)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Explore →
          </button>
        </div>
      ))}
    </div>
  );
}

export default Features;
