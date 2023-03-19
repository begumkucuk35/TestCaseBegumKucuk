<template>
  <!--Sidebar tag-->
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`" class="px-0 pt-0">
    <!--Icon to expand or unexpand the sidebar-->
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <div class="align-items-end" style="width: 60%; margin-left: 75px">
      <div class="menu mx-0">
        <!--Take page lists and routes from MainMenu.ts-->
        <div v-for="(item, i) in MainMenu" :key="i">
          <div v-if="item.heading">
            <!--Take parent name of the section-->
            <div>
              <span class="menu-header text-uppercase">
                {{ item.heading }}
              </span>
            </div>
          </div>
          <div v-for="(menuItem, j) in item.pages" :key="j">
            <div v-if="menuItem.heading">
              <!--Menu Item without a sub page-->
              <div>
                <router-link
                  v-if="menuItem.route"
                  :to="menuItem.route"
                  class="button"
                >
                  <span class="me-3">
                    <img :src="menuItem.icon" alt="" />
                  </span>
                  <span class="text">{{ menuItem.heading }}</span>
                </router-link>
              </div>
            </div>
            <div
              v-if="menuItem.sectionTitle && menuItem.route"
              :class="`${hasActiveChildren(menuItem.route) ? 'show' : ''}`"
            >
              <span class="button d-flex justify-content-between">
                <!--Menu item with sub menu and it will collapse sub menu on click-->
                <button
                  class="accordion-button px-0"
                  :data-bs-target="'#collapse' + j"
                  type="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                >
                  <span class="me-3">
                    <img :src="menuItem.icon" alt="" />
                  </span>
                  {{ menuItem.sectionTitle }}
                </button>
                <span class="material-icons menu-arrow">expand_more</span>
              </span>
              <!--Sub menu that will be triggered at specific index-->
              <div
                :id="'collapse' + j"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div
                  :class="`${hasActiveChildren(menuItem.route) ? 'show' : ''}`"
                >
                  <div v-for="(item2, k) in menuItem.sub" :key="k">
                    <div v-if="item2.heading" class="menu-item">
                      <router-link
                        v-if="item2.route"
                        :to="item2.route"
                        class="button"
                      >
                        <div class="accordion-body text">
                          <span>{{ item2.heading }}</span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex"></div>
        <!--Sidebar footer logo-->
        <div class="menu my-4 d-flex align-items-center justify-content-center">
          <img src="../assets/footer_logo.png" alt="" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import MainMenu from "./MainMenu";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const is_expanded = ref<boolean>(true);

    function toggleMenu() {
      is_expanded.value = !is_expanded.value;
      console.log(is_expanded.value);
      //  localStorage.setItem(true, is_expanded.value);
    }

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    const windowWidth = ref(window.innerWidth);
    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };
    // Equivalet window size to windowWidth value
    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    // If windowWith value decreases collapse sidebar automatically
    watchEffect(() => {
      if (windowWidth.value < 1030) {
        is_expanded.value = false;
      } else {
        is_expanded.value = true;
      }
    });
    return {
      is_expanded,
      toggleMenu,
      hasActiveChildren,
      windowWidth,
      MainMenu,
    };
  },
  components: {
    MainMenu,
  },
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  .flex {
    flex: 1 1 0%;
  }
  .menu-header {
    font-size: 12px;
    line-height: 20px;
    color: #64748b;
    font-weight: 500px;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;
    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        font-weight: 500px;
        font-size: 14px;
        transition: 0.2s ease-in-out;
      }
      &:hover {
        background-color: var(--dark-alt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-radius: 2px;
      }
    }
  }
  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    .button .text {
      opacity: 1;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
    .footer {
      opacity: 0;
    }
  }
  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
  .menu-arrow {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;

    &:after {
      display: block;
      width: 100%;
      content: " ";
      will-change: transform;
      background-size: 100% 100%;
    }
  }
}
</style>
