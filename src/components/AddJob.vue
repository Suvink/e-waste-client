<template>
  <div class="container has-text-centered mt-1 pb-3">

        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    E - Waste Request Collecton
                </h1>
                <h2 class="subtitle">
                    Customer Form
                </h2>
                </div>
            </div>
        </section>

      <div class="container mt-2">
            <div class="notification" v-if="this.notify" v-bind:class="{'is-danger': this.formerror, 'is-success': this.formsuccess}">
                <button class="delete" @click="this.hideNotification"></button>
                <p v-if="this.formerror">Something went wrong!</p>
                <p v-if="this.formsuccess">Request submitted successfully!</p>
            </div>
          <div class="columns">
              <div class="column is-4">
                  <p>Instructions goes here</p>
              </div>
              <div class="column is-8">
                  <h1 class="title is-5">E-Waste Request Form</h1>
                  <form>
                    <div class="field">
                        <label class="label">Customer Name</label>
                        <div class="control">
                            <input class="input is-success" type="text" placeholder="Customer Name" 
                            v-model.trim='$v.formData.customerName.$model'
                            required>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.customerName.required">Customer Name is Required</p>
                    </div>
                    <div class="field">
                        <label class="label">Customer Email</label>
                        <div class="control">
                            <input class="input is-success" type="email" placeholder="Customer Email" 
                            value="Moda Eladena" v-model.trim='$v.formData.customerEmail.$model'
                            required disabled>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.customerEmail.required">Customer Email is Required</p>
                        <p class="help is-danger" v-if="!$v.formData.customerEmail.email">Please Enter A Valid Email</p>
                    </div>
                    <div class="field">
                        <label class="label">Customer Contact No.</label>
                        <div class="control">
                            <input class="input is-success" type="text" placeholder="Customer Contact No."
                             value="Moda Eladena" v-model.trim='$v.formData.customerPhone.$model'
                             required>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.customerPhone.required">Customer Phone is Required</p>
                        <p class="help is-danger" v-if="!$v.formData.customerPhone.numeric">Phone Number must be numeric</p>
                    </div>
                    <div class="field">
                        <label class="label">Item Category</label>
                        <div class="control">
                            <div class="select is-success">
                            <select v-model.trim='$v.formData.itemCategory.$model'>
                                <option value="">Select a category</option>
                                <option value="Mobile Phones">Mobile Phones</option>
                                <option value="TV">TV</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Refrigerators">Refrigerators</option>
                                <option value="Sports and Leisure Equipments">Sports and Leisure Equipments</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Lighting Equipment">Lighting Equipment</option>
                                <option value="Household Equipment">Household Equipment</option>
                                <option value="Other">Other</option>
                            </select>
                            </div>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.itemCategory.required">An Item Category is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Sub Category</label>
                        <div class="control">
                            <div class="select is-success">
                            <select v-model.trim='$v.formData.subCategory.$model'>
                                <option value="">Select a subcategory</option>

                                <option value="Samsung" v-if="this.formData.itemCategory=='Mobile Phones'">Samsung</option>
                                <option value="Apple" v-if="this.formData.itemCategory=='Mobile Phones'">Apple</option>
                                <option value="Nokia" v-if="this.formData.itemCategory=='Mobile Phones'">Nokia</option>
                                <option value="Huawei" v-if="this.formData.itemCategory=='Mobile Phones'">Huawei</option>
                                <option value="Sony" v-if="this.formData.itemCategory=='Mobile Phones'">Sony</option>
                                <option value="Lava" v-if="this.formData.itemCategory=='Mobile Phones'">Lava</option>
                                <option value="Micromax" v-if="this.formData.itemCategory=='Mobile Phones'">Micromax</option>
                                <option value="LG" v-if="this.formData.itemCategory=='Mobile Phones'">LG</option>
                                <option value="Lenovo" v-if="this.formData.itemCategory=='Mobile Phones'">Lenovo</option>
                                <option value="HTC" v-if="this.formData.itemCategory=='Mobile Phones'">HTC</option>
                                <option value="Greentel" v-if="this.formData.itemCategory=='Mobile Phones'">Greentel</option>
                                <option value="E-tel" v-if="this.formData.itemCategory=='Mobile Phones'">E-tel</option>
                                <option value="Xiaomi" v-if="this.formData.itemCategory=='Mobile Phones'">Xiaomi</option>
                                <option value="Other" v-if="this.formData.itemCategory=='Mobile Phones'">Other</option>
                                
                                <option value="Haier" v-if="this.formData.itemCategory=='TV'">Haier</option>
                                <option value="Softlogic" v-if="this.formData.itemCategory=='TV'">Softlogic</option>
                                <option value="Phillips" v-if="this.formData.itemCategory=='TV'">Phillips</option>
                                <option value="Samsung" v-if="this.formData.itemCategory=='TV'">Samsung</option>
                                <option value="LG" v-if="this.formData.itemCategory=='TV'">LG</option>
                                <option value="Innovex" v-if="this.formData.itemCategory=='TV'">Innovex</option>
                                <option value="Other" v-if="this.formData.itemCategory=='TV'">Other</option>

                                <option value="Samsung" v-if="this.formData.itemCategory=='Tablets'">Samsung</option>
                                <option value="Apple" v-if="this.formData.itemCategory=='Tablets'">Apple</option>
                                <option value="Huawei" v-if="this.formData.itemCategory=='Tablets'">Huawei</option>
                                <option value="Asus" v-if="this.formData.itemCategory=='Tablets'">Asus</option>
                                <option value="Lenovo" v-if="this.formData.itemCategory=='Tablets'">Lenovo</option>
                                <option value="Vivo" v-if="this.formData.itemCategory=='Tablets'">Vivo</option>
                                <option value="Sony" v-if="this.formData.itemCategory=='Tablets'">Sony</option>
                                <option value="Xiaomi" v-if="this.formData.itemCategory=='Tablets'">Xiaomi</option>
                                <option value="Acer" v-if="this.formData.itemCategory=='Tablets'">Acer</option>
                                <option value="Other" v-if="this.formData.itemCategory=='Tablets'">Other</option>
                                
                                <option value="Beko" v-if="this.formData.itemCategory=='Refrigerators'">Beko</option>
                                <option value="Hitachi" v-if="this.formData.itemCategory=='Refrigerators'">Hitachi</option>
                                <option value="Singer" v-if="this.formData.itemCategory=='Refrigerators'">Singer</option>
                                <option value="Sisil" v-if="this.formData.itemCategory=='Refrigerators'">Sisil</option>
                                <option value="Samsung" v-if="this.formData.itemCategory=='Refrigerators'">Samsung</option>
                                <option value="Whirlpool" v-if="this.formData.itemCategory=='Refrigerators'">Whirlpool</option>
                                <option value="Other" v-if="this.formData.itemCategory=='Refrigerators'">Other</option>


                                <option value="Acer" v-if="this.formData.itemCategory=='Laptop'">Acer</option>
                                <option value="Dell" v-if="this.formData.itemCategory=='Laptop'">Dell</option>
                                <option value="HP" v-if="this.formData.itemCategory=='Laptop'">HP</option>
                                <option value="Lenovo" v-if="this.formData.itemCategory=='Laptop'">Lenovo</option>
                                <option value="Toshiba" v-if="this.formData.itemCategory=='Laptop'">Toshiba</option>
                                <option value="Apple" v-if="this.formData.itemCategory=='Laptop'">Apple</option>
                                <option value="Asus" v-if="this.formData.itemCategory=='Laptop'">Asus</option>
                                <option value="Other" v-if="this.formData.itemCategory=='Laptop'">Other</option>

                                <option value="Electric Toys" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Electric Toys</option>
                                <option value="Joysticks " v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Joysticks </option>
                                <option value="Monitors" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Monitors</option>
                                <option value="Speakers " v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Speakers </option>
                                <option value="Headsets" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Headsets</option>
                                <option value="Headphones" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Headphones</option>
                                <option value="Camera" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Camera</option>
                                <option value="Routers" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Routers</option>
                                <option value="DVD Player" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">DVD Player</option>
                                <option value="Smart Watch" v-if="this.formData.itemCategory=='Sports and Leisure Equipments'">Smart Watch</option>

                                <option value="Bulbs" v-if="this.formData.itemCategory=='Lighting Equipment'">Bulbs</option>
                                <option value="Switches" v-if="this.formData.itemCategory=='Lighting Equipment'">Switches</option>
                                <option value="Wires" v-if="this.formData.itemCategory=='Lighting Equipment'">Wires</option>
                                <option value="Lamps" v-if="this.formData.itemCategory=='Lighting Equipment'">Lamps</option>
                                <option value="Holders" v-if="this.formData.itemCategory=='Lighting Equipment'">Holders</option>

                                <option value="Vacuum Cleaner" v-if="this.formData.itemCategory=='Household Equipment'">Vacuum Cleaner</option>
                                <option value="Clocks" v-if="this.formData.itemCategory=='Household Equipment'">Clocks</option>
                                <option value="Fans" v-if="this.formData.itemCategory=='Household Equipment'">Fans</option>
                                <option value="Grinder" v-if="this.formData.itemCategory=='Household Equipment'">Grinder</option>
                                <option value="Iron" v-if="this.formData.itemCategory=='Household Equipment'">Iron</option>
                                <option value="Hair Dryer" v-if="this.formData.itemCategory=='Household Equipment'">Hair Dryer</option>
                                <option value="Washing Machine" v-if="this.formData.itemCategory=='Household Equipment'">Washing Machine</option>
                                <option value="Cooker" v-if="this.formData.itemCategory=='Household Equipment'">Cooker</option>
                                <option value="Toaster" v-if="this.formData.itemCategory=='Household Equipment'">Toaster</option>
                                <option value="Microwave" v-if="this.formData.itemCategory=='Household Equipment'">Microwave</option>
                                <option value="Kettle" v-if="this.formData.itemCategory=='Household Equipment'">Kettle</option>
                                <option value="" v-if="this.formData.itemCategory=='Household Equipment'"></option>

                                <option value="Pen Drive" v-if="this.formData.itemCategory=='Other'">Pen Drive</option>
                                <option value="CD" v-if="this.formData.itemCategory=='Other'">CD</option>
                                <option value="Battery" v-if="this.formData.itemCategory=='Other'">Battery</option>
                                <option value="Chips" v-if="this.formData.itemCategory=='Other'">Chips</option>
                                <option value="Calculators" v-if="this.formData.itemCategory=='Other'">Calculators</option>
                                <option value="Phone Chargers" v-if="this.formData.itemCategory=='Other'">Phone Chargers</option>


                            </select>
                            </div>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.subCategory.required">A Sub Item Category is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Pickup Address</label>
                        <div class="control">
                            <input class="input is-success" type="text" placeholder="Pickup Address" 
                            value="Moda Eladena" v-model.trim='$v.formData.pickupAddress.$model'
                            required>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.pickupAddress.required">A Pickup Address is Required</p>
                    </div>
                    <div class="field">
                        <label class="label">Province</label>
                        <div class="control">
                            <div class="select is-success">
                            <select v-model.trim='$v.formData.customerProvince.$model'>
                                <option value="">Select a Province</option>
                                <option value="Southern Province">Southern Province</option>
                                <option value="Western Province">Western Province</option>
                                <option value="Nothern Province">Nothern Province</option>
                                <option value="Noth Western Province">Noth Western Province</option>
                                <option value="Noth Central Province">Noth Central Province</option>
                                <option value="Central Province">Central Province</option>
                                <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                                <option value="Uva Province">Uva Province</option>
                                <option value="Eastern Province">Eastern Province</option>
                            </select>
                            </div>
                        </div>
                        <p class="help is-danger" v-if="!$v.formData.customerProvince.required">A province is required</p>
                    </div>
                    <div class="has-text-centred mb-2" v-if="isLoading">
                        <img src="../assets/loader.gif" style="height: 50px">
                        <p>Pocessing Data...</p>
                    </div>
                    <div class="field is-grouped justify-content-center">
                        <div class="control">
                        <button class="button is-primary" @click="submitData">Submit</button>
                        </div>
                        <div class="control">
                        <button class="button is-primary is-light" @click="reset">Reset</button>
                        </div>
                    </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import { required, email, numeric } from 'vuelidate/lib/validators'
import { firebaseApp,firebaseFirestore,firebase } from '../firebase'


export default {
    name: 'AddJob',
    data(){
        return {
            formData: {
                customerName: '',
                customerPhone: '',
                customerEmail: '',
                itemCategory: '',
                subCategory: '',
                pickupAddress: '',
                customerProvince: ''
            },
            currentUser: {
                email: '',
                name: '',
                uid: ''
            },
            notify: false,
            formsuccess: false,
            formerror: false,
            isLoading: false,
            callbackRef: ''
        }
    },
    validations: {
        formData: {
            customerName: {required},
            customerEmail: {required, email},
            customerPhone: {required, numeric},
            itemCategory: {required},
            subCategory: {required},
            pickupAddress: {required},
            customerProvince: {required}
        }
    },
    created(){
        console.log(firebaseApp.auth().currentUser.uid)
        this.currentUser.email = firebaseApp.auth().currentUser.email
        this.formData.customerEmail = this.currentUser.email
        this.currentUser.uid = firebaseApp.auth().currentUser.uid
    },
    methods: {
        submitData: function(e){
            this.isLoading = true
            this.currentUser.uid = firebaseApp.auth().currentUser.uid
            console.log(this.currentUser.uid)

            if(this.$v.$anyError || this.$v.$invalid){
                this.formSuccess= false
                this.notify = true
                this.formerror = true
                this.isLoading = false
            }
            else{
                let thisState = this;

                firebaseFirestore.collection('jobs').add({
                    customerId: this.currentUser.uid,
                    customerName: this.formData.customerName,
                    customerEmail: this.formData.customerEmail,
                    customerPhone: this.formData.customerPhone,
                    itemCategory: this.formData.itemCategory,
                    subCategory: this.formData.subCategory,
                    pickupAddress: this.formData.pickupAddress,
                    date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                    time:new Date().toLocaleTimeString(),
                    status: 'pending',
                    customerProvince: this.formData.customerProvince
                })
                .then(docRef => {
                    //Write ID to Users
                    firebaseFirestore.collection('users').doc(this.currentUser.uid).update({
                        "ongoingjobs": firebase.firestore.FieldValue.arrayUnion(docRef.id.toString())
                    })
                    .then(callback =>{
                        this.formerror = false
                        this.notify = true
                        this.formsuccess = true
                        this.isLoading = false
                        this.reset()
                    })
                    .catch(error => {
                        console.log(error)
                        this.isLoading = false
                    })

                })
                .catch(error =>{
                    console.log(error)
                    this.isLoading = false
                })
            }
            this.isLoading = false
            window.scrollTo(0,0);
            e.preventDefault()
        },
        reset: function(e){
            this.formData.customerName = ''
            this.formData.customerEmail = ''
            this.formData.customerPhone = ''
            this.formData.itemCategory = ''
            this.formData.pickupAddress = ''
            this.formData.subCategory = ''
            this.formData.customerProvince = ''
            e.preventDefault()
        },
        hideNotification: function(){
            this.notify = false
        }
    }

}
</script>

<style>
@import url('../assets/css/style.css');
</style>