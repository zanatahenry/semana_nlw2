const Database =  require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Henry Zanata", 
        avatar: "https://avatars2.githubusercontent.com/u/66282954?s=460&u=26f6710c5c81d4513e05e22a5e283621a6fc1983&v=4", 
        whatsapp: "25999999999", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //  await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados inseridos

    // todos os proffys
    const selectedProfys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProfys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do prof
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
        `)
        // console.log(selectClassesAndProffys)

        const selectClassesSchedule = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "520"
            AND class_schedule.time_to > "520"
            `)

            // console.log(selectClassesSchedule)
})