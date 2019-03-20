import 'dotenv/config'
import express, { Express } from 'express'
import https from 'https'

const { CITADEL_API_KEY, CITADEL_APPLICATION } = process.env
const CITADEL_BASE_URL = "https://citadel.serenity.enterprises/api/v1"

const app: Express = express()

app.get("/download/:artifact/:file", async (req, res) => {
    const token = req.query["token"]
    if (!token)
        return res.json({ success: false, error: "Please provide a token." })

    const { artifact, file } = req.params
    const ip = req.ip

    https.get(`https://${CITADEL_BASE_URL}/proxied_get/${token}/${CITADEL_APPLICATION}/${artifact}/${file}?key=${CITADEL_API_KEY}&ip=${ip}`, citadelRes => {
        res.statusCode = citadelRes.statusCode || 500
        res.set(citadelRes.headers)

        citadelRes.pipe(res)
    })
})

app.listen(8080)
