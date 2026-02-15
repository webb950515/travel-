import { AppData, FlightOrigin, Language } from './types';

export const DATA: Record<Language, AppData> = {
  en: {
    nav: {
      PLAN: 'Plan',
      GUIDE: 'Guide',
      WALLET: 'Wallet',
      LISTS: 'Lists',
      INFO: 'Info'
    },
    flights: {
      TW: [
        { type: 'Departure', flightNumber: 'CI0909', date: '2/22', time: '10:45 - 13:00', airport: 'TPE -> HKG', terminal: 'T1' },
        { type: 'Return', flightNumber: 'CI0916', date: '2/26', time: '17:35 - 19:20', airport: 'HKG -> TPE', terminal: 'T1' }
      ],
      SG: [
        { type: 'Departure', flightNumber: 'SQ892', date: '2/22', time: '09:55 - 13:55', airport: 'SIN -> HKG', terminal: 'T1' },
        { type: 'Return', flightNumber: 'SQ893', date: '2/26', time: '15:45 - 19:50', airport: 'HKG -> SIN', terminal: 'T1' }
      ]
    },
    hotel: {
      name: 'Holiday Inn Golden Mile',
      address: '50 Nathan Rd, Tsim Sha Tsui, Hong Kong',
      checkIn: '15:00',
      checkOut: '12:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Golden+Mile+Hong+Kong'
    },
    itinerary: [
      {
        day: 'Day 1',
        date: '2/22 (Sun)',
        weather: '17°C - 21°C ☁️ Cloudy',
        items: [
          { id: '1-1', time: '13:55', title: 'Arrivals', description: 'TW arrives 13:00. SG arrives 13:55. Meet at Arrival Hall, near Gate A (Pret A Manger).', isImportant: true },
          { id: '1-2', time: '15:00', title: 'Pick up to Hotel', description: 'Klook Car (booked x2). 30 mins drive.', isImportant: true },
          { id: '1-3', time: '16:00', title: 'Check-in Holiday Inn', description: 'IHG App (4 Rooms). Rest.', links: [{ label: 'Hotel Map', url: 'https://goo.gl/maps/HolidayInnHk', type: 'map' }] },
          { id: '1-4', time: '18:00', title: 'Dinner @ The Queen', description: 'Booked. Walking distance.', links: [{ label: 'Restaurant', url: '#', type: 'food' }] },
          { id: '1-5', time: '20:00', title: 'Nathan Road Shopping', description: 'Explore Tsim Sha Tsui area.' },
          { id: '1-6', time: '20:30', title: 'Back to Hotel', description: 'Rest. Prepare for early Shenzhen trip tomorrow.' }
        ]
      },
      {
        day: 'Day 2',
        date: '2/23 (Mon)',
        weather: '16°C - 22°C ☀️ Sunny',
        items: [
          { id: '2-1', time: '09:00', title: 'To West Kowloon Station', description: 'Uber (30 mins). HSR to Shenzhen.', isImportant: true },
          { id: '2-2', time: '10:45', title: 'HSR to Shenzhen (G5630)', description: '10:45 - 11:01 to Futian Station. Klook Tickets (booked x8). Arrive 90mins before.', links: [{ label: 'Station Info', url: '#', type: 'info' }] },
          { id: '2-3', time: '11:00', title: 'Nantou Ancient Town', description: 'Didi from Futian (20 mins). Lunch here.', links: [{ label: 'Map', url: '#', type: 'map' }] },
          { id: '2-4', time: '13:30', title: 'The MixC Mall (Optional)', description: 'If Nantou is finished early, visit The MixC.' },
          { id: '2-5', time: '15:30', title: 'Dongmen Pedestrian St.', description: 'Street food and shopping. Dinner in area.' },
          { id: '2-6', time: '20:00', title: 'To Shenzhen North/Futian', description: 'Didi to station (20 mins).' },
          { id: '2-7', time: '21:54', title: 'HSR back to HK (G5825)', description: '21:54 - 22:08. Klook Tickets (booked x8). Uber back to hotel (30 mins).', isImportant: true }
        ]
      },
      {
        day: 'Day 3',
        date: '2/24 (Tue)',
        weather: '18°C - 23°C 🌤️ Partly Cloudy',
        items: [
          { id: '3-1', time: '10:30', title: 'Free Morning', description: 'Sleep in. Free time.' },
          { id: '3-2', time: '12:00', title: 'Lunch', description: 'Local restaurant (TBD).', links: [{ label: 'Food Options', url: '#', type: 'food' }] },
          { id: '3-3', time: '14:00', title: 'Shopping / Temple St', description: 'Nathan road shopping. Temple street night market later.' },
          { id: '3-4', time: '18:30', title: 'Dinner', description: 'Suggestion: Kwan Kee Claypot Rice. Walking distance.', links: [{ label: 'Kwan Kee', url: 'https://www.google.com/maps/search/?api=1&query=Kwan+Kee+Claypot+Rice', type: 'food' }] },
          { id: '3-5', time: '20:00', title: 'Victoria Harbour', description: 'Night view of the skyline.' }
        ]
      },
      {
        day: 'Day 4',
        date: '2/25 (Wed)',
        weather: '17°C - 22°C ☀️ Sunny',
        items: [
          { id: '4-1', time: '08:30', title: 'To Ferry Terminal', description: 'Uber (30 mins) to Sheung Wan / China Ferry Terminal.', isImportant: true },
          { id: '4-2', time: '10:30', title: 'Ferry to Macau', description: 'TurboJET to Macau Outer Harbour (1h). Klook (Booked x4 + x4).', isImportant: true },
          { id: '4-3', time: '12:00', title: 'Ruins of St. Paul', description: 'Uber 10 mins. Sightseeing.', links: [{ label: 'Map', url: '#', type: 'map' }] },
          { id: '4-4', time: '13:00', title: 'Lunch: Wong Chi Kei', description: 'Walk 10 mins. Famous noodles. Senado Square.' },
          { id: '4-5', time: '16:00', title: 'To City of Dreams', description: 'Uber 20 mins.' },
          { id: '4-6', time: '17:00', title: 'House of Dancing Water', description: 'Show starts. Duration: 1h 20m. Booked x8.', links: [{ label: 'Show Info', url: '#', type: 'info' }] },
          { id: '4-7', time: '19:00', title: 'Taipa Village', description: 'Dinner and snacks.' },
          { id: '4-8', time: '20:30', title: 'To Taipa Ferry Terminal', description: 'Uber 10 mins.' },
          { id: '4-9', time: '22:00', title: 'Ferry back to HK', description: 'Taipa -> Sheung Wan. Klook (Booked x2 + x2x3). Grab/Uber back to hotel (30 mins).', isImportant: true }
        ]
      },
      {
        day: 'Day 5',
        date: '2/26 (Thu)',
        weather: '18°C - 24°C 🌤️ Sunny',
        items: [
          { id: '5-1', time: '10:30', title: 'Last Shopping / Bakehouse', description: 'Victoria harbour morning view. Buy Bakehouse egg tarts.' },
          { id: '5-2', time: '12:15', title: 'Check Out', description: 'Check out of Holiday Inn.' },
          { id: '5-3', time: '12:30', title: 'To Airport', description: 'Klook Car (Booked x2). Pickup at 12:45 Lobby.', isImportant: true },
          { id: '5-4', time: '13:45', title: 'Lunch @ Airport', description: 'Eat before flight.' },
          { id: '5-5', time: '15:45', title: 'SG Flight', description: 'SG Team departs 15:45.' },
          { id: '5-6', time: '17:35', title: 'TW Flight', description: 'TW Team departs 17:35.' }
        ]
      }
    ],
    guides: [
      {
        id: 'g1',
        title: 'Macau: Las Vegas of Asia',
        subtitle: 'Heritage & Casinos',
        content: 'Macau is a blend of Portuguese colonial history and modern Chinese culture. The Historic Centre of Macau is a UNESCO World Heritage site. Be sure to try the Lord Stow\'s Bakery egg tarts and visit the Venetian for a gondola ride.',
        imageUrl: 'https://picsum.photos/800/400?random=1'
      },
      {
        id: 'g2',
        title: 'Hong Kong Essentials',
        subtitle: 'Pearl of the Orient',
        content: 'Hong Kong is fast-paced. Stand on the right on escalators. The "Ding Ding" trams on HK Island are a cheap and nostalgic way to see the city. Use your Octopus card for almost everything, including convenience stores.',
        imageUrl: 'https://picsum.photos/800/400?random=2',
        location: { lat: 22.2855, lng: 114.1577 }
      }
    ],
    checklist: [
      'Passport / Mainland Travel Permit (台胞證)',
      'Visa for China (if needed)',
      'Alipay / WeChat Pay (Bound to card)',
      'Roaming / SIM Card / eSIM',
      'Power Bank',
      'Comfortable Shoes',
      'Personal Medicine'
    ],
    info: {
      weather: {
        title: 'Weather Forecast',
        subtitle: 'Check HK/Macau/China Weather',
        url: 'https://www.hko.gov.hk/en/'
      },
      emergency: {
        title: 'EMERGENCY',
        police: 'Police: 999 (HK/Macau) / 110 (CN)',
        ambulance: 'Amb: 999 (HK/Macau) / 120 (CN)',
        office: 'Diplomatic / Assistance',
        officeName: 'TECO (HK/Macau)'
      },
      rules: {
        title: 'TRAVEL NOTICES',
        items: [
          'HK: No eating/drinking on MTR.',
          'Macau: Casinos require ID (21+).',
          'Bring cash (HKD/RMB) for taxis.',
          'China: Use eSIM for unrestricted internet.'
        ]
      }
    }
  },
  zh: {
    nav: {
      PLAN: '行程',
      GUIDE: '導覽',
      WALLET: '錢包',
      LISTS: '清單',
      INFO: '資訊'
    },
    flights: {
      TW: [
        { type: '去程', flightNumber: 'CI0909', date: '2/22', time: '10:45 - 13:00', airport: '桃園 -> 香港', terminal: 'T1' },
        { type: '回程', flightNumber: 'CI0916', date: '2/26', time: '17:35 - 19:20', airport: '香港 -> 桃園', terminal: 'T1' }
      ],
      SG: [
        { type: '去程', flightNumber: 'SQ892', date: '2/22', time: '09:55 - 13:55', airport: '樟宜 -> 香港', terminal: 'T1' },
        { type: '回程', flightNumber: 'SQ893', date: '2/26', time: '15:45 - 19:50', airport: '香港 -> 樟宜', terminal: 'T1' }
      ]
    },
    hotel: {
      name: '香港金域假日酒店',
      address: '香港九龍尖沙咀彌敦道50號',
      checkIn: '15:00',
      checkOut: '12:00',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Golden+Mile+Hong+Kong'
    },
    itinerary: [
      {
        day: '第一天',
        date: '2/22 (日) 香港',
        weather: '17°C - 21°C ☁️ 多雲',
        items: [
          { id: '1-1', time: '13:55', title: '抵達香港', description: 'TW 13:00 抵達 / SG 13:55 抵達。接機大堂 A 區 (Pret A Manger 旁) 集合。', isImportant: true },
          { id: '1-2', time: '15:00', title: '前往飯店', description: 'Klook 包車接送 (預訂 x2)。車程30分鐘。', isImportant: true },
          { id: '1-3', time: '16:00', title: '入住假日酒店', description: 'IHG App 訂房 (4間)。休息。', links: [{ label: '飯店地圖', url: 'https://goo.gl/maps/HolidayInnHk', type: 'map' }] },
          { id: '1-4', time: '18:00', title: '晚餐 @ The Queen', description: '已訂位。步行前往。', links: [{ label: '餐廳資訊', url: '#', type: 'food' }] },
          { id: '1-5', time: '20:00', title: '彌敦道逛街', description: '尖沙咀周邊購物。' },
          { id: '1-6', time: '20:30', title: '返回飯店', description: '休息。準備明日前往深圳。' }
        ]
      },
      {
        day: '第二天',
        date: '2/23 (一) 深圳',
        weather: '16°C - 22°C ☀️ 晴朗',
        items: [
          { id: '2-1', time: '09:00', title: '前往西九龍高鐵站', description: '搭乘 Uber (30分鐘)。準備前往深圳。', isImportant: true },
          { id: '2-2', time: '10:45', title: '高鐵往深圳福田 (G5630)', description: '10:45 - 11:01。Klook 訂票 (預訂 x8)。需提前90分鐘抵達。', links: [{ label: '車站資訊', url: '#', type: 'info' }] },
          { id: '2-3', time: '11:00', title: '南頭古城 & 午餐', description: '搭乘滴滴 Didi (20分鐘)。古城內用餐。', links: [{ label: '地圖', url: '#', type: 'map' }] },
          { id: '2-4', time: '13:30', title: '萬象天地 (選)', description: '若南頭逛完可去 (The MixC)。' },
          { id: '2-5', time: '15:30', title: '東門步行街', description: '逛街、小吃、晚餐。' },
          { id: '2-6', time: '20:00', title: '前往深圳北/福田', description: '搭乘滴滴 (20分鐘)。' },
          { id: '2-7', time: '21:54', title: '高鐵回香港 (G5825)', description: '21:54 - 22:08。Klook 訂票 (預訂 x8)。抵港後 Uber 回飯店 (30分鐘)。', isImportant: true }
        ]
      },
      {
        day: '第三天',
        date: '2/24 (二) 香港',
        weather: '18°C - 23°C 🌤️ 晴時多雲',
        items: [
          { id: '3-1', time: '10:30', title: '自由活動', description: '睡到自然醒。早午餐。' },
          { id: '3-2', time: '12:00', title: '午餐', description: '當地餐廳 (待定)。', links: [{ label: '美食', url: '#', type: 'food' }] },
          { id: '3-3', time: '14:00', title: '逛街 / 廟街', description: '彌敦道購物。稍晚前往廟街夜市。' },
          { id: '3-4', time: '18:30', title: '晚餐', description: '建議：坤記煲仔飯 (Kwan Kee Claypot Rice)。步行前往。', links: [{ label: '坤記地圖', url: 'https://www.google.com/maps/search/?api=1&query=Kwan+Kee+Claypot+Rice', type: 'food' }] },
          { id: '3-5', time: '20:00', title: '維多利亞港夜景', description: '星光大道散步。' }
        ]
      },
      {
        day: '第四天',
        date: '2/25 (三) 澳門',
        weather: '17°C - 22°C ☀️ 晴朗',
        items: [
          { id: '4-1', time: '08:30', title: '前往碼頭', description: 'Uber (30分鐘) 往上環信德中心或中港城。', isImportant: true },
          { id: '4-2', time: '10:30', title: '渡輪往澳門', description: '外港客運碼頭 (1小時)。Klook 訂票 (預訂 x4 + x4)。', isImportant: true },
          { id: '4-3', time: '12:00', title: '大三巴牌坊', description: 'Uber (10分鐘)。觀光。', links: [{ label: '地圖', url: '#', type: 'map' }] },
          { id: '4-4', time: '13:00', title: '午餐：黃枝記', description: '步行 10 分鐘。議事亭前地。' },
          { id: '4-5', time: '16:00', title: '前往新濠天地', description: 'Uber (20分鐘)。看秀。' },
          { id: '4-6', time: '17:00', title: '水舞間', description: '演出約 1小時20分。已預訂 x8。', links: [{ label: '演出資訊', url: '#', type: 'info' }] },
          { id: '4-7', time: '19:00', title: '官也街晚餐', description: '氹仔村吃葡國菜或小吃。' },
          { id: '4-8', time: '20:30', title: '前往氹仔碼頭', description: 'Uber (10分鐘)。' },
          { id: '4-9', time: '22:00', title: '渡輪回香港', description: '氹仔 -> 上環。Klook 訂票 (預訂 x2 + x2x3)。Uber 回飯店 (30分鐘)。', isImportant: true }
        ]
      },
      {
        day: '第五天',
        date: '2/26 (四) 返程',
        weather: '18°C - 24°C 🌤️ 晴朗',
        items: [
          { id: '5-1', time: '10:30', title: '最後採購 / Bakehouse', description: '維多利亞港晨景。購買 Bakehouse 蛋塔。' },
          { id: '5-2', time: '12:15', title: '退房', description: '金域假日酒店退房。' },
          { id: '5-3', time: '12:30', title: '前往機場', description: 'Klook 包車接送 (預訂 x2)。12:45 大廳集合。', isImportant: true },
          { id: '5-4', time: '13:45', title: '機場午餐', description: '登機前用餐。' },
          { id: '5-5', time: '15:45', title: 'SG 航班', description: '新加坡團隊 15:45 起飛。' },
          { id: '5-6', time: '17:35', title: 'TW 航班', description: '台灣團隊 17:35 起飛。' }
        ]
      }
    ],
    guides: [
      {
        id: 'g1',
        title: '澳門：東方拉斯維加斯',
        subtitle: '歷史遺產與娛樂場',
        content: '澳門融合了葡萄牙殖民歷史與現代中國文化。澳門歷史城區是聯合國世界文化遺產。一定要嚐嚐安德魯蛋塔，並去威尼斯人體驗貢多拉船。',
        imageUrl: 'https://picsum.photos/800/400?random=1'
      },
      {
        id: 'g2',
        title: '香港旅遊須知',
        subtitle: '東方之珠',
        content: '香港步調快速。搭乘手扶梯請靠右站立。港島的「叮叮車」是便宜又懷舊的交通工具。八達通卡非常方便，可用於交通與便利商店。',
        imageUrl: 'https://picsum.photos/800/400?random=2',
        location: { lat: 22.2855, lng: 114.1577 }
      }
    ],
    checklist: [
      '護照 / 台胞證 (檢查有效期)',
      '中國簽證 (如需要)',
      '支付寶 / WeChat Pay (綁定信用卡)',
      '漫遊 / 網卡 / eSIM',
      '行動電源',
      '好走的鞋',
      '個人常備藥品'
    ],
    info: {
      weather: {
        title: '天氣預報',
        subtitle: '查詢 香港/澳門/中國 天氣',
        url: 'https://www.hko.gov.hk/tc/'
      },
      emergency: {
        title: '緊急聯絡',
        police: '報警: 999 (港澳) / 110 (中)',
        ambulance: '救護: 999 (港澳) / 120 (中)',
        office: '辦事處 / 協助',
        officeName: '台北經濟文化辦事處'
      },
      rules: {
        title: '旅遊注意事項',
        items: [
          '香港: 地鐵內禁止飲食。',
          '澳門: 賭場需年滿 21 歲。',
          '搭乘計程車建議準備現金 (HKD/RMB)。',
          '中國: 使用 eSIM 可無限制上網。'
        ]
      }
    }
  }
};
