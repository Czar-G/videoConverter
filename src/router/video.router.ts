
import {Router} from 'restify-router'
import execSpawn from '../utils/utils'
const videoRoute = new Router()





//transform/webmtomp4
videoRoute.get('/transform/webmtomp4', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'public/videos/videowebm.webm',
            'public/videoResult/videowebm.mp4'
        ]
        
        execSpawn(arg)               
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

//transform/mp4towebm
videoRoute.get('/transform/mp4towebm', async( req, res)=>{
    try {

        let arg=[
            '-i',
            'public/videos/videomp4.mp4',
            'public/videoResult/videomp4.webm'
        ]
        
        execSpawn(arg) 
        
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

//transform/mutevideos
videoRoute.get('/transform/mutevideos', async( req, res)=>{
    try {

        let videoNames = [
            { nameVideo: 'videomp4.mp4', nameVideoMute: 'mutevideomp4.mp4' },
            { nameVideo: 'videowebm.webm', nameVideoMute: 'mutevideowebm.webm' }
        ]

        videoNames.map((d) => {


            let arg = [
                '-i',
                `public/videos/${d.nameVideo}`,
                '-c:v',
                'copy',
                '-an',
                `public/videoResult/${d.nameVideoMute}`
            ]

            execSpawn(arg)

        })
        
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

export default videoRoute