var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings


mobileApp.tables.add('Customer'); 
mobileApp.tables.add('Users'); 
mobileApp.tables.add('Note'); 
mobileApp.tables.add('Menuing'); 
mobileApp.tables.add('Assessment'); 
mobileApp.tables.add('PackageHeader'); 
mobileApp.tables.add('PackageDetail'); 
mobileApp.tables.add('ViewModelAssessmentHeader');
mobileApp.tables.add('ViewModelStatusAZ'); 
mobileApp.tables.add('ViewModelReviewAZ'); 
mobileApp.tables.add('Lookups'); 

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
