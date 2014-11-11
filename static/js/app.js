	var iconBase = new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/pal2/icon10.png',
			new google.maps.Size(32,32));
	var map;
	$(document).ready(function(){
	map = new GMaps({ 
		el: '#map',
		lat: 40.393264,
		lng: -95.7899219,
		zoom: 5,
		zoomControl : true,
		});
	map.addMarker({
		lat: 34.1538945,
		lng: -117.9088402,
		icon: iconBase,
		infoWindow: {
			content: 'Azusa Myanmar Buddhist Temple<br>1790-1830 Ranch Road, Azusa, CA 91702<br>(626) 969-2118<br><a href="http://myanmar-pba.org">website</a><br>uayethaka@yahoo.com<br>unyanawara@msn.com<br>'
		}
		});
	});
