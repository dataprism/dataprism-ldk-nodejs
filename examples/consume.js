process.env.DP_BROKER_LIST = "kafka1.dp1.oeni.vrt.be:9092";
process.env.DP_GROUP_ID = "consume_test_logic";

const Platform = require('../platform');
const platform = new Platform();

const stream = platform.getStream("chartbeat_raw");

stream.forEach(message => {
    console.log(message);
});

//start the stream
//(wait for the kafka consumer to be ready)
stream.start();