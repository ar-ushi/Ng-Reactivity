
const {Events} = require('./mock-data.js');

function getAllEvents(req, res){
    setTimeout(() => {
        res.status(200).json({payload:Object.values(Events)});
    }, 2000);
    console.log(res);
}

module.exports = {
    getAllEvents,
}