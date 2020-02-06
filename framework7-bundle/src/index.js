import dayjs from 'dayjs';
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7React from 'framework7-react';
import * as Framework7ReactComponents from 'framework7-react';

Framework7.use(Framework7React);

window.dayjs = dayjs;
window.Framework7 = Framework7;
window.Framework7React = Framework7React;
window.Framework7ReactComponents = Framework7ReactComponents;
