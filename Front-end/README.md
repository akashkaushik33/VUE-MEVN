# vue-mevn

This is the front end of the User registration and login platform build with Vue.Js .

There are two different components for login and register  under components folder.

### Axios

Axios is used in this project for making http calls from the front-end.
The complete refrence of axios can be found here [Axios](https://www.npmjs.com/package/axios)

### Vee-validate

Vee-Validate is used for validation in login and register forms.
You can find the complete refrence to Vee-Validate here [Vee-Validate](http://vee-validate.logaretm.com/).

## 1. Register

    Under register component , User is asked to enter his details.
    Validation is used for every detail using Vee-validate.
    
    On successfull registration a alert message pops up saying , 
    User is successfully registered .
    If not the alert shows the error message.

## 2. Login

    In this component , the user is asked for his email id and password 
    for login. Once submitted the details are checked in the backend and 
    a token is generated if details matched. 
    If not an error message pops up.
    
    The token from response is then sent in configAuth headers for creating 
    a session for the user and if everything goes right the user get logged in
    and his details are shown on the screen.
    
    


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
