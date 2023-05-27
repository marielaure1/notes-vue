<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-primary">
        <ion-title>Mes Notes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" v-if="showEditor">
      <!-- Formulaire avec l'éditeur WYSIWYG -->
      <div id="editor"></div>
      <button @click="handleSubmit">Soumettre</button>
    </ion-content>
    <ion-content class="ion-padding">
      <ion-list>
        <!-- <router-link :to="'/notes/' + note.id" > -->
        <ion-card class="notes-note" v-for="note in notes" :key="note.id">
          <ion-card-header>
            <ion-card-title>{{ formatDate(note.created_at) }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            {{ note.content }}
            <div>
              <ion-button  @click="show(note.id)">
                Modfier
              </ion-button>
              <ion-button  @click="deletes(note.id)">
                Delete
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>

        <!-- </router-link> -->
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonNavLink,
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/vue';
import { useApiStore } from '@/stores/apiStore.js';
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue';
import { DateTime } from 'luxon';
import Quill from 'quill';

export default defineComponent({
  data() {
    return {
      notes: [],
      showEditor: false,
    };
  },
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonNavLink,
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
  },
  mounted() {
    useApiStore()
      .notes()
      .then((data) => {
        this.notes = data.notes;
      });
  },
  methods: {
    formatDate(dateString) {
      const date = DateTime.fromISO(dateString);
      const now = DateTime.now();
      const diff = now.diff(date, [
        'years',
        'months',
        'days',
        'hours',
        'minutes',
        'seconds',
      ]);

      if (diff.years > 0) {
        return `Il y a ${diff.years} an${diff.years > 1 ? 's' : ''}`;
      } else if (diff.months > 0) {
        return `Il y a ${diff.months} mois`;
      } else if (diff.days > 0) {
        return `Il y a ${diff.days} jour${diff.days > 1 ? 's' : ''}`;
      } else if (diff.hours > 0) {
        return `Il y a ${diff.hours} heure${diff.hours > 1 ? 's' : ''}`;
      } else if (diff.minutes > 0) {
        return `Il y a ${diff.minutes} minute${
          diff.minutes > 1 ? 's' : ''
        }`;
      } else {
        return `Il y a ${diff.seconds} seconde${
          diff.seconds > 1 ? 's' : ''
        }`;
      }
    },

    show(id){
      this.$router.push(`/notes/${id}`);
    },

    deletes(id){
      useApiStore()
      .delete(id)
      .then((data) => {
        console.log(data);
      });

      useApiStore()
      .notes()
      .then((data) => {
        this.notes = data.notes;
      });
    }
  },
});
</script>
