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
	authToken: ' EoeoIo3TWBvQufrzofl0.J512Z6SieY1Wp5wm4+QmWa.ftPvxet1pDq+UwU4TuAkqXgOe3ege8aIjK6yrhHBGiY=',
	certificate: ' b6219581ee72f1461f47e91d213573bcdd0af1fd362e93ba3ad0f1badcc6804f ',
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
