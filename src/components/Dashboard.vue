<template>
  <div class="container has-text-centered dashbody pb-2">
    <div class="container">
      <section class="hero is-primary">
          <div class="hero-body">
              <div class="container">
                <h1 class="title">
                    Customer Dashboard
                </h1>
                <h2 class="subtitle">
                    Welcome {{userdata.fname}}
                </h2>
              </div>
          </div>
      </section>

      <div class="notification mt-2" v-if="this.notify" v-bind:class="{'is-danger': this.notifyStatus=='error', 'is-success': this.notifyStatus == 'success'}">
        <button class="delete" @click="this.hideNotification"></button>
        <p v-if="this.notifyStatus == 'error'">Something went wrong!</p>
        <p v-if="this.notifyStatus == 'success'">Request cancelled successfully!</p>
      </div>

      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box" style="background-color:transparent">
                <img src="https://image.flaticon.com/icons/png/512/2807/2807176.png" style="height: 100px">
                <h1 class="title is-3 mb-0">Your Points</h1>
                <h1 class="title is-1 mt-0">{{ this.userdata.points }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3"></div>
      </div>

      <section class="mb-3">
        <h1 class="title is-4">Quick Actions</h1>
        <div class="tile is-ancestor justify-content-center">
          <router-link to="/addjob">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <img src="../assets/img/request.png" alt="" class="level-icon">
                <p class="title">E-Waste Request</p>
              </article>
            </div>
          </router-link>
          <router-link to="/haha">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <img src="../assets/img/redeem.png" alt="" class="level-icon">
                  <p class="title">Redeem Points</p>
              </article>
            </div>
          </router-link>
          <router-link to="/haha">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <img src="../assets/img/share.png" alt="" class="level-icon">
                <p class="title">Share Points</p>
              </article>
            </div>
          </router-link>
        </div>
      </section>

      <h1 class="title is-4">My Requests</h1>
      <div class=" container req-table has-text-centered">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Request No.</th>
              <th>Item Category</th>
              <th>Sub Category</th>
              <th>Address</th>
              <th>Province</th>
              <th>Time</th>
              <th>Date</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
              <tr
                v-for="(job, index) in userjobs"
                v-bind:key= "index"
              >
                <td>{{ job.ref.toString().substr(0,7) }}</td>
                <td>{{ job.itemCategory }}</td>
                <td>{{ job.subCategory }}</td>
                <td>{{ job.pickupAddress }}</td>
                <td>{{ job.customerProvince }}</td>
                <td>{{ job.time }}</td>
                <td>{{ job.date }}</td>
                <td>
                  <button class="button is-small is-link status-chip" v-if="job.status=='active'">Accepted</button>
                  <button class="button is-small is-warning status-chip" v-if="job.status=='pending'">Pending</button>
                </td>
                <td>
                  <button class="button is-small is-danger" :disabled="job.status=='active'" @click="cancelReq(job.ref)">Cancel</button>
                </td>
              </tr>
            <tr v-if="this.userjobs.length=='0'">
              <td colspan="7" style="text-align: center">You have no active jobs</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { firebaseApp,firebase } from '../firebase'
export default {
    name: 'Dashboard',
    data(){
      return{
        loggedUserEmail: '',
        docid: '',
        userdata: {},
        userjobs: [],
        notify: false,
        notifyStatus: ''
      }
    },
    created(){
      
      let loggedUserEmail = firebaseApp.auth().currentUser.email
      let thisState = this

      //Get user's assigned job IDs
      firebaseApp.firestore().collection("users").where("email","==", loggedUserEmail)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(function(doc){
          thisState.userdata = doc.data()
          //thisState.docid = doc.id
          //console.log(thisState.userdata.ongoingjobs)
        
        //Fetch jobs
        firebaseApp.firestore().collection("jobs").where(
          firebase.firestore.FieldPath.documentId(),
          "in",
          thisState.userdata.ongoingjobs
        )
        .onSnapshot(callback =>{
            thisState.userjobs = []
            callback.forEach(function(docs){
            //console.log(docs.id)
            if(docs.data().status == 'pending' ||docs.data().status == 'active' ){
              //Append document ID into job object
              let tempData = docs.data()
              tempData = Object.assign(tempData,{ref: docs.id.toString()})
              thisState.userjobs.push(tempData)
            }
            
          })
        },
        error =>{
          console.log(error)
        }
        )

        })
      },
      error => {
        console.log(error)
      }
      )
      //console.log(this.userjobs)
    },
    methods: {
      cancelReq: function(jobId){
        console.log(jobId)
        firebaseApp.firestore().collection("jobs").doc(jobId).update({
          status: 'cancelled'
        })
        .then(callback => {
          this.notify = true
          this.notifyStatus = 'success'
        })
        .catch(error => {
          this.notify = true
          this.notifyStatus = 'error'
          console.log(error)
        })
        window.scrollTo(0,0);
      },
      hideNotification: function(){
        this.notify = false,
        this.notifyStatus = ''
      }
    }
}
</script>

<style>
@import url('../assets/css/style.css');
</style>