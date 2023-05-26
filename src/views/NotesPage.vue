<template>
    <ion-page>
      <ion-header>
        <ion-toolbar class="bg-primary">
          <ion-title>Mes Notes</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item v-for="note in notes" :key="note.id">
           <p>{{ note.content }}</p>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        notes: []
      };
    },
    mounted() {
      this.fetchNotes();
    },
    methods: {
      async fetchNotes() {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/notes`, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
  
          if (response.ok) {
            const notes = await response.json();
            this.notes = notes;
          } else {
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  