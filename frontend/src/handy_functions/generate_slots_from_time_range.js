function generateSlotsFromTimeRange(time_range){
	// console.log({time_range:time_range})

	var time_regex_pattern = /\d\d:\d\d/g
	var time_slots =  time_range.match(time_regex_pattern) // gives array of matches

	var starting_time = time_slots[0]
	var ending_time = time_slots[1]

	var starting_hour = starting_time.match( /(\d\d):\d\d/ )[1]
	var starting_minutes = starting_time.match( /\d\d:(\d\d)/ )[1]

	var ending_hour = ending_time.match( /(\d\d):\d\d/ )[1]
	var ending_minutes = ending_time.match( /\d\d:(\d\d)/ )[1]

	var scheduling_hour = [...starting_time.match( /(\d\d):\d\d/ ) ][1]
	var scheduling_minute = [...starting_time.match( /\d\d:(\d\d)/ ) ][1]
	var slots = []

	// console.log({starting_hour:starting_hour, starting_minutes:starting_minutes, ending_hour:ending_hour, ending_minutes:ending_minutes})
	// console.log({scheduling_hour:scheduling_hour, scheduling_minute:scheduling_minute})

	// let current_hour = starting_hour
	// let current_minute = 

	var attempts_length = new Array( 24*2 );
	var hour_to_use = 0

	for (let i = 0; i < attempts_length.length; i++) {
		// is scheduling_minute just need to add 30 
		if ( scheduling_minute === '00' ){
			// if ( parseInt(scheduling_hour) < 10 && !( /0\d/ ).test(scheduling_hour) ){
			if ( parseInt(scheduling_hour) < 10 && ( /0\d/ ).test(scheduling_hour) ){

				// console.log('USED 1')
				slots.push( `${scheduling_hour}:${scheduling_minute} - ${scheduling_hour}:30` )
				scheduling_hour = scheduling_hour
				scheduling_minute = '30'

			} else {

				// console.log('USED 2')
				slots.push( `${scheduling_hour}:${scheduling_minute} - ${scheduling_hour}:30` )
				scheduling_hour = scheduling_hour
				scheduling_minute = '30'
			}

		} else if ( scheduling_minute === '30' && parseInt(scheduling_hour) === 9 ) {
			
			hour_to_use = parseInt(scheduling_hour) + parseInt(1)

			if ( parseInt(scheduling_hour) < 10 && ( /0\d/ ).test(scheduling_hour) ){

				slots.push( `${scheduling_hour}:${scheduling_minute} - ${hour_to_use}:00` )
				scheduling_hour = hour_to_use
				scheduling_minute = '00'

			} else {

				slots.push( `${scheduling_hour}:${scheduling_minute} - ${hour_to_use}:00` )
				scheduling_hour = hour_to_use
				scheduling_minute = '00'

			}

		} else if ( scheduling_minute === '30' && parseInt(scheduling_hour) !== 9 ){

			hour_to_use = parseInt(scheduling_hour) + parseInt(1)

			if ( parseInt(scheduling_hour) < 10 && ( /0\d/ ).test(scheduling_hour) ){

				slots.push( `${scheduling_hour}:${scheduling_minute} - 0${hour_to_use}:00` )
				scheduling_hour = `0${hour_to_use}`
				scheduling_minute = '00'

			} else {

				slots.push( `${scheduling_hour}:${scheduling_minute} - ${hour_to_use}:00` )
				scheduling_hour = hour_to_use
				scheduling_minute = '00'

			}

		} else {

		}

		if ( parseInt(scheduling_hour) === parseInt(ending_hour) && parseInt(scheduling_minute) === parseInt(ending_minutes) ){
			break;
		}



		// // sort_dicts_with_weekdays_and_time_rangeelse {
		// //  check if 0 comes before in the hour, just add 1 in hour and keep minutes 00
		// hour_to_use = parseInt(scheduling_hour) + parseInt(1)

		// if ( (/0\d/).test(scheduling_hour) ){

		// 	// console.log('USED 3')
		// 	slots.push( `${scheduling_hour}:${scheduling_minute} - 0${hour_to_use}:00` )

		// } else {
		// 	if ( parseInt(scheduling_hour) < 10 && !( /0\d/ ).test(scheduling_hour) ){

		// 		if (hour_to_use <10) {

		// 			// console.log('USED 4')
		// 			slots.push( `0${scheduling_hour}:${scheduling_minute} - 0${hour_to_use}:00` )

		// 		} else {

		// 			// console.log('USED 5')
		// 			slots.push( `0${scheduling_hour}:${scheduling_minute} - ${hour_to_use}:00` )
		// 		}


		// 	} else {


		// 		// console.log('USED 6')
		// 		slots.push( `${scheduling_hour}:${scheduling_minute} - ${hour_to_use}:00` )

		// 	}

		// }

		// scheduling_hour =  parseInt(scheduling_hour) + parseInt(1)
		// scheduling_minute = '00'

		// // if ( String(scheduling_hour) === ending_hour ){
		// // 	break;
		// // }

		// if ( String(scheduling_hour) === String(hour_to_use) ){
		// 	break;
		// }
	}	 

	// console.log('LOG slots are', slots)	
	// console.log({slots:slots})

	// console.log('HI2')
	// console.log({slots:slots})

	return slots

}


export default generateSlotsFromTimeRange