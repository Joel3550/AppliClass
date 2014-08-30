
      function print(textToPrint) {
         
         if (qz != null) {
            qz.append(textToPrint); 
            //qz.append(chr(27) + chr(105));           
            qz.print(); // send commands to printer

         }
   
      }
 
      // Gets the current url's path, such as http://site.com/example/dist/
      function getPath() {
          var path = window.location.href;
          return path.substring(0, path.lastIndexOf("/")) + "/";
      }
      
 
      function chr(i) {
         return String.fromCharCode(i);
      }
      
      
      /**
       * By default, jZebra prevents multiple instances of the applet's main 
       * JavaScript listener thread to start up.  This can cause problems if
       * you have jZebra loaded on multiple pages at once. 
       * 
       * The downside to this is Internet Explorer has a tendency to initilize the
       * applet multiple times, so use this setting with care.
       */
      function allowMultiple() {
          
          if (qz != null) {
              var multiple = qz.getAllowMultipleInstances();
              qz.allowMultipleInstances(!multiple);
              alert('Allowing of multiple applet instances set to "' + !multiple + '"');
          }
      }
   