Web Controlled Lamp
=============

This is a resin.io supercharged app, which allows you to control a simple desk lamp from the internet using a rasperry pi.

This code has been borrowed heavily from this:
http://www.openhomeautomation.net/control-a-relay-from-anywhere-using-the-raspberry-pi/
The original author deserves all the credit, all I have done is tweak his code and resinify it.

###Parts:
1. Raspberry pi
2. relay board from http://www.pridopia.co.uk/pi-2803-step.html
3. a lamp

###Hardware setup:
Cut the live wire of the lamp at some point in the cable. Connect the one of the cut ends into the screw terminal on the relay board labelled C.M. (common), connect the other loose end to the terminal labelled N.O. (normally open).

###To run this on a resin.io powered pi, all you need to do is:

1. Go over to alpha.resin.io and sign-up
2. Start a new application
3. download the the application zip and extract it onto your SD card
4. pop the SD card into the pi and power it up, after a few minutes your pi should show up in the resin dashboard.
5. clone down this repo and add the git remote for the pi (copy this from the top right in the pi's dashboard)
6. then just "git push resin master"
7. In the application dash board, click on the little gear icon and add an environment variable called PORT and give it a value of 8000.

Once the pi has downloaded the code and started the app you shoul be able to navigate to http://<your-pis-ip-address>:8000/interface and start turning your lamp on and off.

If you get stuck with anything, go over and look at the resin.io docs at http://docs.resin.io/
