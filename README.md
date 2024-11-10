# create nextJs : npx create-next-app@latest [project-name] 
 - to run the application : npm run dev 

# route : 

- layout : is the main entry of the application-> apply or share throughout  the application- simply takes all the children
- page.js : represent the home page of the application .  
- global.css : apply style to the entire app

# rendering : 

- Next by default render as server component. 
  . example : export default function Home()

- if you want to render as client component , you have to define on the top of the class like : 
  . 'use client'

- when you use state or hook or other client side solution management in react, you have to use 'use client' as declearation as a must. 

# Client side Vs Server side component : 

- checkout : https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns