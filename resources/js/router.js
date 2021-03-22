import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // the 404 route, when none of the above matches
      path: "/",
      redirect: "posts",
      component: () => import("./PostList"),
      children: [
        {
          path:'/posts',
          name: 'posts',
          component: () => import("./PostList")
        },
        {
          path: '/post/:id',
          name: 'wp_post',
          component: () => import("./Post")
        },
        {
          path: '/authors/:id',
          name: 'author',
          component: () => import("./AuthorPostList")
        },
      ],
    },
    {
      path: "/board",
      component: () => import("./Board"),
      children: [
        { path: "/board", name: "board",
          component: () => import("./Board")
        },
      ]
    },
    {
      path: "/",
      component: () => import("./Login"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("./Login")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("./Register")
        }
      ]
    },
    {
      path: "/dashboard",
      redirect: "/dashboard",
      component: () => import("./views/pages/Dashboard.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("./views/pages/Dashboard.vue")
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("./views/pages/Builder.vue")
        },
        {
          path: "/vue-bootstrap",
          name: "vue-bootstrap",
          component: () =>
            import("./views/vue-bootstrap/VueBootstrap.vue"),
          children: [
            {
              path: "alert",
              name: "vue-bootstrap-alert",
              component: () => import("./views/vue-bootstrap/Alert.vue")
            },
            {
              path: "badge",
              name: "vue-bootstrap-badge",
              component: () => import("./views/vue-bootstrap/Badge.vue")
            },
            {
              path: "button",
              name: "vue-bootstrap-button",
              component: () => import("./views/vue-bootstrap/Button.vue")
            },
            {
              path: "button-group",
              name: "vue-bootstrap-button-group",
              component: () =>
                import("./views/vue-bootstrap/ButtonGroup.vue")
            },
            {
              path: "button-toolbar",
              name: "vue-bootstrap-button-toolbar",
              component: () =>
                import("./views/vue-bootstrap/ButtonToolbar.vue")
            },
            {
              path: "card",
              name: "vue-bootstrap-card",
              component: () => import("./views/vue-bootstrap/Card.vue")
            },
            {
              path: "carousel",
              name: "vue-bootstrap-carousel",
              component: () => import("./views/vue-bootstrap/Carousel.vue")
            },
            {
              path: "collapse",
              name: "vue-bootstrap-collapse",
              component: () => import("./views/vue-bootstrap/Collapse.vue")
            },
            {
              path: "dropdown",
              name: "vue-bootstrap-dropdown",
              component: () => import("./views/vue-bootstrap/Dropdown.vue")
            },
            {
              path: "embed",
              name: "vue-bootstrap-embed",
              component: () => import("./views/vue-bootstrap/Embed.vue")
            },
            {
              path: "form",
              name: "vue-bootstrap-form",
              component: () => import("./views/vue-bootstrap/Form.vue")
            },
            {
              path: "form-checkbox",
              name: "vue-bootstrap-form-checkbox",
              component: () =>
                import("./views/vue-bootstrap/FormCheckbox.vue")
            },
            {
              path: "form-file",
              name: "vue-bootstrap-form-file",
              component: () => import("./views/vue-bootstrap/FormFile.vue")
            },
            {
              path: "form-group",
              name: "vue-bootstrap-form-group",
              component: () =>
                import("./views/vue-bootstrap/FormGroup.vue")
            },
            {
              path: "form-input",
              name: "vue-bootstrap-form-input",
              component: () =>
                import("./views/vue-bootstrap/FormInput.vue")
            },
            {
              path: "form-radio",
              name: "vue-bootstrap-form-radio",
              component: () =>
                import("./views/vue-bootstrap/FormRadio.vue")
            },
            {
              path: "form-select",
              name: "vue-bootstrap-form-select",
              component: () =>
                import("./views/vue-bootstrap/FormSelect.vue")
            },
            {
              path: "form-textarea",
              name: "vue-bootstrap-form-textarea",
              component: () =>
                import("./views/vue-bootstrap/FormTextarea.vue")
            },
            {
              path: "image",
              name: "vue-bootstrap-image",
              component: () => import("./views/vue-bootstrap/Image.vue")
            },
            {
              path: "input-group",
              name: "vue-bootstrap-input-group",
              component: () =>
                import("./views/vue-bootstrap/InputGroup.vue")
            },
            {
              path: "jumbotron",
              name: "vue-bootstrap-jumbotron",
              component: () =>
                import("./views/vue-bootstrap/Jumbotron.vue")
            },
            {
              path: "layout-grid-system",
              name: "vue-bootstrap-layout-grid-system",
              component: () =>
                import("./views/vue-bootstrap/LayoutGridSystem.vue")
            },
            {
              path: "link",
              name: "vue-bootstrap-link",
              component: () => import("./views/vue-bootstrap/Link.vue")
            },
            {
              path: "list-group",
              name: "vue-bootstrap-list-group",
              component: () =>
                import("./views/vue-bootstrap/ListGroup.vue")
            },
            {
              path: "media",
              name: "vue-bootstrap-media",
              component: () => import("./views/vue-bootstrap/Media.vue")
            },
            {
              path: "modal",
              name: "vue-bootstrap-modal",
              component: () => import("./views/vue-bootstrap/Modal.vue")
            },
            {
              path: "nav",
              name: "vue-bootstrap-nav",
              component: () => import("./views/vue-bootstrap/Nav.vue")
            },
            {
              path: "navbar",
              name: "vue-bootstrap-navbar",
              component: () => import("./views/vue-bootstrap/Navbar.vue")
            },
            {
              path: "pagination",
              name: "vue-bootstrap-pagination",
              component: () =>
                import("./views/vue-bootstrap/Pagination.vue")
            },
            {
              path: "pagination-nav",
              name: "vue-bootstrap-pagination-nav",
              component: () =>
                import("./views/vue-bootstrap/PaginationNav.vue")
            },
            {
              path: "notify-popover",
              name: "vue-bootstrap-popover",
              component: () => import("./views/vue-bootstrap/Popover.vue")
            },
            {
              path: "notify-toasts",
              name: "vue-bootstrap-toasts",
              component: () => import("./views/vue-bootstrap/Toasts.vue")
            },
            {
              path: "notify-tooltip",
              name: "vue-bootstrap-tooltip",
              component: () => import("./views/vue-bootstrap/Tooltip.vue")
            },
            {
              path: "progress",
              name: "vue-bootstrap-progress",
              component: () => import("./views/vue-bootstrap/Progress.vue")
            },
            {
              path: "progress-spinner",
              name: "vue-bootstrap-spinner",
              component: () => import("./views/vue-bootstrap/Spinner.vue")
            },
            {
              path: "table",
              name: "vue-bootstrap-table",
              component: () => import("./views/vue-bootstrap/Table.vue")
            },
            {
              path: "tabs",
              name: "vue-bootstrap-tabs",
              component: () => import("./views/vue-bootstrap/Tabs.vue")
            }
          ]
        },
        {
          path: "/vuetify",
          name: "vuetify",
          component: () => import("./views/vuetify/Vuetify.vue"),
          children: [
            {
              path: "alerts",
              name: "vuetify-alerts",
              component: () => import("./views/vuetify/Alerts.vue")
            },
            {
              path: "avatars",
              name: "vuetify-avatars",
              component: () => import("./views/vuetify/Avatars.vue")
            },
            {
              path: "badges",
              name: "vuetify-badges",
              component: () => import("./views/vuetify/Badges.vue")
            },
            {
              path: "buttons",
              name: "vuetify-buttons",
              component: () => import("./views/vuetify/Buttons.vue")
            },
            {
              path: "calendars",
              name: "vuetify-calendars",
              component: () => import("./views/vuetify/Calendars.vue")
            },
            {
              path: "cards",
              name: "vuetify-cards",
              component: () => import("./views/vuetify/Cards.vue")
            },
            {
              path: "chips",
              name: "vuetify-chips",
              component: () => import("./views/vuetify/Chips.vue")
            },
            {
              path: "dialog",
              name: "vuetify-dialog",
              component: () => import("./views/vuetify/Dialog.vue")
            },
            {
              path: "forms-autocompletes",
              name: "vuetify-autocompletes",
              component: () =>
                import("./views/vuetify/forms/Autocompletes.vue")
            },
            {
              path: "forms-file-inputs",
              name: "vuetify-file-inputs",
              component: () =>
                import("./views/vuetify/forms/FileInputs.vue")
            },
            {
              path: "forms",
              name: "vuetify-forms",
              component: () => import("./views/vuetify/forms/Forms.vue")
            },
            {
              path: "forms-selection-controls",
              name: "vuetify-selection-controls",
              component: () =>
                import("./views/vuetify/forms/SelectionControls.vue")
            },
            {
              path: "forms-selects",
              name: "vuetify-selects",
              component: () => import("./views/vuetify/forms/Selects.vue")
            },
            {
              path: "forms-textareas",
              name: "vuetify-textareas",
              component: () =>
                import("./views/vuetify/forms/Textareas.vue")
            },
            {
              path: "forms-text-fields",
              name: "vuetify-text-fields",
              component: () =>
                import("./views/vuetify/forms/TextFields.vue")
            },
            {
              path: "tables-simple-tables",
              name: "vuetify-simple-tables",
              component: () =>
                import("./views/vuetify/tables/SimpleTables.vue")
            },
            {
              path: "tables-data-tables",
              name: "vuetify-data-tables",
              component: () =>
                import("./views/vuetify/tables/DataTables.vue")
            },
            {
              path: "tabs",
              name: "vuetify-tabs",
              component: () => import("./views/vuetify/Tabs.vue")
            },
            {
              path: "timelines",
              name: "vuetify-timelines",
              component: () => import("./views/vuetify/Timelines.vue")
            },
            {
              path: "tooltips",
              name: "vuetify-tooltips",
              component: () => import("./views/vuetify/Tooltips.vue")
            },
            {
              path: "treeview",
              name: "vuetify-treeview",
              component: () => import("./views/vuetify/Treeview.vue")
            }
          ]
        },
        {
          path: "/custom-wizard",
          name: "wizard",
          component: () => import("./views/wizard/Wizard.vue"),
          children: [
            {
              path: "wizard-1",
              name: "wizard-1",
              component: () => import("./views/wizard/Wizard-1.vue")
            },
            {
              path: "wizard-2",
              name: "wizard-2",
              component: () => import("./views/wizard/Wizard-2.vue")
            },
            {
              path: "wizard-3",
              name: "wizard-3",
              component: () => import("./views/wizard/Wizard-3.vue")
            },
            {
              path: "wizard-4",
              name: "wizard-4",
              component: () => import("./views/wizard/Wizard-4.vue")
            }
          ]
        },
        {
          path: "/custom-plugins",
          name: "plugins",
          component: () => import("./views/plugins/Plugins.vue"),
          children: [
            {
              path: "cropper",
              name: "cropper",
              component: () => import("./views/plugins/Cropper.vue")
            },
            {
              path: "treeselect",
              name: "treeselect",
              component: () => import("./views/plugins/Treeselect.vue")
            }
          ]
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("./views/profile/Profile.vue"),
          children: [
            {
              path: "profile-1",
              name: "profile-1",
              component: () => import("./views/profile/Profile-1.vue")
            },
            {
              path: "profile-2",
              name: "profile-2",
              component: () => import("./views/profile/Profile-2.vue")
            },
            {
              path: "profile-3",
              name: "profile-3",
              component: () => import("./views/profile/Profile-3.vue")
            },
            {
              path: "profile-4",
              name: "profile-4",
              component: () => import("./views/profile/Profile-4.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("./views/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("./views/error/Error-1.vue")
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("./views/error/Error-2.vue")
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("./views/error/Error-3.vue")
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("./views/error/Error-4.vue")
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("./views/error/Error-5.vue")
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("./views/error/Error-6.vue")
        }
      ]
    },
    // {
    //   path: "/",
    //   component: () => import("./views/auth/login_pages/Login-1.vue"),
    //   children: [
    //     {
    //       name: "login",
    //       path: "/login",
    //       component: () => import("./views/auth/login_pages/Login-1.vue")
    //     },
    //     {
    //       name: "register",
    //       path: "/register",
    //       component: () => import("./views/auth/login_pages/Login-1.vue")
    //     }
    //   ]
    // },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("./views/error/Error-1.vue")
    }
  ]
});
