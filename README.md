# Hydrogen template: Skeleton

#Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 18.0.0 or higher

```bash
npm create @shopify/hydrogen@latest
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Setup for using Customer Account API (`/account` section)

Follow step 1 and 2 of <https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development>

## Deployment

After deploying your app, it may take a few minutes for your content to appear live.  
If you see a message like:

> Your web app is live, but we don’t have your content yet. If you’ve already deployed, it could take up to 5 minutes for your content to show up, so come back soon.  
> Built with NodeJS

This is normal immediately after deployment.  
If you haven’t deployed yet, use your deployment center to publish code or set up continuous deployment.

## Deploying to Azure

To deploy this Hydrogen app to Azure App Service:

1. **Build your app locally:**
   ```bash
   npm run build
   ```
2. **Set the correct start command in Azure:**
   - En la configuración de Azure App Service, establece el comando de inicio a:
     ```
     npm run start
     ```
   - O asegúrate de que tu archivo `package.json` tenga un script `"start"` que lance tu servidor Remix/Hydrogen.
3. **Configura la carpeta de salida:**
   - Asegúrate de que Azure apunte a la carpeta correcta (por ejemplo, `dist` o `build`).
4. **Variables de entorno:**
   - Configura todas las variables de entorno necesarias en Azure Portal (por ejemplo, claves de Shopify, etc).
5. **Logs y troubleshooting:**
   - Si ves el mensaje "Your web app is live, but we don’t have your content yet", revisa:
     - Que el build se haya completado correctamente.
     - Que el script de inicio esté bien configurado.
     - Los logs de Azure App Service para errores.

**Más información:**  
[Deploy Node.js apps to Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode)

**Troubleshooting:**  
If this message persists for more than 5 minutes after deployment:

- Ensure your build output is in the correct directory (e.g., `dist` or `build`).
- Verify your deployment configuration points to the correct output folder.
- Check deployment logs for errors.
- Make sure all dependencies are installed and your build completes without errors.
- Restart your deployment if necessary.
