const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } = require('./pages')


// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// rotas da aplicação
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/page-success", pageSuccess)
.post("/save-classes", saveClasses)
.listen(5500)