# Dataprism Logic Development Kit

## Introduction
The dataprism logic development kit is used when developing and running logics inside the dataprism platform.

## Usage
```
const Platform = require('@dataprism/ldk');
const platform = new Platform();

const stream = platform.getStream("my_kafka_topic");

stream.forEach(message => {
    console.log(message);
});

stream.start();
```

## Configuration
The following configuration parameters can be provided:

- **DP_BROKER_LIST** - The list of kafka nodes, including their ports. For example "localhost:9092"
- **DP_GROUP_ID** - The unique group id. The group id links multiple instances of the same logic together and makes sure the kafka messages are distributed between the members of the group
- **DP_CLIENT_ID** - The unique client id, used to identify this logic. If not set, this will default to the hostname
- **DP_BATCH_NUM_MESSAGES** - The number of messages which need to be batched before sending them to the kafka cluster
- **DP_AUTO_OFFSET_RESET** - The kafka offset reset strategy

All these parameters are provided by the dataprism platform if the application is ran as a logic.