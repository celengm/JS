const LineConnect = require('./connect');
let LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Etot JS\n\
Version: 0.2.1\n\
Terima Kasih Kepada @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : Ini Adalah AlphatJS Lama Buatan @Alfathdirk @TCR_TEAM Dan Ini Telah Dikembangin Oleh @TAB_TEAM\nTolong Untuk Tidak Perjual-Belikan Script Ini!\n\
****Nekopoi.host Running****");

const auth = {
	authToken: ' EntZBHDQQn3k93kHLdo0.qPo9A2sH2pGKYzbKvqMQSa.TZlXBNIIQ15JXlwUS7dkWuS6tn+wkDtQzu4Znn9Ny1U= ',
	certificate: ' e2c28b7c41d57a3956fd178024bb2b9e841afcf0c6c6a0a88de23ad821a53287 ',
}
 let client =  new LineConnect(auth);
//let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
