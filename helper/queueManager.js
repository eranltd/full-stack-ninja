
var globalQueuesHolder = {}//{"eran":["A","B","C"]} //lives as long as app lives

exports.getNextQueueMessage = (queueName) => {
    console.log(`Getting next message for ${queueName}`)
    // console.log(globalQueuesHolder);
    const nextMSG = globalQueuesHolder[queueName]?.pop();
    return nextMSG;
};

exports.appendNextQueueMessage = (queueName,msg) => {
    // console.log(globalQueuesHolder);
    if(!globalQueuesHolder[queueName]){
        globalQueuesHolder[queueName] = [];
    }

    console.log(`Adding ${msg} MSG to ${queueName}`)
    globalQueuesHolder[queueName]?.push(msg)
    return true;
};

exports.isQueueEmpty = (queueName) =>{ //TODO : can use inside the other method.
    return !globalQueuesHolder.queueName;
}