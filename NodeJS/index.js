var Twitter = require('twitter');
var mqtt = require('mqtt');
var topicPrefix = 'Frozen/feeds/';
var tweetTopicName = topicPrefix+'tweet';
var temperatureTopicName = topicPrefix+"temperature";
var userCount = 0;
var queue = [];

//Mqtt connection
  var mqttClient = mqtt.connect('mqtts://io.adafruit.com',{
    port: 8883,
    username: 'Frozen',
    password: '70b6668f4477431ab6568661861558ec'
  });


//Twitter Connection
var client = new Twitter({
    consumer_key: 'WLDFrCh7VM6WMGmPka9nIUinl',
    consumer_secret: 'qX4eUqmSEu3JUQyQE6c8wZosaPTmw2r1JHwh85EPaLO19Gqadk',
    access_token_key: '3086105097-90VkaC1XKlDuGZsVJ58fQbGTyKysv6rYGElQ68r',
    access_token_secret: 'eYSjU7DXUFsiMEju1NLBzXSAjyPZNw6XQj8UMQVVrDdSM'
  });
  
  var params = {screen_name: 'nodejs'};
  
  

  mqttClient.on('connect', () => {
    console.log("Mqtt Client Connected...")
    mqttClient.subscribe(tweetTopicName)
    mqttClient.subscribe(temperatureTopicName)
  });

  mqttClient.on('error', (error) => {
    console.log('MQTT Client Errored');
    console.log(error);
  });

  mqttClient.on('message', function (topic, message) {

      if(topic === temperatureTopicName) {
      //  console.log(message.toString()); // for demo purposes.
            for (let replyTweet of queue){

              var tweetMessage =  "Merhaba " +replyTweet.username + " Şuanki hava sıcaklıgı "+parseInt(message.toString()) +" C dir.";
              replyToTweet(replyTweet.id, replyTweet.screen_name, tweetMessage);
            }
                queue = [];
              //queue.slice(0,1);
            }
        });





//Full text search
var stream = client.stream('statuses/filter', {track: '#technosmm'});



stream.on('data', function(event) {
  console.log(event);
  var tweet = {
    id : event.id_str,
    text: event.text,
    username : event.user.name,
    screen_name: event.user.screen_name
  }
  queue.push(tweet);
  console.log(event.user.name,`(${event.user.id}) : `, event.text, " --- Tweet id is :" ,event.id);
  mqttClient.publish(topicPrefix+'tweet',"tweet");
 
});

stream.on('error', function(error) {
  throw error;
});

// -----------------Send tweet example --------------

// client.post('statuses/update', {status: 'I Love Twitter'})
// .then(function (tweet) {
//   console.log(tweet);
// })
// .catch(function (error) {
//   throw error;
// })

var retweet = (tweetId) => {
    client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }else{
            console.log("error",response.body)
        }
      });
}

var replyToTweet = (tweetId,username, message) => {
    var tweet = '@' + username + ' ' + message ;
    client.post('statuses/update',{status :tweet , in_reply_to_status_id : tweetId}, function(error,tweet,response){
        if(!error){
            // console.log(tweet);
            console.log("Sent tweet : ", tweet);
        }else{
            console.log("error", response.body);
        }
    })
}