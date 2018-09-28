var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&s=3cea01429048ce122dff533448f43219&auto=format&fit=crop&w=1000&q=60",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"
    },
    {
        name: "Granite Peak",
        image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=053f91dd9aee1cc7bc5cafca28cb625c&auto=format&fit=crop&w=1000&q=60",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"
    },
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1000&q=60",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"
    },
    {
        name: "Mountain Top",
        image: "https://images.unsplash.com/photo-1493105011473-ed7bd4948f12?ixlib=rb-0.3.5&s=7cf4ff075a7cb38ed4a38d9fcea44722&auto=format&fit=crop&w=1000&q=60",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"
    }
]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function (err) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // data.forEach(function (seed) {
        //     Campground.create(seed, function (err, campground) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create({
        //                 text: "This place is great. WIsh I could stay!",
        //                 author: "Ryan Steen"
        //             }, function (err, comment) {
        //                 if (err) {
        //                     console.log(err);
        //                 } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("create new comment");
        //                 }
        //             });
        //         }
        //     });
        // });
    });

}

module.exports = seedDB;