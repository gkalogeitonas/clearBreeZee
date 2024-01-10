<template>
<q-page class="flex column q-pa-sm">
    <section id="app_settings">
        <div id="general">
            <h2>General Settings</h2>
            <!-- Add your general settings here -->
            <p>This is the General Settings section content for your Vue app.</p>
            <router-link to="/manage-places">
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Manage Places</q-item-label>
                </q-item-section>
              </q-item>
            </router-link>
        </div>

        <div id="notifications">
            <h2>Notification Settings</h2>
            <!-- Add your notification settings here -->
            <p>This is the Notification Settings section content for your Vue app.</p>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Smart Alerts</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Threshold Alerts</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Persistent  Notifications</q-item-label>
              </q-item-section>
            </q-item>
        </div>

        <div id="privacy">
            <h2>Privacy Settings</h2>
            <!-- Add your privacy settings here -->
            <p>This is the Privacy Settings section content for your Vue app.</p>
        </div>

        <div id="account">
            <h2>Account Settings</h2>
            <!-- Add your account settings here -->
            <p>This is the Account Settings section content for your Vue app.</p>
        </div>

        <div id="about">
            <h2>About App</h2>
            <!-- Add information about the app here -->
            <p>This is the About App section content for your Vue app.</p>
        </div>
    </section>
</q-page>
</template>

<script>
export default {
  name: 'SettingsPage'
}
</script>

<style scoped>
.q-page{
  background-color: #fff !important;
  background: linear-gradient(to bottom, #fff, #fff);
}

h2{
  margin-bottom: 0;
  font-size: 1.5rem;
}

</style>
