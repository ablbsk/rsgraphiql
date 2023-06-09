## GraphiQL — final project from Rolling Scope School React (React2023Q1) 

1. Task: [open](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md)
2. Screenshots:
   
   <details>
      <summary>Welcome page</summary>
      <p></p>
      <table>
      <tr>
        <td>Desktop view</td>
        <td>Mobile view</td>
      </tr>
      <tr>
        <td valign="top">
          <img src="https://github.com/ablbsk/rsgraphiql/assets/42908323/c723279f-a956-412b-8d3b-53bcc3070ddd" alt="Starwars welcome page screenshot" width="500" />
        </td>
        <td valign="top">
          <img src="https://github.com/ablbsk/rsgraphiql/assets/42908323/5ef51841-3c0e-4392-9ba7-b4200b580999" alt="Starwars welcome page screenshot" width="250" />
        </td>
      </tr>
     </table>
    </details>
    
    <details>
      <summary>Auth page</summary>
      <p></p>
      <table>
      <tr>
        <td>Desktop view</td>
        <td>Mobile view</td>
      </tr>
      <tr>
        <td valign="top">
          <img src="https://github.com/ablbsk/rsgraphiql/assets/42908323/4c43aee9-9366-435c-995f-de03f232ec7a" alt="Starwars auth page screenshot" width="500" />
        </td>
        <td valign="top">
          <img src="https://github.com/ablbsk/rsgraphiql/assets/42908323/67e081f3-faac-4a4c-b3fd-a96d55a211c8" alt="Starwars auth page screenshot" width="250" />
        </td>
      </tr>
     </table>
    </details>

    <details>
      <summary>Main page</summary>
      <p></p>
      <table>
      <tr>
        <td>Desktop view</td>
        <td>Mobile view</td>
      </tr>
      <tr>
        <td valign="top">
          <img src="https://github.com/ablbsk/rsgraphiql/assets/42908323/76051f79-0d62-43d9-92cd-6ac79a13f1ab)" alt="Starwars main page screenshot" width="500" />
        </td>
        <td valign="top">
          <img src="https://github.com/ablbsk/rsgraphiql/assets/42908323/711e18f2-df55-4c52-94b8-bfa2a1ff4938" alt="Starwars main page screenshot" width="250" />
        </td>
      </tr>
     </table>
    </details>

3. Deploy: [open](https://rs-react-graphql.netlify.app/)   [![Netlify Status](https://api.netlify.com/api/v1/badges/8305be3a-1a11-461f-bc22-96646ce45f6a/deploy-status)](https://app.netlify.com/sites/rs-react-graphql/deploys)
4. Crosscheck final score: 90/90
5. Feature list:
    <p></p>
    <details>
      <summary>Welcome route - 10 points:</summary>
      <p></p>
      <ul>
        <li>The welcome page should contain general information about the developers, project, and course. +2 point</li>
        <li>In the upper right corner there are 2 buttons: Sign In and Sign Up. +2 point</li>
        <li>If login token is valid and unexpired, change the Sign In and Sign Up buttons to the "Go to Main Page" button. +2 points</li>
        <li>When the token expires - the user should be redirected to the "Welcome page" automatically. +3 points</li>
        <li>Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. +1 point</li>
      </ul>
    </details>  
    
    <p></p>
    <details>
      <summary>Sign In / Sign Up - 20 points:</summary>
      <p></p>
      <ul>
        <li>Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be. +5 points</li>
        <li>Client-side validation should be implemented. +10 points</li>
        <li>Upon successful login, the user should be redirected to the Main page. +3 point</li>
        <li>If the user is already logged in and tries to reach these routes, they should be redirected to the Main page. +2 point</li>
      </ul>
    </details>  
    
    <p></p>
    <details>
      <summary>GraphiQL route - 50 points:</summary>
      <p></p>
      <ul>
        <li>Working editor allowing to edit the query. +15 points</li>
        <li>Working documentation explorer, should be visible only when sdl request will succeed. +15 points</li>
        <li>Variables section. Should be closed/opened. +5 points</li>
        <li>Headers section. Should be closed/opened. +5 points</li>
        <li>Response section. +10 points</li>
      </ul>
    </details>  
    
    <p></p>
    <details>
      <summary>General requirements - 10 points:</summary>
      <p></p>
      <ul>
        <li>Localization. +5 point</li>
        <li>Sticky header. +5 points</li>
      </ul>
    </details> 
   
    **Project final score: 90**
