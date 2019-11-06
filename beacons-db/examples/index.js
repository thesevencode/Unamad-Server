'use strict'

const db = require('..')

async function run () {
  const uri = 'mongodb+srv://@wakayadb-dk6m4.mongodb.net/unamadDB?retryWrites=true&w=majority'
  const config = {
    user: process.env.DB_USER || 'Denis',
    pass: process.env.DB_PASS || '@Denis15121015'
  }
  const { Participant } = await db(uri, config).catch(handleFatalError)

  const participant1 = await Participant.createOrUpdate({
    name: 'Denis Ricardo',
    lastName: 'Vilcas Villalba',
    email: 'Denisricardovilcasvillalba@gmail.com',
    dni: 71632670,
    universidad: "Universidad Nacional Amazonica de Madre de Dios"

  }).catch(handleFatalError)

//   const participant2 = await Participant.createOrUpdate({
//     name: 'Juan Manuel',
//     lastName: 'Delgado Marcos',
//     code: 15121001,
//     dni: 76543289,
//   }).catch(handleFatalError)

//   const participant3 = await Participant.createOrUpdate({
//     name: 'Jr Junior',
//     lastName: 'Tenorio Dominguez',
//     code: 15121020,
//     dni: 71785432,
//   }).catch(handleFatalError)

//   const participant4 = await Participant.createOrUpdate({
//     name: 'Becker',
//     lastName: 'Vega Maceda',
//     code: 15121041,
//     dni: 71632673,
//   }).catch(handleFatalError)

//   const participant5 = await Participant.createOrUpdate({
//     name: 'Romario',
//     lastName: 'Diaz Holgado',
//     code: 15121030,
//     dni: 71632720,
//   }).catch(handleFatalError)

//   const participant6 = await Participant.createOrUpdate({
//     name: 'Ciro',
//     lastName: 'Yupanqui Pumachapi',
//     code: 15121018,
//     dni: 71639087,
//   }).catch(handleFatalError)


//   const participant7 = await Participant.createOrUpdate({
//     name: 'Rosel',
//     lastName: 'Quispe Herrera',
//     dni: 69632670,
//     type: 'authority'
//   }).catch(handleFatalError)

//   const participant8 = await Participant.createOrUpdate({
//     name: 'Nelly Olinda',
//     lastName: 'Roman Paredes',
//     dni: 65437854,
//     type: 'authority'
//   }).catch(handleFatalError)

// //findById
//   const findById = await Participant.findById('5d3d2d01e3ecf8340459d420')
//   console.log(findById)
//   console.log('===============')

//   //findByType
//   const findByType = await Participant.findByType('authority')
//   console.log(findByType)
//   console.log('===============')

//   //findByType
//   const findByCode = await Participant.findByCode(15121001)
//   console.log(findByCode)
//   console.log('===============')

    // //findByType
    // const findByDni = await Participant.findByDni(71632670)
    // console.log(findByDni)
    // console.log('===============')

    // //deleteByDni
    // const deleteByDni = await Participant.deleteByDni(71785432)
    // console.log(deleteByDni)
    // console.log('===============')


    // //addAssistanceByDni
    // const addAssistanceByDni = await Participant.addAssistanceByDni(71639087, new Date(2019, 6, 29, 3, 4, 20))
    // console.log(addAssistanceByDni)
    // console.log('===============')

    // //findByAssistance
    // const findByAssistance = await Participant.findByAssistance(new Date(2019, 6, 27) , new Date(2019, 6, 30))
    // console.log(findByAssistance)
    // console.log('===============')


//   const participantes = await Participant.findAll()
//   console.log(participantes)
//   console.log('===============')

}

function handleFatalError (err) {
  console.log('ERRORR')
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
run()
