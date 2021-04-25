// DB_STRING='mongodb://localhost:27017/db_for_boiler_plate'
// DB_STRING_PROD="mongodb+srv://DBuser:AnimatioN1010@simpleclusterforandroid.enzb4.mongodb.net/dbForAndroid?retryWrites=true&w=majority"
// NODE_ENV='production'
// PORT=3001

// GOOGLE_CLOUD_STORAGE_ENABLED='true'
// AWS_S3_STORAGE_ENABLED='false'



// gcp_keyFilename='portfolio-apps-311617-9e5ae7843e5d.json'
// gcp_projectId='portfolio-apps-311617'
// gcp_bucket='portfolio_content_app'

var arguments_supplied = process.argv.slice(2);
var gcp_keyFilename = arguments_supplied[0]
var gcp_projectId = arguments_supplied[1]
var gcp_bucket = arguments_supplied[2]


const fs = require('fs')

const file_path = './App/backend/.env'

const regex_pattern1 = /^gcp_keyFilename/
const regex_pattern2 = /^gcp_projectId/
const regex_pattern3 = /^gcp_bucket/


async function generate_dot_env_file_for_cloud_storage(){

	var file_lines_content = fs.readFileSync(file_path).toString().split("\n");

	let file_lines_without_matched_reges = file_lines_content.filter((line) => {
		return regex_pattern1.test(line) === false && regex_pattern2.test(line) === false && regex_pattern3.test(line) === false && line !== ''
	})

	let final_lines_content = [
		...file_lines_without_matched_reges,
		`\ngcp_keyFilename='${gcp_keyFilename}'`,		
		`\ngcp_projectId='${gcp_projectId}'`,		
		`\ngcp_bucket='${gcp_bucket}'`,		
	]

	final_lines_content = final_lines_content.join("\n")	

	await fs.writeFile(file_path, final_lines_content, function (err) {
	  if (err) return console.log(err);
	});

}


generate_dot_env_file_for_cloud_storage()

module.exports = generate_dot_env_file_for_cloud_storage