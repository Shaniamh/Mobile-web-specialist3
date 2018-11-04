let places= [     
    {"lokasi": [-6.221028, 106.791434], "sponsor" : "Restoran Spanyol"},    
    {"lokasi": [-6.219912, 106.791239], "sponsor" : "Warung Kopi"},    
    {"lokasi": [-6.220529, 106.789848], "sponsor" : "Depot Ikan Bakar"},    
    {"lokasi": [-6.222977, 106.789152], "sponsor" : "Gudang STEAK"},    
    {"lokasi": [-6.222043, 106.791070], "sponsor" : "Seafood!!"} ];

for (var p of places) {  
        var marker=  L.marker(p.lokasi).addTo(mymap)      
        .bindPopup(p.sponsor); }
