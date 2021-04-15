function sortObjectsThroughWeekdaysAndTimeRange(the_array){
	const sorter = {
		// "sunday": 0, // << if sunday is first day of week
		"monday": 0,
		"tuesday": 1,
		"wednesday": 2,
		"thursday": 3,
		"friday": 4,
		"saturday": 5,
	"sunday": 6,
	}

	the_array.sort(function(a, b) {

		let weekday1 = a.weekday.toLowerCase();
		let weekday2 = b.weekday.toLowerCase();

		let slotA = a.time_slot
		let slotB = b.time_slot


		var time_regex_pattern = /\d\d:\d\d/g

			// var time_slotsA =  slotA.match(time_regex_pattern) // gives array of matches
			// var starting_timeA = time_slotsA[0]
			// 	var starting_hourA = starting_timeA.match( /(\d\d):\d\d/ )[1]
			// 	var starting_minutesA = starting_timeA.match( /\d\d:(\d\d)/ )[1]

		// combining above
		var start_hour1 = slotA.match(time_regex_pattern)[0].match( /(\d\d):\d\d/ )[1]
		var start_minute1 = slotA.match(time_regex_pattern)[0].match( /\d\d:(\d\d)/ )[1]

		// combining
		var start_hour2 = slotB.match(time_regex_pattern)[0].match( /(\d\d):\d\d/ )[1]
		var start_minute2 = slotB.match(time_regex_pattern)[0].match( /\d\d:(\d\d)/ )[1]
		
		return ( sorter[weekday1] - sorter[weekday2] ) ||  ( start_hour1 - start_hour2 ) || ( start_minute1 - start_minute2 ) 

	});

		// console.log('LOG sorted objects is ', the_array) 

	return the_array

}


export default sortObjectsThroughWeekdaysAndTimeRange