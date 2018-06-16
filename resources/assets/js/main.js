
import CS_grid from './imports/CS_grid';

// comps
import Flakes from './components/Flakes';
import Parallax from './components/Parallax';
import Waves from './components/Waves';

// pages
import Home from './pages/Home';

const grid = new CS_grid({
    colNumber : 9
});

const flakes = new Flakes();
const parallax = new Parallax();
const waves = new Waves();

const home = new Home();