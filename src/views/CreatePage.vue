<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/notes"></ion-back-button>
        </ion-buttons>
        <ion-title>Créer une note</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card class="notes-note">
      
        <ion-card-content>
          <form @submit.prevent="create">
            <ion-textarea v-model="content" rows="6"></ion-textarea>
            <ion-button type="submit">Créer</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>


<script>
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonTextarea } from '@ionic/vue';
import { useApiStore } from "@/stores/apiStore.js";
import { DateTime } from 'luxon';

export default {
  data() {
    return {
      content: "",
    };
  },
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonPage,
    IonTextarea
  },
  methods: {

    create() {
      const data = {
        content: this.content
      }

      useApiStore().create(data).then((data) => {
        this.content = ""

      });
    }
  },
};
</script>
