// All constants  will be placed here like dummy array data
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, Platform } from "react-native";

export const hpHeight = hp;
export const wpWidth = wp;


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;


export const SPORTS_LIST = [
  {
    id: 1,
    title: 'Basketball',
    image: require('../asset/images/sp0.png'),
  },
  {
    id: 2,
    title: 'Padel Tennis',
    image: require('../asset/images/sp1.png'),
  },
  {
    id: 3,
    title: 'Cricket',
    image: require('../asset/images/sp2.png'),
  },
  {
    id: 4,
    title: 'Football',
    image: require('../asset/images/sp3.png'),
  },
  {
    id: 5,
    title: 'Badminton',
    image: require('../asset/images/sp4.png'),
  },
  {
    id: 6,
    title: 'Table Tennis',
    image: require('../asset/images/sp5.png'),
  },


];

export const GAMES_ICON = [
  {
    image: require('../asset/images/sp3.png')
  },
  {
    image: require('../asset/images/sp1.png')
  }
];

// image gellery

export const GELLERY_IMAGES = [
  {
    image: require('../asset/images/gellery0.png')
  },
  {
    image: require('../asset/images/gellery1.png')
  },
  {
    image: require('../asset/images/gellery2.png')
  },
  {
    image: require('../asset/images/gellery3.png')
  },
  {
    image: require('../asset/images/gellery4.png')
  },
  {
    image: require('../asset/images/gellery5.png')
  },
  {
    image: require('../asset/images/gellery6.png')
  },
  {
    image: require('../asset/images/gellery7.png')
  },
  {
    image: require('../asset/images/gellery0.png')
  },
  {
    image: require('../asset/images/gellery1.png')
  },
  {
    image: require('../asset/images/gellery2.png')
  },
  {
    image: require('../asset/images/gellery3.png')
  },
  {
    image: require('../asset/images/gellery4.png')
  },
  {
    image: require('../asset/images/gellery5.png')
  },
  {
    image: require('../asset/images/gellery6.png')
  },
  {
    image: require('../asset/images/gellery7.png')
  },
]

export const NEWSFEED_READ = [
  {
    id: 1,
    text: "5 Great Ways to Boost Employee Performance Immediately",
    image: require('../asset/images/read_1.png')

  },
  {
    id: 2,
    text: "How to Ensure Lasting Change in 2022",
    image: require('../asset/images/read_2.png')

  },
]


export const FEED_DETAILS = [
  {
    id: 1,
    heading: null,
    description: "Long term investment in employee wellbeing pays dividends in terms of performance, productivity, and creativity in organizations both large and small. But how can we boost productivity in the shorter term? Here are five great ways to boost employee performance immediately."

  },
  {
    id: 2,
    heading: 'Nurture better relations',
    description: "Better relationships and collaboration lead to better performance throughout the organization so creating opportunities for departments and individuals to build closer bonds is one of the quickest ways to boost performance. Why not organize an event that allows employees to mingle? Keep it simple with non-work-related activities such as desktop yoga, group lunches, and office outings. Getting to know each other as friends, not just as colleagues, will raise motivation and morale in your organization."

  },
  {
    id: 3,
    heading: 'Consider the environment',
    description: "Environments have a big impact on people’s moods and therefore productivity. Could your workplace be brighter and more colorful? No matter what kind of company you have and where you work, using good lighting and bright colors in the office will greatly improve the energy of employees and leave them more positive. Always make sure safety is a priority by using quality equipment."

  }, {
    id: 4,
    heading: 'Communicate more clearly ',
    description: "It’s undeniable that good communication is the backbone of a highly functioning workforce. It helps employees to feel informed, involved, and valued, and reminds them that they are integral members of your team. Weekly department feedback sessions, town hall meetings, and internal newsletters and emails are good ways to share your vision and values with members of your team while also enabling them to share their thoughts. Employee performance rises when they feel that their opinions are important, and they are being listened to.  "

  }, {
    id: 5,
    heading: 'Have some fun!',
    description: "Nothing elevates the sprits and bonds us quicker than laughter. So why not boost office morale and build stronger relationships by having some fun? There are lots of exciting and silly games that can be played in a workplace environment that can inject some great energy and raise team spirit.Start prioritizing employee wellness Making employee wellbeing a priority in your organization will have a powerful impact on performance"

  },
]

export const COMPANIES = [
  {
    image: require('../asset/images/alfa.png')
  },
  {
    image: require('../asset/images/pwc.png')
  },
  {
    image: require('../asset/images/endenred.png')
  },
  {
    image: require('../asset/images/alfa.png')
  },
  {
    image: require('../asset/images/pwc.png')
  },
  {
    image: require('../asset/images/endenred.png')
  },
]

export const GAME_PLANNINGS = [
  {
    image: require('../asset/images/alfa.png'),
    image0: require('../asset/images/pwc.png'),
    pitch: 'PITCH 1',
    points: '16.30'
  },
  {
    image: require('../asset/images/pwc.png'),
    image0: require('../asset/images/endenred.png'),
    pitch: 'PITCH 2',
    points: '16.30'
  },
  {
    image: require('../asset/images/endenred.png'),
    image0: require('../asset/images/customs.png'),
    pitch: ' PITCH 3',
    points: '16.30'
  },
  {
    image: require('../asset/images/alfa.png'),
    image0: require('../asset/images/endenred.png'),
    pitch: ' PITCH 4',
    points: '16.30'

  },
  {
    image: require('../asset/images/pwc.png'),
    image0: require('../asset/images/customs.png'),
    pitch: ' PITCH 5',
    points: '16.30'
  },
  {
    image: require('../asset/images/endenred.png'),
    image0: require('../asset/images/pwc.png'),
    pitch: ' PITCH 6',
    points: '16.30'

  }
]

export const ABOUT =
  'Engage your team in a competitive football and padel tennis tournament, challenge your industry peers, reach a new audience and align your brand with a healthy, active lifestyle.The Corporate Sports Winter Tournament is a multi-sport event which will take a place over the month of February and will be open to both Public and Private entities.';
export const OBJECTIVES =
  'The main objectives of the event is to start the year in an active fashion. Motivate and engage your employees in friendly competition, team-building and camaraderie; enhance brand loyalty and productivity, and finally enable networking with like-minded professionals.';

export const COMPANIES_LIST = [
  {
    title: 'PWC',
  },
  {
    title: 'VIWELL',
  },
  {
    title: 'ETISALAT',
  },
  {
    title: 'PROCTER',
  },
  {
    title: 'NFC',
  },
]





export const TermsAndCondition = [
  {
    id:1,
    heading:"1. The Website",
    subHeading1:"1.1 This Website (the “Website”) is maintained by Art Dubai Fair FZ LLC (“Art Dubai”), a limited liability company whose registered company number is 93088, incorporated under the laws of the Dubai Creative Clusters and having its principal place of business at Office 403A – 404A, Building 7, Dubai Design District, Dubai, United Arab Emirates.",
    subHeading2:"1.2 Before you start to use the Website, please read the terms of use set forth herein (referred to as “Terms”) which informs you of the terms on which you may make use of the Website.",
    subHeading3:"1.3 Use of the Website by you is deemed acceptance of the Terms and you agree to be legally bound by the Terms and to comply with the Terms, without limitation. If you do not accept the Terms in full, you must leave the Website immediately."

  },
  {
    id:2,
    heading:"2. Changes To Website",
    subHeading1:"The Terms may be changed by Art Dubai from time to time at its sole discretion without notice to you. If the Terms are changed (such changes shall be deemed to form an integral part of the Terms), the new version of the Terms comes into force and will be enforceable from the day it is uploaded on the Website and the continued use by you of the Website following the posting of any changes to the Terms constitutes your acceptance of those changes. Any new features or tools added to the Website shall also be subject to the Terms then in force.",
    subHeading2:null,
    subHeading3:null,


  }
]

export const privacyPolicy = [
  {
    id:1,
    heading:"1. Protection of Privacy",
    subHeading1:"This Privacy Policy (together with Art Dubai’s Terms (i.e. the Terms of Use) and any other documents referred to in the Terms) sets out the basis on which any personal data Art Dubai collects from you, or that you provide to Art Dubai, will be processed by Art Dubai.  Please read the following carefully to understand Art Dubai’s views and practices regarding your personal data and how Art Dubai will treat it. By visiting www.artdubai.ae you are accepting and consenting to the practices described in this Privacy Policy.",
    subHeading2:null,
  
  },
  {
    id:2,
    heading:"2. Data Collection",
    subHeading1:"Art Dubai may collect and process the following data about you:",
    subHeading2:"(a) Data you give Art Dubai:  You may give Art Dubai data about you by filling in forms on our site www.artdubai.ae by corresponding with Art Dubai by telephone, e-mail or otherwise. If you sign up to receive Art Dubai newsletters you will be asked to register your name and email details and will be asked to provide consent to receive further materials from Art Dubai. By providing such consent, you agree to receive information about Art Dubai. An unsubscribe link will always be provided within the newsletters, and also a link to manage your content preferences and contact details. You may also provide Art Dubai with data when you enter a competition, promotion or survey, attend an event and when you report a problem with Art Dubai’s Website.  The data you give Art Dubai may include your name, address, e-mail address and phone number.",
  
  }
]

export const NOTIFICATION_DATA = [
  {
    id: 1,
    title: 'First',
    des: 'Amzing Lorem Ipsum is simply dummy tex',
    days: '5 days ago',
    image: require('../asset/images/expert1.png'),
  },
  {
    id: 2,
    title: 'Second Item',
    des: 'Amzing Lorem Ipsum is simply dummy tex',
    days: '5 days ago',
    image: require('../asset/images/expert1.png'),
  },
  {
    id: 3,
    title: 'Third Item',
    des: 'Amzing Lorem Ipsum is simply dummy tex',
    days: '5 days ago',
    image: require('../asset/images/expert1.png'),
  },
  {
    id: 4,
    title: 'Third Item',
    des: 'Amzing Lorem Ipsum is simply dummy tex',
    days: '5 days ago',
    image: require('../asset/images/expert1.png'),
  },
  {
    id: 5,
    title: 'Third Item',
    des: 'Amzing Lorem Ipsum is simply dummy tex',
    days: '5 days ago',
    image: require('../asset/images/expert1.png'),
  },
  {
    id: 6,
    title: 'Third Item',
    des: 'Amzing Lorem Ipsum is simply dummy tex',
    days: '5 days ago',
    image: require('../asset/images/expert1.png'),
  },
];

