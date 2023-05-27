<template>
    <ion-page>
      <ion-header>
        <ion-toolbar class="bg-primary">
          <ion-title>Mon Profil</ion-title>
          
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ user.name }}</ion-card-title>
            <ion-card-subtitle>Inscrit dépuis le : {{ date }} </ion-card-subtitle>
          </ion-card-header>
      
          <ion-card-content>
            <ion-img src="./login.jpg" alt="image scribe"></ion-img>
            <p>Email : {{ user.email }}</p>
            <p>Nombre de notes : {{ notes.length }}</p>
            <LogoutComponent />
          </ion-card-content>
        </ion-card>
          
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage } from '@ionic/vue';
  import {useApiStore} from "@/stores/apiStore.js"
  import {RouterLink} from 'vue-router'
  import { DateTime } from 'luxon';
  import LogoutComponent from './components/LogoutComponent.vue';


  export default {
    data() {
      return {
        user: "",
        notes: "",
        date: ""
      };
    },
    components: {
    IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage , LogoutComponent
  },
  methods: {
    logout(){
      this.$router.push({ path: '/logout' });
    }
  },
    mounted() {
      useApiStore().user().then((data) => {
         this.user = data.user;
         const dateTime = DateTime.fromISO(date.user.created_at);
        //  const date = dateTime.toRelative({ unit: 'month' });

         this.date = dateTime;

         console.log(data);
    })
    useApiStore().notes().then((data) => {
         this.notes = data.notes;
    })
  },
  };
  </script>
  