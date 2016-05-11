const PORT = process.env.PORT || 3000;

var express = require('express');

var request = require('request');
var chai = require('chai');
var expect = chai.expect;
var FAADataHelper = require('./faa_data_helper');

describe('FAADataHelper', function() {
    var subject = new FAADataHelper();
});

//var app = express();



var AlexaAppServer = require('alexa-app-server');
AlexaAppServer.start({
    server_root:'/',     // Path to root
    public_html:"../public_html", // Static content
    app_dir:"../apps",            // Where alexa-app modules are stored
    app_root:"../alexa/",        // Service root
    port:8080                    // What port to use, duh
});

//var AlexaAppServer = require('alexa-app-server');
//var server = new AlexaAppServer( {port:8000,debug:false} );
//server.start();
//server.express.use('/test',function(req,res){ res.send("OK"); });
//var AlexaAppServer = require('alexa-app-server');
//AlexaAppServer.start( {port:8080} );




