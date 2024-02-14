const CronJob = require('cron').CronJob;
const adminHelper = require('../helpers/admin.helper');
const helperFunctions = require('../utils/helperFunctions');


// Create a new CronJob instance
// Create a cron job that runs at the 58th minute of every hour, using the system's local timezone
const job = new CronJob(
    // '* * * * * *',
    '0 58 * * * *',
    async () => {
        const admin = await adminHelper.getOneAdmin({});
        const response = await helperFunctions.getToken();
        console.log("admin: ", admin)
        if(!admin){
            console.log("----------------", response.access_token);
            await adminHelper.createAdmin({ token:response.access_token })
        }
        await adminHelper.updateAdmin( {} , { token:response.access_token  } )
        console.log('This job runs at the second of every hour, based on the system\'s local timezone.');
    },
    null,
    true
);
  
// Start the job
//   job.start();



// console.log("cronJob: ", cronJob);

