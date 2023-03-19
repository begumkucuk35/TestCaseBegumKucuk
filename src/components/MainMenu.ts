export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  icon?: string;
  sub?: Array<MenuItem>;
}
// Roter links and headers for sidebar
const MainMenuConfig = [
  {
    heading: "Pages",
      route: "/pages",
      pages: [
          {
              heading: "Dashboard",
              route: "/dashboard",
              icon: "src/assets/icons/dashboard-icon.png",
          },
          {
            heading: "Analytics",
            route: "/analytics",
            icon: "src/assets/icons/analytics.png",
          },
          {
            sectionTitle: "E-Commerce",
            route: "/e-commerce",
            icon: "src/assets/icons/e-commerce.png",
            sub: [
              {
                  heading: "E-Commerce Sub",
                  route: "/e-commerce/sub",
              },
            ],
          },
          {
            sectionTitle: "Team",
            route: "/team",
            icon: "src/assets/icons/team.png",
            sub: [
              {
                  heading: "Team Sub",
                  route: "/team/sub",
              },
            ],
          },
          {
            heading: "Campaigns",
            route: "/campaigns",
            icon: "src/assets/icons/campaigns.png",
          },
          {
            heading: "Messages",
            route: "/messages",
            icon: "src/assets/icons/messages.png",
          },
          {
            heading: "Tasks",
            route: "/tasks",
            icon: "src/assets/icons/tasks.png",
          },
          {
            heading: "Inbox",
            route: "/inbox",
            icon: "src/assets/icons/inbox.png",
          },
          {
            heading: "Calendar",
            route: "/calendar",
            icon: "src/assets/icons/calendar.png",
          },
          {
            sectionTitle: "Settings",
            route: "/settings",
            icon: "src/assets/icons/settings.png",
            sub: [
              {
                  heading: "Settings Sub",
                  route: "/settings/sub",
              },
            ],
          },
          {
            sectionTitle: "Utility",
            route: "/utility",
            icon: "src/assets/icons/utility.png",
            sub: [
              {
                  heading: "Utility Sub",
                  route: "/utility/sub",
              },
            ],
          },
      ],
  },
  {
      heading: "More",
      route: "/more",
      pages: [
          {
              sectionTitle: "Authentication",
              route: "/authentication",
              icon: "src/assets/icons/authentication/auth2.png",
              sub: [
                  {
                      heading: "Authentication Sub",
                      route: "/authentication/sub",
                  },
              ],
          },
          {
            sectionTitle: "Onboarding",
            route: "/onboarding",
            icon: "src/assets/icons/onboarding.png",
            sub: [
                {
                    heading: "Onboarding Sub",
                    route: "/onboarding/sub",
                },
            ],
        },
        {
          sectionTitle: "Components",
          route: "/components",
          icon: "src/assets/icons/components.png",
          sub: [
              {
                  heading: "Components Sub",
                  route: "/components/sub",
              },
          ],
      },
      ],
  },
];

export default MainMenuConfig;
