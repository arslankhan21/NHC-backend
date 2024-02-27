const CronJob = require('cron').CronJob;
const adminHelper = require('../helpers/admin.helper');
const helperFunctions = require('../utils/helperFunctions');
const conferenceHelper = require('../helpers/conference.helper');


// Create a new CronJob instance
// Create a cron job that runs at the 58th minute of every hour, using the system's local timezone
const job = new CronJob(
    // '* * * * * *',
    '0 58 * * * *',
    async () => {
        console.log('* * * * * are u runaway')
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

const UpdateConferenceStatusJob = new CronJob(
    '0 0 * * * *', // This pattern means "at the 0th minute of every hour"
    // '*/5 * * * * *', // This pattern means "every 5 seconds"
    async () => {
        const now = new Date(); // Ensure this is inside the function to capture the current time
        console.log("Running status update job...");
        try {
            const result = await conferenceHelper.updateManyConferences(
                { "eventEndTime": { "$lt": now }, "status": { "$ne": "ended" } },
                { "$set": { "status": "ended" } }
            );
            console.log('Update result:', result);
        } catch (error) {
            console.error('Error updating conference statuses:', error);
        }
    },
    null,
    true, // Automatically start the job upon creation
);
// Start the job
//   job.start();

// You can start the job as needed
// UpdateConferenceStatusJob.start();I

// console.log("cronJob: ", cronJob);