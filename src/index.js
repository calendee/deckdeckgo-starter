import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';
import './css/theme.css';
import './css/popover.css';
import './css/print.css';
import './css/slider.css';
import './css/button.css';
import './css/list.css';
import './css/code.css';
import './css/card.css';
import './css/grid.css';
import './css/alert.css';

import '@webcomponents/custom-elements';

import './scripts/loading.js';
import './scripts/fullscreen.js';
import './scripts/print.js';
import './scripts/lazy.js';
import './scripts/slider.js';
import './scripts/sliderJumpTo.js';
import './scripts/modal.js';
import './scripts/alert.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements(window).then(async () => {
    await postLoading();
});

import { defineCustomElements as ioniconsElements } from 'ionicons/dist/loader';
ioniconsElements(window);
