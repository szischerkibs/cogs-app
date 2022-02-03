<template>
  <v-list>
    <template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list nav>
          <div v-for="(item, index) in items" :key="index">
            <v-list-item
              :href="item.path"
              :to="{ path: item.path }"
              v-if="!item.children"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group
              :value="false"
              :prepend-icon="item.icon"
              v-if="item.children"
              color="default"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(childItem, idx) in item.children"
                :key="idx"
                :href="childItem.path"
                :to="{ path: childItem.path }"
                dense
              >
                <v-list-item-title v-text="childItem.name"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="childItem.icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </div>
        </v-list>
      </v-card>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      selectedItem: 1,
      items: [],
    };
  },
  created() {
    var userRoles = ["everybody", "volunteers", "admin"];
    var nav = [];
    this.$router.options.routes.forEach(function (r) {
      //Check if user has permissions to access the route
      if (
        !r.roles ||
        r.roles.length === 0 ||
        r.roles.some((role) => userRoles.includes(role))
      ) {
        nav.push(r);
      }
    });
    this.items = nav;
  },
};
</script>

<style scoped></style>
