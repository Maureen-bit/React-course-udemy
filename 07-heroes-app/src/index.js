/* Before React +18
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HeroesApp />
);
*/

/* Now with React 18 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HeroesApp />);
