**DEVTINDER** 

- Create a Vite + React application
- Install Tailwind css
- Install DaisyUI
- Install react-router-dom
- Create BrowserRouter>Routes>Route=/Body>RouteChildren
- Create an Outlet in Your Body Component

- create a footer
- create a Login Page
- install axios (npm i axios)
- CORS - install cors in backen =>add middleware to with configuration : origin:(where the port frintend is running),credentials:true
- Whenever you're making API call so pass axios=>{withCredentials:true}

- install react-redux and @reduxjs/toolkit
- create configureStore 
- add Provider to app.jsx
- create userSlice and add reducer to store
 
- add redux devtool extension to chrome
- Login and see if your data is coming to store

# deployement
- create AWS account or signup
- create instance or launch instance

- go to downloads right click on .pem file and open security tab and go to advanced then disable inhereitence and remove all files like (system,administrator) except your mail id or (username)

- open powershell/terminal 
 -cd downloads
 -use this command(ssh -i "uday-devTinder.pem" ubuntu@ec2-13-53-212-82.eu-north-1.compute.amazonaws.com)
 -install node js 

- git clone (from github (both frontend and backend))
- frontend deployement on aws
 - cd devtinder-frontend
 - npm install
 - npm run build
 - sudo apt update
 - sudo apt install nginx
 - sudo systemctl start nginx
 - sudo systemctl enable nginx
 - copy code from dist (build files) to /var/www/html
 - sudo scp -r dist/* /var/www/html
 - enable port :80 of our instance

- backend deployement
 - cd DevTinder
 - npm install
 - npm run start
 - allowed ec2 instance public IP on mongodb server
 - sudo npm install pm2 -g (for running our application 24/7 online)
 - to see logs(pm2 logs)
 - to list (pm2 list)
 - to stop (pm2 stop <name>)
 - to flush (pm2 flush <name>)
 - to delete (pm2 delete <name>)

-sudo nano /etc/nginx/sites-available/default
 - nginx config
  location /api/ {
        proxy_pass http://127.0.0.1:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
 - server_name 13.53.212.82;
 - restart nginx (sudo systemctl restart nginx  )

 - update our BASE_URL in constants to "/api"