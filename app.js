var express          = require('express'),
    app              = express(),
    bodyParser       = require('body-parser'),
    mongoose         = require('mongoose'),
    flash            = require('connect-flash'),
    passport         = require('passport'),
    LocalStrategy    = require('passport-local'),
    methodOverride   = require("method-override"),
    Campground       = require('./models/campground'),
    Comment          = require('./models/comment'),
    User             = require('./models/user'),
    seedDB           = require('./seed.js');

var commentRoutes    = require('./routes/comments'),
    campgroundRoutes = require('./routes/campgrounds'),
    indexRoutes      = require('./routes/index');

mongoose.connect('mongodb://localhost/yelp_camp', {
    useNewUrlParser: true
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(flash());

app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));

// seedDB(); //seed the database

// PASSPORT CONFIG
app.use(require('express-session')({
    secret: 'Love never fails',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Requiring Routes
app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);


app.listen(3000, process.env.IP, function () {
    console.log('Yelp Camp server is running');
});