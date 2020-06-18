# burger
MVC Homework - wk13
'Eat-Da-Burger' is a full stack web app deployed on Heroku. The app uses following 
* On Client side - HTML, CSS , Javascript and JQuery is used to create the front end of the application. All the front end related files are stored in 'public' folder in the application repository. 
    * On the UI, a form element is used to get user input and submit the user entered data to the backend for processing. This is coded in index.html file in public/assets/ folder. 
    * The styling is done in style.css file in public/assets/css/ folder. 
    * Client side javascript logic is stored in 'burgers.js' file in public/assets/js/ folder. 
        * In 'burgers.js' we make ajax GET call to backend server to get list of burgers from database tables. The data retured from backend is in JSON format which is then converted to html format for display on UI. 
        * 'burgers.js' also has event listeners for 'devour', 'delete' and 'submit' buttons. 
        * For 'submit' button, ajax POST call is made to the backend server. In this case, the server will INSERT a new burger in the database table. Input values passed to the server is an object with key 'burger_name'. 
        * For 'devour' button, ajax PUT call is made to the backend server. In this case, the server will update the boolean column 'devoured' in the database table. The input passed to the server is burger ID. 
        * For 'delete' button, ajax DELETE call is made to the backend server. In this case, the burger is deleted from the database table based in the burger ID that is passed in the input. 
* On Server side - The packages used to setup the server are - express and mysql. 
The server side code is also follows the MVC design pattern. 
    * 'db' folder has files schema.sql and seed.sql which can be used to define the initial database structure and populate with data. 
    * 'config' folder 
        * connection.js - this file has the code that is needed to make a connection to the database. For local testing, the local instance of the datavase will be used. For app deployed to Heroku, the JAWS db database will be used. 
            process.env variable is used to determine which database should be connected to.
        * orm.js - this file is defining methods that are doing the actual interaction with the database thought SQL statements. The methods defined here are referred to in other files mentioned below to perform the required database operation. 
    * 'models' folder
        * burger.js - this file requires the orm.js file. The methods defined in the orm.js file are used in this file to methods for model burger. 
    * 'controllers' folder
        * burger_controller.js - This is where all route handling is defined. This file requires burger model defined in burger.js in models folder. 
            Depending on which route is called from client side js, this file will invoke appropriate method for burger model. 
    * server.js - This is the main server side entry point. This file requires the routes defined in 'burger_controller.js' in 'controllers' folder. 
        

