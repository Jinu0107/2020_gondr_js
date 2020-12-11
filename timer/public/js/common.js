const log = console.log;


function xlsx_download() {
    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    return new Promise(async (res, rej) => {
        let data = await $axios.$get("http://10.104.104.234/schools/1/xlsx", { headers, responseType: "blob" });
        res(data);
    });
}


async function getXlsx() {
    
}



