<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/notes"></ion-back-button>
        </ion-buttons>
        <ion-title>Note</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card class="notes-note">
        <ion-card-header v-if="note">
          <ion-card-title>{{ formatDate(note.created_at) }}</ion-card-title>
        </ion-card-header>
      
        <ion-card-content v-if="note">
          <form @submit.prevent="update">
            <ion-textarea v-model="content" rows="6"></ion-textarea>
            <ion-button type="submit">Mettre à jour</ion-button>
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
      note: null,
      content: "",
      id: this.$route.params.id
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
    formatDate(dateString) {
      const date = DateTime.fromISO(dateString);
      const now = DateTime.now();
      const diff = now.diff(date, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

      if (diff.years > 0) {
        return `Il y a ${diff.years} an${diff.years > 1 ? 's' : ''}`;
      } else if (diff.months > 0) {
        return `Il y a ${diff.months} mois`;
      } else if (diff.days > 0) {
        return `Il y a ${diff.days} jour${diff.days > 1 ? 's' : ''}`;
      } else if (diff.hours > 0) {
        return `Il y a ${diff.hours} heure${diff.hours > 1 ? 's' : ''}`;
      } else if (diff.minutes > 0) {
        return `Il y a ${diff.minutes} minute${diff.minutes > 1 ? 's' : ''}`;
      } else {
        return `Il y a ${diff.seconds} seconde${diff.seconds > 1 ? 's' : ''}`;
      }
    },

    update() {
      const data = {
        content: this.content
      }
      useApiStore().update(data, this.id).then((data) => {
        this.note = data.note;
      });
    }
  },
  mounted() {

    useApiStore().show(this.id).then((data) => {
      this.note = data.note;
      this.content = this.note.content;
    });
  },
};
</script>
