function getAllUsedValuesOfSingleKeyInArray(the_array, key_to_look){
	// return ['is']
	
	// for loop

	var all_values = []

	for (let i = 0; i < the_array.length; i++) {
		let the_object = the_array[i]
	
		if ( !all_values.includes( the_object[key_to_look] ) ){
			all_values.push( the_object[key_to_look] )
		}

	} 
	
	return all_values
	
}

export default getAllUsedValuesOfSingleKeyInArray