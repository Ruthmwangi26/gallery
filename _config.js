var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://rwambui:12345@darkroom.ylwfk0a.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://rwambui:12345@darkroom.ylwfk0a.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://rwambui:12345@darkroom.ylwfk0a.mongodb.net/?retryWrites=true&w=majority',
}

// onfig.mongoURI = {
//     production: 'mongodb+srv://rwambui:12345@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
//     development: 'mongodb+srv://rwambui:12345@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
//     test: 'mongodb+srv://rwambui:12345@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
// }

module.exports = config;
