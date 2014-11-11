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
	map.addMarker({
		lat: 33.888664,
		lng: -118.093164,
		icon: iconBase,
		infoWindow: {
			content: 'Dhammasukha Monastery<br>15623 Longworth Avenue, Norwalk, CA 90650<br>(562) 864-3660<br>Dhammasukha@yahoo.com<br>'
		}
		});
	map.addMarker({
		lat: 34.051618,
		lng: -117.924771,
		icon: iconBase,
		infoWindow: {
			content: 'Parami Buddha Vihara<br>1842 Valinda Ave, La Puente, CA 91744<br>(626) 919-3806, (626) 975-3660<br>http://paramiusa.org<br>apannadipa@yahoo.com<br>'
		}
		});


	});
