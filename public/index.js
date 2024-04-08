document.addEventListener("DOMContentLoaded", function() {

    /*
        Insert
    */
    var insertForm = document.getElementById("insert-form");
    var insertAppointmentSuccessMsg = document.getElementById("insert-appointment-success-msg");

    insertForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        var patientId = document.getElementById("patient-insert").value;
        var clinicId = document.getElementById("clinic-insert").value;
        var doctorId = document.getElementById("doctor-insert").value;
        var queuedDate = document.getElementById("queued-date-insert").value;
        var startTime = document.getElementById("start-time-insert").value;
        var endTime = document.getElementById("end-time-insert").value;
        var appointmentType = document.getElementById("appointment-type-insert").value;
        var isVirtual = document.getElementById("virtual-insert").value;

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

        // Collect form data
        var appointmentId = document.getElementById("appointment-id-update").value;
        var patientId = document.getElementById("patient-update").value;
        var clinicId = document.getElementById("clinic-update").value;
        var doctorId = document.getElementById("doctor-update").value;
        var queuedDate = document.getElementById("queued-date-update").value;
        var startTime = document.getElementById("start-time-update").value;
        var endTime = document.getElementById("end-time-update").value;
        var appointmentType = document.getElementById("appointment-type-update").value;
        var isVirtual = document.getElementById("virtual-update").value;

        // Perform any necessary validation here

        // Create an object with the form data
        var formData = {
            appointmentId: appointmentId,
            patientId: patientId,
            clinicId: clinicId,
            doctorId: doctorId,
            queuedDate: queuedDate,
            startTime: startTime,
            endTime: endTime,
            appointmentType: appointmentType,
            isVirtual: isVirtual
        };

        // Update
        
        console.log(formData);
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
