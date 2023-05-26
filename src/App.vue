<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
<style>
:root{
    --cl-jaune: #e3bb04;
    --ion-color-primary: #e3bb04;
    --background-hover: #e3bb04; 
}

ion-button {
  background-color: var(--ion-color-primary);
}

.ion-focusable, .ion-activated{
  background-color: var(--ion-color-primary)!important;
}

</style>