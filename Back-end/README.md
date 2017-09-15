# Vue-MEVN Backend

This is the backend of User regsitration and login application build on MEVN Stack.

Libraries used in backend are as follows: 

*  [Mongoose](http://mongoosejs.com/docs/2.7.x/)
*  [passport-jwt](https://www.npmjs.com/package/passport-jwt)
*  [CORS](https://github.com/expressjs/cors)
*  [bcrypt](https://www.npmjs.com/package/bcrypt)

API created here has three endpoints : 

## 1. register 

    In this endpoint , the user details coming from frontend in request body are extracted and
    stored in a object using body-parser.
    
    Then the email of the user is cross-checked in database and if it exist the registration fails,
    else the user details are moved forward for storing in database.
    
    A schema is created with Mongoose in user.js file for storing user object in database.
    All the fields are required for storing user details successfully.
    
    Password of user is encrypted using bcrypt before storing it in database.
    
    After successfully completion of all the above fields , the user details are stored in database.
    
 ## 2. authenticate   
 
    In this endpoint , when user tries to log in with his email and passowrd , his details are sent
    in the request body and extracted using the body parser.

    Then first the user is searched in the database using email as query.
    If the user with that email is found in the database then his password from the request body is encrypted
    using bcrypt and compared with the password stored in database and if matched then
    a JSON web token is generated for that user Id using passport-jwt sign method and that token is sent as response.
    
 ## 3. profile
 
    This endpoint is protected by authenticate method of passport. 
    When user successfully get a jwt on successful authentication then this token 
    is sent in authentication headers and automatically checked wheather it matched with 
    the token assigned to that user id. 
    After successful matching a session is created for the user and his details are passed in as the response.
    
