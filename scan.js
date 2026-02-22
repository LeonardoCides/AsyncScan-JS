const { resolve } = require("dns");
const net = require("net");
const readline = require("readline-sync");

console.clear()
function verificarPorta(port, server){
    return new Promise((resolve) => {
        const socket = new net.Socket();
        socket.setTimeout(1000)

        socket.on("connect", ()=> {
            console.log(`[+] Porta ${port} ABERTA`);
            socket.destroy();
            resolve(true);
        });

        socket.on("timeout", ()=>{
            socket.destroy();
            resolve(false);
        });

        socket.on("error", ()=>{
            socket.destroy();
            resolve(false);
        });

        socket.connect(port, server);
    });
}

async function  rodarScanner() {
    const server = readline.question("IP SERVER> ");
    console.log("INICIANDO SCAN EM", server,"...")
    for (let port = 1; port <= 10000; port++){
        await verificarPorta(port, server);
    }
    console.log("\nScan finalizado com sucesso!");
}

rodarScanner();
