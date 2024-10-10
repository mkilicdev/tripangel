import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDestinations } from '../../features/destinations/destinationSlice';

const PopularDestinations = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations.items);
  const status = useSelector((state) => state.destinations.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDestinations());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Popüler Destinasyonlar</h2>
      <div>
        {destinations.map((destination) => (
          <div key={destination.id}>
            <h3>{destination.name}</h3>
            <img src={destination.image} alt={destination.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
