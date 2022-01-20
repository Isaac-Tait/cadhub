Hello 👋


We are happy that you are checking out how to contribute.
Here you will find a break down of the tech we are using,

If you would like to get involved one of the best ways is to drop by the [discord](https://discord.gg/SD7zFRNjGH), say hi and let us know you are interested in contributing. All are welcome.

## Tech used

### Redwood
CadHub is a [RedWood app](https://redwoodjs.com/). Simplistically this means its a React frontend, using a serverless GraphQL backend with Prisma.
We are also using [TailwindCSS](https://tailwindcss.com/) to style the app.
To learn more about Redwood, here are some useful links:
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Cad Packages
Because each CadPackage is its own beast we opted to use Docker in order to give us lots of flexibility for setting up the environment to run there packages. The containers are run using AWS's container Lambda and deployed using the serverless framework (JSCAD is an exception since it runs client-side). See [our docs](https://learn.cadhub.xyz/docs/general-cadhub/integrations) for more information of how this is setup.

## Getting your dev environment setup


Clone the repo, then `cd` in the repo **and** app directory (the docs directory is for [learn.cadhub](https://learn.cadhub.xyz/))
```
cd cadhub/app
```

Install dependencies
```terminal
yarn install
```

Setting up the db, you will need to have a Postgres installed locally, you can [follow this guide](https://redwoodjs.com/docs/local-postgres-setup).

Before you begin the next step these it is required that the `DATABASE_URL` env variable be set. If you see no result when you run `echo $DATABASE_URL`, you can set it with this command `export DATABASE_URL=postgresql://<yourusername>@localhost:5432/<your db name>?connection_limit=1`

Note: After setting up a local Postgres environment you can enter `psql` and it will return your username. For `<your db name>` you can make it any sensible name, {e.g. cadhub_dev}, that will become the name of the db. Postgres will create the db if it does not exist.

Once the `DATABASE_URL` is set you can run the following:

``` terminal
yarn rw prisma migrate dev
yarn rw prisma db seed
```

Once this is complete you can run `yarn rw dev` and your local environment should be live! Congratulations.

p.s. `yarn rw prisma studio` spins up an app to inspect the db

### Fire up dev
```terminal
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

If you want to access the website on your phone use `yarn redwood dev --fwd="--host <ip-address-on-your-network-i.e.-192.168.0.5>"`

you can sign in to the following accounts locally

localUser1@kurthutten.com: `abc123`

localUser2@kurthutten.com: `abc123`

localAdmin@kurthutten.com: `abc123`

## Designs

In progress, though can be [seen on Figma](https://www.figma.com/file/VUh53RdncjZ7NuFYj0RGB9/CadHub?node-id=0%3A1)

## Docs
Docs are hosted at [learn.cadhub.xyz](http://learn.cadhub.xyz/). It includes a OpenSCAD tutorial at this point, and more is coming. The docs can be found in this repo at [docs](https://github.com/Irev-Dev/cadhub/tree/main/docs)
