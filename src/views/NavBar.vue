<template>
  <div>
    <v-app-bar dark color="#000000" class="hidden-sm-and-down">
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :key="item.icon"
          :to="item.path"
          :title="item.text"
          text
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-app-bar  dark color="blue-grey darken-3" class="hidden-sm-and-up">
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
      <template v-slot:activator="{ on }"><v-btn v-on="on"> <v-icon>mdi-apps</v-icon> </v-btn> </template>
        <v-card>
          <v-toolbar text color="blue-grey darken-2">
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="dialog = false">
              <v-icon>mdi-close-box</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list nav dense>
            <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.path">
              <v-list-item-action>
                <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title :title="item.title">
                 {{item.title}} [{{item.text}}]
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      dialog: false,
      appTitle: 'Melissa',
      sidebar: false,
      menuItems: [
        {
          text: 'Lista de usuario',
          title: 'Usuarios',
          path: '/',
          icon: 'mdi-format-list-bulleted',
          active: true
        },
        {
          text: 'Alta de usuario',
          title: 'Alta',
          path: '/alta_usuario',
          icon: 'mdi-account-plus',
          active: false
        },
        {
          text: 'Informacion del sistema',
          title: 'Acerca De',
          path: '/about',
          icon: 'mdi-information',
          active: false
        }
      ]
    }
  }
}
</script>
