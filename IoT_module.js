async function get_devices(siteId, user, password){
    /*
        Get all devices connected to selected controller.
        Return list with names an id of all devices
    */
    var wizard = false, siteName = `https://c${siteId}.by.enlife.io`
    const Api = require("./lib/enlife.js").Api

    const api_ins = await new Api(siteName) 
    [wizard?'wizard':'login'] 
    (user, password)

    return await api_ins.get("/devices").then((res) => {
        devices = []
        for (device of res){
            let dev = {
                "id": device["id"],
                "name": device["name"],
                "roomId": device["roomId"]
            }
            devices.push(dev)
        }
        return devices
    })
}
async function get_device(siteId, user, password, deviceId){
    /*
        Get one devices connected to selected controller.
        Return list with names an id of all devices
    */
    var wizard = false, siteName = `https://c${siteId}.by.enlife.io`
    const Api = require("./lib/enlife.js").Api

    const api_ins = await new Api(siteName) 
    [wizard?'wizard':'login'] 
    (user, password)

    return await api_ins.get("/devices?id="+deviceId).then((res) => {
        return res
    })
}

async function set_device_setpoint(siteId, user, password, deviceId, point){
    /*
        Set setpoint on selected divice on selected controller in percents
    */
   
    var wizard = false, siteName = 'https://c' + siteId + '.by.enlife.io'
    const Api = require("./lib/enlife.js").Api
    const api_ins = await new Api(siteName) [wizard?'wizard':'login'] (user, password)
    get_device(siteId, "apiuser","apiUserApiUser", deviceId)
    .then((a) => 
    {
        let start = a[0].setup.min;
        let stop = a[0].setup.max;
        api_ins.patch("/devices?id="+deviceId, {
            "setpoint": start + (stop-start) * (point/100),
        })
    })
    
}
function shedule_device_setpoint(siteId, user, password, deviceId, point, datetime){
    /*
        Set setpoint on selected divice on selected controller in percents on selected time
    */
    console.log(datetime.getTime())
    console.log(Date.now())
    let eta_ms = datetime.getTime() - Date.now();
    console.log(eta_ms)
    
    setTimeout(function(){set_device_setpoint(siteId, user, password, deviceId, point)}, eta_ms);
}

//shedule_device_setpoint(620, "apiuser","apiUserApiUser", 21, 0, new Date('2021-12-16T13:51:00'))

//get_device(620, "apiuser","apiUserApiUser", 21).then((a) => {console.log(a)})
//get_devices(620, "apiuser","apiUserApiUser").then((a) => {console.log(a)})

module.exports = {
    get_devices, get_device, set_device_setpoint, shedule_device_setpoint
}
