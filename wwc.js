// Client ID and API key from the Developer Console
const CLIENT_ID = '1042299068627-dorfc5bfa2ssg7tle9vr4f0porre5mg0.apps.googleusercontent.com';
const API_KEY = 'AIzaSyByPw4ujuptmIgRuy__iOyxA-hrbOBMLmM';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const WONDER_WEEKS_DESC = {
  wonder1 : {
    name : "[5주] 감각의 변화",
    desc : "아기가 '깨어나서' 더이상 엄마의 뱃속이 아님을 깨닫고 더 주변을 살피게 됩니다. 아기에겐 엄청난 변화입니다!",
    sleep : "엄마를 힘들게 하는 '마녀의 시간(오후 5시에서 10~11시까지)'이 시작됩니다. 아기를 더 자주 껴안아주어야 합니다.(아기띠를 메는것도 좋아요.) 밤에 더 자주 먹이게 되고 때때로 아기가 토를 하기도 합니다. 6주차까지 수면의 어려움을 겪기도합니다."
  },
  wonder2 : {
    name : "[8-9주] 패턴의 생성",
    desc : "아기가 단순한 패턴을 반복하기 시작합니다. 같은 방법으로 손을 움직이는걸 연습하거나 끙끙거리는 소리 내기를 반복합니다.",
    sleep : "아기의 호기심과 주의력으로 인해 아기가 잠드는것이 어려울수 있습니다. 아기가 자는 공간을 잠들기 쉽게 어둡고 조용하게 만들어주세요."
  },
  wonder3 : {
    name : "[12주] 자연스러운 움직임",
    desc : "아기의 움직임이 부드럽고 정교해집니다. 아기는 주변 환경의 변화와 이런 변화의 일정한 패턴을 파악하게 됩니다. (초인종이 울리면 엄마가 방을 나간다거나)",
    sleep : "아기가 꿈틀거리기 시작하고 더 활동적이게 됩니다. 수면 루틴이 변할수도 있음을 의미합니다. 속싸개를 풀어주어도 좋습니다. 아기가 뒤집기 시작하면 수면을 방해하게 됩니다. 아기는 바닥에 등을 대고 있다가 배로 뒤집을수 있지만 반대로는 하지 못합니다. 몇몇 아기들은 통잠을 자게 되기도 하고 수유텀이 일정해집니다."
  },
  wonder4 : {
    name : "[15-19주] 이벤트",
    desc : "아기가 원인과 결과를 인식하고 예측하는 법을 배웁니다. 예를들면 장난감을 떨어뜨리면 장난감이 바닥으로 떨어지게되고 아빠가 와서 집어준다는걸 알게 되죠.",
    sleep : "4개월이 되면 수면 습관이 다시 깨질수 있습니다.(수면 회귀) 지금까지 아기의 수면 패턴을 예측할수 있었다면 전부 깨질 수 있습니다. 일정한 수면 습관을 들일수 있도록 노력해야 합니다. 수면 습관을 통해 어떤 행동이 잠으로 이어지는지 아기가 알수 있도록 훈련해야 합니다. 아이가 급성장하는 시기입니다."
  },
  wonder5 : {
    name : "[23-26주] 관계 형성",
    desc : "아기가 멀리까지 보게 됩니다. 아기에게 세상이 더 큰 공간이 됩니다. 많은 아기들이 이 시기에 더 구르기 시작하는 이유입니다.",
    sleep : "분리불안이 낮잠을 자거나 밤잠을 잘 때 문제가 되기도합니다. 엄마가 아기 곁을 떠날 때 엄마가 멀리 가버린다는걸 알게되기 때문입니다. 아기에게 수면 교육을 할 수 있는 좋은 때이기도 합니다. 아기가 독립적으로 잠드는 방법을 배우도록 도와주세요. 대부분의 아이들은 이 시기에 다시 급성장하게 됩니다."
  },
  wonder6 : {
    name : "[33-37주] 분류 인지",
    desc : "여러가지가 함께 분류될수 있음을 배우고 있습니다. 예를들어 블록들이 모양은 모두 다르지만 모두가 블록이라는것을 인지하게 됩니다. 아기가 기어다니는 법을 배우게 됩니다. 일어서기 위해 뭔가를 잡아 당기고 발걸음을 딛기 위해 노력합니다.",
    sleep : "스스로 이동할 수 있게 되면서 수면에 심각하게 방해가 됩니다. 아기가 수면 시간에 울면 엄마가 어떻게 행동할지 패턴을 알아차리게 되므로 이 때에 다른 수면습관을 배우지 않게 주의해야 합니다. 아기가 밤에 깨어있을 때 수유를 하지 않는것이 좋습니다. 그리고 9개월차는 또 다른 급성장 시기입니다."
  },
  wonder7 : {
    name : "[42-46주] 순서 인지",
    desc : "아기가 옷을 입거나 점심을 만들거나 하는 간단한 작업과 관련된 순서들을 인식하게 됩니다. 가령 아기는 양말을 신발보다 먼저 신어야 한다는것을 알게됩니다.",
    sleep : "루틴은 이 단계에서 매우 중요합니다. 대부분의 아이들은 다음에 어떤일이 올지 아는것을 좋아합니다. 그래서 수면 습관을 강화하기 좋습니다. 이 시기에 부모들이 짧게 수면 회귀를 겪고 오전에 낮잠재우는걸 포기하기도 합니다. 아기에게 낮잠은 한번만으로는 부족하므로 두번재울수 있게 노력하세요. "
  },
  wonder8 : {
    name : "[52-55주] 유아기 시작",
    desc : "아기가 어떤 일을 할 때 여러가지 방법이나 순서가 있다는걸 알게됩니다. 대부분의 아기들이 강한 선호도를 보이기 시작합니다. (분홍 양말은 좋고 녹색 양말은 싫다거나)",
    sleep : "유아기에 온걸 환영합니다! 이 단계에서 분리불안이 다시 찾아옵니다. 아기가 자신의 독립성과 스스로 선호하는것을 주장하면서 낮잠을 자거나 밤잠을 자는것에 반항하게 될 수 있습니다."
  },
  wonder9 : {
    name : "[61-64주] 원칙",
    desc : "생후 4개월쯤 배웠던 인과관계와 관련이 있는 시기입니다. 아기가 목표를 달성하기 위해 인과관계를 사용하는 방법을 배웁니다. 아기가 한 행동이 특정한 결과를 만들게 된다는걸 배우게 됩니다.",
    sleep : "징계에 대해 생각해볼 시기입니다. 아기가 자신의 행동에 부모가 어떻게 반응하는지 빠르게 배우고 있으므로 아기에게 반응할때 올바른 메시지를 전달하도록 노력해야 합니다. 수면에 대해서는 아기에게 경계를 설정하고 제한해야하는 시기입니다. 이 시기의 수면에 대한 문제는 수면의 문제가 아니고 징계의 문제라고 이야기 합니다."
  },
  wonder10 : {
    name : "[72-76주] 시스템",
    desc : "아기가 더 큰 시스템을 이해하게 됩니다. 예를들어 어린이집에서의 행동하는 절차와 기대치가 집에서는 다르다는것을 알고 있습니다. 아기는 상황에 맞게 스스로의 행동을 바꿀 수 있습니다. 육아도우미분에겐 친절하게 대하다가 엄마에겐 심술궂게 대할수 있습니다.",
    sleep : "유아로서의 특성이 많이 드러납니다. 아기의 수면 시간을 지키도록 노력해야합니다. 17~18개월엔 보통 짜증을 많이 냅니다. 낮잠이나 밤잠 시간에 특히 짜증을 많이 내서 부모를 힘들게합니다. 이 때 흔들리지 않는것이 중요합니다. 수면 회귀를 가장 심하게 겪을 수 있습니다."
  }
}

var calendar = new Vue({
  el: '#calendar',
  data: {
    birthDate: "2020-01-01",
    wonderWeeksMeta : [
      {start:5, end:5, title: "wonder1"},
      {start:8, end:9, title: "wonder2"},
      {start:12, end:12, title: "wonder3"},
      {start:15, end:19, title: "wonder4"},
      {start:23, end:26, title: "wonder5"},
      {start:33, end:37, title: "wonder6"},
      {start:42, end:46, title: "wonder7"},
      {start:52, end:55, title: "wonder8"},
      {start:61, end:64, title: "wonder9"},
      {start:72, end:76, title: "wonder10"}
    ],
    today : new Date(),
    selectedWonderWeeks : null,
    showPrevMonth : false,
    isSignedIn : false,
    pendingAddEvent : false,
    isDisAllowedBrowser: navigator.userAgent.indexOf("KAKAOTALK")>0,
    copying: false,
    languages: [
      { key :"ko", value :"한국어" },
      { key :"en", value :"english" },
    ],
    language: typeof defaultLanguage == "undefined" ? navigator.language.substr(0,2) : defaultLanguage,
    showMenu: false
  },
  filters: {
    dateToYYYYMM: function(date, language) {
      if(date == null) return '';
      if(language == 'ko') return `${date.getFullYear()}년 ${date.getMonth()+1}월`
      else return `${language_en[(date.getMonth()+1)+"월"]} ${date.getFullYear()}`
    },
    dateToDD: function(date) {
      if(date == null) return '';
      return date.getDate()
    },
    lang: function(str, language) {
      if (language == 'ko') return str;
      else return language_en[str] || str;
    }
  },
  methods: {
    lang: function(str) {
      if (this.language == 'ko') return str;
      else return language_en[str] || str;
    },
    toggleMenu: function(){
      this.showMenu = !this.showMenu
    },
    dateToClass: function(date) {
      let classes = ""
      if(date == null) return classes
      classes += this.dateToWonderWeeksClass(date)
      if(this.dateIsToday(date)) classes += " today"
      if(date.getDay() == 0) classes += " has-text-danger "
      if(date.getDay() == 6) classes += " has-text-link "
      return classes
    },
    dateToWonderWeeksClass(date) {
      let wonderDate = this.wonderWeeks.find((wonderWeek) => date >= wonderWeek.startDate && date <= wonderWeek.endDate)
      return wonderDate ? `wonder ${wonderDate.title} ` : ""
    },
    dateIsWonderWeeks(date) {
      return this.wonderWeeks.some((wonderWeek) => date >= wonderWeek.startDate && date <= wonderWeek.endDate)
    },
    dateIsToday(date) {
      return this.today.getYear() == date.getYear() && this.today.getMonth() == date.getMonth() && this.today.getDate() == date.getDate()
    },
    selectWonderWeeks(event) {
      if(event.target.classList[0] == 'wonder'){

        this.selectedWonderWeeks = event.target.classList[1]
        gtag('event', 'select-weeks', {
          'event_category' : 'calendar',
          'event_label' : 'select wonder weeks'
        });
      }
    },
    close() {
      this.selectedWonderWeeks = null
    },
    changeBirthDate() {
      history.replaceState(null, '', `?birthDate=${this.birthDate}`);
    },
    isPrevMonth(date) {
      if(this.showPrevMonth) return false;
      let today = new Date()
      today.setDate(1)
      today.setHours(0,0,0)
      date.setHours(0,0,1) // 밀리세컨즈때문에

      return date < today
    },
    gapiLoad(){
      gapi.load('client:auth2', this.initGapi);
    },
    initGapi() {
      let that = this
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

        // Handle the initial sign-in state.
        that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      }, function(error) {
        console.log(JSON.stringify(error, null, 2));
      });
    },
    updateSigninStatus(isSignedIn) {
      gtag('event', 'signed-in', {
        'event_category' : 'gapi',
        'event_label' : 'signed in'
      });
      this.isSignedIn = isSignedIn
    },
    signIn() {
      gtag('event', 'sign-in', {
        'event_category' : 'gapi',
        'event_label' : 'sign in'
      });

      gapi.auth2.getAuthInstance().signIn();
    },
    signOut() {
      gtag('event', 'sign-out', {
        'event_category' : 'gapi',
        'event_label' : 'sign out'
      });
      gapi.auth2.getAuthInstance().signOut();
    },
    addEvents() {
      gtag('event', 'add-events', {
        'event_category' : 'gapi',
        'event_label' : 'add events'
      });
      that = this
      this.pendingAddEvent = true
      let batch = gapi.client.newBatch();
      this.wonderWeeks.forEach(function(wonderWeek){
        let desc = WONDER_WEEKS_DESC[wonderWeek.title]
        wonderWeek.endDate.setDate(wonderWeek.endDate.getDate() + 1);
        let event = {
          'summary': this.lang(desc.name),
          'description': this.lang(desc.desc) +'\n' + this.lang(desc.sleep),
          'start': {
            'date': `${wonderWeek.startDate.getFullYear()}-${wonderWeek.startDate.getMonth()+1}-${wonderWeek.startDate.getDate()}`,
            'timeZone': 'Asia/Seoul'
          },
          'end': {
            'date': `${wonderWeek.endDate.getFullYear()}-${wonderWeek.endDate.getMonth()+1}-${wonderWeek.endDate.getDate()}`,
            'timeZone': 'Asia/Seoul'
          }
        };
        batch.add(gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        }))
      });
      batch.then(function(){
        console.log('all jobs done!!!')
        that.pendingAddEvent = false
        alert(this.lang("추가되었습니다!"));
      });
    },
    addEventsWithIcs() {  
      gtag('event', 'add-events-ics', {  
        'event_category' : 'gapi',  
        'event_label' : 'add events ics'  
      }); 
      this.pendingAddEvent = true 
      var cal = ics();  
      for(let idx in this.wonderWeeks) {  
        wonderWeek = this.wonderWeeks[idx]  
        let desc = WONDER_WEEKS_DESC[wonderWeek.title]  
        wonderWeek.endDate.setDate(wonderWeek.endDate.getDate() + 1); 
        cal.addEvent(this.lang(desc.name), this.lang(desc.desc) +'\\n\\n' + this.lang(desc.sleep), "", wonderWeek.startDate, wonderWeek.endDate);  
      } 
      let calBuild = cal.build(); 
      window.open(encodeURI("data:text/calendar;charset=utf8," + calBuild));  
      this.pendingAddEvent = false  
    },
    copyUrl() {
      gtag('event', 'copy-url', {  
        'event_category' : 'event',  
        'event_label' : 'copy url'  
      }); 
      let that = this
      this.copying = true
      let dummy = document.createElement('input'),
      text = window.location.href;

      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      setTimeout(function() {
        that.copying = false
      }, 200);
    }

  },
  computed: {
    wonderWeeks: function(){
      const birthDate = this.birthDate
      return this.wonderWeeksMeta.map(function(meta){
        let startDate = new Date(birthDate)
        startDate.setHours(0,0,0)
        startDate.setDate(startDate.getDate() + (meta.start * 7))
        let endDate = new Date(birthDate)
        endDate.setDate(endDate.getDate() + ((meta.end+1) * 7) - 1)
        endDate.setHours(0,0,0)
        return {
          startDate: startDate, endDate: endDate, title: meta.title
        }
      });
    },
    calendarInfo: function(){
      let startDate = new Date(this.birthDate)
      startDate.setHours(0,0,0);
      return {
        startDate: startDate,
        endDate: this.wonderWeeks[this.wonderWeeks.length - 1].endDate
      }
    },
    calendarMonthInfo: function(){
      let monthInfo = []
      let dateIndex = this.calendarInfo.startDate
      dateIndex.setDate(1)
      while (this.calendarInfo.endDate > dateIndex) {
        let date = new Date(dateIndex)
        monthInfo.push(date)
        dateIndex.setMonth(dateIndex.getMonth() + 1)
      }
      return monthInfo
    },
    monthylCalendars: function(){
      return this.calendarMonthInfo.map(function(monthInfo){
        let weeks = []
        let week = []
        let indexDay = new Date(monthInfo)
        let nextMonthFirstDay = (new Date(indexDay)).setMonth(indexDay.getMonth() + 1)
        for(let i=0;i<indexDay.getDay();i++) {
          week.push(null);
        }
        while(indexDay < nextMonthFirstDay) {
          week.push(new Date(indexDay))
          indexDay.setDate(indexDay.getDate()+1)
          if(indexDay.getDay() == 0) {
            weeks.push(week)
            week = []
          }
        }
        if(week.length > 0) {
          for(let i=7;i>indexDay.getDay();i--) {
            week.push(null);
          }
          weeks.push(week);
        }
        return {date: monthInfo, weeks: weeks}
      })
    },
    wonderWeeksDesc: function(){
      if(this.selectedWonderWeeks) {
        return WONDER_WEEKS_DESC[this.selectedWonderWeeks]
      } else {
        return ""
      }
    }
  },
  created(){
    let uri = window.location.href.split('?');
    if (uri.length == 2)
    {
      let vars = uri[1].split('&');
      let getVars = {};
      let tmp = '';
      vars.forEach(function(v){
        tmp = v.split('=');
        if(tmp.length == 2)
        getVars[tmp[0]] = tmp[1];
      });
      if(getVars.birthDate)
        this.birthDate = getVars.birthDate
    }
  },
})

function handleClientLoad() {
  calendar.gapiLoad();
}