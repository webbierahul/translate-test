const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
 

function detectLanguage(value:string){
    return lngDetector.detect(value,1)
}

export default detectLanguage