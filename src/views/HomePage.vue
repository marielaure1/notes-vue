<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Bienvenue sur Note</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bienvenue dans notes</ion-title>
        </ion-toolbar>
      </ion-header>
    

      <div id="container">
        <ion-img src="./home.jpg" alt="image scribe"></ion-img>
        
        <ion-button @click="login()">
          Se connecter
        </ion-button>
        <ion-button @click="register()">
          S'inscrire
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage } from '@ionic/vue';


export default {
  data() {
    return {
    };
  },
  components: {
    IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonLabel, IonItem, IonInput, IonList, IonPage 
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
