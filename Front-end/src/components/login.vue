<template>
  <div>

      <!-- Login form -->
      <div v-if='this.login'>
         <h1>login works</h1>
         <div class = "form">
            <form @submit.prevent="authenticate(user)">
                
               <input v-validate="'required|email'" :class="{'input':true, 'is-danger': errors.has('email') }" type="text" placeholder="Enter email" v-model="user.email" class="form-control my" name="email">
               <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
               <br>

               <input v-validate="'required'" type="password" placeholder="Enter password" v-model="user.password" class="form-control my" name="password">
               <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
               <br>

               <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
      
       </div>

       <!-- User profile  -->

       <div v-else>
           <h1>profile works</h1>
           <ul>
               <li>First Name: {{details.firstName}}</li>
               <li>Last Name: {{details.lastName}}</li>
               <li>Email: {{details.email}}</li>
               <li>Username: {{details.username}}</li>
               <li>Date of Birth(DD/MM/YYYY): {{details.dob}} </li>
               <li>Mobile No.: {{details.number}}</li>
               <li>UserId: {{details._id}}</li>
               <br>
               <br>
               <br>
               <button type="button" @click="logout()" class="btn btn-danger">Logout</button>
           </ul>

       </div>



  </div>
</template>


<script>

    import axios from 'axios';
    import VeeValidate from 'vee-validate'

    // Vue.use(VeeValidate);
    export default {
        name: 'login',
        data () {
            return {
                login: true,
                //profile: false,
                user : {
                    email: '',
                    password: ''
                },
                details: {
                    _id:'',
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    number:'',
                    dob:'',
                    password: ''
                }
            }
        },

        methods: {
            authenticate(user) {
                var params = JSON.stringify(user);
                //console.log(params);
                this.user = {};
                var res;
                //console.log(this.login);

                var config = {
                    headers: {'Content-Type': 'application/json'}
                };

                
                
                axios.post('http://localhost:3000/users/authenticate' , params , config)
                .then(response => {
                    res = response;
                    //console.log(res);
                    if (res.data.Success) {
                        //alert(res.data.msg);

                        var configAuth = {
                        headers: {'Authorization' : res.data.token}
                        };

                       // console.log(configAuth)
                        this.login = false;
                        //this.profile = true;
                        axios.get('http://localhost:3000/users/profile' , configAuth)
                        .then(response => {
                            console.log(response)
                            this.details = response.data.user;
                            //console.log(this.details);
                        })
                        .catch(e => {console.log(e)})
                    } else {
                        alert(res.data.msg);
                    }

                    //console.log(res.data.token);

                });

                


            },

            logout() {
                this.login = true;
                //this.profile = false;
            }
        }
    }
</script>

<style scoped>
.form {
    width: 80%;
    padding-left:20% 
};
/* .my{
    border: solid 5px black
} */
/* .is-danger {
    color: red;
} */
</style>
