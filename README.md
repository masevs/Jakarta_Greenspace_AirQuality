# Mapping Urban Green Space and Air Quality in Jakarta

**Author:** Imas Viestawati S  
**Date:** September 2025  
**Software:** QGIS 3.34, Leaflet (via qgis2web)

This project presents an interactive map analyzing the relationship between green space coverage and PM2.5 air quality levels across the municipalities of Jakarta. The analysis and visualization were performed using open-source geospatial data and QGIS.

**[View the Interactive Map](https://masevs.github.io/Jakarta_Greenspace_AirQuality)**  
📄 **[Read Full Report (PDF)](Mapping%20Urban%20Green%20Space%20and%20Air%20Quality%20in%20Jakarta%20Using%20QGIS.pdf)**

---

## **Data Sources**
| Dataset | Source |
|----------|--------|
| Landuse | GeoFabrik OSM Extracts |
| Administrative Boundaries | GADM (Level 2) |
| PM2.5 Data | udara.jakarta.go.id (2025 Observations) |

---

## **Methods**
1. Classification of landuse polygons into Green and Built-up categories.  
2. Area calculation (km²) using QGIS field calculator.  
3. Spatial join by municipality to compute total green area.  
4. Calculation of green ratio (%) and comparison with PM2.5 averages.  
5. Visualization in QGIS → Export via qgis2web (Leaflet).

---

## **Key Findings**
- Jakarta Selatan and Jakarta Timur show higher green ratios and generally lower AQI levels.  
- Densely built-up areas like Jakarta Barat show higher PM2.5 concentrations.  
- Green space coverage shows potential buffering effect on urban air pollution.

---

## **Credits**
Developed as part of a GIS and Environmental Data Analysis project by **Imas Viestawati S**.  
Contact: imasviestawati22@gmail.com
