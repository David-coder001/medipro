var hospitals = [
    {
      "name": "Unity Hospital",
      "location": "New York, USA",
      "image_url": "https://cdn.britannica.com/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg",
      "specialization": "General Medicine"
    },
    {
      "name": "St. Mary's Hospital",
      "location": "London, UK",
      "image_url": "https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg?w=1500",
      "specialization": "Cardiology"
    },
    {
      "name": "Mount Sinai Hospital",
      "location": "New York, USA",
      "image_url": "https://s.yimg.com/ny/api/res/1.2/NVqtcfHeOofoIFFbldM2Cg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1NA--/https://media.zenfs.com/en/insidermonkey.com/4cb4fd1cd5865ea98d94bc3dbc308256",
      "specialization": "Oncology"
    },
    {
      "name": "Johns Hopkins Hospital",
      "location": "Baltimore, USA",
      "image_url": "https://s.yimg.com/ny/api/res/1.2/NVqtcfHeOofoIFFbldM2Cg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1NA--/https://media.zenfs.com/en/insidermonkey.com/4cb4fd1cd5865ea98d94bc3dbc308256",
      "specialization": "Neurology"
    },
    {
      "name": "Massachusetts General Hospital",
      "location": "Boston, USA",
      "image_url": "https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg",
      "specialization": "Orthopedics"
    },
    {
      "name": "Toronto General Hospital",
      "location": "Toronto, Canada",
      "image_url": "https://media.istockphoto.com/id/489041732/tr/foto%C4%9Fraf/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=CHrQRM9C5SeT8GrwdXVA8dpF0qgmgDliuEPr2AVffC4=",
      "specialization": "Nephrology"
    },
    {
      "name": "Mayo Clinic",
      "location": "Rochester, USA",
      "image_url": "https://static5.depositphotos.com/1039887/475/i/450/depositphotos_4756704-stock-photo-modern-hospital-building-front-emergency.jpg",
      "specialization": "Endocrinology"
    },
    {
      "name": "Royal Melbourne Hospital",
      "location": "Melbourne, Australia",
      "image_url": "https://www.evidentlycochrane.net/wp-content/uploads/2022/03/iStock-1312706413.jpg",
      "specialization": "Gastroenterology"
    },
    {
      "name": "Charité Hospital",
      "location": "Berlin, Germany",
      "image_url": "https://www.northamericanbuildings.com/wp-content/uploads/2019/02/hospital-builder-company-1.jpg",
      "specialization": "Psychiatry"
    },
    {
      "name": "Apollo Hospital",
      "location": "New Delhi, India",
      "image_url": "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "specialization": "Urology"
    }
  ];
  
var medicalProfessionals = [
    {
      "fullname": "Dr. Sophia Patel",
      "medical_profession": "Pediatrician",
      "years_of_experience": 15,
      "university": "Harvard Medical School",
      "image_url": "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Michael Johnson",
      "medical_profession": "Cardiologist",
      "years_of_experience": 20,
      "university": "Johns Hopkins University School of Medicine",
      "image_url": "https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Emily Chen",
      "medical_profession": "Dermatologist",
      "years_of_experience": 12,
      "university": "Stanford University School of Medicine",
      "image_url": "https://images.pexels.com/photos/5452256/pexels-photo-5452256.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. David Williams",
      "medical_profession": "Orthopedic Surgeon",
      "years_of_experience": 18,
      "university": "Mayo Clinic School of Medicine",
      "image_url": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Rachel Lee",
      "medical_profession": "Psychiatrist",
      "years_of_experience": 10,
      "university": "Columbia University Vagelos College of Physicians and Surgeons",
      "image_url": "https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Daniel Brown",
      "medical_profession": "Oncologist",
      "years_of_experience": 25,
      "university": "University of California, San Francisco (UCSF) School of Medicine",
      "image_url": "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Sarah Garcia",
      "medical_profession": "Obstetrician/Gynecologist",
      "years_of_experience": 14,
      "university": "University of Pennsylvania Perelman School of Medicine",
      "image_url": "https://images.pexels.com/photos/5722156/pexels-photo-5722156.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Jonathan Nguyen",
      "medical_profession": "Neurologist",
      "years_of_experience": 17,
      "university": "University of Michigan Medical School",
      "image_url": "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Elizabeth Taylor",
      "medical_profession": "Ophthalmologist",
      "years_of_experience": 11,
      "university": "University of Chicago Pritzker School of Medicine",
      "image_url": "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Kevin Wilson",
      "medical_profession": "Urologist",
      "years_of_experience": 16,
      "university": "Washington University School of Medicine in St. Louis",
      "image_url": "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Jennifer Martinez",
      "medical_profession": "Endocrinologist",
      "years_of_experience": 13,
      "university": "Yale School of Medicine",
      "image_url": "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Alexander Adams",
      "medical_profession": "Allergist/Immunologist",
      "years_of_experience": 19,
      "university": "University of California, Los Angeles (UCLA) David Geffen School of Medicine",
      "image_url": "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Megan Clark",
      "medical_profession": "Gastroenterologist",
      "years_of_experience": 15,
      "university": "University of Texas Southwestern Medical School",
      "image_url": "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Christopher Turner",
      "medical_profession": "Pulmonologist",
      "years_of_experience": 22,
      "university": "Emory University School of Medicine",
      "image_url": "https://images.pexels.com/photos/11748762/pexels-photo-11748762.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Amanda Scott",
      "medical_profession": "Rheumatologist",
      "years_of_experience": 10,
      "university": "Northwestern University Feinberg School of Medicine",
      "image_url": "https://images.pexels.com/photos/4270365/pexels-photo-4270365.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Benjamin Martinez",
      "medical_profession": "Otolaryngologist (ENT)",
      "years_of_experience": 18,
      "university": "University of Washington School of Medicine",
      "image_url": "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Rebecca Thompson",
      "medical_profession": "Nephrologist",
      "years_of_experience": 14,
      "university": "University of Wisconsin School of Medicine and Public Health",
      "image_url": "https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Matthew Roberts",
      "medical_profession": "Emergency Medicine Physician",
      "years_of_experience": 20,
      "university": "University of Pittsburgh School of Medicine",
      "image_url": "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Samantha Adams",
      "medical_profession": "Family Medicine Physician",
      "years_of_experience": 11,
      "university": "University of Virginia School of Medicine",
      "image_url": "https://images.pexels.com/photos/8442896/pexels-photo-8442896.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "fullname": "Dr. Lucas White",
      "medical_profession": "Plastic Surgeon",
      "years_of_experience": 16,
      "university": "University of Southern California (USC) Keck School of Medicine",
      "image_url": "https://images.pexels.com/photos/5452233/pexels-photo-5452233.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  
// Loop through JSON data and create cards
$.each(hospitals, function(index, hospitals) {
    var cardHtml = `
    <div class="hosp">
      <div class="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-180">
        <div class="relative flex items-center justify-center flex-shrink-0 h-full group animate-pulse">
          <img class=" w-9/10 sm:w-10/12 lg:w-9/10 xl:w-10/12 h-auto rounded-lg shadow-md mx-auto object-cover object-left-top transition ease-in-out duration-300" alt="${hospitals.name}" src="${hospitals.image_url}" />
          <div class='absolute inset-0 transition duration-200 bg-gray-900 opacity-0 rounded-2xl group-hover:opacity-60'></div>
          <div class='absolute inset-0 flex flex-col items-center justify-center transition duration-200 opacity-0 group-hover:opacity-100'>
              <div class='mb-4 shadow-sm w-33 rounded-2xl'>
              </div>
            <div class='shadow-sm w-33 rounded-2xl'>
              <a class="w-full justify-center inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-2xl shadow-sm text-white transition duration-150 bg-cool-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500 view-details-hos" href="#">View details</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col justify-between flex-1 p-6">
          <div class="flex-1">
            <a class="block group" href="/resources/app-landing-page-themes-dev">
              <div class='flex items-center justify-between'>
                <h3 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">${hospitals.name}</h3>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold font-display bg-cool-indigo-200 text-indigo-800">${hospitals.location}</span>
              </div>
              <p class="mt-1 text-base font-medium leading-6 text-gray-500"><span class="text-blue-300">${hospitals.specialization}</p>
            </a>
          </div>
        </div>
      </div>
      </div>
    `;
    $(".medical-centers").append(cardHtml);
  });

// Loop through JSON data and create cards
$.each(medicalProfessionals, function(index, professional) {
  var cardHtml = `
  <div class="profs">
    <div class="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-180">
      <div class="relative flex items-center justify-center flex-shrink-0 h-full group animate-pulse">
        <img class=" w-9/10 sm:w-10/12 lg:w-9/10 xl:w-10/12 h-auto rounded-lg shadow-md mx-auto object-cover object-left-top transition ease-in-out duration-300" alt="${professional.name}" src="${professional.image_url}" />
        <div class='absolute inset-0 transition duration-200 bg-gray-900 opacity-0 rounded-2xl group-hover:opacity-60'></div>
        <div class='absolute inset-0 flex flex-col items-center justify-center transition duration-200 opacity-0 group-hover:opacity-100'>
            <div class='mb-4 shadow-sm w-33 rounded-2xl'>
            </div>
          <div class='shadow-sm w-33 rounded-2xl'>
            <a class="w-full justify-center inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-2xl shadow-sm text-white transition duration-150 bg-cool-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500 view-details" href="#">View details</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col justify-between flex-1 p-6">
        <div class="flex-1">
          <a class="block group" href="/resources/app-landing-page-themes-dev">
            <div class='flex items-center justify-between'>
              <h3 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">${professional.fullname}</h3>
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold font-display bg-cool-indigo-200 text-cool-indigo-800">${professional.years_of_experience} Years Experience</span>
            </div>
            <p class="mt-1 text-base font-medium leading-6 text-gray-500"><span class="text-blue-300">${professional.medical_profession}</span> at ${professional.university}</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  `;
  $(".medical-professionals").append(cardHtml);
});

// Function to open modal with professional details
function openModal(professional) {
    var modalContentHtml = `
      <h3 class="text-lg font-semibold">${professional.fullname}</h3>
      <p class="text-blue-500 mb-2">${professional.medical_profession} at ${professional.university}</p>
      <p class="text-gray-500">${professional.years_of_experience} years of experience</p>
      <img class="mt-4 rounded-md" src="${professional.image_url}" alt="${professional.fullname}">
    `;
    $("#modalContent").html(modalContentHtml);
    $("#modal").removeClass("hidden");
  }

  function openHosModal(hospital) {
    var modalContentHtml = `
      <h3 class="text-lg font-semibold">${hospital.name}</h3>
      <p class="text-blue-500 mb-2">${hospital.location}</p>
      <p class="text-gray-500">${hospital.specialization}</p>
      <img class="mt-4 rounded-md" src="${hospital.image_url}" alt="${hospital.name}">
    `;
    $("#modalContent").html(modalContentHtml);
    $("#modal").removeClass("hidden");
  }
  
  // Function to close modal
  $("#closeModal").click(function() {
    $("#modal").addClass("hidden");
  });

// Click event to open modal on card click
$(".view-details").click(function() {
    var index = $(this).closest(".profs").index();
    openModal(medicalProfessionals[index]);
  });

  $(".view-details-hos").click(function() {
    var index = $(this).closest(".hosp").index();
    openHosModal(hospitals[index]);
  });

