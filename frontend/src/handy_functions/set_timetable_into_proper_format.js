import {
	sortObjectsThroughWeekdaysAndTimeRange, // sortObjectsThroughWeekdaysAndTimeRange(the_array)
	filterObjectsUsingKey, // filterObjectsUsingKey(the_array, key, value)
	getTotalSessionsFromTimeRange, // getTotalSessionsFromTimeRange(time_duration)
} from "./"

function setTimetableIntoProperFormat(the_array, week_days){

// weekDays:['Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	// sorting the timetable
	let sorted_array = sortObjectsThroughWeekdaysAndTimeRange(the_array)

	var final_array_with_shift = []

	week_days.map((weekday)=>{
		let single_day_timetable = filterObjectsUsingKey( sorted_array, 'weekday', weekday )

		// get single_day_timetable and getTotalSessionsFromTimeRange of each slot and add it in subsequent with slot_gap_height
		let down_ward_shift = 0
		single_day_timetable.map((single_slot_info, index)=>{

			// adding key value pair called shift
			single_slot_info.shift = down_ward_shift
			let sessions_in_slot = getTotalSessionsFromTimeRange( single_slot_info.time_slot )

			// adding above session_in_slot in previous down_ward_shift
			down_ward_shift = down_ward_shift + sessions_in_slot

			// adding entire object to final_array_with_shift
			final_array_with_shift.push( single_slot_info )
		})

	})

	// console.log(final_array_with_shift)
	return final_array_with_shift
}

export default setTimetableIntoProperFormat