// pages/index.js
import 'flowbite';
import AppHeader from '../components/Header';
import Banner from '../components/Home/Banner';
import Hero from '../components/Hero';
import PopularDestinations from '../components/Home/PopularDestinations';

const HomePage = () => {
  const destinations = [
    { id: 1, name: 'Bali', image: 'https://source.unsplash.com/featured/?bali' },
    { id: 2, name: 'Paris', image: 'https://source.unsplash.com/featured/?paris' }
  ];

  return (
    <>
      <AppHeader />
      <Hero />
      <Banner />
      <div className="p-4">
        <h2 className="text-2xl font-bold">Popular Destinations</h2>
        <PopularDestinations destinations={destinations} />
      </div>
    </>
  );
};

export default HomePage;