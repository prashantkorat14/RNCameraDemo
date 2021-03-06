<p align="center">
    <img alt="React Native Template Obytes" src="https://user-images.githubusercontent.com/11137944/93101697-808bc580-f6a2-11ea-8ce3-482be6ca456a.png" width="200" />

</p>
<h1 align="center">
  React Native Template Obytes
</h1>

๐ฑ A template for your next React Native project ๐, Made with developer experience and performance first: TypeScript, Husky, Lint-Staged, react-navigation, react-query, restyle, react-hook-form, AppIcon, Splash Screen.

๐ Use the template to start your next project or navigate to [code source](https://github.com/obytes/react-native-template-obytes/tree/master/template) to get some inspiration ๐

### โญ Features

- โ Last React Native version
- ๐ Type checking [TypeScript](https://www.typescriptlang.org/)
- ๐ Minimal UI kit using [@shopify/restyle](https://github.com/Shopify/restyle) with theming
- ๐ค Auto generate App Icon using [react-native-make](https://github.com/bamlab/react-native-make) and Splash screen using [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash/)
- ๐ฆ Husky for Git Hooks
- ๐ก Clean project structure with Absolute Imports
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ VSCode recommended extensions configuration
- โ๏ธ [React Navigation](https://reactnavigation.org/) pre-installed with examples
- ๐ซ Auth flow with [zustand](https://github.com/pmndrs/zustand) and [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) as a storage to save sensitive data.
- ๐  A simple workflow to build, release and distribute your application using [Github action](https://github.com/features/actions)
- ๐ฅ [React Query](https://react-query.tanstack.com/) & [axios](https://github.com/axios/axios) to fetch Data
- ๐งต A good approach with example to handle forms based on [react-hook-form](https://react-hook-form.com/) and [yup](https://github.com/jquense/yup) for validation
- โ๏ธ Handel environment variables with [react-native-env](https://github.com/goatandsheep/react-native-dotenv)
- ๐ฏ Localization

### ๐ค Philosophy

- ๐ Production-ready
- ๐งฉ Minimal code
- โ ๏ธ well maintained third-party libraries

### ๐  Requirements

- [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

### ๐ค Getting started

Start your project using obytes template by running:

```
npx react-native init MyApp --template https://github.com/obytes/react-native-template-obytes
```

Open the project on your favorite IDE (vscode ๐)

```sh
src
โโโ api                    #axios client and api hooks using react-query
โย ย  โโโ APIProvider.tsx
โย ย  โโโ client.tsx
โย ย  โโโ index.tsx
โย ย  โโโ useAddTask.tsx
โย ย  โโโ useTasks.tsx
โโโ core                   # core functionalities:authentication, storage, localization
โย ย  โโโ Auth
โย ย  โโโ I18n
โย ย  โโโ index.tsx
โโโ index.tsx
โโโ navigation             # Navigation, stacks and tabs
โย ย  โโโ AuthNavigator.tsx
โย ย  โโโ RootNavigator.tsx
โย ย  โโโ TabNavigator.tsx
โย ย  โโโ index.tsx
โย ย  โโโ types.tsx
โย ย  โโโ utils.tsx
โโโ screens                # App screens
โย ย  โโโ Home
โย ย  โโโ Login
โย ย  โโโ Style
โย ย  โโโ index.tsx
โโโ translations          # translation files
โย ย  โโโ en.json
โโโ ui                    # ui component with theming
    โโโ Button.tsx
    โโโ ErrorHandler
    โโโ Input.tsx
    โโโ Pressable.tsx
    โโโ SafeAreaView.tsx
    โโโ Screen.tsx
    โโโ Text.tsx
    โโโ View.tsx
    โโโ constants.tsx
    โโโ icons
    โโโ index.tsx
    โโโ theme
    โโโ utils.tsx
```

Enable husky Git pre-hooks by adding the following script to your `packages.json` and reinstall dependencies to enable husky pre-commit using `yarn install`

```json
   "scripts": {
      "postinstall": "husky install",
    },
```

### ๐งฉ Customization

#### ๐ฒ Update App Icon & Splash screen

Replace App logo template `logo.png` with your logo under `assets` folder

Run the following command to generate App icons assets :

```
yarn react-native set-icon  --path ./assets/logo.png --background "#FFF"

```

> For android icon, make sure to provide a logo with more padding and generate a new app icon for android :

```
yarn react-native set-icon  --platform android  --path ./assets/android_logo.png --background "#FFF"

```

To generate a standard splash screen using bootsplash package.

```sh
yarn react-native generate-bootsplash assets/logo.png \
  --background-color=FFFFFF \
  --logo-width=150 \
  --assets-path=assets
```

#### โ๏ธ Custom fonts

Replace `Inter.ttf` font file with your fonts under `assets/fonts` folder

Run the following command to generate App icons assets :

```
yarn react-native link
```

More details [how to customize App Icon and Splash screen](https://handbook.obytes.com/docs/mobile/generate-app-icon)

### ๐ Read More About Modules

๐ https://handbook.obytes.com/docs/mobile/get-started

### Releasing and building the app with Github action

๐ https://handbook.obytes.com/docs/mobile/ci-cd/github-action-build

### ๐ License

This project is MIT licensed.
