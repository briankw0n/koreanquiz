const hanjaCharacters = [
  {
    question: '家',
    answer: '집 가'
  },
  {
    question: '佳',
    answer: '아름다울 가'
  },
  {
    question: '街',
    answer: '거리 가'
  },
  {
    question: '可',
    answer: '옳을 가'
  },
  {
    question: '歌',
    answer: '노래 가'
  },
  {
    question: '加',
    answer: '더할 가'
  },
  {
    question: '價',
    answer: '값 가'
  },
  {
    question: '假',
    answer: '거짓 가'
  },
  {
    question: '架',
    answer: '시렁 가'
  },
  {
    question: '暇',
    answer: '겨를 가'
  },
  {
    question: '各',
    answer: '각각 각'
  },
  {
    question: '角',
    answer: '뿔 각'
  },
  {
    question: '脚',
    answer: '다리 각'
  },
  {
    question: '閣',
    answer: '누각 각'
  },
  {
    question: '却',
    answer: '물리칠 각'
  },
  {
    question: '覺',
    answer: '깨달을 각'
  },
  {
    question: '刻',
    answer: '새길 각'
  },
  {
    question: '干',
    answer: '방패 간'
  },
  {
    question: '間',
    answer: '사이 간'
  },
  {
    question: '看',
    answer: '볼 간'
  },
  {
    question: '刊',
    answer: '새길 간'
  },
  {
    question: '肝',
    answer: '간 간'
  },
  {
    question: '幹',
    answer: '줄기 간'
  },
  {
    question: '簡',
    answer: '대쪽 간'
  },
  {
    question: '姦',
    answer: '간음할 간'
  },
  {
    question: '懇',
    answer: '간절할 간'
  },
  {
    question: '渴',
    answer: '목마를 갈'
  },
  {
    question: '甘',
    answer: '달 감'
  },
  {
    question: '減',
    answer: '덜 감'
  },
  {
    question: '感',
    answer: '느낄 감'
  },
  {
    question: '敢',
    answer: '감히 감'
  },
  {
    question: '監',
    answer: '볼 감'
  },
  {
    question: '鑑',
    answer: '거울 감'
  },
  {
    question: '甲',
    answer: '갑옷 갑'
  },
  {
    question: '江',
    answer: '강 강'
  },
  {
    question: '降',
    answer: '내릴 강'
  },
  {
    question: '講',
    answer: '익힐 강'
  },
  {
    question: '強',
    answer: '굳셀 강'
  },
  {
    question: '康',
    answer: '편안할 강'
  },
  {
    question: '剛',
    answer: '굳셀 강'
  },
  {
    question: '鋼',
    answer: '강철 강'
  },
  {
    question: '綱',
    answer: '벼리 강'
  },
  {
    question: '改',
    answer: '고칠 개'
  },
  {
    question: '皆',
    answer: '다 개'
  },
  {
    question: '個',
    answer: '낱 개'
  },
  {
    question: '開',
    answer: '열 개'
  },
  {
    question: '介',
    answer: '낄 개'
  },
  {
    question: '慨',
    answer: '슬퍼할 개'
  },
  {
    question: '槪',
    answer: '대개 개'
  },
  {
    question: '蓋',
    answer: '덮을 개'
  },
  {
    question: '客',
    answer: '손님 객'
  },
  {
    question: '更',
    answer: '다시 갱'
  },
  {
    question: '去',
    answer: '갈 거'
  },
  {
    question: '巨',
    answer: '클 거'
  },
  {
    question: '居',
    answer: '살 거'
  },
  {
    question: '車',
    answer: '수레 거'
  },
  {
    question: '擧',
    answer: '들 거'
  },
  {
    question: '距',
    answer: '떨어질 거'
  },
  {
    question: '拒',
    answer: '막을 거'
  },
  {
    question: '據',
    answer: '의거할 거'
  },
  {
    question: '建',
    answer: '세울 건'
  },
  {
    question: '乾',
    answer: '하늘 건'
  },
  {
    question: '件',
    answer: '물건 건'
  },
  {
    question: '健',
    answer: '튼튼할 건'
  },
  {
    question: '傑',
    answer: '뛰어날 걸'
  },
  {
    question: '乞',
    answer: '빌 걸'
  },
  {
    question: '儉',
    answer: '검소할 검'
  },
  {
    question: '劍',
    answer: '칼 검'
  },
  {
    question: '檢',
    answer: '검사할 검'
  },
  {
    question: '格',
    answer: '격식 격'
  },
  {
    question: '擊',
    answer: '칠 격'
  },
  {
    question: '激',
    answer: '격할 격'
  },
  {
    question: '隔',
    answer: '사이 뜰 이뜰격'
  },
  {
    question: '犬',
    answer: '개 견'
  },
  {
    question: '見',
    answer: '볼 견'
  },
  {
    question: '堅',
    answer: '굳을 견'
  },
  {
    question: '肩',
    answer: '어깨 견'
  },
  {
    question: '絹',
    answer: '비단 견'
  },
  {
    question: '遣',
    answer: '보낼 견'
  },
  {
    question: '牽',
    answer: '이끌 견'
  },
  {
    question: '決',
    answer: '결단할 결'
  },
  {
    question: '結',
    answer: '맺을 결'
  },
  {
    question: '潔',
    answer: '깨끗할 결'
  },
  {
    question: '缺',
    answer: '이지러질 결'
  },
  {
    question: '兼',
    answer: '겸할 겸'
  },
  {
    question: '謙',
    answer: '겸손할 겸'
  },
  {
    question: '京',
    answer: '서울 경'
  },
  {
    question: '景',
    answer: '볕 경'
  },
  {
    question: '輕',
    answer: '가벼울 경'
  },
  {
    question: '經',
    answer: '지날 글 날/글경'
  },
  {
    question: '庚',
    answer: '별 경'
  },
  {
    question: '耕',
    answer: '밭 갈 갈경'
  },
  {
    question: '敬',
    answer: '공경할 경'
  },
  {
    question: '驚',
    answer: '놀랄 경'
  },
  {
    question: '慶',
    answer: '경사 경'
  },
  {
    question: '競',
    answer: '겨룰 경'
  },
  {
    question: '竟',
    answer: '마침내 경'
  },
  {
    question: '境',
    answer: '지경 경'
  },
  {
    question: '鏡',
    answer: '거울 경'
  },
  {
    question: '頃',
    answer: '이랑 잠깐 /잠깐경'
  },
  {
    question: '傾',
    answer: '기울 경'
  },
  {
    question: '硬',
    answer: '굳을 경'
  },
  {
    question: '警',
    answer: '깨우칠 경계할 /경계할경'
  },
  {
    question: '徑',
    answer: '지름길 경'
  },
  {
    question: '卿',
    answer: '벼슬 경'
  },
  {
    question: '癸',
    answer: '북방 계'
  },
  {
    question: '季',
    answer: '계절 계'
  },
  {
    question: '界',
    answer: '지경 계'
  },
  {
    question: '計',
    answer: '셀 계'
  },
  {
    question: '溪',
    answer: '시내 계'
  },
  {
    question: '鷄',
    answer: '닭 계'
  },
  {
    question: '系',
    answer: '이을 계'
  },
  {
    question: '係',
    answer: '맬 계'
  },
  {
    question: '戒',
    answer: '경계할 계'
  },
  {
    question: '械',
    answer: '기계 계'
  },
  {
    question: '繼',
    answer: '이을 계'
  },
  {
    question: '契',
    answer: '맺을 계'
  },
  {
    question: '桂',
    answer: '계수나무 계'
  },
  {
    question: '啓',
    answer: '열 계'
  },
  {
    question: '階',
    answer: '섬돌 계'
  },
  {
    question: '繫',
    answer: '맬 계'
  },
  {
    question: '古',
    answer: '옛 고'
  },
  {
    question: '故',
    answer: '옛 고'
  },
  {
    question: '固',
    answer: '굳을 고'
  },
  {
    question: '苦',
    answer: '쓸 고'
  },
  {
    question: '考',
    answer: '생각할 고'
  },
  {
    question: '高',
    answer: '높을 고'
  },
  {
    question: '告',
    answer: '알릴 고'
  },
  {
    question: '枯',
    answer: '마를 고'
  },
  {
    question: '姑',
    answer: '시어미 고'
  },
  {
    question: '庫',
    answer: '곳집 고'
  },
  {
    question: '孤',
    answer: '외로울 고'
  },
  {
    question: '鼓',
    answer: '북 고'
  },
  {
    question: '稿',
    answer: '볏짚 고'
  },
  {
    question: '顧',
    answer: '돌아볼 고'
  },
  {
    question: '谷',
    answer: '골 곡'
  },
  {
    question: '曲',
    answer: '굽을 곡'
  },
  {
    question: '穀',
    answer: '곡식 곡'
  },
  {
    question: '哭',
    answer: '울 곡'
  },
  {
    question: '困',
    answer: '곤할 곤'
  },
  {
    question: '坤',
    answer: '땅 곤'
  },
  {
    question: '骨',
    answer: '뼈 골'
  },
  {
    question: '工',
    answer: '장인 공'
  },
  {
    question: '功',
    answer: '공 공'
  },
  {
    question: '空',
    answer: '빌 공'
  },
  {
    question: '共',
    answer: '함께 공'
  },
  {
    question: '公',
    answer: '공변될 공'
  },
  {
    question: '孔',
    answer: '구멍 공'
  },
  {
    question: '供',
    answer: '이바지할 공'
  },
  {
    question: '恭',
    answer: '공손할 공'
  },
  {
    question: '攻',
    answer: '칠 공'
  },
  {
    question: '恐',
    answer: '두려울 공'
  },
  {
    question: '貢',
    answer: '바칠 공'
  },
  {
    question: '果',
    answer: '열매 과'
  },
  {
    question: '課',
    answer: '공부할 과정 할/과정과'
  },
  {
    question: '科',
    answer: '과목 과'
  },
  {
    question: '過',
    answer: '지날 과'
  },
  {
    question: '誇',
    answer: '자랑할 과'
  },
  {
    question: '寡',
    answer: '적을 과'
  },
  {
    question: '郭',
    answer: '성곽 곽'
  },
  {
    question: '官',
    answer: '벼슬 관'
  },
  {
    question: '觀',
    answer: '볼 관'
  },
  {
    question: '關',
    answer: '빗장 관'
  },
  {
    question: '館',
    answer: '집 관'
  },
  {
    question: '管',
    answer: '대롱 관'
  },
  {
    question: '貫',
    answer: '꿸 관'
  },
  {
    question: '慣',
    answer: '익숙할 관'
  },
  {
    question: '冠',
    answer: '갓 관'
  },
  {
    question: '寬',
    answer: '너그러울 관'
  },
  {
    question: '光',
    answer: '빛 광'
  },
  {
    question: '廣',
    answer: '넓을 광'
  },
  {
    question: '鑛',
    answer: '쇳돌 광'
  },
  {
    question: '狂',
    answer: '미칠 광'
  },
  {
    question: '掛',
    answer: '걸 괘'
  },
  {
    question: '塊',
    answer: '흙덩이 괴'
  },
  {
    question: '愧',
    answer: '부끄러울 괴'
  },
  {
    question: '怪',
    answer: '기이할 괴'
  },
  {
    question: '壞',
    answer: '무너질 괴'
  },
  {
    question: '交',
    answer: '사귈 교'
  },
  {
    question: '校',
    answer: '학교 교'
  },
  {
    question: '橋',
    answer: '다리 교'
  },
  {
    question: '敎',
    answer: '가르칠 교'
  },
  {
    question: '郊',
    answer: '들 교'
  },
  {
    question: '較',
    answer: '견줄 교'
  },
  {
    question: '巧',
    answer: '공교할 교'
  },
  {
    question: '矯',
    answer: '바로잡을 교'
  },
  {
    question: '九',
    answer: '아홉 구'
  },
  {
    question: '口',
    answer: '입 구'
  },
  {
    question: '求',
    answer: '구할 구'
  },
  {
    question: '救',
    answer: '건질 구'
  },
  {
    question: '究',
    answer: '연구할 구'
  },
  {
    question: '久',
    answer: '오랠 구'
  },
  {
    question: '句',
    answer: '글귀 구'
  },
  {
    question: '舊',
    answer: '예 구'
  },
  {
    question: '具',
    answer: '갖출 구'
  },
  {
    question: '俱',
    answer: '함께 구'
  },
  {
    question: '區',
    answer: '구분할 구'
  },
  {
    question: '驅',
    answer: '몰 구'
  },
  {
    question: '苟',
    answer: '진실로 구'
  },
  {
    question: '拘',
    answer: '잡을 구'
  },
  {
    question: '狗',
    answer: '개 구'
  },
  {
    question: '丘',
    answer: '언덕 구'
  },
  {
    question: '懼',
    answer: '두려워할 구'
  },
  {
    question: '龜',
    answer: '땅 이름 름구'
  },
  {
    question: '構',
    answer: '얽을 구'
  },
  {
    question: '球',
    answer: '공 구'
  },
  {
    question: '國',
    answer: '나라 국'
  },
  {
    question: '菊',
    answer: '국화 국'
  },
  {
    question: '局',
    answer: '판 국'
  },
  {
    question: '君',
    answer: '임금 군'
  },
  {
    question: '郡',
    answer: '고을 군'
  },
  {
    question: '軍',
    answer: '군사 군'
  },
  {
    question: '群',
    answer: '무리 군'
  },
  {
    question: '屈',
    answer: '굽힐 굴'
  },
  {
    question: '弓',
    answer: '활 궁'
  },
  {
    question: '宮',
    answer: '집 궁'
  },
  {
    question: '窮',
    answer: '다할 궁'
  },
  {
    question: '卷',
    answer: '책 권'
  },
  {
    question: '權',
    answer: '권세 권'
  },
  {
    question: '勸',
    answer: '권할 권'
  },
  {
    question: '拳',
    answer: '주먹 권'
  },
  {
    question: '券',
    answer: '문서 권'
  },
  {
    question: '厥',
    answer: '궐'
  },
  {
    question: '軌',
    answer: '바퀴 자국 자국궤'
  },
  {
    question: '貴',
    answer: '귀할 귀'
  },
  {
    question: '歸',
    answer: '돌아갈 귀'
  },
  {
    question: '鬼',
    answer: '귀신 귀'
  },
  {
    question: '叫',
    answer: '부르짖을 규'
  },
  {
    question: '規',
    answer: '법 규'
  },
  {
    question: '糾',
    answer: '얽힐 규'
  },
  {
    question: '均',
    answer: '고를 균'
  },
  {
    question: '菌',
    answer: '버섯 균'
  },
  {
    question: '極',
    answer: '다할 극'
  },
  {
    question: '克',
    answer: '이길 극'
  },
  {
    question: '劇',
    answer: '심할 극'
  },
  {
    question: '近',
    answer: '가까울 근'
  },
  {
    question: '勤',
    answer: '부지런할 근'
  },
  {
    question: '根',
    answer: '뿌리 근'
  },
  {
    question: '斤',
    answer: '도끼 근'
  },
  {
    question: '僅',
    answer: '겨우 근'
  },
  {
    question: '謹',
    answer: '삼갈 근'
  },
  {
    question: '金',
    answer: '쇠 금'
  },
  {
    question: '今',
    answer: '이제 금'
  },
  {
    question: '禁',
    answer: '금할 금'
  },
  {
    question: '錦',
    answer: '비단 금'
  },
  {
    question: '禽',
    answer: '날짐승 금'
  },
  {
    question: '琴',
    answer: '거문고 금'
  },
  {
    question: '及',
    answer: '미칠 급'
  },
  {
    question: '給',
    answer: '줄 급'
  },
  {
    question: '急',
    answer: '급할 급'
  },
  {
    question: '級',
    answer: '등급 급'
  },
  {
    question: '肯',
    answer: '즐길 긍'
  },
  {
    question: '己',
    answer: '몸 기'
  },
  {
    question: '記',
    answer: '기록할 기'
  },
  {
    question: '起',
    answer: '일어날 기'
  },
  {
    question: '其',
    answer: '그 기'
  },
  {
    question: '期',
    answer: '기약할 기'
  },
  {
    question: '基',
    answer: '터 기'
  },
  {
    question: '氣',
    answer: '기운 기'
  },
  {
    question: '技',
    answer: '재주 기'
  },
  {
    question: '幾',
    answer: '기미 기'
  },
  {
    question: '旣',
    answer: '이미 기'
  },
  {
    question: '紀',
    answer: '벼리 기'
  },
  {
    question: '忌',
    answer: '꺼릴 기'
  },
  {
    question: '旗',
    answer: '기 기'
  },
  {
    question: '欺',
    answer: '속일 기'
  },
  {
    question: '奇',
    answer: '기특할 기'
  },
  {
    question: '騎',
    answer: '말 탈 탈기'
  },
  {
    question: '寄',
    answer: '부칠 기'
  },
  {
    question: '豈',
    answer: '어찌 기'
  },
  {
    question: '棄',
    answer: '버릴 기'
  },
  {
    question: '祈',
    answer: '빌 기'
  },
  {
    question: '企',
    answer: '꾀할 기'
  },
  {
    question: '畿',
    answer: '경기 기'
  },
  {
    question: '飢',
    answer: '주릴 기'
  },
  {
    question: '器',
    answer: '그릇 기'
  },
  {
    question: '機',
    answer: '틀 기'
  },
  {
    question: '緊',
    answer: '긴할 긴'
  },
  {
    question: '吉',
    answer: '길할 길'
  },
  {
    question: '那',
    answer: '어찌 나'
  },
  {
    question: '諾',
    answer: '허락할 낙'
  },
  {
    question: '暖',
    answer: '따뜻할 난'
  },
  {
    question: '難',
    answer: '어려울 난'
  },
  {
    question: '南',
    answer: '남녘 남'
  },
  {
    question: '男',
    answer: '사내 남'
  },
  {
    question: '納',
    answer: '들일 바칠 /바칠납'
  },
  {
    question: '娘',
    answer: '아가씨 낭'
  },
  {
    question: '內',
    answer: '안 내'
  },
  {
    question: '乃',
    answer: '이에 내'
  },
  {
    question: '奈',
    answer: '어찌 내'
  },
  {
    question: '耐',
    answer: '견딜 내'
  },
  {
    question: '女',
    answer: '계집 녀'
  },
  {
    question: '年',
    answer: '해 년'
  },
  {
    question: '念',
    answer: '생각 념'
  },
  {
    question: '寧',
    answer: '편안할 녕'
  },
  {
    question: '怒',
    answer: '성낼 노'
  },
  {
    question: '奴',
    answer: '종 노'
  },
  {
    question: '努',
    answer: '힘쓸 노'
  },
  {
    question: '農',
    answer: '농사 농'
  },
  {
    question: '腦',
    answer: '골 뇌'
  },
  {
    question: '惱',
    answer: '괴로워할 뇌'
  },
  {
    question: '能',
    answer: '능할 능'
  },
  {
    question: '泥',
    answer: '진흙 니'
  },
  {
    question: '多',
    answer: '많을 다'
  },
  {
    question: '茶',
    answer: '차 다'
  },
  {
    question: '丹',
    answer: '붉을 단'
  },
  {
    question: '但',
    answer: '다만 단'
  },
  {
    question: '單',
    answer: '홑 단'
  },
  {
    question: '短',
    answer: '짧을 단'
  },
  {
    question: '端',
    answer: '끝 단'
  },
  {
    question: '旦',
    answer: '아침 단'
  },
  {
    question: '段',
    answer: '층계 단'
  },
  {
    question: '壇',
    answer: '단 단'
  },
  {
    question: '檀',
    answer: '박달나무 단'
  },
  {
    question: '斷',
    answer: '끊을 단'
  },
  {
    question: '團',
    answer: '둥글 단'
  },
  {
    question: '達',
    answer: '통달할 달'
  },
  {
    question: '談',
    answer: '말씀 담'
  },
  {
    question: '淡',
    answer: '맑을 담'
  },
  {
    question: '擔',
    answer: '멜 담'
  },
  {
    question: '答',
    answer: '대답 답'
  },
  {
    question: '畓',
    answer: '논 답'
  },
  {
    question: '踏',
    answer: '밟을 답'
  },
  {
    question: '堂',
    answer: '집 당'
  },
  {
    question: '當',
    answer: '마땅 당'
  },
  {
    question: '唐',
    answer: '당나라 당'
  },
  {
    question: '糖',
    answer: '사탕 당'
  },
  {
    question: '黨',
    answer: '무리 당'
  },
  {
    question: '大',
    answer: '큰 대'
  },
  {
    question: '代',
    answer: '대신할 대'
  },
  {
    question: '待',
    answer: '기다릴 대'
  },
  {
    question: '對',
    answer: '대할 대'
  },
  {
    question: '帶',
    answer: '띠 대'
  },
  {
    question: '臺',
    answer: '대 대'
  },
  {
    question: '貸',
    answer: '빌릴 대'
  },
  {
    question: '隊',
    answer: '무리 대'
  },
  {
    question: '德',
    answer: '클 덕'
  },
  {
    question: '刀',
    answer: '칼 도'
  },
  {
    question: '到',
    answer: '이를 도'
  },
  {
    question: '度',
    answer: '법도 도'
  },
  {
    question: '道',
    answer: '길 도'
  },
  {
    question: '島',
    answer: '섬 도'
  },
  {
    question: '徒',
    answer: '무리 도'
  },
  {
    question: '都',
    answer: '도읍 도'
  },
  {
    question: '圖',
    answer: '그림 도'
  },
  {
    question: '倒',
    answer: '넘어질 도'
  },
  {
    question: '挑',
    answer: '돋울 도'
  },
  {
    question: '桃',
    answer: '복숭아 도'
  },
  {
    question: '跳',
    answer: '뛸 도'
  },
  {
    question: '逃',
    answer: '달아날 도'
  },
  {
    question: '渡',
    answer: '건널 도'
  },
  {
    question: '陶',
    answer: '질그릇 도'
  },
  {
    question: '途',
    answer: '길 도'
  },
  {
    question: '稻',
    answer: '벼 도'
  },
  {
    question: '導',
    answer: '이끌 도'
  },
  {
    question: '盜',
    answer: '훔칠 도'
  },
  {
    question: '塗',
    answer: '칠할 도'
  },
  {
    question: '讀',
    answer: '읽을 독'
  },
  {
    question: '獨',
    answer: '홀로 독'
  },
  {
    question: '毒',
    answer: '독 독'
  },
  {
    question: '督',
    answer: '감독할 독'
  },
  {
    question: '篤',
    answer: '도타울 독'
  },
  {
    question: '豚',
    answer: '돼지 돈'
  },
  {
    question: '敦',
    answer: '도타울 돈'
  },
  {
    question: '突',
    answer: '갑자기 돌'
  },
  {
    question: '同',
    answer: '한가지 동'
  },
  {
    question: '洞',
    answer: '골 동'
  },
  {
    question: '童',
    answer: '아이 동'
  },
  {
    question: '冬',
    answer: '겨울 동'
  },
  {
    question: '東',
    answer: '동녘 동'
  },
  {
    question: '動',
    answer: '움직일 동'
  },
  {
    question: '銅',
    answer: '구리 동'
  },
  {
    question: '凍',
    answer: '얼 동'
  },
  {
    question: '斗',
    answer: '말 두'
  },
  {
    question: '豆',
    answer: '콩 두'
  },
  {
    question: '頭',
    answer: '머리 두'
  },
  {
    question: '鈍',
    answer: '무딜 둔'
  },
  {
    question: '屯',
    answer: '진 칠 칠둔'
  },
  {
    question: '得',
    answer: '얻을 득'
  },
  {
    question: '等',
    answer: '무리 등'
  },
  {
    question: '登',
    answer: '오를 등'
  },
  {
    question: '燈',
    answer: '등 등'
  },
  {
    question: '騰',
    answer: '오를 등'
  },
  {
    question: '羅',
    answer: '벌일 라'
  },
  {
    question: '落',
    answer: '떨어질 락'
  },
  {
    question: '樂',
    answer: '즐길 락'
  },
  {
    question: '絡',
    answer: '이을 락'
  },
  {
    question: '卵',
    answer: '알 란'
  },
  {
    question: '亂',
    answer: '어지러울 란'
  },
  {
    question: '蘭',
    answer: '난초 란'
  },
  {
    question: '欄',
    answer: '난간 란'
  },
  {
    question: '覽',
    answer: '볼 람'
  },
  {
    question: '濫',
    answer: '넘칠 람'
  },
  {
    question: '浪',
    answer: '물결 랑'
  },
  {
    question: '郞',
    answer: '사내 랑'
  },
  {
    question: '廊',
    answer: '사랑채 랑'
  },
  {
    question: '來',
    answer: '올 래'
  },
  {
    question: '冷',
    answer: '찰 랭'
  },
  {
    question: '略',
    answer: '간략할 다스릴 /다스릴략'
  },
  {
    question: '掠',
    answer: '노략질할 략'
  },
  {
    question: '良',
    answer: '어질 량'
  },
  {
    question: '兩',
    answer: '두 량'
  },
  {
    question: '量',
    answer: '헤아릴 량'
  },
  {
    question: '涼',
    answer: '서늘할 량'
  },
  {
    question: '梁',
    answer: '들보 량'
  },
  {
    question: '糧',
    answer: '양식 량'
  },
  {
    question: '諒',
    answer: '살필 량'
  },
  {
    question: '旅',
    answer: '나그네 려'
  },
  {
    question: '麗',
    answer: '고울 려'
  },
  {
    question: '慮',
    answer: '생각할 려'
  },
  {
    question: '勵',
    answer: '힘쓸 려'
  },
  {
    question: '力',
    answer: '힘 력'
  },
  {
    question: '歷',
    answer: '지날 력'
  },
  {
    question: '曆',
    answer: '책력 력'
  },
  {
    question: '連',
    answer: '잇닿을 련'
  },
  {
    question: '練',
    answer: '익힐 련'
  },
  {
    question: '鍊',
    answer: '불릴 련'
  },
  {
    question: '憐',
    answer: '불쌍히 여길 히여길련'
  },
  {
    question: '聯',
    answer: '연이을 련'
  },
  {
    question: '戀',
    answer: '그리워할 사모할 할/사모할련'
  },
  {
    question: '蓮',
    answer: '연 련'
  },
  {
    question: '列',
    answer: '벌일 렬'
  },
  {
    question: '烈',
    answer: '세찰 렬'
  },
  {
    question: '裂',
    answer: '찢을 렬'
  },
  {
    question: '劣',
    answer: '못할 렬'
  },
  {
    question: '廉',
    answer: '청렴할 렴'
  },
  {
    question: '獵',
    answer: '사냥 렵'
  },
  {
    question: '令',
    answer: '하여금 명령 금/명령령'
  },
  {
    question: '領',
    answer: '거느릴 령'
  },
  {
    question: '嶺',
    answer: '재 령'
  },
  {
    question: '零',
    answer: '떨어질 령'
  },
  {
    question: '靈',
    answer: '신령 령'
  },
  {
    question: '例',
    answer: '법식 례'
  },
  {
    question: '禮',
    answer: '예도 례'
  },
  {
    question: '隷',
    answer: '종 례'
  },
  {
    question: '路',
    answer: '길 로'
  },
  {
    question: '露',
    answer: '이슬 로'
  },
  {
    question: '老',
    answer: '늙을 로'
  },
  {
    question: '勞',
    answer: '일할 로'
  },
  {
    question: '爐',
    answer: '화로 로'
  },
  {
    question: '綠',
    answer: '푸를 록'
  },
  {
    question: '祿',
    answer: '녹 록'
  },
  {
    question: '錄',
    answer: '기록할 록'
  },
  {
    question: '鹿',
    answer: '사슴 록'
  },
  {
    question: '論',
    answer: '논할 론'
  },
  {
    question: '弄',
    answer: '희롱할 롱'
  },
  {
    question: '雷',
    answer: '우레 뢰'
  },
  {
    question: '賴',
    answer: '의뢰할 뢰'
  },
  {
    question: '料',
    answer: '헤아릴 료'
  },
  {
    question: '了',
    answer: '마칠 료'
  },
  {
    question: '僚',
    answer: '벗 료'
  },
  {
    question: '龍',
    answer: '용 룡'
  },
  {
    question: '屢',
    answer: '여러 루'
  },
  {
    question: '樓',
    answer: '다락 루'
  },
  {
    question: '累',
    answer: '묶을 루'
  },
  {
    question: '淚',
    answer: '눈물 루'
  },
  {
    question: '漏',
    answer: '샐 루'
  },
  {
    question: '柳',
    answer: '버들 류'
  },
  {
    question: '留',
    answer: '머무를 류'
  },
  {
    question: '流',
    answer: '흐를 류'
  },
  {
    question: '類',
    answer: '무리 류'
  },
  {
    question: '六',
    answer: '여섯 륙'
  },
  {
    question: '陸',
    answer: '뭍 륙'
  },
  {
    question: '倫',
    answer: '인륜 륜'
  },
  {
    question: '輪',
    answer: '바퀴 륜'
  },
  {
    question: '律',
    answer: '법 률'
  },
  {
    question: '栗',
    answer: '밤 률'
  },
  {
    question: '率',
    answer: '헤아릴 률'
  },
  {
    question: '隆',
    answer: '높을 륭'
  },
  {
    question: '陵',
    answer: '언덕 릉'
  },
  {
    question: '里',
    answer: '마을 리'
  },
  {
    question: '理',
    answer: '다스릴 리'
  },
  {
    question: '利',
    answer: '이로울 리'
  },
  {
    question: '李',
    answer: '오얏 리'
  },
  {
    question: '梨',
    answer: '배나무 리'
  },
  {
    question: '吏',
    answer: '벼슬아치 리'
  },
  {
    question: '離',
    answer: '떠날 리'
  },
  {
    question: '裏',
    answer: '속 리'
  },
  {
    question: '履',
    answer: '밟을 리'
  },
  {
    question: '鄰',
    answer: '이웃 린'
  },
  {
    question: '林',
    answer: '수풀 림'
  },
  {
    question: '臨',
    answer: '임할 림'
  },
  {
    question: '立',
    answer: '설 립'
  },
  {
    question: '馬',
    answer: '말 마'
  },
  {
    question: '麻',
    answer: '삼 마'
  },
  {
    question: '磨',
    answer: '갈 마'
  },
  {
    question: '莫',
    answer: '없을 막'
  },
  {
    question: '幕',
    answer: '장막 막'
  },
  {
    question: '漠',
    answer: '넓을 사막 /사막막'
  },
  {
    question: '萬',
    answer: '일만 만'
  },
  {
    question: '晩',
    answer: '늦을 만'
  },
  {
    question: '滿',
    answer: '찰 만'
  },
  {
    question: '漫',
    answer: '질펀할 만'
  },
  {
    question: '慢',
    answer: '게으를 거만할 /거만할만'
  },
  {
    question: '末',
    answer: '끝 말'
  },
  {
    question: '亡',
    answer: '망할 망'
  },
  {
    question: '忙',
    answer: '바쁠 망'
  },
  {
    question: '忘',
    answer: '잊을 망'
  },
  {
    question: '望',
    answer: '바랄 망'
  },
  {
    question: '茫',
    answer: '아득할 망'
  },
  {
    question: '妄',
    answer: '망령될 망'
  },
  {
    question: '罔',
    answer: '그물 망'
  },
  {
    question: '每',
    answer: '매양 매'
  },
  {
    question: '買',
    answer: '살 매'
  },
  {
    question: '賣',
    answer: '팔 매'
  },
  {
    question: '妹',
    answer: '누이 매'
  },
  {
    question: '梅',
    answer: '매화 매'
  },
  {
    question: '埋',
    answer: '묻을 매'
  },
  {
    question: '媒',
    answer: '중매 매'
  },
  {
    question: '麥',
    answer: '보리 맥'
  },
  {
    question: '脈',
    answer: '줄기 맥'
  },
  {
    question: '孟',
    answer: '맏 맹'
  },
  {
    question: '猛',
    answer: '사나울 맹'
  },
  {
    question: '盟',
    answer: '맹세 맹'
  },
  {
    question: '盲',
    answer: '눈멀 맹'
  },
  {
    question: '免',
    answer: '면할 면'
  },
  {
    question: '勉',
    answer: '힘쓸 면'
  },
  {
    question: '面',
    answer: '낯 면'
  },
  {
    question: '眠',
    answer: '잘 면'
  },
  {
    question: '綿',
    answer: '솜 면'
  },
  {
    question: '滅',
    answer: '꺼질 멸'
  },
  {
    question: '名',
    answer: '이름 명'
  },
  {
    question: '命',
    answer: '목숨 명'
  },
  {
    question: '明',
    answer: '밝을 명'
  },
  {
    question: '鳴',
    answer: '울 명'
  },
  {
    question: '銘',
    answer: '새길 명'
  },
  {
    question: '冥',
    answer: '어두울 명'
  },
  {
    question: '母',
    answer: '어미 모'
  },
  {
    question: '毛',
    answer: '털 모'
  },
  {
    question: '暮',
    answer: '저물 모'
  },
  {
    question: '某',
    answer: '아무개 모'
  },
  {
    question: '謀',
    answer: '꾀 모'
  },
  {
    question: '模',
    answer: '본뜰 모'
  },
  {
    question: '貌',
    answer: '모양 모'
  },
  {
    question: '募',
    answer: '모을 모'
  },
  {
    question: '慕',
    answer: '그릴 모'
  },
  {
    question: '侮',
    answer: '업신여길 모'
  },
  {
    question: '冒',
    answer: '무릅쓸 모'
  },
  {
    question: '木',
    answer: '나무 목'
  },
  {
    question: '目',
    answer: '눈 목'
  },
  {
    question: '牧',
    answer: '칠 목'
  },
  {
    question: '睦',
    answer: '화목할 목'
  },
  {
    question: '沒',
    answer: '빠질 없을 /없을몰'
  },
  {
    question: '夢',
    answer: '꿈 몽'
  },
  {
    question: '蒙',
    answer: '을 몽'
  },
  {
    question: '卯',
    answer: '토끼 묘'
  },
  {
    question: '妙',
    answer: '묘할 묘'
  },
  {
    question: '苗',
    answer: '모 묘'
  },
  {
    question: '廟',
    answer: '사당 묘'
  },
  {
    question: '墓',
    answer: '무덤 묘'
  },
  {
    question: '戊',
    answer: '다섯째 천간 째천간무'
  },
  {
    question: '茂',
    answer: '우거질 무'
  },
  {
    question: '武',
    answer: '굳셀 무'
  },
  {
    question: '務',
    answer: '힘쓸 무'
  },
  {
    question: '無',
    answer: '없을 무'
  },
  {
    question: '舞',
    answer: '춤출 무'
  },
  {
    question: '貿',
    answer: '무역할 무'
  },
  {
    question: '霧',
    answer: '안개 무'
  },
  {
    question: '墨',
    answer: '먹 묵'
  },
  {
    question: '默',
    answer: '잠잠할 묵'
  },
  {
    question: '門',
    answer: '문 문'
  },
  {
    question: '問',
    answer: '물을 문'
  },
  {
    question: '聞',
    answer: '들을 문'
  },
  {
    question: '文',
    answer: '글월 문'
  },
  {
    question: '勿',
    answer: '말 물'
  },
  {
    question: '物',
    answer: '물건 물'
  },
  {
    question: '米',
    answer: '쌀 미'
  },
  {
    question: '未',
    answer: '아닐 미'
  },
  {
    question: '味',
    answer: '맛 미'
  },
  {
    question: '美',
    answer: '아름다울 미'
  },
  {
    question: '尾',
    answer: '꼬리 미'
  },
  {
    question: '迷',
    answer: '미혹할 미'
  },
  {
    question: '微',
    answer: '작을 미'
  },
  {
    question: '眉',
    answer: '눈썹 미'
  },
  {
    question: '民',
    answer: '백성 민'
  },
  {
    question: '敏',
    answer: '재빠를 민'
  },
  {
    question: '憫',
    answer: '민망할 민'
  },
  {
    question: '密',
    answer: '빽빽할 밀'
  },
  {
    question: '蜜',
    answer: '꿀 밀'
  },
  {
    question: '朴',
    answer: '성 순박할 박할박'
  },
  {
    question: '泊',
    answer: '머무를 박'
  },
  {
    question: '拍',
    answer: '칠 박'
  },
  {
    question: '迫',
    answer: '핍박할 닥칠 할/닥칠박'
  },
  {
    question: '博',
    answer: '넓을 박'
  },
  {
    question: '薄',
    answer: '엷을 박'
  },
  {
    question: '反',
    answer: '돌아올 뒤집을 /뒤집을반'
  },
  {
    question: '飯',
    answer: '밥 반'
  },
  {
    question: '半',
    answer: '반 반'
  },
  {
    question: '般',
    answer: '가지 반'
  },
  {
    question: '盤',
    answer: '소반 반'
  },
  {
    question: '班',
    answer: '나눌 반'
  },
  {
    question: '返',
    answer: '돌이킬 반'
  },
  {
    question: '叛',
    answer: '배반할 반'
  },
  {
    question: '伴',
    answer: '짝 반'
  },
  {
    question: '發',
    answer: '쏠 발'
  },
  {
    question: '拔',
    answer: '뺄 발'
  },
  {
    question: '髮',
    answer: '터럭 발'
  },
  {
    question: '方',
    answer: '모 방'
  },
  {
    question: '房',
    answer: '방 방'
  },
  {
    question: '防',
    answer: '막을 방'
  },
  {
    question: '放',
    answer: '놓을 방'
  },
  {
    question: '訪',
    answer: '찾을 방'
  },
  {
    question: '芳',
    answer: '꽃다울 방'
  },
  {
    question: '傍',
    answer: '곁 방'
  },
  {
    question: '妨',
    answer: '방해할 방'
  },
  {
    question: '倣',
    answer: '본뜰 방'
  },
  {
    question: '邦',
    answer: '나라 방'
  },
  {
    question: '拜',
    answer: '절 배'
  },
  {
    question: '杯',
    answer: '잔 배'
  },
  {
    question: '倍',
    answer: '곱 배'
  },
  {
    question: '培',
    answer: '북돋을 배'
  },
  {
    question: '配',
    answer: '나눌 배'
  },
  {
    question: '排',
    answer: '밀칠 배'
  },
  {
    question: '輩',
    answer: '무리 배'
  },
  {
    question: '背',
    answer: '등 배'
  },
  {
    question: '白',
    answer: '흰 백'
  },
  {
    question: '百',
    answer: '일백 백'
  },
  {
    question: '伯',
    answer: '맏 백'
  },
  {
    question: '番',
    answer: '차례 번'
  },
  {
    question: '煩',
    answer: '번거로울 번'
  },
  {
    question: '繁',
    answer: '번성할 복잡할 /복잡할번'
  },
  {
    question: '飜',
    answer: '번역할 날 역할/날번'
  },
  {
    question: '伐',
    answer: '칠 벌'
  },
  {
    question: '罰',
    answer: '벌할 벌'
  },
  {
    question: '凡',
    answer: '무릇 범'
  },
  {
    question: '犯',
    answer: '범할 범'
  },
  {
    question: '範',
    answer: '법 범'
  },
  {
    question: '法',
    answer: '법 법'
  },
  {
    question: '壁',
    answer: '벽 벽'
  },
  {
    question: '碧',
    answer: '푸를 벽'
  },
  {
    question: '變',
    answer: '변할 변'
  },
  {
    question: '辯',
    answer: '말씀 변'
  },
  {
    question: '辨',
    answer: '분별할 변'
  },
  {
    question: '邊',
    answer: '가 변'
  },
  {
    question: '別',
    answer: '나눌 별'
  },
  {
    question: '丙',
    answer: '남녘 병'
  },
  {
    question: '病',
    answer: '병 병'
  },
  {
    question: '兵',
    answer: '병사 병'
  },
  {
    question: '竝',
    answer: '아우를 병'
  },
  {
    question: '屛',
    answer: '병풍 병'
  },
  {
    question: '保',
    answer: '지킬 보'
  },
  {
    question: '步',
    answer: '걸음 보'
  },
  {
    question: '報',
    answer: '갚을 보'
  },
  {
    question: '普',
    answer: '넓을 보'
  },
  {
    question: '譜',
    answer: '족보 보'
  },
  {
    question: '補',
    answer: '기울 도울 /도울보'
  },
  {
    question: '寶',
    answer: '보배 보'
  },
  {
    question: '福',
    answer: '복 복'
  },
  {
    question: '伏',
    answer: '엎드릴 복'
  },
  {
    question: '服',
    answer: '옷 복'
  },
  {
    question: '復',
    answer: '돌아올 복'
  },
  {
    question: '腹',
    answer: '배 복'
  },
  {
    question: '複',
    answer: '겹칠 복'
  },
  {
    question: '卜',
    answer: '점 복'
  },
  {
    question: '覆',
    answer: '다시 복'
  },
  {
    question: '本',
    answer: '근본 뿌리 /뿌리본'
  },
  {
    question: '奉',
    answer: '받들 봉'
  },
  {
    question: '逢',
    answer: '만날 봉'
  },
  {
    question: '峯',
    answer: '봉우리 봉'
  },
  {
    question: '蜂',
    answer: '벌 봉'
  },
  {
    question: '封',
    answer: '봉할 봉'
  },
  {
    question: '鳳',
    answer: '봉황새 봉'
  },
  {
    question: '夫',
    answer: '지아비 부'
  },
  {
    question: '扶',
    answer: '도울 부'
  },
  {
    question: '父',
    answer: '아비 부'
  },
  {
    question: '富',
    answer: '부유할 부'
  },
  {
    question: '部',
    answer: '떼 부'
  },
  {
    question: '婦',
    answer: '며느리 아내 리/아내부'
  },
  {
    question: '否',
    answer: '아닐 부'
  },
  {
    question: '浮',
    answer: '뜰 부'
  },
  {
    question: '付',
    answer: '줄 부'
  },
  {
    question: '符',
    answer: '부호 부'
  },
  {
    question: '附',
    answer: '붙을 부'
  },
  {
    question: '府',
    answer: '마을 부'
  },
  {
    question: '腐',
    answer: '썩을 부'
  },
  {
    question: '負',
    answer: '질 부'
  },
  {
    question: '副',
    answer: '버금 부'
  },
  {
    question: '簿',
    answer: '장부 부'
  },
  {
    question: '赴',
    answer: '다다를 부'
  },
  {
    question: '賦',
    answer: '부세 부'
  },
  {
    question: '北',
    answer: '북녘 북'
  },
  {
    question: '分',
    answer: '나눌 분'
  },
  {
    question: '紛',
    answer: '어지러울 분'
  },
  {
    question: '粉',
    answer: '가루 분'
  },
  {
    question: '奔',
    answer: '달릴 분'
  },
  {
    question: '墳',
    answer: '무덤 분'
  },
  {
    question: '憤',
    answer: '분할 분'
  },
  {
    question: '奮',
    answer: '떨칠 분'
  },
  {
    question: '不',
    answer: '아닐 불'
  },
  {
    question: '佛',
    answer: '부처 불'
  },
  {
    question: '拂',
    answer: '떨칠 불'
  },
  {
    question: '朋',
    answer: '벗 붕'
  },
  {
    question: '崩',
    answer: '무너질 붕'
  },
  {
    question: '比',
    answer: '견줄 비'
  },
  {
    question: '非',
    answer: '아닐 비'
  },
  {
    question: '悲',
    answer: '슬플 비'
  },
  {
    question: '飛',
    answer: '날 비'
  },
  {
    question: '鼻',
    answer: '코 비'
  },
  {
    question: '備',
    answer: '갖출 비'
  },
  {
    question: '批',
    answer: '비평할 비'
  },
  {
    question: '卑',
    answer: '낮을 비'
  },
  {
    question: '婢',
    answer: '계집종 비'
  },
  {
    question: '碑',
    answer: '돌기둥 비'
  },
  {
    question: '妃',
    answer: '왕비 비'
  },
  {
    question: '肥',
    answer: '살찔 비'
  },
  {
    question: '祕',
    answer: '숨길 비'
  },
  {
    question: '費',
    answer: '쓸 비'
  },
  {
    question: '貧',
    answer: '가난할 빈'
  },
  {
    question: '賓',
    answer: '손 빈'
  },
  {
    question: '頻',
    answer: '자주 빈'
  },
  {
    question: '氷',
    answer: '얼음 빙'
  },
  {
    question: '聘',
    answer: '부를 빙'
  },
  {
    question: '四',
    answer: '넉 사'
  },
  {
    question: '巳',
    answer: '뱀 사'
  },
  {
    question: '士',
    answer: '선비 사'
  },
  {
    question: '仕',
    answer: '섬길 사'
  },
  {
    question: '寺',
    answer: '절 사'
  },
  {
    question: '史',
    answer: '사기 사'
  },
  {
    question: '使',
    answer: '하여금 부릴 금/부릴사'
  },
  {
    question: '舍',
    answer: '사'
  },
  {
    question: '射',
    answer: '사'
  },
  {
    question: '謝',
    answer: '할 사'
  },
  {
    question: '師',
    answer: ' 사'
  },
  {
    question: '死',
    answer: ' 사'
  },
  {
    question: '私',
    answer: '로울 사'
  },
  {
    question: '絲',
    answer: '사'
  },
  {
    question: '思',
    answer: '할 사'
  },
  {
    question: '事',
    answer: '사'
  },
  {
    question: '司',
    answer: '맡을 사'
  },
  {
    question: '詞',
    answer: '말씀 사'
  },
  {
    question: '蛇',
    answer: '뱀 사'
  },
  {
    question: '捨',
    answer: '버릴 사'
  },
  {
    question: '邪',
    answer: '간사할 사'
  },
  {
    question: '賜',
    answer: '줄 사'
  },
  {
    question: '斜',
    answer: '비낄 사'
  },
  {
    question: '詐',
    answer: '속일 사'
  },
  {
    question: '社',
    answer: '모일 토지신 토지신사'
  },
  {
    question: '沙',
    answer: '모래 사'
  },
  {
    question: '似',
    answer: '닮을 사'
  },
  {
    question: '査',
    answer: '조사할 사'
  },
  {
    question: '寫',
    answer: '베낄 사'
  },
  {
    question: '辭',
    answer: '말씀 사'
  },
  {
    question: '斯',
    answer: '이 사'
  },
  {
    question: '祀',
    answer: '제사 사'
  },
  {
    question: '削',
    answer: '깎을 삭'
  },
  {
    question: '朔',
    answer: '초하루 삭'
  },
  {
    question: '山',
    answer: '뫼 산'
  },
  {
    question: '產',
    answer: '낳을 산'
  },
  {
    question: '散',
    answer: '흩어질 산'
  },
  {
    question: '算',
    answer: '셀 산'
  },
  {
    question: '殺',
    answer: '죽일 살'
  },
  {
    question: '三',
    answer: '석 삼'
  },
  {
    question: '上',
    answer: '위 상'
  },
  {
    question: '尙',
    answer: '오히려 상'
  },
  {
    question: '常',
    answer: '항상 떳떳할 떳떳할상'
  },
  {
    question: '賞',
    answer: '상줄 상'
  },
  {
    question: '商',
    answer: '장사 상'
  },
  {
    question: '相',
    answer: '서로 상'
  },
  {
    question: '霜',
    answer: '서리 상'
  },
  {
    question: '想',
    answer: '생각할 상'
  },
  {
    question: '傷',
    answer: '상처 상'
  },
  {
    question: '喪',
    answer: '잃을 상'
  },
  {
    question: '嘗',
    answer: '맛볼 상'
  },
  {
    question: '裳',
    answer: '치마 상'
  },
  {
    question: '詳',
    answer: '자세할 상'
  },
  {
    question: '祥',
    answer: '상서로울 상'
  },
  {
    question: '床',
    answer: '상 상'
  },
  {
    question: '象',
    answer: '코끼리 상'
  },
  {
    question: '像',
    answer: '모양 상'
  },
  {
    question: '桑',
    answer: '뽕나무 상'
  },
  {
    question: '償',
    answer: '갚을 상'
  },
  {
    question: '狀',
    answer: '형상 상'
  },
  {
    question: '雙',
    answer: '두 쌍'
  },
  {
    question: '塞',
    answer: '변방 새'
  },
  {
    question: '色',
    answer: '빛 색 '
  },
  {
    question: '索',
    answer: '찾을 색'
  },
  {
    question: '生',
    answer: '날 생'
  },
  {
    question: '西',
    answer: '서녘 서'
  },
  {
    question: '序',
    answer: '차례 서'
  },
  {
    question: '書',
    answer: '쓸 서'
  },
  {
    question: '暑',
    answer: '더울 서'
  },
  {
    question: '敍',
    answer: '펼 서'
  },
  {
    question: '徐',
    answer: '천천히 서'
  },
  {
    question: '庶',
    answer: '여러 서'
  },
  {
    question: '恕',
    answer: '용서할 서'
  },
  {
    question: '緖',
    answer: '실마리 서'
  },
  {
    question: '署',
    answer: '마을 서'
  },
  {
    question: '誓',
    answer: '맹세할 서'
  },
  {
    question: '逝',
    answer: '갈 서'
  },
  {
    question: '石',
    answer: '돌 석'
  },
  {
    question: '夕',
    answer: '저녁 석'
  },
  {
    question: '昔',
    answer: '옛 석'
  },
  {
    question: '惜',
    answer: '아낄 석'
  },
  {
    question: '席',
    answer: '자리 석'
  },
  {
    question: '析',
    answer: '쪼갤 석'
  },
  {
    question: '釋',
    answer: '풀 석'
  },
  {
    question: '先',
    answer: '먼저 선'
  },
  {
    question: '仙',
    answer: '신선 선'
  },
  {
    question: '線',
    answer: '줄 선'
  },
  {
    question: '鮮',
    answer: '고울 선'
  },
  {
    question: '善',
    answer: '착할 선'
  },
  {
    question: '船',
    answer: '배 선'
  },
  {
    question: '選',
    answer: '가릴 선'
  },
  {
    question: '宣',
    answer: '베풀 선'
  },
  {
    question: '旋',
    answer: '돌 선'
  },
  {
    question: '禪',
    answer: '선 선'
  },
  {
    question: '雪',
    answer: '눈 설'
  },
  {
    question: '說',
    answer: '말씀 설'
  },
  {
    question: '設',
    answer: '베풀 설'
  },
  {
    question: '舌',
    answer: '혀 설'
  },
  {
    question: '涉',
    answer: '건널 섭'
  },
  {
    question: '攝',
    answer: '다스릴 잡을 릴/잡을섭'
  },
  {
    question: '姓',
    answer: '성 성'
  },
  {
    question: '性',
    answer: '성품 성'
  },
  {
    question: '成',
    answer: '이룰 성'
  },
  {
    question: '城',
    answer: '재 성'
  },
  {
    question: '誠',
    answer: '정성 성'
  },
  {
    question: '盛',
    answer: '성할 성'
  },
  {
    question: '省',
    answer: '살필 성'
  },
  {
    question: '星',
    answer: '별 성'
  },
  {
    question: '聖',
    answer: '거룩할 성'
  },
  {
    question: '聲',
    answer: '소리 성'
  },
  {
    question: '世',
    answer: '대 인간 인간세'
  },
  {
    question: '洗',
    answer: '씻을 세'
  },
  {
    question: '稅',
    answer: '세금 세'
  },
  {
    question: '細',
    answer: '가늘 세'
  },
  {
    question: '勢',
    answer: '형세 세'
  },
  {
    question: '歲',
    answer: '해 세'
  },
  {
    question: '小',
    answer: '작을 소'
  },
  {
    question: '少',
    answer: '적을 소'
  },
  {
    question: '所',
    answer: '바 소'
  },
  {
    question: '消',
    answer: '사라질 소'
  },
  {
    question: '素',
    answer: '본디 소'
  },
  {
    question: '笑',
    answer: '웃을 소'
  },
  {
    question: '召',
    answer: '부를 소'
  },
  {
    question: '昭',
    answer: '밝을 소'
  },
  {
    question: '蘇',
    answer: '깨어날 소'
  },
  {
    question: '騷',
    answer: '떠들 소'
  },
  {
    question: '燒',
    answer: '불사를 소'
  },
  {
    question: '訴',
    answer: '호소할 소'
  },
  {
    question: '掃',
    answer: '쓸 소'
  },
  {
    question: '疏',
    answer: '트일 소'
  },
  {
    question: '蔬',
    answer: '푸성귀 소'
  },
  {
    question: '俗',
    answer: '풍속 속'
  },
  {
    question: '速',
    answer: '빠를 속'
  },
  {
    question: '續',
    answer: '이을 속'
  },
  {
    question: '束',
    answer: '묶을 속'
  },
  {
    question: '粟',
    answer: '조 속'
  },
  {
    question: '屬',
    answer: '무리 속'
  },
  {
    question: '孫',
    answer: '손자 손'
  },
  {
    question: '損',
    answer: '덜다 덜 손'
  },
  {
    question: '松',
    answer: '소나무 송'
  },
  {
    question: '送',
    answer: '보낼 송'
  },
  {
    question: '訟',
    answer: '송사할 송'
  },
  {
    question: '頌',
    answer: '칭송할 송'
  },
  {
    question: '誦',
    answer: '외울 송'
  },
  {
    question: '刷',
    answer: '인쇄할 쇄'
  },
  {
    question: '鎖',
    answer: '쇠사슬 쇄'
  },
  {
    question: '衰',
    answer: '쇠할 쇠'
  },
  {
    question: '水',
    answer: '물 수'
  },
  {
    question: '手',
    answer: '손 수'
  },
  {
    question: '受',
    answer: '받을 수'
  },
  {
    question: '授',
    answer: '줄 수'
  },
  {
    question: '首',
    answer: '머리 수'
  },
  {
    question: '守',
    answer: '지킬 수'
  },
  {
    question: '收',
    answer: '거둘 수'
  },
  {
    question: '誰',
    answer: '누구 수'
  },
  {
    question: '須',
    answer: '모름지기 수'
  },
  {
    question: '雖',
    answer: '비록 수'
  },
  {
    question: '愁',
    answer: '시름 수'
  },
  {
    question: '樹',
    answer: '나무 수'
  },
  {
    question: '壽',
    answer: '목숨 수'
  },
  {
    question: '數',
    answer: '셀 수'
  },
  {
    question: '修',
    answer: '닦을 수'
  },
  {
    question: '秀',
    answer: '빼어날 수'
  },
  {
    question: '囚',
    answer: '가둘 수'
  },
  {
    question: '需',
    answer: '쓰일 수'
  },
  {
    question: '帥',
    answer: '장수 수'
  },
  {
    question: '殊',
    answer: '다를 수'
  },
  {
    question: '隨',
    answer: '따를 수'
  },
  {
    question: '輸',
    answer: '보낼 수'
  },
  {
    question: '獸',
    answer: '짐승 수'
  },
  {
    question: '睡',
    answer: '잘 수'
  },
  {
    question: '遂',
    answer: '드디어 따를 어/따를수'
  },
  {
    question: '垂',
    answer: '드리울 수'
  },
  {
    question: '搜',
    answer: '찾을 수'
  },
  {
    question: '叔',
    answer: '아저씨 숙'
  },
  {
    question: '淑',
    answer: '맑을 숙'
  },
  {
    question: '宿',
    answer: '잘 숙'
  },
  {
    question: '孰',
    answer: '누구 숙'
  },
  {
    question: '熟',
    answer: '익을 숙'
  },
  {
    question: '肅',
    answer: '엄숙할 숙'
  },
  {
    question: '順',
    answer: '순할 순'
  },
  {
    question: '純',
    answer: '순수할 순'
  },
  {
    question: '旬',
    answer: '열흘 순'
  },
  {
    question: '殉',
    answer: '따라 죽을 죽을순'
  },
  {
    question: '循',
    answer: '돌 순'
  },
  {
    question: '脣',
    answer: '입술 순'
  },
  {
    question: '瞬',
    answer: '깜짝일 순'
  },
  {
    question: '巡',
    answer: '돌아다닐 순'
  },
  {
    question: '戌',
    answer: '개 술'
  },
  {
    question: '述',
    answer: '펼 술'
  },
  {
    question: '術',
    answer: '재주 술'
  },
  {
    question: '崇',
    answer: '높을 숭'
  },
  {
    question: '習',
    answer: '익힐 습'
  },
  {
    question: '拾',
    answer: '주울 습'
  },
  {
    question: '濕',
    answer: '젖을 축축할 축축할습'
  },
  {
    question: '襲',
    answer: '엄습할 습'
  },
  {
    question: '乘',
    answer: '탈 승'
  },
  {
    question: '承',
    answer: '이을 받들 /받들승'
  },
  {
    question: '勝',
    answer: '이길 뛰어날 뛰어날승'
  },
  {
    question: '昇',
    answer: '오를 승'
  },
  {
    question: '僧',
    answer: '중 승'
  },
  {
    question: '市',
    answer: '저자 시'
  },
  {
    question: '示',
    answer: '보일 시'
  },
  {
    question: '是',
    answer: '옳을 시'
  },
  {
    question: '時',
    answer: '때 시'
  },
  {
    question: '詩',
    answer: '시 시'
  },
  {
    question: '視',
    answer: '볼 시'
  },
  {
    question: '施',
    answer: '베풀 시'
  },
  {
    question: '試',
    answer: '시험 시'
  },
  {
    question: '始',
    answer: '비로소 시'
  },
  {
    question: '矢',
    answer: '화살 시'
  },
  {
    question: '侍',
    answer: '모실 시'
  },
  {
    question: '氏',
    answer: '성씨 씨'
  },
  {
    question: '食',
    answer: '먹을 식'
  },
  {
    question: '式',
    answer: '법 식'
  },
  {
    question: '植',
    answer: '심을 식'
  },
  {
    question: '識',
    answer: '알 식'
  },
  {
    question: '息',
    answer: '숨쉴 식'
  },
  {
    question: '飾',
    answer: '꾸밀 식'
  },
  {
    question: '身',
    answer: '몸 신'
  },
  {
    question: '申',
    answer: '거듭 신'
  },
  {
    question: '神',
    answer: '귀신 신'
  },
  {
    question: '臣',
    answer: '신하 신'
  },
  {
    question: '信',
    answer: '믿을 신'
  },
  {
    question: '辛',
    answer: '매울 괴로울 괴로울신'
  },
  {
    question: '新',
    answer: '새 신'
  },
  {
    question: '伸',
    answer: '펴다 신'
  },
  {
    question: '晨',
    answer: '새벽 신'
  },
  {
    question: '愼',
    answer: '삼갈 신'
  },
  {
    question: '失',
    answer: '잃을 실'
  },
  {
    question: '室',
    answer: '집 실'
  },
  {
    question: '實',
    answer: '열매 실'
  },
  {
    question: '心',
    answer: '마음 심'
  },
  {
    question: '甚',
    answer: '심할 심'
  },
  {
    question: '深',
    answer: '깊을 심'
  },
  {
    question: '尋',
    answer: '찾을 심'
  },
  {
    question: '審',
    answer: '살필 심'
  },
  {
    question: '十',
    answer: '열 십'
  },
  {
    question: '兒',
    answer: '아이 아'
  },
  {
    question: '我',
    answer: '나 아'
  },
  {
    question: '牙',
    answer: '어금니 아'
  },
  {
    question: '芽',
    answer: '싹 아'
  },
  {
    question: '雅',
    answer: '맑을 우아할 우아할아'
  },
  {
    question: '亞',
    answer: '버금 아'
  },
  {
    question: '餓',
    answer: '주릴 아'
  },
  {
    question: '惡',
    answer: '나쁠 악'
  },
  {
    question: '岳',
    answer: '큰 산 산악'
  },
  {
    question: '安',
    answer: '편안할 안'
  },
  {
    question: '案',
    answer: '책상 안건 /안건안'
  },
  {
    question: '顔',
    answer: '얼굴 안'
  },
  {
    question: '眼',
    answer: '눈 안'
  },
  {
    question: '岸',
    answer: '언덕 안'
  },
  {
    question: '雁',
    answer: '기러기 안'
  },
  {
    question: '謁',
    answer: '뵐 알'
  },
  {
    question: '暗',
    answer: '어두울 암'
  },
  {
    question: '巖',
    answer: '바위 암'
  },
  {
    question: '壓',
    answer: '누를 압'
  },
  {
    question: '押',
    answer: '누를 억압할 억압할압'
  },
  {
    question: '仰',
    answer: '우러를 앙'
  },
  {
    question: '央',
    answer: '가운데 앙'
  },
  {
    question: '殃',
    answer: '재앙 앙'
  },
  {
    question: '愛',
    answer: '사랑 애'
  },
  {
    question: '哀',
    answer: '슬플 애'
  },
  {
    question: '涯',
    answer: '물가 애'
  },
  {
    question: '厄',
    answer: '액 액'
  },
  {
    question: '額',
    answer: '이마 액'
  },
  {
    question: '也',
    answer: '어조사 야'
  },
  {
    question: '夜',
    answer: '밤 야'
  },
  {
    question: '野',
    answer: '들 야'
  },
  {
    question: '耶',
    answer: '어조사 야'
  },
  {
    question: '弱',
    answer: '약할 약'
  },
  {
    question: '若',
    answer: '같을 약'
  },
  {
    question: '約',
    answer: '맺을 약'
  },
  {
    question: '藥',
    answer: '약 약'
  },
  {
    question: '躍',
    answer: '뛸 약'
  },
  {
    question: '羊',
    answer: '양 양'
  },
  {
    question: '洋',
    answer: '큰 바다 다양'
  },
  {
    question: '養',
    answer: '기를 양'
  },
  {
    question: '揚',
    answer: '날릴 양'
  },
  {
    question: '陽',
    answer: '볕 양'
  },
  {
    question: '讓',
    answer: '사양할 양'
  },
  {
    question: '壤',
    answer: '흙 양'
  },
  {
    question: '樣',
    answer: '모양 양'
  },
  {
    question: '楊',
    answer: '버들 양'
  },
  {
    question: '魚',
    answer: '물고기 어'
  },
  {
    question: '漁',
    answer: '고기 잡을 잡을어'
  },
  {
    question: '於',
    answer: '어조사 어'
  },
  {
    question: '語',
    answer: '말씀 어'
  },
  {
    question: '御',
    answer: '할 어'
  },
  {
    question: '億',
    answer: '억 억'
  },
  {
    question: '憶',
    answer: '생각할 억'
  },
  {
    question: '抑',
    answer: '누를 억압할 억압할억'
  },
  {
    question: '言',
    answer: '말씀 언'
  },
  {
    question: '焉',
    answer: '어찌 언'
  },
  {
    question: '嚴',
    answer: '엄할 엄'
  },
  {
    question: '業',
    answer: '일 업'
  },
  {
    question: '余',
    answer: '나 여'
  },
  {
    question: '餘',
    answer: '남을 여'
  },
  {
    question: '如',
    answer: '같을 여'
  },
  {
    question: '汝',
    answer: '너 여'
  },
  {
    question: '與',
    answer: '줄 여'
  },
  {
    question: '予',
    answer: '나 여'
  },
  {
    question: '輿',
    answer: '수레 여'
  },
  {
    question: '亦',
    answer: '또 역'
  },
  {
    question: '易',
    answer: '바꿀 역'
  },
  {
    question: '逆',
    answer: '거스를 역'
  },
  {
    question: '譯',
    answer: '풀 번역할 역할역'
  },
  {
    question: '驛',
    answer: '역참 역'
  },
  {
    question: '役',
    answer: '부릴 역'
  },
  {
    question: '疫',
    answer: '전염병 역'
  },
  {
    question: '域',
    answer: '지경 역'
  },
  {
    question: '然',
    answer: '그러할 연'
  },
  {
    question: '煙',
    answer: '연기 연'
  },
  {
    question: '硏',
    answer: '갈 연'
  },
  {
    question: '延',
    answer: '늘일 연'
  },
  {
    question: '燃',
    answer: '탈 연'
  },
  {
    question: '燕',
    answer: '제비 연'
  },
  {
    question: '沿',
    answer: '따를 연'
  },
  {
    question: '鉛',
    answer: '납 연'
  },
  {
    question: '宴',
    answer: '잔치 연'
  },
  {
    question: '軟',
    answer: '연할 연'
  },
  {
    question: '演',
    answer: '펼 연'
  },
  {
    question: '緣',
    answer: '인연 연'
  },
  {
    question: '熱',
    answer: '더울 열'
  },
  {
    question: '悅',
    answer: '기쁠 열'
  },
  {
    question: '閱',
    answer: '볼 검열할 열할열'
  },
  {
    question: '炎',
    answer: '불꽃 염'
  },
  {
    question: '染',
    answer: '물들 염'
  },
  {
    question: '鹽',
    answer: '소금 염'
  },
  {
    question: '葉',
    answer: '잎 엽'
  },
  {
    question: '永',
    answer: '길 영'
  },
  {
    question: '英',
    answer: '꽃부리 영'
  },
  {
    question: '迎',
    answer: '맞을 영'
  },
  {
    question: '榮',
    answer: '영화로울 영'
  },
  {
    question: '泳',
    answer: '헤엄칠 영'
  },
  {
    question: '詠',
    answer: '읊을 영'
  },
  {
    question: '營',
    answer: '경영할 영'
  },
  {
    question: '影',
    answer: '그림자 영'
  },
  {
    question: '映',
    answer: '비출 영'
  },
  {
    question: '藝',
    answer: '재주 예'
  },
  {
    question: '豫',
    answer: '미리 예'
  },
  {
    question: '譽',
    answer: '기릴 예'
  },
  {
    question: '銳',
    answer: '날카로울 예'
  },
  {
    question: '五',
    answer: '다섯 오'
  },
  {
    question: '吾',
    answer: '나 오'
  },
  {
    question: '悟',
    answer: '깨달을 오'
  },
  {
    question: '午',
    answer: '낮 오'
  },
  {
    question: '誤',
    answer: '그르칠 오'
  },
  {
    question: '烏',
    answer: '까마귀 오'
  },
  {
    question: '汚',
    answer: '더러울 오'
  },
  {
    question: '嗚',
    answer: '슬플 흐느낄 흐느낄오'
  },
  {
    question: '娛',
    answer: '즐길 오'
  },
  {
    question: '傲',
    answer: '오만할 오'
  },
  {
    question: '玉',
    answer: '구슬 옥'
  },
  {
    question: '屋',
    answer: '집 옥'
  },
  {
    question: '獄',
    answer: '옥 옥'
  },
  {
    question: '溫',
    answer: '따뜻할 온'
  },
  {
    question: '翁',
    answer: '늙은이 옹'
  },
  {
    question: '擁',
    answer: '낄 안을 안을옹'
  },
  {
    question: '瓦',
    answer: '기와 와'
  },
  {
    question: '臥',
    answer: '누울 와'
  },
  {
    question: '完',
    answer: '완전할 완'
  },
  {
    question: '緩',
    answer: '느릴 느슨할 느슨할완'
  },
  {
    question: '曰',
    answer: '가로 왈'
  },
  {
    question: '王',
    answer: '임금 왕'
  },
  {
    question: '往',
    answer: '갈 왕'
  },
  {
    question: '外',
    answer: '바깥 외'
  },
  {
    question: '畏',
    answer: '두려워할 외'
  },
  {
    question: '要',
    answer: '요긴할 요'
  },
  {
    question: '腰',
    answer: '허리 요'
  },
  {
    question: '搖',
    answer: '흔들 요'
  },
  {
    question: '遙',
    answer: '멀 요'
  },
  {
    question: '謠',
    answer: '노래 요'
  },
  {
    question: '欲',
    answer: '하 고자 할 고자할욕'
  },
  {
    question: '浴',
    answer: '목욕할 욕'
  },
  {
    question: '慾',
    answer: '욕심 욕'
  },
  {
    question: '辱',
    answer: '욕될 욕'
  },
  {
    question: '用',
    answer: '쓸 용'
  },
  {
    question: '容',
    answer: '얼굴 용'
  },
  {
    question: '勇',
    answer: '날랠 용'
  },
  {
    question: '庸',
    answer: '떳떳할 용'
  },
  {
    question: '于',
    answer: '어조사 우'
  },
  {
    question: '宇',
    answer: '집 우'
  },
  {
    question: '右',
    answer: '오른 우'
  },
  {
    question: '友',
    answer: '벗 우'
  },
  {
    question: '牛',
    answer: '소 우'
  },
  {
    question: '雨',
    answer: '비 우'
  },
  {
    question: '憂',
    answer: '근심 우'
  },
  {
    question: '又',
    answer: '또 우'
  },
  {
    question: '尤',
    answer: '더욱 우'
  },
  {
    question: '遇',
    answer: '만날 우'
  },
  {
    question: '羽',
    answer: '깃 우'
  },
  {
    question: '郵',
    answer: '우편 역참 /역참우'
  },
  {
    question: '愚',
    answer: '어리석을 우'
  },
  {
    question: '偶',
    answer: '짝 우'
  },
  {
    question: '優',
    answer: '넉넉할 우'
  },
  {
    question: '云',
    answer: '이를 운'
  },
  {
    question: '雲',
    answer: '구름 운'
  },
  {
    question: '運',
    answer: '옮길 운'
  },
  {
    question: '韻',
    answer: '운 운'
  },
  {
    question: '雄',
    answer: '수컷 웅'
  },
  {
    question: '元',
    answer: '으뜸 원'
  },
  {
    question: '原',
    answer: '언덕 원'
  },
  {
    question: '願',
    answer: '원할 원'
  },
  {
    question: '遠',
    answer: '멀 원'
  },
  {
    question: '園',
    answer: '동산 원'
  },
  {
    question: '怨',
    answer: '원망할 원'
  },
  {
    question: '圓',
    answer: '둥글 원'
  },
  {
    question: '員',
    answer: '인원 관원 /관원원'
  },
  {
    question: '源',
    answer: '근원 원'
  },
  {
    question: '援',
    answer: '도울 원'
  },
  {
    question: '院',
    answer: '집 원'
  },
  {
    question: '月',
    answer: '달 월'
  },
  {
    question: '越',
    answer: '넘을 월'
  },
  {
    question: '位',
    answer: '자리 위'
  },
  {
    question: '危',
    answer: '위태할 위'
  },
  {
    question: '爲',
    answer: '할 위'
  },
  {
    question: '偉',
    answer: '클 훌륭할 륭할위'
  },
  {
    question: '威',
    answer: '위엄 위'
  },
  {
    question: '胃',
    answer: '위장 위'
  },
  {
    question: '謂',
    answer: '이를 위'
  },
  {
    question: '圍',
    answer: '에워쌀 위'
  },
  {
    question: '緯',
    answer: '씨 위'
  },
  {
    question: '衛',
    answer: '지킬 위'
  },
  {
    question: '違',
    answer: '어긋날 어길 날/어길위'
  },
  {
    question: '委',
    answer: '맡길 위'
  },
  {
    question: '慰',
    answer: '위로할 위'
  },
  {
    question: '僞',
    answer: '거짓 위'
  },
  {
    question: '由',
    answer: '말미암을 유'
  },
  {
    question: '油',
    answer: '기름 유'
  },
  {
    question: '酉',
    answer: '닭 유'
  },
  {
    question: '有',
    answer: '있을 유'
  },
  {
    question: '猶',
    answer: '오히려 유'
  },
  {
    question: '唯',
    answer: '오직 유'
  },
  {
    question: '遊',
    answer: '놀 유'
  },
  {
    question: '柔',
    answer: '부드러울 유'
  },
  {
    question: '遺',
    answer: '남길 유'
  },
  {
    question: '幼',
    answer: '어릴 유'
  },
  {
    question: '幽',
    answer: '그윽할 유'
  },
  {
    question: '惟',
    answer: '생각할 유'
  },
  {
    question: '維',
    answer: '벼리 유'
  },
  {
    question: '乳',
    answer: '젖 유'
  },
  {
    question: '儒',
    answer: '선비 유'
  },
  {
    question: '裕',
    answer: '넉넉할 유'
  },
  {
    question: '誘',
    answer: '꾈 유'
  },
  {
    question: '愈',
    answer: '나을 유'
  },
  {
    question: '悠',
    answer: '멀 유'
  },
  {
    question: '肉',
    answer: '고기 육'
  },
  {
    question: '育',
    answer: '기를 육'
  },
  {
    question: '閏',
    answer: '윤달 윤'
  },
  {
    question: '潤',
    answer: '불을 젖을 윤택할 젖을/윤택할윤'
  },
  {
    question: '恩',
    answer: '은혜 은'
  },
  {
    question: '銀',
    answer: '은 은'
  },
  {
    question: '隱',
    answer: '숨을 은'
  },
  {
    question: '乙',
    answer: '새 을'
  },
  {
    question: '音',
    answer: '소리 음'
  },
  {
    question: '吟',
    answer: '읊을 음'
  },
  {
    question: '飮',
    answer: '마실 음'
  },
  {
    question: '陰',
    answer: '그늘 음'
  },
  {
    question: '淫',
    answer: '음란할 음'
  },
  {
    question: '邑',
    answer: '고을 읍'
  },
  {
    question: '泣',
    answer: '울 읍'
  },
  {
    question: '應',
    answer: '응할 응'
  },
  {
    question: '凝',
    answer: '엉길 응'
  },
  {
    question: '衣',
    answer: '옷 의'
  },
  {
    question: '依',
    answer: '의지할 기댈 할/기댈의'
  },
  {
    question: '義',
    answer: '옳을 의'
  },
  {
    question: '議',
    answer: '의논할 의'
  },
  {
    question: '矣',
    answer: '어조사 의'
  },
  {
    question: '醫',
    answer: '의원 의'
  },
  {
    question: '意',
    answer: '뜻 의'
  },
  {
    question: '宜',
    answer: '마땅 의'
  },
  {
    question: '儀',
    answer: '거동 의'
  },
  {
    question: '疑',
    answer: '의심할 믿 지 앓을 할/믿지앓을의'
  },
  {
    question: '二',
    answer: '두 이'
  },
  {
    question: '以',
    answer: '써 이'
  },
  {
    question: '已',
    answer: '이미 이'
  },
  {
    question: '耳',
    answer: '귀 이'
  },
  {
    question: '而',
    answer: '말 이을 을이'
  },
  {
    question: '異',
    answer: '다를 이'
  },
  {
    question: '移',
    answer: '옮길 이'
  },
  {
    question: '夷',
    answer: '오랑캐 이'
  },
  {
    question: '益',
    answer: '더할 익'
  },
  {
    question: '翼',
    answer: '날개 익'
  },
  {
    question: '人',
    answer: '사람 인'
  },
  {
    question: '引',
    answer: '끌 인'
  },
  {
    question: '仁',
    answer: '어질 인'
  },
  {
    question: '因',
    answer: '인할 인'
  },
  {
    question: '忍',
    answer: '참을 인'
  },
  {
    question: '認',
    answer: '알 인'
  },
  {
    question: '寅',
    answer: '범 인'
  },
  {
    question: '印',
    answer: '도장 인'
  },
  {
    question: '姻',
    answer: '혼인 인'
  },
  {
    question: '一',
    answer: '한 일'
  },
  {
    question: '日',
    answer: '날 일'
  },
  {
    question: '逸',
    answer: '편안할 일'
  },
  {
    question: '壬',
    answer: '북방 임'
  },
  {
    question: '任',
    answer: '맡길 임'
  },
  {
    question: '賃',
    answer: '품삯 임'
  },
  {
    question: '入',
    answer: '들 입'
  },
  {
    question: '子',
    answer: '아들 자'
  },
  {
    question: '字',
    answer: '글자 자'
  },
  {
    question: '自',
    answer: '스스로 자'
  },
  {
    question: '者',
    answer: '놈 자'
  },
  {
    question: '姊',
    answer: '손윗누이 자'
  },
  {
    question: '慈',
    answer: '사랑 자'
  },
  {
    question: '玆',
    answer: '무성할 자'
  },
  {
    question: '紫',
    answer: '자줏빛 자'
  },
  {
    question: '資',
    answer: '재물 자'
  },
  {
    question: '姿',
    answer: '맵시 자'
  },
  {
    question: '恣',
    answer: '마음대로 자'
  },
  {
    question: '刺',
    answer: '찌를 자'
  },
  {
    question: '作',
    answer: '지을 작'
  },
  {
    question: '昨',
    answer: '어제 작'
  },
  {
    question: '酌',
    answer: '따를 작'
  },
  {
    question: '爵',
    answer: '벼슬 작'
  },
  {
    question: '殘',
    answer: '잔인할 잔'
  },
  {
    question: '潛',
    answer: '잠길 잠'
  },
  {
    question: '暫',
    answer: '잠깐 잠'
  },
  {
    question: '雜',
    answer: '섞일 잡'
  },
  {
    question: '長',
    answer: '길 장'
  },
  {
    question: '章',
    answer: '글 장'
  },
  {
    question: '場',
    answer: '마당 장'
  },
  {
    question: '將',
    answer: '장수 장차 /장차장'
  },
  {
    question: '壯',
    answer: '씩씩할 장'
  },
  {
    question: '丈',
    answer: '어른 장'
  },
  {
    question: '張',
    answer: '베풀 장'
  },
  {
    question: '帳',
    answer: '장막 장'
  },
  {
    question: '莊',
    answer: '엄할 장'
  },
  {
    question: '裝',
    answer: '꾸밀 장'
  },
  {
    question: '奬',
    answer: '장려할 장'
  },
  {
    question: '墻',
    answer: '담 장'
  },
  {
    question: '葬',
    answer: '장사지낼 장'
  },
  {
    question: '粧',
    answer: '단장할 장'
  },
  {
    question: '掌',
    answer: '손바닥 장'
  },
  {
    question: '藏',
    answer: '감출 장'
  },
  {
    question: '臟',
    answer: '오장 장'
  },
  {
    question: '障',
    answer: '막을 장'
  },
  {
    question: '腸',
    answer: '창자 장'
  },
  {
    question: '才',
    answer: '재주 재'
  },
  {
    question: '材',
    answer: '재목 재'
  },
  {
    question: '財',
    answer: '재물 재'
  },
  {
    question: '在',
    answer: '있을 재'
  },
  {
    question: '栽',
    answer: '심을 재'
  },
  {
    question: '再',
    answer: '두 재'
  },
  {
    question: '哉',
    answer: '비롯할 처음 할/처음재'
  },
  {
    question: '災',
    answer: '재앙 재'
  },
  {
    question: '裁',
    answer: '마를 재'
  },
  {
    question: '載',
    answer: '실을 재'
  },
  {
    question: '宰',
    answer: '재상 재'
  },
  {
    question: '爭',
    answer: '다툴 쟁'
  },
  {
    question: '著',
    answer: '나타날 저'
  },
  {
    question: '貯',
    answer: '쌓을 저'
  },
  {
    question: '低',
    answer: '낮을 저'
  },
  {
    question: '底',
    answer: '바닥 저'
  },
  {
    question: '抵',
    answer: '막을 저'
  },
  {
    question: '的',
    answer: '과녁 적'
  },
  {
    question: '赤',
    answer: '붉을 적'
  },
  {
    question: '適',
    answer: '맞을 적'
  },
  {
    question: '敵',
    answer: '대적할 적 적할/적적'
  },
  {
    question: '滴',
    answer: '물방울 적'
  },
  {
    question: '摘',
    answer: '딸 적'
  },
  {
    question: '寂',
    answer: '고요할 적'
  },
  {
    question: '籍',
    answer: '서적 적'
  },
  {
    question: '賊',
    answer: '도적 적'
  },
  {
    question: '跡',
    answer: '발자취 적'
  },
  {
    question: '蹟',
    answer: '자취 적'
  },
  {
    question: '積',
    answer: '쌓을 적'
  },
  {
    question: '績',
    answer: '길쌈할 적'
  },
  {
    question: '田',
    answer: '밭 전'
  },
  {
    question: '全',
    answer: '온전할 전'
  },
  {
    question: '典',
    answer: '법 전'
  },
  {
    question: '前',
    answer: '앞 전'
  },
  {
    question: '展',
    answer: '펼 전'
  },
  {
    question: '戰',
    answer: '싸울 전'
  },
  {
    question: '電',
    answer: '번개 전'
  },
  {
    question: '錢',
    answer: '돈 전'
  },
  {
    question: '傳',
    answer: '전할 전'
  },
  {
    question: '專',
    answer: '오로지 전'
  },
  {
    question: '轉',
    answer: '구를 전'
  },
  {
    question: '殿',
    answer: '전각 전'
  },
  {
    question: '節',
    answer: '마디 절'
  },
  {
    question: '絕',
    answer: '끊을 그만둘 그만둘절'
  },
  {
    question: '切',
    answer: '끊을 벨 을/벨절'
  },
  {
    question: '折',
    answer: '꺾을 절'
  },
  {
    question: '竊',
    answer: '훔칠 절'
  },
  {
    question: '店',
    answer: '가게 점'
  },
  {
    question: '占',
    answer: '차지할 점'
  },
  {
    question: '點',
    answer: '점 점'
  },
  {
    question: '漸',
    answer: '점점 점'
  },
  {
    question: '接',
    answer: '이을 접할 /접할접'
  },
  {
    question: '蝶',
    answer: '나비 접'
  },
  {
    question: '丁',
    answer: '고무래 정'
  },
  {
    question: '停',
    answer: '머무를 정'
  },
  {
    question: '頂',
    answer: '정수리 정'
  },
  {
    question: '井',
    answer: '우물 정'
  },
  {
    question: '正',
    answer: '바를 정'
  },
  {
    question: '政',
    answer: '정사 정'
  },
  {
    question: '定',
    answer: '정할 정'
  },
  {
    question: '貞',
    answer: '곧을 정'
  },
  {
    question: '精',
    answer: '정할 정'
  },
  {
    question: '情',
    answer: '뜻 정'
  },
  {
    question: '靜',
    answer: '고요할 정'
  },
  {
    question: '淨',
    answer: '깨끗할 정'
  },
  {
    question: '庭',
    answer: '뜰 정'
  },
  {
    question: '亭',
    answer: '정자 정'
  },
  {
    question: '訂',
    answer: '바로잡을 정'
  },
  {
    question: '廷',
    answer: '조정 정'
  },
  {
    question: '程',
    answer: '한도 정'
  },
  {
    question: '征',
    answer: '칠 정'
  },
  {
    question: '整',
    answer: '가지런할 정'
  },
  {
    question: '弟',
    answer: '아우 제'
  },
  {
    question: '第',
    answer: '차례 제'
  },
  {
    question: '祭',
    answer: '제사 제'
  },
  {
    question: '帝',
    answer: '임금 제'
  },
  {
    question: '題',
    answer: '제목 제'
  },
  {
    question: '除',
    answer: '덜 제'
  },
  {
    question: '諸',
    answer: '모두 제'
  },
  {
    question: '製',
    answer: '지을 제'
  },
  {
    question: '提',
    answer: '끌 제'
  },
  {
    question: '堤',
    answer: '둑 제'
  },
  {
    question: '制',
    answer: '절제할 제'
  },
  {
    question: '際',
    answer: '즈음 가 음/가제'
  },
  {
    question: '齊',
    answer: '가지런할 제'
  },
  {
    question: '濟',
    answer: '건널 제'
  },
  {
    question: '兆',
    answer: '조 조'
  },
  {
    question: '早',
    answer: '이를 일찍 /일찍조'
  },
  {
    question: '造',
    answer: '지을 조'
  },
  {
    question: '鳥',
    answer: '새 조'
  },
  {
    question: '調',
    answer: '고를 조'
  },
  {
    question: '朝',
    answer: '아침 조'
  },
  {
    question: '助',
    answer: '도울 조'
  },
  {
    question: '祖',
    answer: '할아버지 조'
  },
  {
    question: '弔',
    answer: '조상할 조'
  },
  {
    question: '燥',
    answer: '마를 조'
  },
  {
    question: '操',
    answer: '잡을 조'
  },
  {
    question: '照',
    answer: '비출 조'
  },
  {
    question: '條',
    answer: '가지 조'
  },
  {
    question: '潮',
    answer: '밀물 조수 /조수조'
  },
  {
    question: '租',
    answer: '조세 조'
  },
  {
    question: '組',
    answer: '끈 조'
  },
  {
    question: '足',
    answer: '발 족'
  },
  {
    question: '族',
    answer: '겨레 족'
  },
  {
    question: '存',
    answer: '있을 존'
  },
  {
    question: '尊',
    answer: '높을 존'
  },
  {
    question: '卒',
    answer: '마칠 군사 /군사졸'
  },
  {
    question: '拙',
    answer: '옹졸할 졸'
  },
  {
    question: '宗',
    answer: '마루 종'
  },
  {
    question: '種',
    answer: '씨 종'
  },
  {
    question: '鐘',
    answer: '쇠북 종'
  },
  {
    question: '終',
    answer: '마칠 종'
  },
  {
    question: '從',
    answer: '좇을 종'
  },
  {
    question: '縱',
    answer: '세로 종'
  },
  {
    question: '左',
    answer: '왼 좌'
  },
  {
    question: '坐',
    answer: '앉을 좌'
  },
  {
    question: '佐',
    answer: '도울 좌'
  },
  {
    question: '座',
    answer: '자리 좌'
  },
  {
    question: '罪',
    answer: '허물 죄'
  },
  {
    question: '主',
    answer: '주인 주'
  },
  {
    question: '注',
    answer: '물댈 주'
  },
  {
    question: '住',
    answer: '살 주'
  },
  {
    question: '朱',
    answer: '붉을 주'
  },
  {
    question: '宙',
    answer: '집 주'
  },
  {
    question: '走',
    answer: '달릴 주'
  },
  {
    question: '酒',
    answer: '술 주'
  },
  {
    question: '晝',
    answer: '낮 주'
  },
  {
    question: '舟',
    answer: '배 주'
  },
  {
    question: '周',
    answer: '두루 주'
  },
  {
    question: '株',
    answer: '그루 주'
  },
  {
    question: '州',
    answer: '고을 주'
  },
  {
    question: '洲',
    answer: '물가 주'
  },
  {
    question: '柱',
    answer: '기둥 주'
  },
  {
    question: '奏',
    answer: '아뢸 주'
  },
  {
    question: '珠',
    answer: '구슬 주'
  },
  {
    question: '鑄',
    answer: '불릴 주'
  },
  {
    question: '竹',
    answer: '대 죽'
  },
  {
    question: '準',
    answer: '준할 준'
  },
  {
    question: '俊',
    answer: '준걸 준'
  },
  {
    question: '遵',
    answer: '좇을 준'
  },
  {
    question: '中',
    answer: '가운데 중'
  },
  {
    question: '重',
    answer: '무거울 중'
  },
  {
    question: '衆',
    answer: '무리 중'
  },
  {
    question: '仲',
    answer: '버금 중'
  },
  {
    question: '卽',
    answer: '곧 즉'
  },
  {
    question: '曾',
    answer: '일찍 증'
  },
  {
    question: '增',
    answer: '더할 증'
  },
  {
    question: '證',
    answer: '증거 증'
  },
  {
    question: '憎',
    answer: '미울 증'
  },
  {
    question: '贈',
    answer: '줄 증'
  },
  {
    question: '症',
    answer: '증세 증'
  },
  {
    question: '蒸',
    answer: '찔 증'
  },
  {
    question: '只',
    answer: '다만 지'
  },
  {
    question: '支',
    answer: '지탱할 지'
  },
  {
    question: '枝',
    answer: '가지 지'
  },
  {
    question: '止',
    answer: '그칠 지'
  },
  {
    question: '之',
    answer: '갈 지'
  },
  {
    question: '知',
    answer: '알 지'
  },
  {
    question: '地',
    answer: '땅 지'
  },
  {
    question: '指',
    answer: '손가락 지'
  },
  {
    question: '志',
    answer: '뜻 지'
  },
  {
    question: '至',
    answer: '이를 지'
  },
  {
    question: '紙',
    answer: '종이 지'
  },
  {
    question: '持',
    answer: '가질 지'
  },
  {
    question: '池',
    answer: '못 지'
  },
  {
    question: '誌',
    answer: '기록할 지'
  },
  {
    question: '智',
    answer: '슬기 지'
  },
  {
    question: '遲',
    answer: '더딜 늦을 /늦을지'
  },
  {
    question: '直',
    answer: '곧을 직'
  },
  {
    question: '職',
    answer: '벼슬 직'
  },
  {
    question: '織',
    answer: '짤 직'
  },
  {
    question: '辰',
    answer: '별 진'
  },
  {
    question: '眞',
    answer: '참 진'
  },
  {
    question: '進',
    answer: '나아갈 진'
  },
  {
    question: '盡',
    answer: '다할 진'
  },
  {
    question: '振',
    answer: '떨칠 진'
  },
  {
    question: '鎭',
    answer: '진압할 진'
  },
  {
    question: '陳',
    answer: '베풀 진'
  },
  {
    question: '陣',
    answer: '진칠 진'
  },
  {
    question: '珍',
    answer: '보배 진'
  },
  {
    question: '震',
    answer: '우레 진'
  },
  {
    question: '質',
    answer: '바탕 질'
  },
  {
    question: '秩',
    answer: '차례 질'
  },
  {
    question: '疾',
    answer: '병 질'
  },
  {
    question: '姪',
    answer: '조카 질'
  },
  {
    question: '集',
    answer: '모을 집'
  },
  {
    question: '執',
    answer: '잡을 집'
  },
  {
    question: '徵',
    answer: '부를 징'
  },
  {
    question: '懲',
    answer: '징계할 징'
  },
  {
    question: '且',
    answer: '또 차'
  },
  {
    question: '次',
    answer: '버금 차'
  },
  {
    question: '此',
    answer: '이 차'
  },
  {
    question: '借',
    answer: '빌 차'
  },
  {
    question: '差',
    answer: '다를 차'
  },
  {
    question: '着',
    answer: '붙을 착'
  },
  {
    question: '錯',
    answer: '어긋날 착'
  },
  {
    question: '捉',
    answer: '잡을 착'
  },
  {
    question: '贊',
    answer: '도울 찬'
  },
  {
    question: '讚',
    answer: '기릴 찬'
  },
  {
    question: '察',
    answer: '살필 찰'
  },
  {
    question: '參',
    answer: '참여할 참'
  },
  {
    question: '慘',
    answer: '참혹할 참'
  },
  {
    question: '慙',
    answer: '부끄러울 참'
  },
  {
    question: '昌',
    answer: '창성할 창'
  },
  {
    question: '唱',
    answer: '노래 창'
  },
  {
    question: '窓',
    answer: '창 창'
  },
  {
    question: '倉',
    answer: '곳집 창'
  },
  {
    question: '創',
    answer: '비롯할 창'
  },
  {
    question: '蒼',
    answer: '푸를 창'
  },
  {
    question: '暢',
    answer: '화창할 창'
  },
  {
    question: '菜',
    answer: '나물 채'
  },
  {
    question: '採',
    answer: '캘 채'
  },
  {
    question: '彩',
    answer: '무늬 채'
  },
  {
    question: '債',
    answer: '빚 채'
  },
  {
    question: '責',
    answer: '꾸짖을 책'
  },
  {
    question: '冊',
    answer: '책 책'
  },
  {
    question: '策',
    answer: '꾀 책'
  },
  {
    question: '妻',
    answer: '아내 처'
  },
  {
    question: '處',
    answer: '곳 처'
  },
  {
    question: '尺',
    answer: '자 척'
  },
  {
    question: '斥',
    answer: '물리칠 척'
  },
  {
    question: '拓',
    answer: '열 넓힐 넓힐척'
  },
  {
    question: '戚',
    answer: '친척 척'
  },
  {
    question: '千',
    answer: '일천 천'
  },
  {
    question: '天',
    answer: '하늘 천'
  },
  {
    question: '川',
    answer: '내 천'
  },
  {
    question: '泉',
    answer: '샘 천'
  },
  {
    question: '淺',
    answer: '얕을 천'
  },
  {
    question: '賤',
    answer: '천할 천'
  },
  {
    question: '踐',
    answer: '밟을 천'
  },
  {
    question: '遷',
    answer: '옮길 천'
  },
  {
    question: '薦',
    answer: '천거할 천'
  },
  {
    question: '鐵',
    answer: '쇠 철'
  },
  {
    question: '哲',
    answer: '밝을 철'
  },
  {
    question: '徹',
    answer: '뚫을 철'
  },
  {
    question: '尖',
    answer: '뾰족할 첨'
  },
  {
    question: '添',
    answer: '더할 첨'
  },
  {
    question: '妾',
    answer: '첩 첩'
  },
  {
    question: '靑',
    answer: '푸를 청'
  },
  {
    question: '淸',
    answer: '맑을 청'
  },
  {
    question: '晴',
    answer: '갤 청'
  },
  {
    question: '請',
    answer: '청할 청'
  },
  {
    question: '聽',
    answer: '들을 청'
  },
  {
    question: '廳',
    answer: '관청 청'
  },
  {
    question: '體',
    answer: '몸 체'
  },
  {
    question: '替',
    answer: '바꿀 체'
  },
  {
    question: '滯',
    answer: '막힐 체'
  },
  {
    question: '逮',
    answer: '잡을 체'
  },
  {
    question: '遞',
    answer: '갈릴 체'
  },
  {
    question: '初',
    answer: '처음 초'
  },
  {
    question: '草',
    answer: '풀 초'
  },
  {
    question: '招',
    answer: '부를 초'
  },
  {
    question: '肖',
    answer: '닮을 초'
  },
  {
    question: '超',
    answer: '넘을 초'
  },
  {
    question: '抄',
    answer: '베낄 초'
  },
  {
    question: '礎',
    answer: '주춧돌 초'
  },
  {
    question: '秒',
    answer: '초 초'
  },
  {
    question: '促',
    answer: '재촉할 촉'
  },
  {
    question: '燭',
    answer: '촛불 촉'
  },
  {
    question: '觸',
    answer: '닿을 촉'
  },
  {
    question: '寸',
    answer: '마디 촌'
  },
  {
    question: '村',
    answer: '마을 촌'
  },
  {
    question: '銃',
    answer: '총 총'
  },
  {
    question: '總',
    answer: '거느릴 총'
  },
  {
    question: '聰',
    answer: '총명할 총'
  },
  {
    question: '最',
    answer: '가장 최'
  },
  {
    question: '催',
    answer: '재촉할 최'
  },
  {
    question: '秋',
    answer: '가을 추'
  },
  {
    question: '追',
    answer: '쫓을 추'
  },
  {
    question: '推',
    answer: '밀 추'
  },
  {
    question: '抽',
    answer: '뽑을 추'
  },
  {
    question: '醜',
    answer: '추할 추'
  },
  {
    question: '丑',
    answer: '소 축'
  },
  {
    question: '祝',
    answer: '빌 축'
  },
  {
    question: '畜',
    answer: '가축 축'
  },
  {
    question: '蓄',
    answer: '모을 축'
  },
  {
    question: '築',
    answer: '쌓을 축'
  },
  {
    question: '逐',
    answer: '쫓을 축'
  },
  {
    question: '縮',
    answer: '줄일 축'
  },
  {
    question: '春',
    answer: '봄 춘'
  },
  {
    question: '出',
    answer: '날 출'
  },
  {
    question: '充',
    answer: '채울 충'
  },
  {
    question: '忠',
    answer: '충성 충'
  },
  {
    question: '蟲',
    answer: '벌레 충'
  },
  {
    question: '衝',
    answer: '찌를 충'
  },
  {
    question: '取',
    answer: '가질 취'
  },
  {
    question: '吹',
    answer: '불 취'
  },
  {
    question: '就',
    answer: '나아갈 이룰 갈/이룰취'
  },
  {
    question: '臭',
    answer: '냄새 취'
  },
  {
    question: '醉',
    answer: '취할 취'
  },
  {
    question: '趣',
    answer: '뜻 취'
  },
  {
    question: '側',
    answer: '곁 측'
  },
  {
    question: '測',
    answer: '잴 측'
  },
  {
    question: '層',
    answer: '층 층'
  },
  {
    question: '治',
    answer: '다스릴 치'
  },
  {
    question: '致',
    answer: '이를 치'
  },
  {
    question: '齒',
    answer: '이 치'
  },
  {
    question: '値',
    answer: '값 치'
  },
  {
    question: '置',
    answer: '둘 치'
  },
  {
    question: '恥',
    answer: '부끄러울 치'
  },
  {
    question: '則',
    answer: '법칙 칙'
  },
  {
    question: '親',
    answer: '친할 친'
  },
  {
    question: '七',
    answer: '일곱 칠'
  },
  {
    question: '漆',
    answer: '옻 칠'
  },
  {
    question: '針',
    answer: '바늘 침'
  },
  {
    question: '侵',
    answer: '침노할 침'
  },
  {
    question: '浸',
    answer: '담글 침'
  },
  {
    question: '寢',
    answer: '잘 침'
  },
  {
    question: '沈',
    answer: '가라앉을 침'
  },
  {
    question: '枕',
    answer: '베개 침'
  },
  {
    question: '稱',
    answer: '일컬을 칭'
  },
  {
    question: '快',
    answer: '쾌할 쾌'
  },
  {
    question: '他',
    answer: '다를 타'
  },
  {
    question: '打',
    answer: '칠 타'
  },
  {
    question: '妥',
    answer: '온당할 타'
  },
  {
    question: '墮',
    answer: '떨어질 타'
  },
  {
    question: '濁',
    answer: '흐릴 탁'
  },
  {
    question: '托',
    answer: '맡길 탁'
  },
  {
    question: '濯',
    answer: '씻을 탁'
  },
  {
    question: '卓',
    answer: '높을 탁'
  },
  {
    question: '炭',
    answer: '숯 탄'
  },
  {
    question: '歎',
    answer: '탄식할 탄'
  },
  {
    question: '彈',
    answer: '탄알 탄'
  },
  {
    question: '誕',
    answer: '낳을 탄'
  },
  {
    question: '脫',
    answer: '벗을 탈'
  },
  {
    question: '奪',
    answer: '빼앗을 탈'
  },
  {
    question: '探',
    answer: '찾을 탐'
  },
  {
    question: '貪',
    answer: '탐할 탐'
  },
  {
    question: '塔',
    answer: '탑 탑'
  },
  {
    question: '湯',
    answer: '끓일 탕'
  },
  {
    question: '太',
    answer: '클 태'
  },
  {
    question: '泰',
    answer: '클 편안할 안할태'
  },
  {
    question: '怠',
    answer: '게으를 태'
  },
  {
    question: '殆',
    answer: '거의 태'
  },
  {
    question: '態',
    answer: '모양 태'
  },
  {
    question: '宅',
    answer: '집 택'
  },
  {
    question: '澤',
    answer: '못 택'
  },
  {
    question: '擇',
    answer: '가릴 택'
  },
  {
    question: '土',
    answer: '흙 토'
  },
  {
    question: '吐',
    answer: '토할 토'
  },
  {
    question: '討',
    answer: '칠 토'
  },
  {
    question: '通',
    answer: '통할 통'
  },
  {
    question: '統',
    answer: '거느릴 통'
  },
  {
    question: '痛',
    answer: '아플 통'
  },
  {
    question: '退',
    answer: '물러날 퇴'
  },
  {
    question: '投',
    answer: '던질 투'
  },
  {
    question: '透',
    answer: '사무칠 투'
  },
  {
    question: '鬪',
    answer: '싸울 투'
  },
  {
    question: '特',
    answer: '특별할 뛰어날 /뛰어날특'
  },
  {
    question: '破',
    answer: '깨뜨릴 파'
  },
  {
    question: '波',
    answer: '물결 파'
  },
  {
    question: '派',
    answer: '갈래 파'
  },
  {
    question: '播',
    answer: '뿌릴 파'
  },
  {
    question: '罷',
    answer: '마칠 파'
  },
  {
    question: '頗',
    answer: '자못 파'
  },
  {
    question: '把',
    answer: '잡을 파'
  },
  {
    question: '判',
    answer: '판단할 판'
  },
  {
    question: '板',
    answer: '널빤지 판'
  },
  {
    question: '販',
    answer: '팔 판'
  },
  {
    question: '版',
    answer: '판목 판'
  },
  {
    question: '八',
    answer: '여덟 팔'
  },
  {
    question: '貝',
    answer: '조개 패'
  },
  {
    question: '敗',
    answer: '패할 패'
  },
  {
    question: '片',
    answer: '조각 편'
  },
  {
    question: '便',
    answer: '편할 편'
  },
  {
    question: '篇',
    answer: '책 편'
  },
  {
    question: '編',
    answer: '엮을 편'
  },
  {
    question: '遍',
    answer: '두루 편'
  },
  {
    question: '偏',
    answer: '치우칠 편'
  },
  {
    question: '平',
    answer: '평평할 평'
  },
  {
    question: '評',
    answer: '평할 평'
  },
  {
    question: '閉',
    answer: '닫을 폐'
  },
  {
    question: '肺',
    answer: '허파 폐'
  },
  {
    question: '廢',
    answer: '버릴 폐할 /폐할폐'
  },
  {
    question: '弊',
    answer: '폐단 해질 /해질폐'
  },
  {
    question: '蔽',
    answer: '덮을 폐'
  },
  {
    question: '幣',
    answer: '화폐 비단 /비단폐'
  },
  {
    question: '布',
    answer: '베 포'
  },
  {
    question: '抱',
    answer: '안을 포'
  },
  {
    question: '包',
    answer: '쌀 포'
  },
  {
    question: '胞',
    answer: '세포 여드름 여드름포'
  },
  {
    question: '飽',
    answer: '배부를 포'
  },
  {
    question: '浦',
    answer: '물가 포'
  },
  {
    question: '捕',
    answer: '잡을 포'
  },
  {
    question: '暴',
    answer: '사나울 쬘 나울/쬘폭'
  },
  {
    question: '爆',
    answer: '터질 폭'
  },
  {
    question: '幅',
    answer: '너비 폭'
  },
  {
    question: '表',
    answer: '겉 표'
  },
  {
    question: '票',
    answer: '표 표'
  },
  {
    question: '標',
    answer: '나타낼 표'
  },
  {
    question: '漂',
    answer: '떠다닐 표'
  },
  {
    question: '品',
    answer: '물건 품'
  },
  {
    question: '風',
    answer: '바람 풍'
  },
  {
    question: '豐',
    answer: '풍년 풍'
  },
  {
    question: '皮',
    answer: '가죽 피'
  },
  {
    question: '彼',
    answer: '저 피'
  },
  {
    question: '疲',
    answer: '지칠 피'
  },
  {
    question: '被',
    answer: '입을 피'
  },
  {
    question: '避',
    answer: '피할 피'
  },
  {
    question: '必',
    answer: '반드시 필'
  },
  {
    question: '匹',
    answer: '짝 필'
  },
  {
    question: '筆',
    answer: '붓 필'
  },
  {
    question: '畢',
    answer: '마칠 필'
  },
  {
    question: '下',
    answer: '아래 하'
  },
  {
    question: '夏',
    answer: '여름 하'
  },
  {
    question: '賀',
    answer: '하례 하'
  },
  {
    question: '何',
    answer: '어찌 하'
  },
  {
    question: '河',
    answer: '물 하'
  },
  {
    question: '荷',
    answer: '멜 하'
  },
  {
    question: '學',
    answer: '배울 학'
  },
  {
    question: '鶴',
    answer: '두루미 학'
  },
  {
    question: '閑',
    answer: '한가할 한'
  },
  {
    question: '寒',
    answer: '찰 한'
  },
  {
    question: '恨',
    answer: '한 한'
  },
  {
    question: '限',
    answer: '한할 한'
  },
  {
    question: '韓',
    answer: '한국 나라 이름 /나라이름한'
  },
  {
    question: '漢',
    answer: '한수 한나라 한나라한'
  },
  {
    question: '旱',
    answer: '가물 한'
  },
  {
    question: '汗',
    answer: '땀 한'
  },
  {
    question: '割',
    answer: '나눌 할'
  },
  {
    question: '咸',
    answer: '다 함'
  },
  {
    question: '含',
    answer: '머금을 함'
  },
  {
    question: '陷',
    answer: '빠질 함'
  },
  {
    question: '合',
    answer: '합할 합'
  },
  {
    question: '恒',
    answer: '항상 항'
  },
  {
    question: '巷',
    answer: '거리 항'
  },
  {
    question: '港',
    answer: '항구 항'
  },
  {
    question: '項',
    answer: '항목 항'
  },
  {
    question: '抗',
    answer: '겨룰 항'
  },
  {
    question: '航',
    answer: '배 항'
  },
  {
    question: '害',
    answer: '해할 해'
  },
  {
    question: '海',
    answer: '바다 해'
  },
  {
    question: '亥',
    answer: '돼지 해'
  },
  {
    question: '解',
    answer: '풀 해'
  },
  {
    question: '奚',
    answer: '어찌 해'
  },
  {
    question: '該',
    answer: '갖출 해'
  },
  {
    question: '核',
    answer: '씨 핵'
  },
  {
    question: '行',
    answer: '다닐 행'
  },
  {
    question: '幸',
    answer: '다행 행'
  },
  {
    question: '向',
    answer: '향할 향'
  },
  {
    question: '香',
    answer: '향기 향'
  },
  {
    question: '鄕',
    answer: '시골 향'
  },
  {
    question: '響',
    answer: '울릴 향'
  },
  {
    question: '享',
    answer: '누릴 향'
  },
  {
    question: '虛',
    answer: '빌 허'
  },
  {
    question: '許',
    answer: '허락할 허'
  },
  {
    question: '軒',
    answer: '집 헌'
  },
  {
    question: '憲',
    answer: '법 헌'
  },
  {
    question: '獻',
    answer: '드릴 바칠 /바칠헌'
  },
  {
    question: '險',
    answer: '험할 험'
  },
  {
    question: '驗',
    answer: '시험할 험'
  },
  {
    question: '革',
    answer: '가죽 고칠 /고칠혁'
  },
  {
    question: '現',
    answer: '나타날 현'
  },
  {
    question: '賢',
    answer: '어질 현'
  },
  {
    question: '玄',
    answer: '검을 현'
  },
  {
    question: '絃',
    answer: '줄 현'
  },
  {
    question: '縣',
    answer: '고을 현'
  },
  {
    question: '懸',
    answer: '매달 현'
  },
  {
    question: '顯',
    answer: '나타날 현'
  },
  {
    question: '血',
    answer: '피 혈'
  },
  {
    question: '穴',
    answer: '구멍 혈'
  },
  {
    question: '協',
    answer: '화합할 도울 할/도울협'
  },
  {
    question: '脅',
    answer: '위협할 으를 할/으를협'
  },
  {
    question: '兄',
    answer: '맏 형 /형형'
  },
  {
    question: '刑',
    answer: '형벌 형'
  },
  {
    question: '形',
    answer: '모양 형'
  },
  {
    question: '亨',
    answer: '형통할 형'
  },
  {
    question: '螢',
    answer: '반딧불이 형'
  },
  {
    question: '衡',
    answer: '저울대 형'
  },
  {
    question: '惠',
    answer: '은혜 혜'
  },
  {
    question: '慧',
    answer: '슬기로울 혜'
  },
  {
    question: '兮',
    answer: '어조사 혜'
  },
  {
    question: '戶',
    answer: '지게 호'
  },
  {
    question: '乎',
    answer: '어조사 호'
  },
  {
    question: '呼',
    answer: '부를 호'
  },
  {
    question: '好',
    answer: '좋을 호'
  },
  {
    question: '虎',
    answer: '범 호'
  },
  {
    question: '號',
    answer: '부르짖을 호'
  },
  {
    question: '湖',
    answer: '호수 호'
  },
  {
    question: '互',
    answer: '서로 호'
  },
  {
    question: '胡',
    answer: '오랑캐 호'
  },
  {
    question: '浩',
    answer: '넓을 호'
  },
  {
    question: '毫',
    answer: '터럭 호'
  },
  {
    question: '豪',
    answer: '호걸 호'
  },
  {
    question: '護',
    answer: '도울 호'
  },
  {
    question: '或',
    answer: '혹 혹'
  },
  {
    question: '惑',
    answer: '미혹할 혹'
  },
  {
    question: '婚',
    answer: '혼인할 혼'
  },
  {
    question: '混',
    answer: '섞을 혼'
  },
  {
    question: '昏',
    answer: '어두울 혼'
  },
  {
    question: '魂',
    answer: '넋 혼'
  },
  {
    question: '忽',
    answer: '갑자기 문득 기/문득홀'
  },
  {
    question: '紅',
    answer: '붉을 홍'
  },
  {
    question: '洪',
    answer: '넓을 큰물 /큰물홍'
  },
  {
    question: '弘',
    answer: '넓을 홍'
  },
  {
    question: '鴻',
    answer: '기러기 홍'
  },
  {
    question: '火',
    answer: '불 화'
  },
  {
    question: '化',
    answer: '될 화'
  },
  {
    question: '花',
    answer: '꽃 화'
  },
  {
    question: '貨',
    answer: '재화 화'
  },
  {
    question: '和',
    answer: '화할 화'
  },
  {
    question: '話',
    answer: '말씀 화'
  },
  {
    question: '畫',
    answer: '그림 화'
  },
  {
    question: '華',
    answer: '빛날 화'
  },
  {
    question: '禾',
    answer: '벼 화'
  },
  {
    question: '禍',
    answer: '재앙 화'
  },
  {
    question: '確',
    answer: '굳을 확'
  },
  {
    question: '穫',
    answer: '거둘 확'
  },
  {
    question: '擴',
    answer: '넓힐 확'
  },
  {
    question: '歡',
    answer: '기쁠 환'
  },
  {
    question: '患',
    answer: '근심 환'
  },
  {
    question: '丸',
    answer: '둥글 환'
  },
  {
    question: '換',
    answer: '바꿀 환'
  },
  {
    question: '環',
    answer: '고리 환'
  },
  {
    question: '還',
    answer: '돌아올 환'
  },
  {
    question: '活',
    answer: '살 활'
  },
  {
    question: '黃',
    answer: '누를 황'
  },
  {
    question: '皇',
    answer: '임금 황'
  },
  {
    question: '況',
    answer: '상황 황'
  },
  {
    question: '荒',
    answer: '거칠 황'
  },
  {
    question: '回',
    answer: '돌 회'
  },
  {
    question: '會',
    answer: '모일 회'
  },
  {
    question: '悔',
    answer: '뉘우칠 회'
  },
  {
    question: '懷',
    answer: '품을 회'
  },
  {
    question: '獲',
    answer: '얻을 획'
  },
  {
    question: '劃',
    answer: '그을 획'
  },
  {
    question: '橫',
    answer: '가로 횡'
  },
  {
    question: '孝',
    answer: '효도 효'
  },
  {
    question: '效',
    answer: '본받을 효'
  },
  {
    question: '曉',
    answer: '새벽 효'
  },
  {
    question: '後',
    answer: '뒤 후'
  },
  {
    question: '厚',
    answer: '두터울 후'
  },
  {
    question: '侯',
    answer: '제후 후'
  },
  {
    question: '候',
    answer: '기후 후'
  },
  {
    question: '訓',
    answer: '가르칠 훈'
  },
  {
    question: '毁',
    answer: '헐 훼'
  },
  {
    question: '揮',
    answer: '휘두를 휘'
  },
  {
    question: '輝',
    answer: '빛날 휘'
  },
  {
    question: '休',
    answer: '쉴 휴'
  },
  {
    question: '携',
    answer: '이끌 가질 /가질휴'
  },
  {
    question: '凶',
    answer: '흉할 흉'
  },
  {
    question: '胸',
    answer: '가슴 흉'
  },
  {
    question: '黑',
    answer: '검을 흑'
  },
  {
    question: '吸',
    answer: '마실 흡'
  },
  {
    question: '興',
    answer: '일 흥'
  },
  {
    question: '希',
    answer: '바랄 희'
  },
  {
    question: '喜',
    answer: '기쁠 희'
  },
  {
    question: '戲',
    answer: '놀이 희'
  },
  {
    question: '稀',
    answer: '드물 희'
  }
]

export { hanjaCharacters };