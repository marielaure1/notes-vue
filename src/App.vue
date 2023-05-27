<template>
  <ion-app>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" v-if="!isLoginPage && !isRegisterPage">
        <ion-tab-button tab="notes"  href="/notes">
          <ion-icon :icon="copyOutline"></ion-icon>
          <ion-label>Mes notes</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="note" href="/create">
          <ion-icon :icon="duplicateOutline"></ion-icon>
          <ion-label>Nouvelle note</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profil" href="/profil">
          <ion-icon :icon="personOutline"></ion-icon>
          <ion-label>Profil</ion-label>
        </ion-tab-button>
        <!-- Ajoutez d'autres onglets selon vos besoins -->
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script>
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/vue';
import { copyOutline, personOutline, duplicateOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet },
  data() {
    return {
      isLoginPage: false,
      isRegisterPage: false,
      copyOutline,
      duplicateOutline,
      personOutline
    };
  }
});
</script>

<style scoped>
ion-tab-bar {
  --color-selected: #007bff; /* Couleur d'onglet sélectionné */
}
</style>
