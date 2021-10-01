/** @file 
 * Creating layers
 */
import GeoportailLayer from 'ol-ext/layer/Geoportail';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';

/**
 * Creates a new Geoportail Layer.
 */
export var ortho = new GeoportailLayer({
  title:'photo',
  layer: 'ORTHOIMAGERY.ORTHOPHOTOS',
  visible: true
})

/**
 * Creates a new Geoportail Layer.
 */
export var geo = new GeoportailLayer({
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
  visible: true
});

/**
 * Registers a Geoportail Layer. 
 */
GeoportailLayer.register("GEOGRAPHICALGRIDSYSTEMS.TERRIER_V2", {"key" : "cartes","server" : "https://wxs.ign.fr/geoportail/wmts", "layer" : "GEOGRAPHICALGRIDSYSTEMS.TERRIER_V2","title" : "Plan Terrier V2 (XVIIIe siècle)", "format" : "image/png", "style" : "nolegend","queryable" : false, "tilematrix" : "PM", "minZoom" : 6, "maxZoom" : 18,"bbox" : [8.362839,41.256767,9.752816,43.117405], "desc" : "Plan Terrier, cartographie ancienne " +"du XVIIIème siècle sur la Corse version est une version numérisée par les archives militaires du Ministère de la Défense","originators" : {"IGN" : {"href" : "https://www.ign.fr", "attribution" : "Institut national de l'information géographique et forestière", "logo" : "https://wxs.ign.fr/static/logos/IGN/IGN.gif", "minZoom" : 6, "maxZoom" : 18,"constraint" : [{"minZoom" : 6, "maxZoom" : 18, "bbox" : [8.362839,41.256767,9.752816,43.117405]}]}}});

/**
 * Creates a new Geoportail Layer from the layer registered before.
 */

export var terrier = new GeoportailLayer({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.TERRIER_V2'
});

/**
 * Creates a layer Switcher for the layers created before.
 * The Switcher extends the card to the area of the layer selected.
 */
export var layerSwitcher = new LayerSwitcher({
  extent: true 
});



