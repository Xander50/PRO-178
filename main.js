let latitude=37.0902,longitude=95.7129
mapboxgl.accessToken='pk.eyJ1IjoiYWxleGFuZGVyajIiLCJhIjoiY2x2bjJ4MWpuMDhqMzJpbXF3YzU0Ym1jeiJ9.U64VlGzqrHxWyfEwBfQJNw'
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:0
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-right'
)