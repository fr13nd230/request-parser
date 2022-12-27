import express from 'express'

// Starting the app
const app = express()

// Mouting middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Global Vars
const port = process.env.PORT || 2000

// Main get
app.get('/', async (req, res) => {
    try {
        res.status(200).json({
            title: "Request Parser",
            host: req.headers.host,
            language: req.headers['accept-language'],
            accept: req.headers.accept,
            agent: req.headers['user-agent'],
            connection: req.headers.connection
        })
    } catch (err) {
        if (err) throw err
        res.status(400).json({
            error: "Opps! something went bad :("
        })
    }
})

// Starting server
app.listen(port, () => console.log(`OK[port:${port}]`))