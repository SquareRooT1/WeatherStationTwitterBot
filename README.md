# IOT Workshop 
This project aims masure sensor data and Share this data in Twitter.

### Requirments 
#### 1. Esp8266 
*  Esp8266 Lib - <return>
You have to install esp8266 board to Arduino ide.
    
    Boards menager link :http://arduino.esp8266.com/stable/package_esp8266com_index.json
    If you want more detail, Details are in https://github.com/esp8266/Arduino.
*  Dht11 & Adafruit Sensor Lib 

    You need to download Dht11 library in here https://github.com/adafruit/DHT-sensor-library and import it to arduino libraries.
    If you get an error about Adafruit_sensor.h not found you can download it from 
    here https://github.com/adafruit/Adafruit_Sensor .
* Adafruit Mqtt Lib
   
    Adafruit mqtt library link https://github.com/adafruit/Adafruit_MQTT_Library
#### 2. Nodejs 
 
 You need to have Nodejs and Npm for run the node application. <return>
 You can check for runing this commands
 ```
    node -v // Example output  v6.6.0   your version might be different
    npm -v  // 4.2.0
 ```
If you have nodejs installed in your computer. open command line and go to project directory. Run this command.
```
    cd NodeJS & npm install
```

#### 3. Adafruit

    Register https://io.adafruit.com/ and create feeds which name with 
    "temperature" and "tweet" .

#### 4. Twitter

    Go to https://apps.twitter.com/ and create an application. 

    Get your consumer_key and Access_token


