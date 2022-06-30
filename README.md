# Smart-Dustbin-System

In this project the smart dustbin management system for buildings is required that uses
ultrasonic sensors and moisture sensors on each dustbins to show the current status of garbage
on the GUI. The ultrasonic sensor measures the distance between the objects using sound
waves and is attached at the cover and moisture sensor checks if the garbage is wet or dry. This
system will check the status and send the message to the admin that Dustbin is full, then
message is sent to the collection van then garbage collection is done, if the Dustbin is not
cleaned in particular time then message is sent to higher authority and they will take
appropriate action on it.

## Installation

1. Install Node.js and NPM on Windows

2. Open The Folder in Vs Code and go to index.js file

3. To initialize the server write the following command

```bash
  npm init
```

and fire up the server.

4. Install Express

```bash
npm install express
```

Node_Modules folder will appear while installing express which has a lot of JS and
JSON files; these are multiple NPM modules or NPM libraries, packages that are
required to run express.js.

5. Install Template Engine

```bash
npm install ejs
```

6. Download the MongoDB MSI Installer Package download the current version of MongoDB and package server.
   https://www.mongodb.com/download-center/community

   (i) Install MongoDB with the Installation Wizard

   a. Click Next to start installation.

   b. Accept the licence agreement then click Next.

   c. Select the Complete setup.

   d. Select “Run service as Network Service user” and make a note of the data directory, we’ll need this later.

   e. Click Install to begin installation.

   f. Hit Finish to complete installation.

(ii) Setup Alias Shortcuts for Mongo and Mongod Once installation is complete, we’ll need to set up MongoDB on the local system.

a. Open Start

b. Type Environment Variables and click on edit environment variables and path

c. Inside System variables, click on path

d. In the next window click on new.

e. Add a new path
C:\Program Files\MongoDB\Server\{MongoDB Version}\bin

Where MongoDB Version is the mongoDB version installed on your system

For e.g.

C:\Program Files\MongoDB\Server\4.1\bin

(iii) Verify That Setup was Successful

Check by mongo --version or mongod --version

7. Install Moongoose

```bash
npm install moongoose
```

8. Go to The Project Directory and Command

```bash
npm start
```

9. Project is Live at Local Host : 8000
