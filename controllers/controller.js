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

    },

    postSelect: async function(req, res) {

    }
}