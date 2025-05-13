import { error } from 'console';
import { defineConfig } from 'cypress';
 
export default defineConfig({
 
  e2e: {
    pageLoadTimeout: 60000,
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#',
    setupNodeEvents(on, config){
      on("task", {
      })
    }
  },
  env: {
    
  },
  screenshotOnRunFailure: true,
  video: true,
}); 