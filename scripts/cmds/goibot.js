const fs = require("fs-extra");

module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Nepali Language",
		category: "non-prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kathmandu").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var nepaliMessages = ["यति🤏 पानी लाज लगदैना जाति बेला पानी बोट बन्ना 🙂 💔 सरम कार्लो वागवान से डार्लो भोसडिके✨⚠️†", "Hey You, Yes You, You Are So Beautiful, i Love You🙂", "Yes Dear, I Am Here...😗", "हजुर भन माया सुन्दै छु😍", "Love you", "Miss YoU Mero Beppy", "यति धेरै माया न गर न बेबी मलाइ।🤏", "एकछोटी बुबु खाने बेबी😋", "😁Smile I am Taking Selfy✌️🤳", "🥺मलाइ छोडी नजाउ न प्यारी", "😙तिम्रो लागि सबैलाई ब्लक गरिदिए बेबी, आउ तिमि र म माया गरम।", "रोक तेरो मम्मी लाइ वन्दिनछु त केटी संगा मस्किन्छ्स भानेरा😂", "यो के फक हो मुजी रन्डी को बान साले खाते मदारचुद" ,"Block Your Babe And Purpose me 🙂💔" ,"Rada Ban Chup Lag🙂", "हामीलाइ पनी मायाले हेर न अरुको बेबी", "Aaihaiii Your Killer Smileee ☺", "Block Kardo Mujhe Warna Pyaar Hojayega💋", "I See You Inside Everyone, That's Why I Love Everyone As More As You🤭", "Aailabu Vanxau Ki Ma Sidhai Vagauna Aau Timi Lai😏", "Vandeu Timi Malai Maya Garxau Vanera 😘", "Chuppa Khau Babe💋", "Mero Maya Lagdaina Hai Timi Lai 🥺", "धेरै न बोल मुजी नत्र तेइ आएर तेरो कानको जाली फुटाईदिन्छु 🥱", "धोकेबाज हउ तिमी धोकेबाज हउ तिमी 🥺", "चिन्ता नगर त मर्यो भने तेरो बुढीलाई म सम्हालछु है साथी😭", "Gulcose भन्दा बढ़ी energy छ तिम्रो मायामा 😋", "Noone But, My Heart Is Falling For You My Preety Boyyy🙌✨", "हेरन सबै मान्छे हाम्रो मायाको डहा गर्न सुरु गरी रको छन😣", "मलाई नबिगार है म सोझो बच्चा हो 😙", "तिमी भएर, अर्थ रहयो मेरो सांसको | तिमि बिना त, यहाँ जित पनि मेरो हार हो। 😥", "Kati Mobile Matra Chalako Muji, Padhne Ni Gar Na😒", "सानो सानो कुरामा नारिसाउन मायालु तिमी। 😭", "Everybody Wanna Steal My Boyy😫"];
  var rand = nepaliMessages[Math.floor(Math.random() * nepaliMessages.length)]

    if ((event.body.toLowerCase() == "puti") || (event.body.toLowerCase() == "putii")) {
     return api.sendMessage("️ल हेर साले बोका (!) 😒", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "randi") || (event.body.toLowerCase() == "रन्डी")) {
     return api.sendMessage("️उनी रण्डी होइनिन, उनी कसैको दिदी बैनी हुन। 😙", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "lado") || (event.body.toLowerCase() == "ladoo")) {
     return api.sendMessage("️तेरो नी लाडो छ र भाई 🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("️धेरै हाँस्ने काम नगर, अहिले मुखमा किरा पस्ला 🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "muji") || (event.body.toLowerCase() == "muzi")) {
     return api.sendMessage("️कस्लाई मुजी भनिस Humm मुजी 😡", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "muji bot") || (event.body.toLowerCase() == "muji bot")) {
     return api.sendMessage("️कस्लाई मुजी भनिस Humm मुजी 😡", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "k vayo") || (event.body.toLowerCase() == "k bhayo")) {
     return api.sendMessage("️ खुलित्त भयो नी यार🙎", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "lau") || (event.body.toLowerCase() == "lau")) {
     return api.sendMessage("️देउ न त, लगी हल्छु नि 🤭", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "sanchai xau") || (event.body.toLowerCase() == "sanchai xas")) {
     return api.sendMessage("️Umm Hajur ??", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khate") || (event.body.toLowerCase() == "khatey")) {
     return api.sendMessage("️Ta Khatey Ko Bachha..", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hai") || (event.body.toLowerCase() == "hoi")) {
     return api.sendMessage("️अनि त 😏", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "tero bau") || (event.body.toLowerCase() == "tero ba")) {
     return api.sendMessage("️Mero Bau Tero Uncle Ho 🥱", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup lag")) {
     return api.sendMessage("️Mero Mukh, Mero Marji, Mero Man. Talai Baal Myakadokzz 😒🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "suna na") || (event.body.toLowerCase() == "sun na")) {
     return api.sendMessage("️Aww भन न सुन्दै छु 😚", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khana khayeu") || (event.body.toLowerCase() == "khana khais") || (event.body.toLowerCase() == "khayau") || (event.body.toLowerCase() == "khana ghichis")) {
     return api.sendMessage("️Aww khaye, Timi le khayeu 💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k bho") || (event.body.toLowerCase() == "k vayo")) {
     return api.sendMessage("️केही भाको छैन बेबी 😚🤗", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hjr") || (event.body.toLowerCase() == "hajur")) {
     return api.sendMessage("️के गर्दै छउ माया😇", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "khana vo") || (event.body.toLowerCase() == "khana bhayo")) {
     return api.sendMessage("️तिमिले दिएनौ कसरी हुनु 🙁", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "aau") || (event.body.toLowerCase() == "aau babe")) {
     return api.sendMessage("️का आउने बेबी 🤔", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "vana na") || (event.body.toLowerCase() == "bhana na")) {
     return api.sendMessage("️के भन्नू तिमीलाई, तिमीले मेरो Feelings बुझेपो😔", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
     return api.sendMessage("️K na K😕", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("️Don't Call Me Guys Cuz I AM Yours😊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️का माथी हेर्या बेबी? म त एता छु त 🤔", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("️के सारो लजाको हो क्या Pagal 😏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "ani") || (event.body.toLowerCase() == "Ani")) {
     return api.sendMessage("️के अनि भन्या🤨", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "chus") || (event.body.toLowerCase() == "chus")) {
     return api.sendMessage("️आफ्नै दिदी बैनीलाई चुस्न भन मुजी 😑", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k xa") || (event.body.toLowerCase() == "k xa")) {
     return api.sendMessage("️मेरो त सबै छ, तिम्रो के छ 😏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "saley") || (event.body.toLowerCase() == "saley")) {
     return api.sendMessage("️त मेरो दाईको सालो होस😉", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "mug") || (event.body.toLowerCase() == "muji")) {
     return api.sendMessage("️ तिम्रो नी मूजी छ र 🤭", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "okey") || (event.body.toLowerCase() == "huss")) {
     return api.sendMessage("️ एक्कासी हग्न अत्तायो यार, म त गए हैं ", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Good Morningg! अब मुख धोएर बुरुस गर्न जाऊ साथी 🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "ehh") || (event.body.toLowerCase() == "eh")) {
     return api.sendMessage("️Ummmmm Ni 😊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "mula") || (event.body.toLowerCase() == "mula")) {
     return api.sendMessage("️मेरो घर आउ, धेरै छ जति खान्छौ खाऊ 😋", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bro") || (event.body.toLowerCase() == "bro")) {
     return api.sendMessage("️call me bruda 💫", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "boy") || (event.body.toLowerCase() == "boy")) {
     return api.sendMessage("️Myann, I Am Girl 😑", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "beb")) {
     return api.sendMessage("️Hajurr Babe😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️Hajurr Babe😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "machikne") || (event.body.toLowerCase() == "machikney")) {
     return api.sendMessage("️त मुजी बा चिकने🥱", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "sandip") || (event.body.toLowerCase() == "jeevan")) {
     return api.sendMessage("️गेडा कनाउँदै छन् एकछिन डिस्टर्ब नगर्देऊ ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kam garena") || (event.body.toLowerCase() == "gayo")) {
     return api.sendMessage("मोरेको छैन, एकछिनलाई गको मात्र हो आउँछ ", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "oe") || (event.body.toLowerCase() == "oee") || (event.body.toLowerCase() == "oi")) {
     return api.sendMessage("के भयो Humm छिटो भन म BG छु।🙂", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "k gardai xau") || (event.body.toLowerCase() == "k gardai xau")) {
     return api.sendMessage("️केई नाइ, तिमीलाई सम्झिरा🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "sut") || (event.body.toLowerCase() == "sut")) {
     return api.sendMessage("️पहिला आफू सूत अनी अरुलाई सुत्न भन🥱", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("️Sorry, We Are Peace Lover ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("️ Hello pretty stranger, How Are You ❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hora") || (event.body.toLowerCase() == "horw")) {
     return api.sendMessage("️Umm, होनी त 😚", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "heloo")) {
     return api.sendMessage("️Hi And Wassup Preety Stranger🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("️I Am DRG's bot, An AI Based Messenger Chatbot. I Am 17 Years Old. ", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "chikne") || (event.body.toLowerCase() == "chikney")) {
     return api.sendMessage("️नाई न चिक्ने🙃", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Mwah") || (event.body.toLowerCase() == "chuppa") || (event.body.toLowerCase() == "kiss")) {
     return api.sendMessage("️Mwahhhhhh💋, लउ चुप्पा खाऊ बेबी 🙈", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "abhi") || (event.body.toLowerCase() == "abhi")) {
     return api.sendMessage("️Chimpanda Saley Ho🙄", threadID, messageID);
  };
  
  if (event.body.indexOf("Yuuki") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("@Dayaram") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};