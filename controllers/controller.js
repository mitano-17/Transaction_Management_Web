const db = require("../models/db.js");

const controller = {
    postInsert: async function(req, res) {
        var patientId = req.body.patientId;
        var clinicId = req.body.clinicId;
        var doctorId = req.body.doctorId;
        var queuedDate = req.body.queuedDate;
        var startTime = req.body.startTime;
        var endTime = req.body.endTime;
        var appointmentType = req.body.appointmentType;
        var isVirtual = req.body.isVirtual;

        try {
            const result = await db.insert_query(patientId, clinicId, doctorId, queuedDate, startTime, endTime, appointmentType, isVirtual)

            if(result) {
                var data = {
                    result: result,
                    status: true,
                    msg: "Insert appointment success."
                };
            }
            else {
                var data = {
                    status: false,
                    msg: "Insert appointment failed."
                }
            }
            res.send(data);
        } catch(err) {} 
    },
    
    postUpdate: async function(req, res) {
        const { appointmentId } = req.params;
        const {
            old_patientId, 
            new_patientId, 
            old_clinicId, 
            new_clinicId, 
            old_doctorId, 
            new_doctorId, 
            old_queuedDate, 
            new_queuedDate, 
            old_startTime, 
            new_startTime, 
            old_endTime, 
            new_endTime, 
            old_appointmentType, 
            new_appointmentType, 
            old_isVirtual, 
            new_isVirtual, 
        } = req.body;

        var patientId = "";
        var clinicId = "";
        var doctorId = "";
        var queuedDate = "";
        var startTime = "";
        var endTime = "";
        var appointmentType = "";
        var isVirtual = "";

        if (old_patientId != new_patientId) {
            patientId = new_patientId;
        }
        if (old_clinicId != new_clinicId) {
            clinicId = new_clinicId;
        }
        if (old_doctorId != new_doctorId) {
            doctorId = new_doctorId;
        }
        if (old_queuedDate != new_queuedDate) {
            queuedDate = new_queuedDate;
        }
        if (old_startTime != new_startTime) {
            startTime = new_startTime;
        }
        if (old_endTime != new_endTime) {
            endTime = new_endTime;
        }
        if (old_appointmentType != new_appointmentType) {
            appointmentType = new_appointmentType;
        }
        if (old_isVirtual != new_isVirtual) {
            isVirtual = new_isVirtual;
        }

        try {
            var result = await db.update_query(appointmentId, patientId, clinicId, doctorId, queuedDate, startTime, endTime, appointmentType, isVirtual);
            
            var data = {
                result: result,
                status: true,
                msg: "Update appointment success."
            };
            // this means successful
            res.send(data);
        } catch (err) {
            var data = {
                status: false,
                msg: "Update appointment failed."
            }
            res.send(data)
        }
    },

    postSelect: async function(req, res) {

    }
}
