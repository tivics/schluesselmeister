const express = require('express')
const dotenv = require('dotenv')
const querystring = require('querystring')
const axios = require('axios')
const port = 8888

dotenv.config()
var app = express()

const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
    
const stateKey = 'spotify_auth_state'

//get bearer token http://localhost:8888/login
app.get('/login', (req, res) => {
    const state = generateRandomString(16)
    res.cookie(stateKey, state)
  
    const scope = 'user-read-private user-read-email'
  
    const queryParams = querystring.stringify({
      client_id: process.env.SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.REDIRECT_URI,
      state: state,
      scope: scope,
    })
    //redirect to spotify auth service 
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
})

//handle redirect from spotify auth service to http://localhost:8888/callback 
app.get('/callback', (req, res) => {
    const code = req.query.code || null
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        if (response.status === 200) {
          res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`)
        } else {
          res.send(response)
        }
      })
      .catch(error => {
        res.send(error)
      })
  })

  app.listen(port, () => {
    console.log(`Schluesselmeister listening on port:  ${port}`)
  })