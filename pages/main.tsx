import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
import '../app/responsive.css';

const root = document.getElementById('root');
if (!root) throw new Error('The documentation root is missing.');
createRoot(root).render(<Home />);
