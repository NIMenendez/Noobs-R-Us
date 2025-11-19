# 🏎️ Noobs-R-Us Website

Welcome to the official repository for the **Noobs-R-Us** Sim-Racing community website.

This project is built using **[Astro](https://astro.build/)**, designed for speed and a modern developer experience.

## 🛠️ Technologies Used

* **Framework:** [Astro](https://astro.build/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Package Manager:** [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Ensure you have the following installed in your local environment:

* **Node.js** (v18.14.1 or higher recommended)
* **pnpm** (install globally via `npm install -g pnpm`)

## ⚙️ Environment Configuration

To run this project, you need to configure the environment variables.

1.  Create a `.env` file in the root directory (based on `.env.example` if available).
2.  Add the following variable:

    ```env
    PUBLIC_STRAPI_URL=your_strapi_api_url_here
    ```

    > **Note:** Ask the project maintainers for the correct development URL if you don't have a local Strapi instance running.

## 🚀 Getting Started

Follow these steps to get the project running on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/NIMenendez/Noobs-R-Us.git](https://github.com/NIMenendez/Noobs-R-Us.git)
    cd Noobs-R-Us
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm dev
    ```

    The app should be running at `http://localhost:4321`.

## 📜 Available Scripts

Inside the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the local development server with hot reloading. |
| `pnpm build` | Builds the production-ready site into the `dist/` directory. |
| `pnpm preview` | Previews the production build locally. |
| `pnpm astro check` | Runs diagnostic checks (TypeScript). |

## 📂 Project Structure

A quick look at the main directory structure:

```text
/
├── public/           # Static assets (images, fonts, robots.txt)
├── src/
│   ├── components/   # Reusable UI components
│   ├── layouts/      # Page layouts
│   └── pages/        # Site routes (index.astro, about.astro)
├── astro.config.mjs  # Astro configuration
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── .env              # Environment variables (git-ignored)
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

Before contributing, please review the [LICENSE.md](LICENSE.md) file for details on permissions and restrictions regarding the use of this code.

1. Fork the repository.

2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).

4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is source-available for contribution but is proprietary software. Usage, distribution, or replication of this website for other communities or purposes is strictly prohibited without explicit permission.