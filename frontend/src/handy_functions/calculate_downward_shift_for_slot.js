function calculateDownwardShiftForSlot(time_duration, operating_time){
	// calculate_downward_shift_for_slot
	var time_regex_pattern = /\d\d:\d\d/g
	var time_slots =  time_duration.match(time_regex_pattern) // gives array of matches

	var starting_time = time_slots[0]
	var ending_time = time_slots[1]

	var starting_hour = starting_time.match( /(\d\d):\d\d/ )[1]
	var starting_minutes = starting_time.match( /\d\d:(\d\d)/ )[1]

	// var operating_time = this.props.operating_time
	var operating_time_slots =  operating_time.match(time_regex_pattern) // gives array of matches

	var operating_starting_time = operating_time_slots[0]
	var operating_ending_time = operating_time_slots[1]

	var operating_starting_hour = operating_starting_time.match( /(\d\d):\d\d/ )[1]
	var operating_starting_minutes = operating_starting_time.match( /\d\d:(\d\d)/ )[1]

	var hour_difference = Number(starting_hour) - Number(operating_starting_hour) // 0 1 2
	var minutes_difference = Number(starting_minutes) - Number(operating_starting_minutes)// 0 30 -30

	// minutes_difference = (minutes_difference === 30 || minutes_difference === -30) ? 1 : 0
	if (minutes_difference === 30 && hour_difference < 9){
		minutes_difference = 1
	} else if (minutes_difference === 30 && hour_difference >= 9){
		minutes_difference = 0
	} else if (minutes_difference === -30 ){
		minutes_difference = 2
	} else {
		minutes_difference = 0
	}

	// var total_downward_shift = hour_difference * 2 + minutes_difference
	var total_downward_shift = hour_difference * 2
	console.log({time_duration: operating_time, time_duration:time_duration, hour_difference:hour_difference, minutes_difference:minutes_difference, total_downward_shift:total_downward_shift})

	// console.log( 'LOG downwardshift is ', total_downward_shift)

	// console.log('total_downward_shift')
	// console.log(total_downward_shift)
	return total_downward_shift
}

export default calculateDownwardShiftForSlot