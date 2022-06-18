## Football Manager App

A football Manager App is an app that help football manager to manage their team. It gives them manager ability to add players by importing .cvs file and can also deleted or updated a team.

# You can checkout live here [Football Manager](https://62ad1c48e486900fb177ad32--serene-kataifi-e8d8ea.netlify.app/)

## Features

# Roster Details (Roster Table, Search and Team Name)

- Importing and Re-importing teams using .csv file format
  NB :- Error will shown if the file contains empty cell.

- Search for team using either Player Name, Position or Nationality.

- Editing a player, user can edit a player.

- Deleting a player, user can delete any player.

# Formation Overview (Pitch overview and Player Details)

- The 4-3-3 formation will display on the field.
  NB: You can only see the formation if the .csv contains starters with 1 goalkeeper and 4-3-3 defenders, midfielders and forwards respectively if not an appropriate error will display.

- Player Details will be shown after by click on each player (goalkeeper will be showing by default).
  NB: Goalkeeper details will contains (Clean Sheets and Saves) while other positions (Goals and Assists)

NB: Conditions for Formation overview

1. There is a roster;
2. There are enough starters;
   => Goalkeeper, of which **one** is required;
   => Defender, of which **four** are required;
   => Midfielder, of which **three** are required;
   => Forward, of which **three** are required;
3. There aren’t too many starters;

## Stacks

- Reactjs(Nextjs although nextjs doesn't effect but was used because I thought there will be routing)
- Styled-Component and evergreen-ui
- React Context Api (useContext and useReducer) for state management.

NB: check below to see the details of how to start the project.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
