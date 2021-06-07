import express from 'express'
// filesystem

import fs from 'fs'
import path from 'path'

//import react para que sepa que renderizar
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import Example from "../src/Tateti"
// init express

const app = express()
const PORT = 3000;

// handler function con la ruta, params req, res, next

app.use("^/$", (req,res,next) => {
 fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err,data) => {

  // cuando leo satisfactoriamente la ruta  y el html, donde data es el contenido en texto de nuestro html

  if(err){
   console.log(err)
   return res.status(500).send('err happened')
  }
  return res.send(
   data.replace(
    '<div id="root"></div>',
    `<div id="root">${ReactDOMServer.renderToString(<App />,<Example />)}</div>`))
 });

  //  esto implica que la pagina sea renderizada desde el servidor

})

// ademas queremos servir the static files from build folder
// __dirname es la carpeta donde es launched or run
app.use(express.static(path.resolve(__dirname, '..', 'build')))


app.listen(PORT ,() => {
 console.log(`App launched on ${PORT}`)
})

// server side support for jsx = babel
