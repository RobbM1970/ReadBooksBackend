var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Assessment'); // Create a table for 'Book' with default settings
mobileApp.tables.add('AssessmentHeader'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Client'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Customer'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Menuing'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Note'); // Create a table for 'Book' with default settings
mobileApp.tables.add('PackageDetail'); // Create a table for 'Book' with default settings
mobileApp.tables.add('PackageHeader'); // Create a table for 'Book' with default settings
mobileApp.tables.add('PhotoModels'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Pics'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Users'); // Create a table for 'Book' with default settings
mobileApp.views.add('ViewModelAssessmentHeader'); // Create a table for 'Book' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
