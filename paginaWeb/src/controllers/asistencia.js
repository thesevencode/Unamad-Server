const db = require('../database');

module.exports = async function() {
    const { Participant } = await db();

    function index(req, res) {
        let participants
        try {
            participants = await Participant.findAll();
        } catch (error) {
            if (error) res.satatus(500).json({ error })
        }

        res.status(200).json({
            status: true,
            data: participants
        })
    }

    async function findByAssistance(req, res) {

        let date = new Date()

        const day = date.getDate()
        const mon = date.getMonth()
        const year = date.getFullYear()

        let participants

        try {
            participants = await Participant.findByAssistance(new Date(year, mon, day), new Date(year, mon, day + 1))

        } catch (error) {
            if (error) res.satatus(500).json({ error })
        }


        res.render('assistances', { participants: participants });
    }

    async function findAll(req, res) {

        let participants

        try {
            participants = await Participant.findAll()

            res.status(200).json({
                participants
            })
        } catch (error) {
            if (error) res.satatus(500).json({ error })
        }


    }

    async function deleteByDni(req, res) {
        let body = req.body
        let participants

        try {
            participants = await Participant.deleteByDni(body.dni)

            res.status(200).json({
                participants
            })
        } catch (error) {
            if (error) res.satatus(500).json({ error })
        }


    }

    async function create(req, res) {

        let body = req.body;
        let participant

        try {
            participant = await Participant.findByDni(body.dni)
        } catch (error) {
            return res.status(200).json({
                status: false,
                message: "El dni ya ha sido registrado"
            })
        }


        try {

            if (!participant) {
                participant = await Participant.createOrUpdate(body)
            } else {
                return res.status(200).json({
                    status: false,
                    message: "El dni ya ha sido registrado"
                })
            }


        } catch (error) {
            return res.status(200).json({
                status: false,
                message: "Imposible realizar el registro, revisa tus datos"
            })
        }

        res.status(200).json({
            status: true,
            message: "registro exitoso"
        })



    }

    async function addAssistanceByDni(req, res) {

        let body = req.body;
        let date = new Date()
        let participant
        let assistance


        try {
            participant = await Participant.findByDni(body.dni)


        } catch (error) {
            return res.status(200).json({
                status: false,
                message: "Imposible realizar la operacion"
            })
        }

        if (!participant) {
            return res.status(200).json({
                status: false,
                message: "Usuario no encontrado"
            })
        }


        try {
            assistance = await Participant.addAssistanceByDni(body.dni, date)
        } catch (error) {
            return res.status(200).json({
                status: false,
                message: "La asistencia de hoy ya ha sido registrada"
            })
        }

        if (!assistance) {
            res.status(200).json({
                status: false,
                participant: {
                    dni: participant.dni,
                    name: participant.name,
                    lastName: participant.lastName
                },
                message: "La asistencia de hoy ya ha sido registrada"
            })
        }



        res.status(200).json({
            status: true,
            participant: {
                dni: participant.dni,
                name: participant.name,
                lastName: participant.lastName
            },
            message: "Perfecto, Asistencia registrada"
        })



    }

    async function findByDni(req, res) {

        let params = req.params
        let participant

        try {
            participant = await Participant.findByDni(params.dni)


        } catch (error) {
            return res.status(200).json({
                status: false,
                message: "Imposible realizar la operacion"
            })
        }

        if (!participant) {
            return res.status(200).json({
                status: false,
                message: "Usuario no encontrado"
            })
        }

        res.status(200).json({
            status: true,
            participant
        })
    }



    return {
        index,
        create,
        findAll,
        findByDni,
        addAssistanceByDni,
        findByAssistance,
        deleteByDni
    }
}