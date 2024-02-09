import { createRoot } from 'react-dom/client';
import Episode from './Components/Episodes/episode';
import './global.css';
import { episodes } from '../podcasty';

const App = () =>  (
    <div>
      {episodes.map(ep => <Episode key={ep.num} num={ep.num} title={ep.title} guest={ep.guest}></Episode>)}
    </div>
  )

createRoot(
  document.querySelector('#app'),
).render(<App />);
