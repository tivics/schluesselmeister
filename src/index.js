const express = require('express')
const dotenv = require('dotenv')
const querystring = require('querystring')
const axios = require('axios')
const port = 8888
const tokens = []

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
    //redirect to spotify auth service || user credentials need be entered manually once
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
})

//handle redirect from spotify auth service to http://localhost:8888/callback and store access/ refresh token
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
          
          let newItem = {
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
          }
          tokens.push(newItem)     
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

  //using the refresh token to a get new access token || headless interface towards server sided applications
  app.get('/refresh_token', function(req, res) {

    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: tokens[0].refresh_token
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        if (response.status === 200) {
          tokens[0].access_token = response.data.access_token
          res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`)       
        } else {
          res.send(response)
        }
      })
      .catch(error => {
        res.send(error)
      })
  })

  //get access token || headless interface towards server sided applications
  app.get('/access_token', function(req, res) {
    res.send(tokens[0].access_token)
  })