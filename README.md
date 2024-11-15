# create nextJs : npx create-next-app@latest [project-name]   /yarn create next-app

- to run the application : npm run dev  / yarn run dev

# route :

    - layout : is the main entry of the application-> apply or share throughout  the application- simply takes all the children

    - page.js : represent the home page of the application .

    - global.css : apply style to the entire app

    - name of the folder consider as a route

# dynamic route :

    - we would wrap it in the [] bracket , example : [postId]

# rendering :

    - Next by default render as server component.
    . example : export default function Home()

    - if you want to render as client component , you have to define on the top of the class like :
    . 'use client'

    - when you use state or hook or other client side solution management in react, you have to use 'use client' as declearation as a must.

    - normally, let nextJs do its thing (server rendering)

    - when you want to use some React capibilities (useState, Interactivity(onClick, onChange), useEffect) use client side  component

# Client side Vs Server side component :

    - checkout : https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

# data fetching :

    1. server side redering (SSR) : dynamic server render data, fetch fresh in each data, encsuring that the data is always up-to-date

    2. Static side generation (SSG) : default of NextJs which is store and cache data, better performance for static content

    3. Incremental Static Generation (ISR) : commbination of SSR and SSG, which provide revalidate time to fetch.
         -> example : {next: {revalidate: 10}}

# keywords :

- params : used for take id from the dynamic route

- async/await :
  . Async : make a function return a promise
  . Await : makes an aysnc function wait for a promise

# Route :

    - route handlers : are defined in routes.js file inside the app directory

    - route  handlers : can be nested inside the app directory,
                    but it cannot be a route.js file at the samme route segment levels as page.js


    - Supported Http method : GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS

    - if an unsupported is called, NextJs will return a 405 Method Not Allowed response

    - to use route and page.js : api/res

# we will use prisma for set up database and fetch data :

        - add prisma to our project : npm install prisma --save-dev

        - we initialize Prisma : npx prisma init

# .env

- DATABASE_URL="postgresql://postgres:12345@localhost:5432/student?schema=public" ==> (use postgres as our database by put username => postgres and password => 12345)

# to create data in Next using prisma :

- commannd : npx prisma migrate dev

# to create table : we write in schema..prisma

- example : model student {
  id Int @id @default(autoincrement())
  student_name String
  dob String
  email String
  }

- to push this table to postgres : npx prisma db push

- install prisma client : npm install @prisma/client / prisma generate

- @prisma/client : this is a type safe database client tialored to your database schema (defined in schema.prisma)

# src

- we have to create prisma folder there
  example : src/prisma/prisma.js

- in prisma.js we have

  import {PrismaClient} from "@prisma/client";
  const {prisma} = new PrismaClient();

# HTTP method :

- when GET by id , we need two parameter :
  1. request
  2. id
     example : export aysnc function GET(request, {params:{id}})

# request-response lifecycle :

1. user action : user interacts with a web application. this could be link, submit, form or url

2. Http Request : the clients sends a HTTP request to the server that contains necessary info about what resource are being request, what method is being used(POST, GET, DELETE)

3. server : processes the request and response with a appropriate resource.

4. HTTP response : server sent the hhtp response back to the client

# Data Fetching :

- fetching data on the Server with fetch() -> to fetch data from api -> calling api to get data to display in ui

- caching : ចាប់ data yg tuk, set into its data-cache

- revalidate : revalidate tag is used with Incremental Static Regeneration (ISR) to specify how often a page should be revalidated, ensuring that stale data is updated at the specified interval

- to use fetch(), we use it with aysnc and await 

   . aysnc : give promise to next  to wait (wait for api to query data)
   . await : return the promise as array ojbect


# src/services : ផ្ទុក code ដែល fetch data from api

# async and await : is not yet supported in client component, only in server component 

#  catching : 
    By default, NextJs will automatically cache our data. 

# To get id from the input : 

  - we use parameter that called {params}

# to update when ever we change value or refresh, we use :

  {
    cache : "no-store",  : always get  a new data , clear cache
    cache : "no-cache", : it check if it used to store
  }


# Server action 

- javascript or function basically, it runs on client side, so to make it run on server side, you have to use server action. 

-  running functionn on server action, it increase security. like token , something like that. 

- to get function running on server, we can use 'use server' on top of the class. 

- to get value from user input, we use onChange() 

- with server action, you dont have to use onChange () or onClick anymore. 

-  with Server Action, we use # action = {} instead of onSubmit

# input : 

- server action take user input through name attribute 

exammple : <input
             type="text"
             id = "customerName"  
             name= "customerName">   //dak tam api bos yg 
           </input>


# revalidate tags : use for trigger our website to  real time updates and only can use on server actions 



