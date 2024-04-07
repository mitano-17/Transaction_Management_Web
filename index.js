document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("create-form");
    var createApptSuccessMsg = document.getElementById("create-appt-success-msg");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        var patientId = document.getElementById("patient").value;
        var clinicId = document.getElementById("clinic").value;
        var doctorId = document.getElementById("doctor").value;
        var queuedDate = document.getElementById("appt-date").value;
        var startTime = document.getElementById("start-time").value;
        var endTime = document.getElementById("end-time").value;
        var appointmentType = document.getElementById("appt-type").value;
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

        // TODO: Perform further processing here (e.g., send data to server)
        
        console.log(formData);
        createApptSuccessMsg.style.display = "block";
        form.reset();
    });
});
