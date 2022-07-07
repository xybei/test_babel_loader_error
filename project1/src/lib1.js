// var md5 = require('js-md5');
// import md5 from 'js-md5';
// import { md5 } from 'js-md5';
import * as md5 from 'js-md5';

class Lib1 {
    static test() {
        const hash = md5("Message to hash");
        console.log(hash);

        const hash2 = md5.create();
        hash2.update('Message to hash');
        console.log(hash2.hex());
    }
}

export default Lib1;