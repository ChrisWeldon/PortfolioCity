## Overview
The project is live at: https://chriswevans.com

A NextJS webpage developed to showcase some of my projects.

Framework: NextJS ReactJS, with ThreeJS canvas as a backdrop
UI Framework: TailwindCSS
Deployment: NGINX on DigitalOcean servers

The main goal of this project was to combine the aesthetically pleasing view of an anonymous misty city, while conveying some of my software engineering background.

## Showcase

![open_shot](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/open_shot.png)

![projects_menu](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/projects_menu.png)

![menu_closed](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/menu_closed.png)

![menu_open](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/menu_expanded.png)

#### Custom Webhook for tying together DOM scroll and ThreeJS perspective.
The drei scroll hook works well, but had significant limitations when overlaying the whole page. A significant rewrite was required to get it to work

![scrollhook_definition](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/scrollhook_definiton.png)

![scrollhook_window](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/scrollhook_window.png)

![scrollhook_granttile](https://raw.githubusercontent.com/ChrisWeldon/PortfolioCity/main/public/projects/portfoliocity/scrollhook_granttile.png)




## Running Locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

