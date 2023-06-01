import {Router} from 'restify-router'
import bootcampController from '../controller/bootcamp.controller'
const bootcampRoute = new Router()
const { spawn } = require('node:child_process');
// const os = require('os');

// const command = os.platform() === 'win32' ? 'dir' : 'ls';
// const args = os.platform() === 'win32' ? ['/B'] : ['-l', '/'];

//Prueba
bootcampRoute.get('/session', async( req, res)=>{
    try {

        // const oauthResponse = await bootcampController.getSession()
        // return res.json({success: true, message: 'Estamos conectados', oauth2: oauthResponse})
        // console.log(':V tu paap es hombre');
        // return res.json({dsd:'tu mama es mujer'})
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})


//transform/webmtomp4
bootcampRoute.get('/transform/webmtomp4', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'videos/silvawebm.webm',
            'videoResult/silvawebm.mp4'
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
        //const oauthResponse = await bootcampController.getSession()
        // console.log(ls);
        // return res.json({success: true, message: ls})
        
        // return res.json({dsd:'tu mama es mujer'})
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

//transform/mp4towebm
bootcampRoute.get('/transform/mp4towebm', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'videos/silvamp4.mp4',
            'videoResult/convertidomp4.webm'
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
        // return res.json({dsd:'tu mama es mujer'})
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

//transform/mutevideos
bootcampRoute.get('/transform/mutevideos', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'videos/silvawebm.webm',
            '-c:v',
            'copy',
            '-an',
            'videoResult/silvawebm.webm'

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

export default bootcampRoute