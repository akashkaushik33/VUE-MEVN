<template>
  <div>
      <h1>Register works</h1>
      <div class = "form">
          <form @submit.prevent="register(user)">
            <input v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('firstName') }" type="text" placeholder="Enter your first name" v-model="user.firstName" class="form-control" name="firstName">
            <span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>
            <br>

            <input v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('lastName') }" type="text" placeholder="Enter your last name" v-model="user.lastName" class="form-control" name="lastName">
            <span v-show="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</span>
            <br>

            <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="email" placeholder="Enter email" v-model="user.email" class="form-control" name="email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            <br>

            <input v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('username') }" type="text" placeholder="Enter username" v-model="user.username" class="form-control" name="username">
            <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
            <br>

            <input v-validate="'required|date_format:DD/MM/YYYY'" :class="{'input': true, 'is-danger': errors.has('dob') }" type="text" placeholder="DD/MM/YYYY" v-model="user.dob" class="form-control" name="dob">
            <span v-show="errors.has('dob')" class="help is-danger">{{ errors.first('dob') }}</span>
            <br>

            <input v-validate="'required|numeric|digits:10'" :class="{'input': true, 'is-danger': errors.has('number') }" type="text" placeholder="Enter your 10 digit mobile number" v-model="user.number" class="form-control" name="number">
            <span v-show="errors.has('number')" class="help is-danger">{{ errors.first('number') }}</span>
            <br>

            <input v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Enter password" v-model="user.password" class="form-control" name="password">
            <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
            <br>
            <button  type="submit" class="btn btn-success">Submit</button>
          </form>
      </div>
  </div>
</template>

<script>

    import axios from 'axios';
    // import VeeValidate, {Validator} from 'vee-validate';
    // import moment from 'moment';
    // Validator.installDateTimeValidators(moment);
    //  Vue.use(VeeValidate);

    export default {
        name: 'register',
        data() {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    number:'',
                    dob:'',
                    password: ''
                },
                //body: {} 
            }
        },
        methods : {
            register(user) {
                //this.body.name = user.name;
                //this.body.email = user.email;
                //this.body.username = user.username;
                //this.body.password = user.password;

                var params = JSON.stringify(this.user);
                

                console.log(user);
                console.log(params);

                this.user = {};
                var res;

                var config = {
                    headers: {'Content-Type': 'application/json'}
                };

                axios.post('http://localhost:3000/users/register' , params , config)
                .then(response => {
                    res = response;
                    console.log(res.data);
                    alert(res.data.msg);
                })
                .catch(e => {
                    console.log(e);
                })

               // this.users.push(user);
               // console.log(this.users);


                

            }
        }
    }
</script>

<style scoped>
.form {
    width:80%;
    padding-left:20% ;
    text-align: left

}
/* .is-danger {
    color: red;
}    */
/* .text-danger {
    border-color: red;
} */
</style>
