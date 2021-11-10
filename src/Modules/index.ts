import ModulesWrapper from './ModulesRegister';
import Sticker from './Sticker';
import Youtube from './Youtube';
import Youtube2 from './YouTube2';
import Horoscopo from './Horoscopo';
import Google from './Google';
import Help from './Help';
import Transcribe from './Transcribe';
import LyricsFinder from './Lyrics';
import CopypastaManager from './Copypasta';

const modulesWrapper = new ModulesWrapper();

modulesWrapper.registerModule('sticker', Sticker);
modulesWrapper.registerModule('s', Sticker);
modulesWrapper.registerModule('yt', Youtube);
modulesWrapper.registerModule('youtube', Youtube);
modulesWrapper.registerModule('horoscopo', Horoscopo);
modulesWrapper.registerModule('horóscopo', Horoscopo);
modulesWrapper.registerModule('google', Google);
modulesWrapper.registerModule('help', Help);
modulesWrapper.registerModule('yt2', Youtube2);
modulesWrapper.registerModule('transcribe', Transcribe);
modulesWrapper.registerModule('lyrics', LyricsFinder);
modulesWrapper.registerModule('copypasta', CopypastaManager);

export default modulesWrapper;
