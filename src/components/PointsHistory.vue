<template>
  <div class="container has-text-centered dashbody pb-2">
      <div class="container">
          <section class="hero is-primary">
          <div class="hero-body">
              <div class="container">
                <h1 class="title">
                    Points History
                </h1>
                <h2 class="subtitle">
                    Welcome {{userdata.fname}}
                </h2>
              </div>
          </div>
      </section>

        <h1 class="title is-4 mt-1">My Point History</h1>
        <div class=" container req-table has-text-centered">
            <table class="table is-fullwidth">
            <thead>
                <tr>
                <th>Time</th>
                <th>Date</th>
                <th>Reason</th>
                <th>Debit</th>
                <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(point, index) in userdata.points"
                    v-bind:key= "index"
                >
                    <td>{{ point.time }}</td>
                    <td>{{ point.date }}</td>
                    <td>{{ point.reason }}</td>
                    <td v-if="point.points < 0">{{ 0-point.points }}</td><td v-else></td>
                    <td v-if="point.points >= 0">{{ point.points }}</td><td v-else></td>
                </tr>
                <tr v-if="this.userdata.points.length=='0'">
                <td colspan="7" style="text-align: center">You have no previous requests</td>
                </tr>
            </tbody>
            </table>
        </div>

      </div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase'
export default {
    name: 'History',
    data(){
        return{
            loggedUserEmail: '',
            docid: '',
            userdata: {},
            userjobs: [],
        }
    },
    created(){
      let loggedUserEmail = firebaseApp.auth().currentUser.email
      let thisState = this

      firebaseApp.firestore().collection("users").where("email","==", loggedUserEmail)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(function(doc){
          thisState.userdata = doc.data()
        })
      },
      error => {
        console.log(error)
      }
      )

    }
}
</script>

<style>
@import url('../assets/css/style.css');
</style>



