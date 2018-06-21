import registerServiceWorker from './registerServiceWorker';
import {registerApplication, start} from 'single-spa';

registerApplication('root', () => import('./root.app.js'), () => true)

start();
registerServiceWorker();
