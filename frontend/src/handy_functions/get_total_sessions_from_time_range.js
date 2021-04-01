function getTotalSessionsFromTimeRange(time_duration){

	var time_regex_pattern = /\d\d:\d\d/g
	var time_slots =  time_duration.match(time_regex_pattern) // gives array of matches

	var starting_time = time_slots[0]
	var ending_time = time_slots[1]

	var starting_hour = starting_time.match( /(\d\d):\d\d/ )[1]
	var starting_minutes = starting_time.match( /\d\d:(\d\d)/ )[1]

	var ending_hour = ending_time.match( /(\d\d):\d\d/ )[1]
	var ending_minutes = ending_time.match( /\d\d:(\d\d)/ )[1]

	var total_hours = Number(ending_hour) - Number(starting_hour)
	var half_hour_through_minutes = Number(ending_minutes) - Number(starting_minutes)

	var total_sessions = total_hours * 2  + half_hour_through_minutes/30

	// console.log('LOG total_Sessions are ',total_sessions)

	return total_sessions

}

export default getTotalSessionsFromTimeRange