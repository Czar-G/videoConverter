import {Router} from 'restify-router'

const videoRoute = new Router()
const { spawn } = require('node:child_process');

//Prueba
videoRoute.get('/session', async( req, res)=>{
    try {

        
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})


//transform/webmtomp4
videoRoute.get('/transform/webmtomp4', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'videos/videowebm.webm',
            'videoResult/videowebm.mp4'
        ]
        
        const ls = spawn('ffmpeg',arg);
        ls.stdout.on('data', (data: any) => {
            console.log(`stdout: ${data}`);
        });
        
        ls.stderr.on('data', (data: any) => {
            console.error(`stderr: ${data}`);
        });
        
        ls.on('close', (code: any) => {
            console.log(`child process exited with code ${code}`);
        });         
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

//transform/mp4towebm
videoRoute.get('/transform/mp4towebm', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'videos/videomp4.mp4',
            'videoResult/videomp4.webm'
        ]
        
        const ls = spawn('ffmpeg',arg);
        ls.stdout.on('data', (data: any) => {
            console.log(`stdout: ${data}`);
        });
        
        ls.stderr.on('data', (data: any) => {
            console.error(`stderr: ${data}`);
        });
        
        ls.on('close', (code: any) => {
            console.log(`child process exited with code ${code}`);
        }); 
        
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

//transform/mutevideos
videoRoute.get('/transform/mutevideos', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'videos/videomp4.mp4',
            '-c:v',
            'copy',
            '-an',
            'videoResult/muted.mp4'

        ]
        
        const ls = spawn('ffmpeg',arg);
        ls.stdout.on('data', (data: any) => {
            console.log(`stdout: ${data}`);
        });
        
        ls.stderr.on('data', (data: any) => {
            console.error(`stderr: ${data}`);
        });
        
        ls.on('close', (code: any) => {
            console.log(`child process exited with code ${code}`);
        }); 
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

export default videoRoute