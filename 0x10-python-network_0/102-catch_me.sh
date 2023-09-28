#!/bin/bash

# Send a request to the server and make it respond with "You got me!"
curl -sLX PUT 0.0.0.0:5000/catch_me -d "user_id=98" -H "Origin: HolbertonSchool"
