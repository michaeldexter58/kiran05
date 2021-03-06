var express = require("express");
var fs = require("fs");

var employees = [
    {"id":"1","createdAt":"2019-07-10T08:05:39.325Z","name":"Kristian Stoltenberg III","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"},
    {"id":"2","createdAt":"2019-07-10T07:55:42.129Z","name":"Bernita Fadel","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg"},
    {"id":"3","createdAt":"2019-07-10T06:49:45.160Z","name":"Karlee Klocko","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/donjain/128.jpg"},
    {"id":"4","createdAt":"2019-07-10T07:04:09.952Z","name":"Brendon Kassulke","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/fiterik/128.jpg"},
    {"id":"5","createdAt":"2019-07-10T06:42:06.119Z","name":"Jailyn Wisoky","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bassamology/128.jpg"},
    {"id":"6","createdAt":"2019-07-09T16:47:50.882Z","name":"Rozella Barton","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/kamal_chaneman/128.jpg"}]

var app = express();

app.get("/", (req, res) => {
    res.write("Hello World....");
    res.end()
})

app.get("/home", (hreq, res) => {
    res.write("Hello Worldf for Home....");
    res.end()
})

app.get("/employees", (req, res) => {
    var fileStream = fs.createReadStream("D:/Mayank/Github/NodeDecember/JSONRead/employee.txt");
    var streamData = "";
    fileStream.on("data", (data) => {
        streamData+=data;
    })

    fileStream.on("end", () => {

        var employeeData = JSON.parse(streamData);

        var newData = employeeData.employees.map((emp) => {
            return {
                name: emp.name,
                id: emp.id
            }
        })

        res.send(newData);
    })
})

app.listen("8000")
