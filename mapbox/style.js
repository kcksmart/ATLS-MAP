
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Entwurfselement_Hoehe_0": {
            "type": "geojson",
            "data": json_Entwurfselement_Hoehe_0
        }
                    ,
        "Entwurfselement_Lage_1": {
            "type": "geojson",
            "data": json_Entwurfselement_Lage_1
        }
                    ,
        "Entwurfselement_Ueberhoehung_2": {
            "type": "geojson",
            "data": json_Entwurfselement_Ueberhoehung_2
        }
                    ,
        "Gleis_Strecke_Abschnitt_Hoehe_3": {
            "type": "geojson",
            "data": json_Gleis_Strecke_Abschnitt_Hoehe_3
        }
                    ,
        "Gleis_Strecke_Abschnitt_Lage_4": {
            "type": "geojson",
            "data": json_Gleis_Strecke_Abschnitt_Lage_4
        }
                    ,
        "Gleis_Strecke_Abschnitt_Ueberhoehung_5": {
            "type": "geojson",
            "data": json_Gleis_Strecke_Abschnitt_Ueberhoehung_5
        }
                    ,
        "Gleiskanten_6": {
            "type": "geojson",
            "data": json_Gleiskanten_6
        }
                    ,
        "Oberleitungsmasten_7": {
            "type": "geojson",
            "data": json_Oberleitungsmasten_7
        }
                    ,
        "Signal_BUE_8": {
            "type": "geojson",
            "data": json_Signal_BUE_8
        }
                    ,
        "Signal_Hauptsignale_9": {
            "type": "geojson",
            "data": json_Signal_Hauptsignale_9
        }
                    ,
        "Signal_LF_10": {
            "type": "geojson",
            "data": json_Signal_LF_10
        }
                    ,
        "Signal_NE_11": {
            "type": "geojson",
            "data": json_Signal_NE_11
        }
                    ,
        "Signal_RA_12": {
            "type": "geojson",
            "data": json_Signal_RA_12
        }
                    ,
        "Signal_RA12_13": {
            "type": "geojson",
            "data": json_Signal_RA12_13
        }
                    ,
        "Signal_SH_14": {
            "type": "geojson",
            "data": json_Signal_SH_14
        }
                    ,
        "Signal_TS_15": {
            "type": "geojson",
            "data": json_Signal_TS_15
        }
                    ,
        "Signal_Vorsignale_16": {
            "type": "geojson",
            "data": json_Signal_Vorsignale_16
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Entwurfselement_Hoehe_0_0",
            "type": "line",
            "source": "Entwurfselement_Hoehe_0",
            "layout": {},
            "paint": {'line-width': 1.666667857142857, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_Entwurfselement_Lage_1_0",
            "type": "line",
            "source": "Entwurfselement_Lage_1",
            "layout": {},
            "paint": {'line-width': 1.4285714285714286, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_Entwurfselement_Ueberhoehung_2_0",
            "type": "line",
            "source": "Entwurfselement_Ueberhoehung_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#e8718d'}
        }
,
        {
            "id": "lyr_Gleis_Strecke_Abschnitt_Hoehe_3_0",
            "type": "line",
            "source": "Gleis_Strecke_Abschnitt_Hoehe_3",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#8d5a99'}
        }
,
        {
            "id": "lyr_Gleis_Strecke_Abschnitt_Lage_4_0",
            "type": "line",
            "source": "Gleis_Strecke_Abschnitt_Lage_4",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#f3a6b2'}
        }
,
        {
            "id": "lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_5_0",
            "type": "line",
            "source": "Gleis_Strecke_Abschnitt_Ueberhoehung_5",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#729b6f'}
        }
,
        {
            "id": "lyr_Gleiskanten_6_0",
            "type": "line",
            "source": "Gleiskanten_6",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#d5b43c'}
        }
,
        {
            "id": "lyr_Oberleitungsmasten_7_0",
            "type": "circle",
            "source": "Oberleitungsmasten_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#a47158', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_BUE_8_0",
            "type": "circle",
            "source": "Signal_BUE_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_Hauptsignale_9_0",
            "type": "circle",
            "source": "Signal_Hauptsignale_9",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#7d8b8f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_LF_10_0",
            "type": "circle",
            "source": "Signal_LF_10",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#91522d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_NE_11_0",
            "type": "circle",
            "source": "Signal_NE_11",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#beb297', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_RA_12_0",
            "type": "circle",
            "source": "Signal_RA_12",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_RA12_13_0",
            "type": "circle",
            "source": "Signal_RA12_13",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_SH_14_0",
            "type": "circle",
            "source": "Signal_SH_14",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_TS_15_0",
            "type": "circle",
            "source": "Signal_TS_15",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Signal_Vorsignale_16_0",
            "type": "circle",
            "source": "Signal_Vorsignale_16",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#987db7', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}