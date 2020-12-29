// const slugify = require('slugify');
// const formidable = require('formidable');
// const uuidv4 = require('uuid/v4');
// const fs = require('fs');

const { getNextQueueMessage, appendNextQueueMessage } = require('../helper/queueManager');

exports.getQueue = (req, res) => {
    console.log(req.params)
    const { queue_name, timeout } = req.params;
    console.log(`Getting next message for ${queue_name}`)

    let nextMSG = undefined;
    let second = 1000;

    let msSeconds = timeout ?? 10000;
    let seconds = msSeconds / 1000;

    let tryfetchMessage = setInterval( () => {

        seconds--;
        nextMSG = getNextQueueMessage(queue_name)
        if ( seconds === 0) {
                res.status(204).json({from_queue:queue_name,"msg":"no messages found"}) //return 204, 
                clearInterval(tryfetchMessage);
        }
        else if(nextMSG!=undefined)
        {
                clearInterval(tryfetchMessage);
                res.json({from_queue:queue_name,last_msg:nextMSG});
        }
    }, second);
};

/**make a POST request with a body like:
 * {
    "message":"Message"
    }
 */
exports.appendQueue = (req, res) => { //TODO : add error handling
    const { queue_name } = req.params;
    let msg = req.body.message;

    appendNextQueueMessage(queue_name, msg);
    res.json({Message:msg,ans:"appended to queue"});

};