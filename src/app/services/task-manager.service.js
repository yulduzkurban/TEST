import { tasks } from '../../assets/mocks/tasks.js';

export class TaskManagerService {
  constructor() {}

  getTasks() {
   

   const authHeaderValue = "admin:admin"

   const options = {
     headers: {
       'Authorization': 'Basic ' + btoa(authHeaderValue)
     }
   }

   return fetch('http://localhost:8081/task', options) // Use a port of your locally started back-end application
     .then(response => response.json())
     .then(json => json.items);
  }
}
