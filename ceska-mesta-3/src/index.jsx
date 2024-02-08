import { createRoot } from 'react-dom/client';
import City  from './components/Cities';
import './global.css';
import { cities } from '../cz-cities';

    const App = () => (
      <div>
        {cities.map(city => <City key={city.name} name={city.name} population={city.population} area={city.area} photo={city.photo} ></City>)}
      </div>
    )

createRoot(
  document.querySelector('#app'),
).render(<App />);
