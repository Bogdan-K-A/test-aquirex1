<template>
  <div>
    <div class="logo-box"></div>
    <cv-header aria-label="Carbon header">
      <cv-breadcrumb>
        <cv-breadcrumb-item>
          <cv-link to="/">Dashboard</cv-link>
        </cv-breadcrumb-item>
        <cv-breadcrumb-item>
          <p>Settings</p>
        </cv-breadcrumb-item>
      </cv-breadcrumb>

      <template v-slot:header-global>
        <cv-header-global-action
          aria-label="User avatar"
          aria-controls="user-panel"
          label="Log in"
          tipPosition="bottom"
          tipAlignment="center"
        >
          <UserAvatar20 />
        </cv-header-global-action>
      </template>
      <template v-slot:left-panels>
        <cv-side-nav id="side-nav" rail>
          <!-- <cv-side-nav-items>
            <template v-slot:nav-icon></template> -->
          <!-- <cv-side-nav-menu-item active> L2 menu item </cv-side-nav-menu-item> -->
          <!-- </cv-side-nav-items> -->
          <a class="logout-btn" @click.prevent="logout" href="#">
            <Login20 class="logout-svg-btn" />
          </a>
        </cv-side-nav>
      </template>

      <!-- <template v-slot:right-panels> </template> -->
    </cv-header>
    <div class="setting-title-box">
      <h2>Profile</h2>
    </div>
  </div>
</template>

<script>
export default {
  layout: "privat",
  middleware: "auth",
  // data() {
  //   return {
  //     loggedIn: false,
  //   };
  // },

  methods: {
    // actionUserAvatar() {
    //   this.loggedIn = !this.loggedIn;
    // },

    logout() {
      this.$store.dispatch("logout");
      console.log("object");
    },
  },
};
</script>

<style lang="scss" scope>
.logo-box {
  width: 66px;
  height: 64px;
  background-color: #161616;
}

.setting-title-box {
  margin-left: 92px;
  margin-bottom: 32px;
  margin-top: 32px;
}

.bx--breadcrumb {
  margin-left: 32px;
}

.bx--header {
  justify-content: space-between;

  height: 64px;

  margin-left: 66px;
  background: rgba(239, 239, 239, 0.7);
  /* backdrop-filter: blur(40px); */
  z-index: 2;
}

.bx--header__global {
  align-items: center;
}

.bx--side-nav {
  background-color: #161616;
}

.bx--side-nav--rail {
  width: 66px;
}
.bx--side-nav--ux {
  top: 4rem;
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger svg,
.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover svg,
.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus svg {
  fill: #161616;
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover,
.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus {
  background: none;
}
.logout-btn {
  margin-bottom: 100px;
}
.logout-svg-btn {
  fill: beige !important;
}

.bx--side-nav__navigation {
  justify-content: flex-end;
  /* height: 100vh; */
}
</style>
