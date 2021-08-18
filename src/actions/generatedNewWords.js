const ALL_WORDS_WITH_TRANSLATIONS = 'abide abode abode дотримуватися соблюдать arise arose arisen виникати появляться awake awoke awoken прокидатися просыпаться backslide backslid backslid/backslidden відступати отступать be was/were been бути быть beat beat beaten бити бить become became become ставати становиться befall befell befallen спіткало произошло beget begot begotten породити порождать begin began begun починати начинать behold beheld beheld дивитися смотреть bend bent bent згинатися сгибаться bereave bereft bereft втрачати терять beseech besought besought благати умолять beset beset beset обставити обставлять bestride bestrode bestridden переступати переступать bet bet bet ставити ставить bind bound bound пов’язувати связывать bite bit bitten вкусити укусить bleed bled bled кровоточити кровоточить blow blew blown дути дуть break broke broken ламати ломать breed bred bred вирощувати разводить bring brought brought приносити приносить broadcast broadcast broadcast передавати передавать build built built будувати строить burn burnt burnt горіти гореть burst burst burst вибухати взрываться bust bust/busted bust/busted розорювати разорять buy bought bought купляти покупать can could - могти мочь cast cast cast кидати кидать catch caught caught хапати ловить choose chose chosen вибирати выбирать cling clung clung чіплятися цепляться come came come приходити приходить cost cost cost коштувати стоить creep crept crept повзти ползать cut cut cut різати резать deal dealt dealt вирішувати решать dig dug dug копати копать do did done робити делать draw drew drawn малювати рисовать dream dreamt dreamt мріяти мечтать drink drank drunk пити пить drive drove driven керувати водить dwell dwelt dwelt жити жить eat ate eaten їсти есть interweave interwove interwoven вплітати вплетать fall fell fallen падати падать feed fed fed годувати кормить feel felt felt відчувати чувствовать fight fought fought боротися бороться find found found знаходити находить flee fled fled уникати избегать fling flung flung кидати бросать fly flew flown літати летать forbid forbad(e) forbidden забороняти запрещать forecast forecast forecast прогнозувати прогнозировать forget forgot forgotten забувати забывать forgive forgave forgiven пробачати прощать forsake forsook forsaken залишати оставлять foresee foresaw foreseen передбачати предвидеть foretell foretold foretold пророкувати предсказывать freeze froze frozen заморожувати замораживать get got got отримувати получать give gave given давати давать go went gone йти идти grind ground ground молоти молоть grow grew grown рости расти hang hung hung повісити повесить have had had мати иметь hear heard heard чути слышать hide hid hidden ховатися прятаться hit hit hit вдарити ударить hold held held тримати держать hurt hurt hurt ранити ранить keep kept kept зберігати хранить know knew known знати знать lay laid laid класти класть lead led led вести вести lean leant leant спиратися опираться leap leapt leapt стрибати прыгать learn learnt learnt вчити изучать leave left left полишати оставлять lend lent lent позичати одалживать let let let дозволяти позволять lie lay lain лежати лежать lose lost lost втрачати терять make made made зробити сделать mean meant meant означати значить meet met met зустрічати встретить pay paid paid платити платить mistake mistook mistaken помилятися ошибаться overhear overheard overheard підслуховувати подслушивать oversleep overslept overslept проспати проспать put put put покласти положить read read read читати читать rid rid rid позбавлятися лишиться ride rode ridden їхати ехать ring rang rung дзвонити звонить rise rose risen підніматись подниматься run ran run бігти бежать say said said казати говорить see saw seen бачити видеть seek sought sought шукати искать sell sold sold продавати продавать send sent sent надсилати посылать set set set встановлювати устанавливать shake shook shaken трясти трясти shed shed shed проливати проливать shine shone shone світитися светиться shit shit/shat shit/shat гадити гадить shoot shot shot стріляти стрелять show showed shown показувати показывать shrink shrank shrunk стискати сжимать shut shut shut закривати закрывать sing sang sung співати петь sink sank sunk опускатися опускаться sit sat sat сидіти сидеть slay slew slain вбивати убивать sleep slept slept спати спать slide slid slid ковзати скользить sling slung slung перекидати закидывать slink slunk slunk крастися красться slit slit slit розрізати разрезать smell smelt smelt пахнути пахнуть speak spoke spoken розмовляти разговаривать speed sped sped прискорювати ускоряться spend spent spent витрачати тратить spin spun spun крутити крутить spit spat spat плювати плевать split split split розділяти разделять spoil spoilt spoilt псувати портить spread spread spread поширювати распространять spring sprang sprung виникати появляться stand stood stood стояти стоять steal stole stolen красти воровать stick stuck stuck прикріплювати прикреплять sting stung stung жалити жалить stink stank stunk смердіти вонять stride strode stridden крокувати шагать strike struck strucken вдаряти ударять string strung strung зав`язувати завязывать strive strove striven досягати достигать swear swore sworn клястися клясться sweep swept swept підмітати подметать swim swam swum плисти плыть swing swung swung гойдати качать take took taken брати брать teach taught taught навчати учить tear tore torn рвати рвать tell told told розповідати рассказывать think thought thought думати думать throw threw thrown кидати бросать thrust thrust thrust штовхати толкать tread trod trodden ступати ступать understand understood understood розуміти понимать undertake undertook undertaken братися браться undo undid undone скасовувати отменять upset upset upset засмучувати огорчать wake woke woken прокидатися просыпаться wear wore worn одягати носить weave wove woven ткати ткать weep wept wept плакати плакать win won won вигравати побеждать withdraw withdrew withdrawn виводити выводить withstand withstood withstood протистояти противостоять wring wrung wrung вичавлювати выжать write wrote written писати писать';

const WORDS_WITH_TRANSLATIONS_COUNT = 5;
const COUNT_WORDS_IN_PACK = 4;
var additionalWordFromLocalStorage = COUNT_WORDS_IN_PACK %3;
var howManyWordsFromDB = COUNT_WORDS_IN_PACK  - additionalWordFromLocalStorage;

      // localStorage.clear()
export const removeItemFromArrayByIndex = ({array, index}) => {
    const localArray = [...array];

    if (index > -1) {
        localArray.splice(index, 1);
    }
    return localArray;
}

export const generateLanguagesMap = (string = ALL_WORDS_WITH_TRANSLATIONS) => {
    let i,j, chunk = WORDS_WITH_TRANSLATIONS_COUNT;
    const array = string.split(' ');
    const arrWithLanguage = [];
    for (i = 0,j = array.length; i < j; i += chunk) {
        arrWithLanguage.push(array.slice(i, i + chunk))
    }

    const mapResult = arrWithLanguage.reduce((acc, items) => {
        return {
            ru: [
                ...acc.ru,
                [...[...items].slice(0,3), items[4]]
            ],
            ukr: [
                ...acc.ukr,
                [...[...items].slice(0,3), items[3]]
            ]
        }
    }, {ukr:[], ru: []});
    // { ukr: [], ru: []}
    return mapResult;
}
export const mapOfWordsByLanguage = generateLanguagesMap();

export const  generateNewWordsPack = ({language, count = COUNT_WORDS_IN_PACK, exceptions = []}) => {
    // console.log('xxx',language)
    // console.log(mapOfWordsByLanguage);
    // console.log(mapOfWordsByLanguage[language]);

    let currentLanguageWords = [...mapOfWordsByLanguage[language]];
    if (exceptions.length) {
        const exceptionsJSON = exceptions.map(i => JSON.stringify(i));
        currentLanguageWords = currentLanguageWords.filter(pack => !exceptionsJSON.includes(JSON.stringify(pack)))
    }

    const getRandomWords = (wordsPack = [], result = []) => {
        if ((result.length === count) || !wordsPack.length) return result;

        const randomIndex = Math.floor(Math.random() * wordsPack.length) + 1;
        const wordPack = wordsPack[randomIndex];
        const splicedArray = removeItemFromArrayByIndex({array: wordsPack, index: randomIndex});
        // console.log(splicedArray)
        return getRandomWords(splicedArray, [...result, wordPack])
    }

    return getRandomWords(currentLanguageWords);
}

export const generateNewWordsPackAction = (language, count =  howManyWordsFromDB) => {

    let arraysPack = []
    if (localStorage.length === 0) {
        arraysPack = generateNewWordsPack({language});
    } else {
        arraysPack = generateNewWordsPack({language, count });
        console.log(arraysPack)
        const wrongWordsFromLocalStorage = localStorage.getItem('failedWords')
        const failedArraysFromLocalStorage = JSON.parse(wrongWordsFromLocalStorage)

        for (let i = 0; i < additionalWordFromLocalStorage; i++) {
            arraysPack = [failedArraysFromLocalStorage[i], ...arraysPack]
         }
    }

    const index = 0;
    console.log(arraysPack)
    return {
        type: 'GENERATE_ARRAY_NEW_WORDS',
        payload: {
            array: arraysPack[index],
            packOfArrays: removeItemFromArrayByIndex({array: arraysPack, index})

        }
    }

}

export const getNewWordFromPackAction = (arraysPack) => {
    const index = 0;

    return {
        type: 'GENERATE_ARRAY_NEW_WORDS',
        payload: {
            array: arraysPack[index],
            packOfArrays: removeItemFromArrayByIndex({array: arraysPack, index})

        }
    }

}
//
// const a = {
//     b: "123",
//     d: {
//         x: "ololo"
//     }
//
// }


 //
 // const a = generateNewWordsPack({language:'rus'});
 //  console.log(a);

//
// export const  generateNewWords = (language) => {
//     const generatedArray = (language) => {
//         const resultArray = (() => {
//             const str = 'abide abode abode дотримуватися соблюдать arise arose arisen виникати появляться awake awoke awoken прокидатися просыпаться backslide backslid backslid/backslidden відступати отступать be was/were been бути быть beat beat beaten бити бить become became become ставати становиться befall befell befallen спіткало произошло beget begot begotten породити порождать begin began begun починати начинать behold beheld beheld дивитися смотреть bend bent bent згинатися сгибаться bereave bereft bereft втрачати терять beseech besought besought благати умолять beset beset beset обставити обставлять bestride bestrode bestridden переступати переступать bet bet bet ставити ставить bind bound bound пов’язувати связывать bite bit bitten вкусити укусить bleed bled bled кровоточити кровоточить blow blew blown дути дуть break broke broken ламати ломать breed bred bred вирощувати разводить bring brought brought приносити приносить broadcast broadcast broadcast передавати передавать build built built будувати строить burn burnt burnt горіти гореть burst burst burst вибухати взрываться bust bust/busted bust/busted розорювати разорять buy bought bought купляти покупать can could - могти мочь cast cast cast кидати кидать catch caught caught хапати ловить choose chose chosen вибирати выбирать cling clung clung чіплятися цепляться come came come приходити приходить cost cost cost коштувати стоить creep crept crept повзти ползать cut cut cut різати резать deal dealt dealt вирішувати решать dig dug dug копати копать do did done робити делать draw drew drawn малювати рисовать dream dreamt dreamt мріяти мечтать drink drank drunk пити пить drive drove driven керувати водить dwell dwelt dwelt жити жить eat ate eaten їсти есть interweave interwove interwoven вплітати вплетать fall fell fallen падати падать feed fed fed годувати кормить feel felt felt відчувати чувствовать fight fought fought боротися бороться find found found знаходити находить flee fled fled уникати избегать fling flung flung кидати бросать fly flew flown літати летать forbid forbad(e) forbidden забороняти запрещать forecast forecast forecast прогнозувати прогнозировать forget forgot forgotten забувати забывать forgive forgave forgiven пробачати прощать forsake forsook forsaken залишати оставлять foresee foresaw foreseen передбачати предвидеть foretell foretold foretold пророкувати предсказывать freeze froze frozen заморожувати замораживать get got got отримувати получать give gave given давати давать go went gone йти идти grind ground ground молоти молоть grow grew grown рости расти hang hung hung повісити повесить have had had мати иметь hear heard heard чути слышать hide hid hidden ховатися прятаться hit hit hit вдарити ударить hold held held тримати держать hurt hurt hurt ранити ранить keep kept kept зберігати хранить know knew known знати знать lay laid laid класти класть lead led led вести вести lean leant leant спиратися опираться leap leapt leapt стрибати прыгать learn learnt learnt вчити изучать leave left left полишати оставлять lend lent lent позичати одалживать let let let дозволяти позволять lie lay lain лежати лежать lose lost lost втрачати терять make made made зробити сделать mean meant meant означати значить meet met met зустрічати встретить pay paid paid платити платить mistake mistook mistaken помилятися ошибаться overhear overheard overheard підслуховувати подслушивать oversleep overslept overslept проспати проспать put put put покласти положить read read read читати читать rid rid rid позбавлятися лишиться ride rode ridden їхати ехать ring rang rung дзвонити звонить rise rose risen підніматись подниматься run ran run бігти бежать say said said казати говорить see saw seen бачити видеть seek sought sought шукати искать sell sold sold продавати продавать send sent sent надсилати посылать set set set встановлювати устанавливать shake shook shaken трясти трясти shed shed shed проливати проливать shine shone shone світитися светиться shit shit/shat shit/shat гадити гадить shoot shot shot стріляти стрелять show showed shown показувати показывать shrink shrank shrunk стискати сжимать shut shut shut закривати закрывать sing sang sung співати петь sink sank sunk опускатися опускаться sit sat sat сидіти сидеть slay slew slain вбивати убивать sleep slept slept спати спать slide slid slid ковзати скользить sling slung slung перекидати закидывать slink slunk slunk крастися красться slit slit slit розрізати разрезать smell smelt smelt пахнути пахнуть speak spoke spoken розмовляти разговаривать speed sped sped прискорювати ускоряться spend spent spent витрачати тратить spin spun spun крутити крутить spit spat spat плювати плевать split split split розділяти разделять spoil spoilt spoilt псувати портить spread spread spread поширювати распространять spring sprang sprung виникати появляться stand stood stood стояти стоять steal stole stolen красти воровать stick stuck stuck прикріплювати прикреплять sting stung stung жалити жалить stink stank stunk смердіти вонять stride strode stridden крокувати шагать strike struck strucken вдаряти ударять string strung strung зав’язувати завязывать strive strove striven досягати достигать swear swore sworn клястися клясться sweep swept swept підмітати подметать swim swam swum плисти плыть swing swung swung гойдати качать take took taken брати брать teach taught taught навчати учить tear tore torn рвати рвать tell told told розповідати рассказывать think thought thought думати думать throw threw thrown кидати бросать thrust thrust thrust штовхати толкать tread trod trodden ступати ступать understand understood understood розуміти понимать undertake undertook undertaken братися браться undo undid undone скусовувати отменять upset upset upset засмучувати огорчать wake woke woken прокидатися просыпаться wear wore worn одягати носить weave wove woven ткати ткать weep wept wept плакати плакать win won won вигравати побеждать withdraw withdrew withdrawn виводити выводить withstand withstood withstood протистояти противостоять wring wrung wrung вичавлювати выжать write wrote written писати писать';
//             const array = str.split(' ');
//
//             let resultArray = [];
//             let x = 4;
//
//             if (language === "ukr") {
//                 for (let i = 4; i <= array.length; i = i + 4) {
//                     array.splice(i, 1);
//                 }
//
//
//                 for (let i = 0; i < (array.length / 4); i++) {
//                     let countArray = array.slice(x - 4, x);
//                     resultArray.push(countArray);
//                     x += 4;
//                 }
//             } else if (language === "ru") {
//                 for (let i = 3; i <= array.length; i = i + 4) {
//                     array.splice(i, 1);
//                 }
//
//                 for (let i = 0; i < (array.length / 4); i++) {
//                     let countArray = array.slice(x - 4, x);
//                     resultArray.push(countArray);
//                     x += 4;
//                 }
//             }
//             // console.log(resultArray)
//             return resultArray;
//         })();
//
//
//         const	duplicateArray = resultArray
//         let blockOfArrays = []
//         // const WORDS_COUNT = 2;
//
//         for(let i=0; i < 2; i++) {
//             let randomOfDuplicateArray = duplicateArray[Math.floor(Math.random() * duplicateArray.length)];
//
//             blockOfArrays.push(randomOfDuplicateArray)
//             duplicateArray.splice(duplicateArray.indexOf(randomOfDuplicateArray), 1)
//
//
//         }
//          console.log(blockOfArrays)
//         const randomArrayFromBlock = blockOfArrays[Math.floor(Math.random() * blockOfArrays.length)]
//         blockOfArrays.splice(blockOfArrays.indexOf(randomArrayFromBlock), 1)
// if(blockOfArrays.length === 0 ) {
//     alert('усьо')
// } else {
//     const randomArrayFromBlock = blockOfArrays[Math.floor(Math.random() * blockOfArrays.length)]
//
// }
//
// console.log(blockOfArrays)
//             console.log(randomArrayFromBlock)
//                 return randomArrayFromBlock;
//
// let blockOfArrays = [];
// for(let i=0; i < 10; i++) {
//     let randomOfResultArray = resultArray[Math.floor(Math.random() * resultArray.length)];
//     blockOfArrays.push(randomOfResultArray)
// }
// console.log(blockOfArrays)
// let randomOfResultArray1= []
// let randomArrayFromBlock = blockOfArrays[Math.floor(Math.random()*blockOfArrays.length)]
// randomOfResultArray1.push(randomOfResultArray1)
// blockOfArrays.splice(blockOfArrays.indexOf(randomArrayFromBlock),1)
// console.log(blockOfArrays)
// console.log(randomArrayFromBlock)
// return randomOfResultArray1;
//
//
//  const randomOfResultArray = resultArray[Math.floor(Math.random() * resultArray.length)];
// return randomOfResultArray;
// return blockOfArrays;
// let randomArrayFromBlock = 0
// for (let i=0; i < blockOfArrays.length; i++) {
//
// }
//
//     return {
//         type: 'GENERATE_ARRAY_NEW_WORDS',
//         payload: generateNewWordsPack(language)
//     }
// }


