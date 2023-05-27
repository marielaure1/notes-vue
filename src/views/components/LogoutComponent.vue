<template>
        <ion-item class="power" @click="home()">
          Deconnexion
        </ion-item>
  </template>
  
  <script>
  import { IonItem} from '@ionic/vue';
  import {powerOutline } from 'ionicons/icons';
  import {useApiStore} from "@/stores/apiStore.js"
  
  export default {
    data() {
      return {
      };
    },
    components: {
      IonItem,
      powerOutline
    },
    methods: {
      
        home() {
            useApiStore().logout().then((data) => {
                this.$router.push("/");
            })

          
        }
    }
  };
  </script>