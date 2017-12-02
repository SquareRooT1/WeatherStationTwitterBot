# IOT Workshop 
This project aims measuring sensor data and sharing it in twitter.

### Requirements 
#### 1. Esp8266 
*  Esp8266 Lib - <return>
You have to install esp8266 board to Arduino IDE.
    
    Boards manager link :http://arduino.esp8266.com/stable/package_esp8266com_index.json
    for more detail, see the link:  https://github.com/esp8266/Arduino.
*  Dht11 & Adafruit Sensor Lib. 

    You need to download DHT11 library from here https://github.com/adafruit/DHT-sensor-library and import it into Arduino libraries.
    If you get an error about "Adafruit_sensor.h not found" you can download it from 
    here https://github.com/adafruit/Adafruit_Sensor.
* Adafruit Mqtt Lib
   
    Adafruit MQTT library link https://github.com/adafruit/Adafruit_MQTT_Library
#### 2. Nodejs 
 
 You need to have Nodejs and Npm for running the node application. <return>
 In order to make sure that you have both node and npm, execute following commands
 ```
    node -v // Example output  v6.6.0   your version might be different
    npm -v  // 4.2.0
 ```
If you have nodejs installed in your computer, open command line and go to project directory. Run this command
```
    cd NodeJS & npm install
```

#### 3. Adafruit

Register https://io.adafruit.com/ and create feeds which name with 
    "temperature" and "tweet" .

#### 4. Twitter

Go to https://apps.twitter.com/ and create an application. 

Get your **consumer_key** and **Access_token**


