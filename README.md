# ionic-angular

FrontEnd App comunicación Api Rest con inmobiliaria
Backend Api CodeIgniter

Ionic:

   Ionic CLI                     : 6.20.4 (/usr/local/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 6.4.1
   @angular-devkit/build-angular : 15.0.4
   @angular-devkit/schematics    : 15.0.4
   @angular/cli                  : 15.0.4
   @ionic/angular-toolkit        : 6.1.0

Capacitor:

   Capacitor CLI      : 4.6.1
   @capacitor/android : 4.6.1
   @capacitor/core    : 4.6.1
   @capacitor/ios     : 4.6.1

Utility:

   cordova-res : not installed globally
   native-run  : 1.7.1

System:

   NodeJS : v16.19.0 (/usr/bin/node)
   npm    : 9.2.0
   OS     : Linux 5.15


Debugger VsCode
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Serve to the browser (Ionic Serve)",
            "type": "cordova",
            "request": "launch",
            "platform": "serve",
            "target": "chrome",
            "cwd": "${workspaceFolder}",
            "devServerAddress": "localhost",
            "sourceMaps": true,
            "ionicLiveReload": true
        }
    ]
}