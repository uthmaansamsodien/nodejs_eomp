<template>
    <div>
        <div id="style_table" class="container">
            <table class="table table-hover" id="table">
                <thead class="head">
                <tr>
                    <th id="userID">ID</th>
                    <th id="userFirstname">Firstname</th>
                    <th id="userSurname">Surname</th>
                    <th id="userAge">Age</th>
                    <th id="userGender">Gender</th>
                    <th id="userRole">Role</th>
                    <th id="emailAdd">Email Address</th>
                    <!-- <th id="userPass">Password</th> -->
                    <th id="userImg">Image</th>
                    <th id="editS">edit</th>
                    <th id="delS">detele</th>
                </tr>
              </thead>
              <tbody id="product-table">
                <tr v-for="user in users" :key="user.userID">
                    <td id="userID">{{user.userID}}</td>
                    <td id="firstame">{{ user.firstName }}</td>
                    <td id="Surname">{{ user.lastName}}</td>
                    <td id="userAge">{{ user.userAge }}</td>
                    <td id="userGender">{{ user.gender }}</td>
                    <td id="userRole">{{ user.userRole }}</td>
                    <td id="userEmail">{{ user.emailAdd }}</td>
                    <!-- <td id="userPass">{{ user.userPass }}</td>                -->
                    <td id="userImg"><img :src="user.userProfile" :alt="user.firstName" style="width: 13.5rem"></td>
                    <td id="del"><button class="del">delete</button></td>
                    <td id="edit"><button class="edit">edit</button></td>
                  </tr>
              </tbody>
              </table>
           </div>
    </div>
</template>

<script>
    export default {
    computed: {
        users() {
        return this.$store.state.users;
      },
    },
    mounted() {
       this.$store.dispatch("fetchUsers");
    },
  };
</script>

<style scoped>
#userID{
    background-color:#435334;
    color: antiquewhite;
}
#userFirstname{  
    background-color:#435334;
    color: antiquewhite;

}
#firstame{  
    background-color:#435334;
    color: antiquewhite;

}
#Surname{
    background-color:#435334;
    color: antiquewhite;
}
#userSurname{
    background-color:#435334;
    color: antiquewhite;
}
#userAge{
    background-color:#435334;
    color: antiquewhite;
}
#userGender{
    background-color:#435334;
    color: antiquewhite;
}
#userRole{  background-color:#435334;
    color: antiquewhite;

}
#userImg{  
    background-color:#435334;
    color: antiquewhite;

}
#amount{
    background-color:#435334;
    color: antiquewhite;
}
#del{
    background-color:#435334;
    color: antiquewhite;
}
#edit{ 
    background-color:#435334;
    color: antiquewhite;
}
#userEmail{
    background-color:#435334;
    color: antiquewhite;
}

#emailAdd{
    background-color:#435334;
    color: antiquewhite;
}
#delS{
    background-color:#435334;
    color: antiquewhite;
}

#editS{
    background-color:#435334;
    color: antiquewhite;
}
.del{
    background-color: antiquewhite;
    border-radius:0.5rem ;
}
.edit{
    background-color: antiquewhite;
    border-radius:0.5rem ;
}


</style>