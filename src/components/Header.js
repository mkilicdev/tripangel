// components/Header.js
const AppHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <h1 className="text-2xl font-bold text-blue-600">TripAngel</h1> {/* Logo kısmı */}
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#hotels" className="text-gray-700 hover:text-blue-500">Hotels</a>
          <a href="#flights" className="text-gray-700 hover:text-blue-500">Flights</a>
          <a href="#cars" className="text-gray-700 hover:text-blue-500">Cars</a>
          <a href="#deals" className="text-gray-700 hover:text-blue-500">Deals</a>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
            {/* Mobil menü butonu, icon ekleyebilirsiniz */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
