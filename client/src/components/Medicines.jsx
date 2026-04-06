function Medicines({query}) {
  const medicines = ["Paracetamol", "Azithromycin", "Cough Syrup"];
  const safeQuery =query || "";
  const filtered = 
   query.trim() === ""
    ? medicines
  :medicines.filter((med) =>
  med.toLowerCase().includes((query || "").toLowerCase())
);

const addToCart = (med) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: med,
    price: 20,
    qty: 1,
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  toast.success("Added to cart ✅");
};
  return (
    <div id="medicines" className="px-6 md:px-10 mt-12">
      <h2 className="text-2xl font-bold text-green-700 border-b pb-2">
        Popular Medicines
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filtered.length === 0 ? (
  <p className="text-gray-500 text-center col-span-3 mt-6">
    ❌ No medicines found
  </p>
) : (filtered.map((med, i) => (
          <div 
          key={i} 
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
  <div className="text-3xl mb-2">💊</div>
  <h3 className="font-semibold">{med}</h3>
  <p className="text-sm text-gray-500">₹20</p>

  <button onClick={() => addToCart(med)}
  className="mt-3 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700">
    Add to Cart
  </button>
</div>
        )
        ))}
      </div>
    </div>
  );
}

export default Medicines;