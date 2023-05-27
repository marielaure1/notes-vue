<template>
  <ion-page :ion-tab="false">
    <ion-header>
      <ion-toolbar class="bg-primary">
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding bg-white">
      <form @submit.prevent="login">
        <ion-list>
          <ion-img src="./login.jpg" alt="image scribe"></ion-img>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input v-model="email" type="email"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="floating">Mot de passe</ion-label>
            <ion-input v-model="password" type="password"></ion-input>
          </ion-item>
        </ion-list>
  
        <ion-button expand="full" type="submit">Se connecter</ion-button>
        <!-- <ion-nav-link router-direction="forward" :component="register">
          <ion-button>Vous n'avez pas de compte</ion-button>
        </ion-nav-link> -->
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage } from '@ionic/vue';
import {useApiStore} from "@/stores/apiStore.js"

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage 
  },
  methods: {
     login() {
      const formData = new FormData();
      console.log(this.email, this.password);
      formData.append('email', this.email);
      formData.append('password', this.password);
      useApiStore().login(formData).then(() => {
        this.$router.push({ path: '/notes' });
      })
    }
  }
};
</script>