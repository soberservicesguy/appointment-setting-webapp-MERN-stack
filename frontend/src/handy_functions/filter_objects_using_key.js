function filterObjectsUsingKey(the_array, key, value){
	// this.detectPreviousSlotsWithHeights()
	// console.log(key)
	// console.log( this.props.total_doctorstimetables )
	var filtered = the_array.filter(
		function(item){
			return item[key] === value
		}
	)
	// console.log('LOG filtered array is',filtered)

	return filtered
}


export default filterObjectsUsingKey