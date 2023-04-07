const versionedLinks = require("./src/mdx/versionedLinks");

module.exports = {
  title: "Camunda Platform 8 Docs",
  tagline: "Documentation for all components of Camunda Platform 8",
  // url: "https://camunda-cloud.github.io",
  url: "https://docs.camunda.io",
  // baseUrl: "/camunda-cloud-documentation/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "camunda", // Usually your GitHub org/user name.
  projectName: "camunda-platform-docs", // Usually your repo name.
  trailingSlash: true,
  // do not delete the following 'noIndex' line as it is modified for staging
  noIndex: false,
  plugins: [
    //        ["@edno/docusaurus2-graphql-doc-generator",
    //          {
    //            schema: "http://localhost:8080/tasklist/graphql",
    //            rootPath: "./docs/", // docs will be generated under (rootPath/baseURL)
    //            baseURL: "apis-clients/tasklist-api",
    //            linkRoot: "/docs/",
    //            loaders: {
    //              UrlLoader: "@graphql-tools/url-loader"
    //            }
    //          },
    //        ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-KQGNSTS", // GTM Container ID
      },
    ],
    "./static/plugins/bpmn-js",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "optimize",
        path: "optimize",
        routeBasePath: "optimize",
        beforeDefaultRemarkPlugins: [versionedLinks],
        sidebarPath: require.resolve("./optimize_sidebars.js"),
        editUrl: "https://github.com/camunda/camunda-platform-docs/edit/main/",
      },
    ],
  ],
  scripts: [],
  themeConfig: {
    announcementBar: {
      id: "camunda8",
      content:
        '📣 <b><a target="_blank" rel="noopener noreferrer" href="https://accounts.cloud.camunda.io/signup?uc=signup&utm_source=docs.camunda.io&utm_medium=referral&utm_content=banner">Sign-Up</a></b> for a free account to start orchestrating business processes today.',
      backgroundColor: "#14D890",
      textColor: "#000",
      isCloseable: true,
    },
    prism: {
      additionalLanguages: ["java", "protobuf"],
    },
    navbar: {
      title: "Camunda Platform 8 Docs",
      logo: {
        alt: "Camunda Platform 8 Docs",
        src: "img/black-C.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          type: "doc",
          docId: "guides/introduction-to-camunda",
          label: "Guides",
          position: "left",
        },
        {
          type: "doc",
          docId: "components/components-overview",
          label: "Components",
          position: "left",
        },
        {
          type: "doc",
          docId: "apis-tools/working-with-apis-tools",
          label: "APIs & Clients",
          position: "left",
        },
        {
          type: "doc",
          docId: "self-managed/about-self-managed",
          label: "Self-Managed",
          position: "left",
        },
        {
          type: "doc",
          docId: "reference/overview",
          label: "Reference",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Camunda.com",
        src: "img/logo-light.svg",
        href: "https://camunda.com",
      },
      links: [
        {
          title: "About",
          items: [
            {
              label: "How to use our docs",
              to: "meta",
            },
            {
              label: "Try free",
              href: "https://accounts.cloud.camunda.io/signup?uc=signup&utm_source=docs.camunda.io&utm_medium=referral",
            },
            {
              label: "Contact",
              to: "contact",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://camunda.com/slack",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/camunda",
            },
            {
              label: "GitHub",
              href: "https://github.com/camunda/camunda-platform-docs",
            },
            {
              label: "Forum",
              href: "https://forum.camunda.io/",
            },
            {
              label: "Contribute",
              href: "https://camunda.com/developers/how-to-contribute/",
            },
            {
              label: "Developer resources",
              href: "https://camunda.com/developers/",
            },
            {
              label: "Subscribe",
              href: "https://camunda.com/developers/developer-community-updates/",
            },
          ],
        },
        {
          title: "Camunda",
          items: [
            {
              label: "Console",
              href: "https://camunda.io",
            },
            {
              label: "Status",
              href: "https://status.camunda.io",
            },
            {
              label: "Blog",
              href: "https://camunda.com/blog/category/camunda-cloud/",
            },
            {
              label: "Release cycle",
              to: "docs/reference/release-policy",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Statement",
              href: "https://camunda.com/legal/privacy/",
            },
            {
              html: `<a class="osano-footer-link-docu" href="#" onclick="Osano.cm.showDrawer('osano-cm-dom-info-dialog-open')">Cookie Preferences</a>`,
            },
            {
              label: "Licenses",
              to: "docs/reference/licenses",
            },
            {
              label: "Security notices",
              to: "docs/reference/notices",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Camunda`,
    },
    algolia: {
      // These keys are for our new standalone algolia instance!
      apiKey: "d701d38126d1a43866047d3ab97680d1",
      appId: "6KYF3VMCXZ",
      indexName: "camunda",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/camunda/camunda-platform-docs/edit/main/",
          beforeDefaultRemarkPlugins: [versionedLinks],
          // 👋 When cutting a new version, remove the banner for maintained versions by adding an entry. Remove the entry to versions >18 months old.
          versions: {
            "8.0": {
              banner: "none",
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          //cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
