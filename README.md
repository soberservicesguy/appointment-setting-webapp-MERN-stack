# appointment_setting_webapp_MERN_stack

Project Details:

'App' refers to the development version having Node backend with Express and MongoDB, along with  React frontend.
'Containers_Version' refers to the app in containers network form based on Docker Compose
'Kubernetes_Version' refers to app in the pods network form based on deployments, services and Ingress


App Features:

The App allows doctors to set up their clinic schedule, which the app shows graphically in the weekly manner. Patients can book sessions for themselves, and the sessions booked gets removed from being shown


Database:

Anyone from MongoDB Atlas and Local MongoDB service can be used. Simply adjust the .env file with path App/backend/.env 


Storage:

Anyone from Local storage, AWS S3 or Google Cloud storage can be used. Simply adjust the .env file with path App/backend/.env 

USAGE:

/ or /home route shows static page with carousel and other UI components with  links to /doctorstimetable route
/doctorstimetable route shows available time slots where doctors are holding sessions, and patients can book them
/set-weeks-clinic route lets doctors set their availability
