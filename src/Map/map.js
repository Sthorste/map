/** @file
 * map loading
 */

import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {Map, View} from 'ol'; 
import {ortho, geo, terrier, layerSwitcher} from './layers.js';

/**
 * Creates a Map targeted to the 'map' id div (html).
 * The map initially contains one basic layer. 
 */
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      title: 'OSM',
      source: new OSM(),
      visible: true
    })
  ],
});

/**
 * Adds a View to the Map created before.
 */
 map.setView(new View({
  center: [50, 270],
  zoom: 0,
  //projection: 'EPSG:4326',
  maxZoom: 12,
}));

map.addLayer(ortho);
map.addLayer(geo);
map.addLayer(terrier);

map.addControl(layerSwitcher);

export default map