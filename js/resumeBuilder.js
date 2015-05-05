//********* BIO OBJECT *********
var bio = {
	'name' : 'Mia Okabe',
	'role' : 'Web Developer',
	'contacts' : {
		'mobile' : '+44-0000-00-0000',
		'email' : 'miaghori@gmail.com',
		'github' : 'myatropolitan',
		'twitter' : 'myaa24',
		'location' : 'London, UK'
	},
	'welcomeMessage' : 'Welcome to my resume site',
	'skills' : [ 'HTML5', 'CSS3', 'JavaScript', 'C++' ],
	'biopic' : './images/profile.jpg'
}

bio.display = function() {
	//Format Bio
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);
	$('#footerContacts').append(formattedMobile);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	$('#footerContacts').append(formattedEmail);

	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGithub);
	$('#footerContacts').append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);
	$('#footerContacts').append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	$('#header').append(formattedBioPic);

	var formattedWelcomMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelcomMsg);


	if(bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);

		for (skill in bio.skills)
		{
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);
			$('#header').append(formattedSkills);
		}
	}

}

//********* EDUCATION OBJECT *********
var education = {
	'schools' : [
		{
			'name' : 'Keio University',
			'location' : 'Kanagwa, Japan',
			'degree' : 'BA',
			'majors' : [ 'Media Design' ],
			'dates' : '2005',
			'url' : 'http://www.keio.ac.jp/index-en.html'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Intro to HTML and CSS',
			'school' : 'Udacity',
			'date' : '2015',
			'url' : 'https://www.udacity.com/course/viewer#!/c-ud304-nd'
		},
		{
			'title' : 'Responsive Web Design Fundamentals',
			'school' : 'Udacity',
			'date' : '2015',
			'url' : 'https://www.udacity.com/course/viewer#!/c-ud893-nd'
		},
		{
			'title' : 'Responsive Images',
			'school' : 'Udacity',
			'date' : '2015',
			'url' : 'https://www.udacity.com/course/viewer#!/c-ud882-nd'
		}
	]
}

education.display = function() {
	for(school in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$('.education-entry:last').append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedDegree);

		var formattedDate = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedDate);

		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);

		for(major in education.schools[school].majors){
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
			$('.education-entry:last').append(formattedMajor);
		}
	}
	if(education.onlineCourses.length > 0){
		$('#education').append(HTMLonlineClasses);
	}
	for(course in education.onlineCourses){
		$('#education').append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		$('.education-entry:last').append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		$('.education-entry:last').append(formattedSchool);

		var formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
		$('.education-entry:last').append(formattedDate);

		var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedURL);
	}
}

//********* WORK OBJECT *********
var work = {
	'jobs' : [
		{
			'employer' : 'Amazon Japan K.K.',
			'title' : 'Logisitics IT project manager',
			'location' : 'Tokyo, Japan',
			'dates' : 'April 2011 - April 2013',
			'description' : 'Responsible for the technical implementation of courier projects and new services, architecting scalable configurations for the company’s complex transportation network, and serving as the technical front line support for the transportation team.'
		},
		{
			'employer' : 'Hewlett-Packard Japan, Ltd',
			'title' : 'Software Engineer',
			'location' : 'Tokyo, Japan',
			'dates' : 'April 2006 - March 2011',
			'description' : 'Accountable for managing multiple projects, with duties ranging from defining requirements, resourcing, scheduling, coding, testing, to providing technical support. Experience in agile and waterfall development.'
		}
	]
}

work.display = function() {
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formatteWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formatteWorkTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedWorkDescription);
	}
}

//********* PROJECTS OBJECT *********
var projects = {
	'projects' : [
		{
			'title' : 'Nanodegree Project 1: Portfolio',
			'dates' : 'March 2015 - April 2015',
			'description' : 'Portfolio site project for Udacity Front End Developer Nanodegree',
			'images' : [ './images/project1.png', './images/project1_2.png']
		}
	]
}

projects.display = function(){
	for(project in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		for(image in projects.projects[project].images){
			var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
			$('.project-entry:last').append(formattedProjectImage);
		}
	}

}

//Display all items
bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
