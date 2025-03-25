import dataTouristPlaces from './dataTouristPlaces'

function SiteDetail() {
	const place = dataTouristPlaces.find(place => place.name == 'Cafayate')
	console.log(place)
	return (
		<>
			
		</>
	)
}

export default SiteDetail
