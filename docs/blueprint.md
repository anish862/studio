# **App Name**: AgencyFlow

## Core Features:

- Service Showcase: Display of the agency's services, pulled from WordPress, using React components.
- Portfolio Display: Dynamic portfolio grid showcasing the agency's work, sourced from WordPress, rendered via React.
- Contact Form: Contact form submission via React, handling form state and submission to WordPress.

## Style Guidelines:

- Primary color: Use the brand color extracted from the logo (if available), otherwise, a professional blue (#29ABE2).
- Secondary color: Light gray (#f8f9fa) for backgrounds and subtle accents.
- Accent: Teal (#008080) for interactive elements and call-to-action buttons.
- Bootstrap grid system for a responsive and consistent layout across devices.
- Clean and modern design with ample white space to improve readability.
- Font Awesome icons for visual consistency and quick recognition of features.

## Original User Request:
Create a WordPress+react js theme using bootstrap framework "my-digital-agency/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── robots.txt
│   ├── manifest.json
│   └── assets/
│       ├── images/
│       │   ├── logo.png
│       │   ├── logo-dark.png
│       │   ├── hero/
│       │   │   ├── home.jpg
│       │   │   ├── about.jpg
│       │   │   └── contact.jpg
│       │   ├── team/
│       │   │   ├── member1.jpg
│       │   │   ├── member2.jpg
│       │   │   └── member3.jpg
│       │   └── clients/
│       │       ├── client1.png
│       │       ├── client2.png
│       │       └── client3.png
│       ├── fonts/
│       │   ├── Inter/
│       │   │   ├── Inter-Regular.woff2
│       │   │   ├── Inter-Medium.woff2
│       │   │   └── Inter-Bold.woff2
│       │   └── FontAwesome.woff2
│       ├── scss/
│       │   ├── _agency-theme.scss
│       │   ├── _variables.scss
│       │   ├── _mixins.scss
│       │   ├── _buttons.scss
│       │   ├── _cards.scss
│       │   ├── _forms.scss
│       │   └── main.scss
│       └── uploads/
│           ├── resumes/
│           ├── contact-forms/
│           └── media/
│
├── src/
│   ├── api/
│   │   ├── wordpress.js
│   │   ├── endpoints.js
│   │   ├── forms.js
│   │   ├── hooks/
│   │   │   ├── actions.js
│   │   │   ├── filters.js
│   │   │   └── index.js
│   │   ├── wordpress-hooks.js
│   │   └── content-loader.js
│   │
│   ├── assets/
│   │   ├── scss/
│   │   │   ├── components/
│   │   │   │   ├── _navbar.scss
│   │   │   │   ├── _footer.scss
│   │   │   │   └── _hero.scss
│   │   │   └── main.scss
│   │   └── images/
│   │       └── placeholder.jpg
│   │
│   ├── components/
│   │   ├── agency/
│   │   │   ├── TeamMember.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── PortfolioGrid.jsx
│   │   │   ├── CaseStudyCard.jsx
│   │   │   ├── Testimonial.jsx
│   │   │   └── ClientLogos.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── buttons/
│   │   │   │   ├── CtaButton.jsx
│   │   │   │   ├── SocialButtons.jsx
│   │   │   │   └── IconButton.jsx
│   │   │   ├── cards/
│   │   │   │   ├── ServiceCard.jsx
│   │   │   │   ├── TeamCard.jsx
│   │   │   │   └── PortfolioCard.jsx
│   │   │   ├── forms/
│   │   │   │   ├── ContactForm.jsx
│   │   │   │   ├── ApplicationForm.jsx
│   │   │   │   └── NewsletterForm.jsx
│   │   │   ├── carousels/
│   │   │   │   ├── TestimonialCarousel.jsx
│   │   │   │   └── LogoCarousel.jsx
│   │   │   ├── modals/
│   │   │   │   ├── VideoModal.jsx
│   │   │   │   └── ContactModal.jsx
│   │   │   ├── ui/
│   │   │   │   ├── Accordion.jsx
│   │   │   │   ├── Tabs.jsx
│   │   │   │   └── ProgressBars.jsx
│   │   │   └── responsive/
│   │   │       ├── ResponsiveContainer.jsx
│   │   │       ├── Visibility.jsx
│   │   │       └── GridAdjuster.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── AgencyLayout.jsx
│   │   │   ├── Header/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── MegaMenu.jsx
│   │   │   │   └── TopBar.jsx
│   │   │   ├── Footer/
│   │   │   │   ├── MainFooter.jsx
│   │   │   │   ├── FooterColumns.jsx
│   │   │   │   └── Copyright.jsx
│   │   │   ├── Sidebar/
│   │   │   │   ├── BlogSidebar.jsx
│   │   │   │   └── ServiceSidebar.jsx
│   │   │   └── PageSections/
│   │   │       ├── Hero.jsx
│   │   │       ├── CtaBanner.jsx
│   │   │       └── PageHeader.jsx
│   │   │
│   │   └── wordpress/
│   │       ├── WPHookRenderer.jsx
│   │       ├── WPActionArea.jsx
│   │       ├── WPFilterContent.jsx
│   │       ├── WPDynamicBlock.jsx
│   │       └── WPShortcodeRenderer.jsx
│   │
│   ├── contexts/
│   │   ├── WordPressContext.jsx
│   │   ├── FormContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useWordPress.js
│   │   ├── useServices.js
│   │   ├── usePortfolio.js
│   │   ├── useFormSubmit.js
│   │   ├── useWordPressHooks.js
│   │   └── useDynamicContent.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Hero.jsx
│   │   │   ├── ServicesPreview.jsx
│   │   │   ├── FeaturedWork.jsx
│   │   │   └── HomePage.jsx
│   │   ├── About/
│   │   │   ├── AboutHero.jsx
│   │   │   ├── OurStory.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   ├── Values.jsx
│   │   │   └── AboutPage.jsx
│   │   ├── Services/
│   │   │   ├── ServicesList.jsx
│   │   │   ├── ServiceDetail.jsx
│   │   │   └── ServicesPage.jsx
│   │   ├── Work/
│   │   │   ├── PortfolioGrid.jsx
│   │   │   ├── FilterControls.jsx
│   │   │   ├── WorkDetail.jsx
│   │   │   └── WorkPage.jsx
│   │   ├── CaseStudies/
│   │   │   ├── CaseStudyList.jsx
│   │   │   ├── CaseStudyDetail.jsx
│   │   │   └── CaseStudiesPage.jsx
│   │   ├── Blog/
│   │   │   ├── BlogList.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   ├── BlogSidebar.jsx
│   │   │   └── BlogPage.jsx
│   │   ├── Careers/
│   │   │   ├── CareersList.jsx
│   │   │   ├── JobDetail.jsx
│   │   │   ├── ApplicationForm.jsx
│   │   │   └── CareersPage.jsx
│   │   ├── Contact/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── LocationMap.jsx
│   │   │   ├── ContactInfo.jsx
│   │   │   └── ContactPage.jsx
│   │   └── 404/
│   │       └── NotFoundPage.jsx
│   │
│   ├── templates/
│   │   ├── service/
│   │   │   └── ServiceTemplate.jsx
│   │   ├── portfolio/
│   │   │   └── PortfolioTemplate.jsx
│   │   ├── case-study/
│   │   │   └── CaseStudyTemplate.jsx
│   │   └── job/
│   │       └── JobTemplate.jsx
│   │
│   ├── utils/
│   │   ├── formValidators.js
│   │   ├── portfolioFilters.js
│   │   ├── richTextParser.js
│   │   ├── wp-hooks.js
│   │   ├── content-sanitizer.js
│   │   └── api-helpers.js
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.scss
│
├── wordpress/
│   ├── hooks/
│   │   ├── actions.php
│   │   ├── filters.php
│   │   ├── content-hooks.php
│   │   └── deployment-hooks.php
│   ├── deployment/
│   │   ├── deploy-hooks.sh
│   │   ├── sync-content.sh
│   │   ├── update-config.sh
│   │   └── rollback.sh
│   └── config/
│       ├── wp-config-overrides.php
│       └── react-integration.php
│
├── .env
├── .env.production
├── .env.development
├── .wordpressconfig
├── package.json
├── package-lock.json
├── webpack.config.js
├── babel.config.js
├── postcss.config.js
├── README.md
└── CHANGELOG.md"
  