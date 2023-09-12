# Next13 Intro
    - Static
    - Dynamic
    - Incremental Static Regenration

## Features
 App routing-
    1.Special files
        Naming convention-Strict
        -not-found.jsx
            for creating not found page
            you can call it anywhere in your next app by the function name notFound();
        -layout.jsx
            for creating layouts for different sections
        -loading.jsx
            for loader purposes (though all the async ops would be done only on server side and client would not be seeing this)
        -"use client"
            for rendering the component on the client side
        -error.jsx
    
2.Server Side Components and Client Side components
        1.Make a different component folder for third party components which may be using hooks like useEffect useState etc because they need to be called in client component so use the keyword "use client" for all of those components and then use them.
        2.Whenever you are using a component with "use client" then all the child components of that component will be working as client components without using "use client" inside of it i.e. even if these child components are default Server Side components.
        3.However, there is an exception according to which if you render those client components in the layout and if the children components are default server side components then you can pass it inside of those client components and they still would work as server side component.
        4.Passing CS component in SS components would not require anything both will work according to their nature in this case.

3.Navigation 
     Use "Link" tag provide by next for navigation purposes it allows you to avoid hot refresh and navigate instantly
     Pass it "as={Link}" and provide `href="/address"` in the tag or component.
     You can use the three hooks useRouter , usePathname, useSearchParams.
    
4.Static Generation
    You can call your api in this type of generation and it will be called on the server side during the development mode and then after building the production mode it wont be called again instead caching will be done and no more calls will be made

 5.Dynamic or Server Side Rendering
    It can be used by various methods 
        1.using revalidate = 0;
        2.using cache:"no cache" in the api calls that you are making
    
6.Incremental Static generation
    It can be done using the revalidate = x (seconds),
    It will call the method only after x seconds and refresh the caching by calling it on the server side every x seconds when triggered by the client

7.Dynamic route paths
    Suppose you want to genereate a page using the params you can just use {params:PARAM} in the parameter of a component and it will get the param and you can generate data accordingly and naming convention would follow as same in page router- [name]-> page.js , the name will again be of folder here and the page.js file would be inside of it.

8.Generate Static Params
    To generate static pages for some predefined params you can use generateStaticParams() (strict spellcheck) and return the array of predefined params here

9.Dynamic Params and MetaData
        1.Params that were not predefined to be generated statically would still be fetched and rendered on first access and then cached for subsequent requests but if you want them to be not generated or you wanna disable it you can use "export const dynamicParams=false"
        2.Use generateMetaData() for generating dynamic meta data
        3.For generating meta data based on the response of the request that is made, we have to call generateMetaData() asynchronously and call the same request there and get the response, the catch over here is that one might think that we are making the same request call again (one in our component and other in generateMetaData) but Next13 handles this by caching the call automatically for the fetch 

10.SWR library for requests
TBC 11.call apis through API route when doing csr 






    



        
