const { KafkaStreams } = require('kafka-streams');
const os = require('os');

class Platform {
    constructor() {
        const config = {
            noptions: {
                "metadata.broker.list": process.env.DP_BROKER_LIST,
                "group.id": process.env.DP_GROUP_ID,
                "client.id": process.env.DP_CLIENT_ID || os.hostname(),
                "event_cb": true,
                "api.version.request": true,
                "compression.codec": "snappy",

                "socket.keepalive.enable": true,
                "socket.blocking.max.ms": 100,

                "enable.auto.commit": false,
                "auto.commit.interval.ms": 100,

                "heartbeat.interval.ms": 250,
                "retry.backoff.ms": 250,

                "fetch.min.bytes": 100,
                "fetch.message.max.bytes": 2 * 1024 * 1024,
                "queued.min.messages": 100,

                "fetch.error.backoff.ms": 100,
                "queued.max.messages.kbytes": 50,

                "fetch.wait.max.ms": 1000,
                "queue.buffering.max.ms": 1000,

                "batch.num.messages": process.env.DP_BATCH_NUM_MESSAGES || 10000
            },
            tconf: {
                "auto.offset.reset": process.env.DP_AUTO_OFFSET_RESET || "earliest",
                "request.required.acks": 1
            }
        };

        this.factory = new KafkaStreams(config)
    }

    getStream(topic) {
        return this.factory.getKStream(topic)
    }

    getTable(topic) {
        return this.factory.getKTable(topic, (message) => message)
    }
}

module.exports = Platform;