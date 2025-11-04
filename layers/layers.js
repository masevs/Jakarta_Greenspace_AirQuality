var wms_layers = [];

var format_Jakarta_0 = new ol.format.GeoJSON();
var features_Jakarta_0 = format_Jakarta_0.readFeatures(json_Jakarta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jakarta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jakarta_0.addFeatures(features_Jakarta_0);
var lyr_Jakarta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jakarta_0, 
                style: style_Jakarta_0,
                popuplayertitle: 'Jakarta',
                interactive: true,
                title: '<img src="styles/legend/Jakarta_0.png" /> Jakarta'
            });
var format_GreenLanduse_1 = new ol.format.GeoJSON();
var features_GreenLanduse_1 = format_GreenLanduse_1.readFeatures(json_GreenLanduse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenLanduse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenLanduse_1.addFeatures(features_GreenLanduse_1);
var lyr_GreenLanduse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenLanduse_1, 
                style: style_GreenLanduse_1,
                popuplayertitle: 'Green Landuse',
                interactive: true,
                title: '<img src="styles/legend/GreenLanduse_1.png" /> Green Landuse'
            });
var format_PollutionLanduse_2 = new ol.format.GeoJSON();
var features_PollutionLanduse_2 = format_PollutionLanduse_2.readFeatures(json_PollutionLanduse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PollutionLanduse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PollutionLanduse_2.addFeatures(features_PollutionLanduse_2);
var lyr_PollutionLanduse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PollutionLanduse_2, 
                style: style_PollutionLanduse_2,
                popuplayertitle: 'Pollution Landuse',
                interactive: true,
                title: '<img src="styles/legend/PollutionLanduse_2.png" /> Pollution Landuse'
            });
var format_JakartaLanduse_3 = new ol.format.GeoJSON();
var features_JakartaLanduse_3 = format_JakartaLanduse_3.readFeatures(json_JakartaLanduse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JakartaLanduse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JakartaLanduse_3.addFeatures(features_JakartaLanduse_3);
var lyr_JakartaLanduse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JakartaLanduse_3, 
                style: style_JakartaLanduse_3,
                popuplayertitle: 'Jakarta Landuse',
                interactive: true,
                title: '<img src="styles/legend/JakartaLanduse_3.png" /> Jakarta Landuse'
            });
var format_Joinedlayer_4 = new ol.format.GeoJSON();
var features_Joinedlayer_4 = format_Joinedlayer_4.readFeatures(json_Joinedlayer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Joinedlayer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Joinedlayer_4.addFeatures(features_Joinedlayer_4);
var lyr_Joinedlayer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Joinedlayer_4, 
                style: style_Joinedlayer_4,
                popuplayertitle: 'Joined layer',
                interactive: true,
                title: '<img src="styles/legend/Joinedlayer_4.png" /> Joined layer'
            });

lyr_Jakarta_0.setVisible(true);lyr_GreenLanduse_1.setVisible(true);lyr_PollutionLanduse_2.setVisible(true);lyr_JakartaLanduse_3.setVisible(true);lyr_Joinedlayer_4.setVisible(true);
var layersList = [lyr_Jakarta_0,lyr_GreenLanduse_1,lyr_PollutionLanduse_2,lyr_JakartaLanduse_3,lyr_Joinedlayer_4];
lyr_Jakarta_0.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_GreenLanduse_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'area_m2': 'area_m2', 'area_km2': 'area_km2', });
lyr_PollutionLanduse_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'area_m2': 'area_m2', 'area_km2': 'area_km2', });
lyr_JakartaLanduse_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'class_group': 'class_group', 'area_km2': 'area_km2', });
lyr_Joinedlayer_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'class_group': 'class_group', 'area_km2': 'area_km2', 'GID_2_count': 'GID_2_count', 'GID_2_unique': 'GID_2_unique', 'GID_2_empty': 'GID_2_empty', 'GID_2_filled': 'GID_2_filled', 'GID_2_min': 'GID_2_min', 'GID_2_max': 'GID_2_max', 'GID_2_min_length': 'GID_2_min_length', 'GID_2_max_length': 'GID_2_max_length', 'GID_2_mean_length': 'GID_2_mean_length', 'GID_0_count': 'GID_0_count', 'GID_0_unique': 'GID_0_unique', 'GID_0_empty': 'GID_0_empty', 'GID_0_filled': 'GID_0_filled', 'GID_0_min': 'GID_0_min', 'GID_0_max': 'GID_0_max', 'GID_0_min_length': 'GID_0_min_length', 'GID_0_max_length': 'GID_0_max_length', 'GID_0_mean_length': 'GID_0_mean_length', 'COUNTRY_count': 'COUNTRY_count', 'COUNTRY_unique': 'COUNTRY_unique', 'COUNTRY_empty': 'COUNTRY_empty', 'COUNTRY_filled': 'COUNTRY_filled', 'COUNTRY_min': 'COUNTRY_min', 'COUNTRY_max': 'COUNTRY_max', 'COUNTRY_min_length': 'COUNTRY_min_length', 'COUNTRY_max_length': 'COUNTRY_max_length', 'COUNTRY_mean_length': 'COUNTRY_mean_length', 'GID_1_count': 'GID_1_count', 'GID_1_unique': 'GID_1_unique', 'GID_1_empty': 'GID_1_empty', 'GID_1_filled': 'GID_1_filled', 'GID_1_min': 'GID_1_min', 'GID_1_max': 'GID_1_max', 'GID_1_min_length': 'GID_1_min_length', 'GID_1_max_length': 'GID_1_max_length', 'GID_1_mean_length': 'GID_1_mean_length', 'NAME_1_count': 'NAME_1_count', 'NAME_1_unique': 'NAME_1_unique', 'NAME_1_empty': 'NAME_1_empty', 'NAME_1_filled': 'NAME_1_filled', 'NAME_1_min': 'NAME_1_min', 'NAME_1_max': 'NAME_1_max', 'NAME_1_min_length': 'NAME_1_min_length', 'NAME_1_max_length': 'NAME_1_max_length', 'NAME_1_mean_length': 'NAME_1_mean_length', 'NL_NAME_1_count': 'NL_NAME_1_count', 'NL_NAME_1_unique': 'NL_NAME_1_unique', 'NL_NAME_1_empty': 'NL_NAME_1_empty', 'NL_NAME_1_filled': 'NL_NAME_1_filled', 'NL_NAME_1_min': 'NL_NAME_1_min', 'NL_NAME_1_max': 'NL_NAME_1_max', 'NL_NAME_1_min_length': 'NL_NAME_1_min_length', 'NL_NAME_1_max_length': 'NL_NAME_1_max_length', 'NL_NAME_1_mean_length': 'NL_NAME_1_mean_length', 'NAME_2_count': 'NAME_2_count', 'NAME_2_unique': 'NAME_2_unique', 'NAME_2_empty': 'NAME_2_empty', 'NAME_2_filled': 'NAME_2_filled', 'NAME_2_min': 'NAME_2_min', 'NAME_2_max': 'NAME_2_max', 'NAME_2_min_length': 'NAME_2_min_length', 'NAME_2_max_length': 'NAME_2_max_length', 'NAME_2_mean_length': 'NAME_2_mean_length', 'VARNAME_2_count': 'VARNAME_2_count', 'VARNAME_2_unique': 'VARNAME_2_unique', 'VARNAME_2_empty': 'VARNAME_2_empty', 'VARNAME_2_filled': 'VARNAME_2_filled', 'VARNAME_2_min': 'VARNAME_2_min', 'VARNAME_2_max': 'VARNAME_2_max', 'VARNAME_2_min_length': 'VARNAME_2_min_length', 'VARNAME_2_max_length': 'VARNAME_2_max_length', 'VARNAME_2_mean_length': 'VARNAME_2_mean_length', 'NL_NAME_2_count': 'NL_NAME_2_count', 'NL_NAME_2_unique': 'NL_NAME_2_unique', 'NL_NAME_2_empty': 'NL_NAME_2_empty', 'NL_NAME_2_filled': 'NL_NAME_2_filled', 'NL_NAME_2_min': 'NL_NAME_2_min', 'NL_NAME_2_max': 'NL_NAME_2_max', 'NL_NAME_2_min_length': 'NL_NAME_2_min_length', 'NL_NAME_2_max_length': 'NL_NAME_2_max_length', 'NL_NAME_2_mean_length': 'NL_NAME_2_mean_length', 'TYPE_2_count': 'TYPE_2_count', 'TYPE_2_unique': 'TYPE_2_unique', 'TYPE_2_empty': 'TYPE_2_empty', 'TYPE_2_filled': 'TYPE_2_filled', 'TYPE_2_min': 'TYPE_2_min', 'TYPE_2_max': 'TYPE_2_max', 'TYPE_2_min_length': 'TYPE_2_min_length', 'TYPE_2_max_length': 'TYPE_2_max_length', 'TYPE_2_mean_length': 'TYPE_2_mean_length', 'ENGTYPE_2_count': 'ENGTYPE_2_count', 'ENGTYPE_2_unique': 'ENGTYPE_2_unique', 'ENGTYPE_2_empty': 'ENGTYPE_2_empty', 'ENGTYPE_2_filled': 'ENGTYPE_2_filled', 'ENGTYPE_2_min': 'ENGTYPE_2_min', 'ENGTYPE_2_max': 'ENGTYPE_2_max', 'ENGTYPE_2_min_length': 'ENGTYPE_2_min_length', 'ENGTYPE_2_max_length': 'ENGTYPE_2_max_length', 'ENGTYPE_2_mean_length': 'ENGTYPE_2_mean_length', 'CC_2_count': 'CC_2_count', 'CC_2_unique': 'CC_2_unique', 'CC_2_empty': 'CC_2_empty', 'CC_2_filled': 'CC_2_filled', 'CC_2_min': 'CC_2_min', 'CC_2_max': 'CC_2_max', 'CC_2_min_length': 'CC_2_min_length', 'CC_2_max_length': 'CC_2_max_length', 'CC_2_mean_length': 'CC_2_mean_length', 'HASC_2_count': 'HASC_2_count', 'HASC_2_unique': 'HASC_2_unique', 'HASC_2_empty': 'HASC_2_empty', 'HASC_2_filled': 'HASC_2_filled', 'HASC_2_min': 'HASC_2_min', 'HASC_2_max': 'HASC_2_max', 'HASC_2_min_length': 'HASC_2_min_length', 'HASC_2_max_length': 'HASC_2_max_length', 'HASC_2_mean_length': 'HASC_2_mean_length', });
lyr_Jakarta_0.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_GreenLanduse_1.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'area_m2': '', 'area_km2': '', });
lyr_PollutionLanduse_2.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'area_m2': '', 'area_km2': '', });
lyr_JakartaLanduse_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'class_group': '', 'area_km2': '', });
lyr_Joinedlayer_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'class_group': '', 'area_km2': '', 'GID_2_count': '', 'GID_2_unique': '', 'GID_2_empty': '', 'GID_2_filled': '', 'GID_2_min': '', 'GID_2_max': '', 'GID_2_min_length': '', 'GID_2_max_length': '', 'GID_2_mean_length': '', 'GID_0_count': '', 'GID_0_unique': '', 'GID_0_empty': '', 'GID_0_filled': '', 'GID_0_min': '', 'GID_0_max': '', 'GID_0_min_length': '', 'GID_0_max_length': '', 'GID_0_mean_length': '', 'COUNTRY_count': '', 'COUNTRY_unique': '', 'COUNTRY_empty': '', 'COUNTRY_filled': '', 'COUNTRY_min': '', 'COUNTRY_max': '', 'COUNTRY_min_length': '', 'COUNTRY_max_length': '', 'COUNTRY_mean_length': '', 'GID_1_count': '', 'GID_1_unique': '', 'GID_1_empty': '', 'GID_1_filled': '', 'GID_1_min': '', 'GID_1_max': '', 'GID_1_min_length': '', 'GID_1_max_length': '', 'GID_1_mean_length': '', 'NAME_1_count': '', 'NAME_1_unique': '', 'NAME_1_empty': '', 'NAME_1_filled': '', 'NAME_1_min': '', 'NAME_1_max': '', 'NAME_1_min_length': '', 'NAME_1_max_length': '', 'NAME_1_mean_length': '', 'NL_NAME_1_count': '', 'NL_NAME_1_unique': '', 'NL_NAME_1_empty': '', 'NL_NAME_1_filled': '', 'NL_NAME_1_min': '', 'NL_NAME_1_max': '', 'NL_NAME_1_min_length': '', 'NL_NAME_1_max_length': '', 'NL_NAME_1_mean_length': '', 'NAME_2_count': '', 'NAME_2_unique': '', 'NAME_2_empty': '', 'NAME_2_filled': '', 'NAME_2_min': '', 'NAME_2_max': '', 'NAME_2_min_length': '', 'NAME_2_max_length': '', 'NAME_2_mean_length': '', 'VARNAME_2_count': '', 'VARNAME_2_unique': '', 'VARNAME_2_empty': '', 'VARNAME_2_filled': '', 'VARNAME_2_min': '', 'VARNAME_2_max': '', 'VARNAME_2_min_length': '', 'VARNAME_2_max_length': '', 'VARNAME_2_mean_length': '', 'NL_NAME_2_count': '', 'NL_NAME_2_unique': '', 'NL_NAME_2_empty': '', 'NL_NAME_2_filled': '', 'NL_NAME_2_min': '', 'NL_NAME_2_max': '', 'NL_NAME_2_min_length': '', 'NL_NAME_2_max_length': '', 'NL_NAME_2_mean_length': '', 'TYPE_2_count': '', 'TYPE_2_unique': '', 'TYPE_2_empty': '', 'TYPE_2_filled': '', 'TYPE_2_min': '', 'TYPE_2_max': '', 'TYPE_2_min_length': '', 'TYPE_2_max_length': '', 'TYPE_2_mean_length': '', 'ENGTYPE_2_count': '', 'ENGTYPE_2_unique': '', 'ENGTYPE_2_empty': '', 'ENGTYPE_2_filled': '', 'ENGTYPE_2_min': '', 'ENGTYPE_2_max': '', 'ENGTYPE_2_min_length': '', 'ENGTYPE_2_max_length': '', 'ENGTYPE_2_mean_length': '', 'CC_2_count': '', 'CC_2_unique': '', 'CC_2_empty': '', 'CC_2_filled': '', 'CC_2_min': '', 'CC_2_max': '', 'CC_2_min_length': '', 'CC_2_max_length': '', 'CC_2_mean_length': '', 'HASC_2_count': '', 'HASC_2_unique': '', 'HASC_2_empty': '', 'HASC_2_filled': '', 'HASC_2_min': '', 'HASC_2_max': '', 'HASC_2_min_length': '', 'HASC_2_max_length': '', 'HASC_2_mean_length': '', });
lyr_Jakarta_0.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_GreenLanduse_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'area_m2': 'no label', 'area_km2': 'no label', });
lyr_PollutionLanduse_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'area_m2': 'no label', 'area_km2': 'no label', });
lyr_JakartaLanduse_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'class_group': 'no label', 'area_km2': 'no label', });
lyr_Joinedlayer_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'class_group': 'no label', 'area_km2': 'no label', 'GID_2_count': 'no label', 'GID_2_unique': 'no label', 'GID_2_empty': 'no label', 'GID_2_filled': 'no label', 'GID_2_min': 'no label', 'GID_2_max': 'no label', 'GID_2_min_length': 'no label', 'GID_2_max_length': 'no label', 'GID_2_mean_length': 'no label', 'GID_0_count': 'no label', 'GID_0_unique': 'no label', 'GID_0_empty': 'no label', 'GID_0_filled': 'no label', 'GID_0_min': 'no label', 'GID_0_max': 'no label', 'GID_0_min_length': 'no label', 'GID_0_max_length': 'no label', 'GID_0_mean_length': 'no label', 'COUNTRY_count': 'no label', 'COUNTRY_unique': 'no label', 'COUNTRY_empty': 'no label', 'COUNTRY_filled': 'no label', 'COUNTRY_min': 'no label', 'COUNTRY_max': 'no label', 'COUNTRY_min_length': 'no label', 'COUNTRY_max_length': 'no label', 'COUNTRY_mean_length': 'no label', 'GID_1_count': 'no label', 'GID_1_unique': 'no label', 'GID_1_empty': 'no label', 'GID_1_filled': 'no label', 'GID_1_min': 'no label', 'GID_1_max': 'no label', 'GID_1_min_length': 'no label', 'GID_1_max_length': 'no label', 'GID_1_mean_length': 'no label', 'NAME_1_count': 'no label', 'NAME_1_unique': 'no label', 'NAME_1_empty': 'no label', 'NAME_1_filled': 'no label', 'NAME_1_min': 'no label', 'NAME_1_max': 'no label', 'NAME_1_min_length': 'no label', 'NAME_1_max_length': 'no label', 'NAME_1_mean_length': 'no label', 'NL_NAME_1_count': 'no label', 'NL_NAME_1_unique': 'no label', 'NL_NAME_1_empty': 'no label', 'NL_NAME_1_filled': 'no label', 'NL_NAME_1_min': 'no label', 'NL_NAME_1_max': 'no label', 'NL_NAME_1_min_length': 'no label', 'NL_NAME_1_max_length': 'no label', 'NL_NAME_1_mean_length': 'no label', 'NAME_2_count': 'no label', 'NAME_2_unique': 'no label', 'NAME_2_empty': 'no label', 'NAME_2_filled': 'no label', 'NAME_2_min': 'no label', 'NAME_2_max': 'no label', 'NAME_2_min_length': 'no label', 'NAME_2_max_length': 'no label', 'NAME_2_mean_length': 'no label', 'VARNAME_2_count': 'no label', 'VARNAME_2_unique': 'no label', 'VARNAME_2_empty': 'no label', 'VARNAME_2_filled': 'no label', 'VARNAME_2_min': 'no label', 'VARNAME_2_max': 'no label', 'VARNAME_2_min_length': 'no label', 'VARNAME_2_max_length': 'no label', 'VARNAME_2_mean_length': 'no label', 'NL_NAME_2_count': 'no label', 'NL_NAME_2_unique': 'no label', 'NL_NAME_2_empty': 'no label', 'NL_NAME_2_filled': 'no label', 'NL_NAME_2_min': 'no label', 'NL_NAME_2_max': 'no label', 'NL_NAME_2_min_length': 'no label', 'NL_NAME_2_max_length': 'no label', 'NL_NAME_2_mean_length': 'no label', 'TYPE_2_count': 'no label', 'TYPE_2_unique': 'no label', 'TYPE_2_empty': 'no label', 'TYPE_2_filled': 'no label', 'TYPE_2_min': 'no label', 'TYPE_2_max': 'no label', 'TYPE_2_min_length': 'no label', 'TYPE_2_max_length': 'no label', 'TYPE_2_mean_length': 'no label', 'ENGTYPE_2_count': 'no label', 'ENGTYPE_2_unique': 'no label', 'ENGTYPE_2_empty': 'no label', 'ENGTYPE_2_filled': 'no label', 'ENGTYPE_2_min': 'no label', 'ENGTYPE_2_max': 'no label', 'ENGTYPE_2_min_length': 'no label', 'ENGTYPE_2_max_length': 'no label', 'ENGTYPE_2_mean_length': 'no label', 'CC_2_count': 'no label', 'CC_2_unique': 'no label', 'CC_2_empty': 'no label', 'CC_2_filled': 'no label', 'CC_2_min': 'no label', 'CC_2_max': 'no label', 'CC_2_min_length': 'no label', 'CC_2_max_length': 'no label', 'CC_2_mean_length': 'no label', 'HASC_2_count': 'no label', 'HASC_2_unique': 'no label', 'HASC_2_empty': 'no label', 'HASC_2_filled': 'no label', 'HASC_2_min': 'no label', 'HASC_2_max': 'no label', 'HASC_2_min_length': 'no label', 'HASC_2_max_length': 'no label', 'HASC_2_mean_length': 'no label', });
lyr_Joinedlayer_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});