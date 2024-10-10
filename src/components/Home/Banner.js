// components/Banner.js
const Banner = () => {
    return (
      <div className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Travel Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">Discover Your Next Adventure</h1>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded">Explore</button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  