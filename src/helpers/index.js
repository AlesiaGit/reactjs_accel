const EARTH_RADIUS = 6371000;

function camelize(str) {
	let separators = [" ", "_"];

	separators.forEach(item => {
		str = str.split(item).map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}).join('');
	})

	return str;
}

function compare(obj1, obj2) {
	for (var key in obj1) {
		if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false; 
	}
	return true;
}

function toRad(num) {
	return num * Math.PI/180;
}

function getDistance(lat1, lng1, lat2, lng2) {
	var dLat = toRad(lat2 - lat1);
	var dLng = toRad(lng2 - lng1);

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

	var distance = EARTH_RADIUS * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return distance; //distance is returned in meters
}

function getZoom(distance) { // distance in meters
	return Math.round(14-Math.log(distance / 2000)/Math.LN2);
}

function getAngle(lat1, lng1, lat2, lng2) {
	var dLng = (lng2 - lng1);

	var y = Math.sin(dLng) * Math.cos(lat2);
	var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);

	var brng = Math.atan2(y, x);

	var pi = Math.PI;
	brng = brng * (180/pi);
	brng = (brng + 360) % 360;
    brng = 360 - brng; // count degrees counter-clockwise - remove to make clockwise

    return brng;
}

function getCenter(bounds) {
	let {ne, sw} = bounds;

	let lat = (sw.lat + (ne.lat - sw.lat)/2);
	let lng = (sw.lng + (ne.lng - sw.lng)/2);

	return {lat, lng};
}

function getBounds(arrayOfCoords) { //sw, ne
	var maxY, minY, maxX, minX;

	arrayOfCoords.forEach(i => {
		maxY = maxY > i.lat ? maxY : i.lat;
		minY = minY < i.lat ? minY : i.lat;
		maxX = maxX > i.lng ? maxX : i.lng;
		minX = minX < i.lng ? minX : i.lng;
	});

	let bounds = {
		ne: {lat: maxY, lng: maxX}, 
		sw: {lat: minY, lng: minX}
	};

	return bounds; 
}

export { camelize, compare, toRad, getDistance, getAngle, getZoom, getCenter, getBounds };