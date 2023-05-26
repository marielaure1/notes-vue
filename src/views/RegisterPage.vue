<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-primary">
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding bg-white">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input v-model="name" type="text" color="dark" aria-label="Nom"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email" color="dark" aria-label="Email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="password" type="password" color="dark" aria-label="Password"></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="full" @click="register" color="primary">S'inscrire</ion-button>
      <!-- <ion-nav-link router-direction="forward" :component="login">
        <ion-button>Vous avez déjà un compte</ion-button>
      </ion-nav-link> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage } from '@ionic/vue';
import LoginPage from "./LoginPage.vue"

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      // login: LoginPage
    };
  },
  components: {
    IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage 
  },
  methods: {
    async register() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password
          })
        });

        if (response.ok) {
         
          console.log('Inscription réussie');
         
          this.$router.push('/notes');
        } else {
          console.log("Échec de l'inscription");
          const errorData = await response.json();
          console.log(errorData);
          
        }
      } catch (error) {
        console.error(error);
       
      }
    }
  }
};
</script>