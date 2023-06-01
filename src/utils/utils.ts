const { spawn } = require('node:child_process');

//Spawn

const execSpawn = (arg: any) =>{

    const cmd = spawn('ffmpeg',arg);
    cmd.stdout.on('data', (data: any) => {
        console.log(`stdout: ${data}`);
    });
    
    cmd.stderr.on('data', (data: any) => {
        console.error(`stderr: ${data}`);
    });
    
    cmd.on('close', (code: any) => {
        console.log(`child process exited with code ${code}`);
    });  
}

export default execSpawn