import config from './config.js'
import map from  "./Map/map.js";

import './index.css'

if  (config.debug) {
  window.map = map;
}
