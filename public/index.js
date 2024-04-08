document.addEventListener("DOMContentLoaded", function() {

    /*
        Insert
    */
    var insertForm = document.getElementById("insert-form");
    var insertAppointmentSuccessMsg = document.getElementById("insert-appoiontment-success-msg");

    insertForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        var patientId = document.getElementById("patient").value;
        var clinicId = document.getElementById("clinic").value;
        var doctorId = document.getElementById("doctor").value;
        var queuedDate = document.getElementById("queued-date").value;
        var startTime = document.getElementById("start-time").value;
        var endTime = document.getElementById("end-time").value;
        var appointmentType = document.getElementById("appointment-type").value;
        var isVirtual = document.getElementById("virtual").value;

        // Perform any necessary validation here

        // Create an object with the form data
        var formData = {
            patientId: patientId,
            clinicId: clinicId,
            doctorId: doctorId,
            queuedDate: queuedDate,
            startTime: startTime,
            endTime: endTime,
            appointmentType: appointmentType,
            isVirtual: isVirtual
        };

        // Insert
        
        console.log(formData);
        insertAppointmentSuccessMsg.style.display = "block";
        insertForm.reset();
    });

    /*
        Update
    */
    var updateForm = document.getElementById("update-form");
    var updateAppointmentSuccessMsg = document.getElementById("update-appointment-success-msg");
    updateForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Update
        
        console.log("Update");
        updateAppointmentSuccessMsg.style.display = "block";
        updateForm.reset();
    });

    /*
        Search
    */
    var searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Search
        
        console.log("Search");
        searchForm.reset();
    });
});
