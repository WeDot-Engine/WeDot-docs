(function () {
  // giscus 评论系统
  //// 若当前 mdbook 主题为 Light 或 Rust ，则将 giscus 主题设置为 light
  const getCurrentTheme = function () {
    var theme = "transparent_dark";
    const themeClass = document.getElementsByTagName("html")[0].className;
    if (themeClass.indexOf("light") != -1 || themeClass.indexOf("rust") != -1) {
      theme = "light";
    }
    return theme;
  }

  //// 获取用户使用的语种并转换为 giscus 可识别的标记
  const getCurrentLanguage = function () {
    var lang = translate.language.getCurrent();
    var giscus_lang = "zh-CN";
    switch (lang) {
      case "chinese_traditional":
        giscus_lang = "zh-TW";
        break;
      case "english":
        giscus_lang = "en";
        break;
      case "spanish":
        giscus_lang = "es";
        break;
      case "japanese":
        giscus_lang = "ja";
        break;
      case "korean":
        giscus_lang = "ko";
        break;
      case "french":
        giscus_lang = "fr";
        break;
      case "arabic":
        giscus_lang = "ar";
        break;
      case "catalan":
        giscus_lang = "ca";
        break;
      case "danish":
        giscus_lang = "da";
        break;
      case "deutsch":
        giscus_lang = "de";
        break;
      case "persian":
        giscus_lang = "fa";
        break;
      case "greek":
        giscus_lang = "gr";
        break;
      case "serbian":
        giscus_lang = "hbs";
        break;
      case "hebrew":
        giscus_lang = "he";
        break;
      case "hungarian":
        giscus_lang = "hu";
        break;
      case "italian":
        giscus_lang = "it";
        break;
      default:
        giscus_lang = "zh-CN";
        break;
    }
    return giscus_lang;
  }

  var SetupGiscus = function (giscus_lang, theme) {
    if (document.getElementById("giscus-container") != null) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://giscus.app/client.js";


      script.setAttribute("data-repo", "Wedot-Engine/Wedot-docs");
      script.setAttribute("data-repo-id", "R_kgDONKG4_g");
      script.setAttribute("data-category", "Announcements");
      script.setAttribute("data-category-id", "DIC_kwDONKG4_s4Cj9ge");

      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "1");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "top");
      script.setAttribute("data-theme", theme);
      script.setAttribute("data-lang", giscus_lang);

      script.crossOrigin = "anonymous";
      script.async = true;

      document.getElementById("giscus-container").appendChild(script);
    }
  }

  // translate-js 翻译系统
  function initTranslate() {
    try {
      translate.service.use('client.edge');
      translate.listener.start();
      translate.language.setLocal('chinese_simplified');
      translate.setAutoDiscriminateLocalLanguage();
      translate.language.setUrlParamControl();
      translate.ignore.class.push('notTranslate');
      translate.nomenclature.append('chinese_simplified', 'english', `
				哈姆语言之书=Hamud Book
				哈姆语=the language of Hamud
				哈姆德=the Hamud
				哈姆人=hamud
				哈姆=Hamud
				哈约·姆经=Hamud the Bible
				哈经·姆约=Hamud the Bible
				哈经=Hamud
				姆约=the Bible
				哈约=the Byble
			`);
      translate.execute();
    }
    catch (e) {
      console.log('翻译系统出错：' + e);
    }
  }

  //// 检查并提示翻译
  function infoTranslate() {
    try {
      var currentLang = translate.language.getCurrent();
      var originalLang = translate.language.getLocal();
      if (currentLang !== originalLang) {
        const translateInfo = document.querySelectorAll('#translate-info');
        if (translateInfo) {
          translateInfo.forEach(function (item) {
            item.remove();
          })
        }
        // 获取 main 元素
        var mainElements = document.querySelector('main');
        var bq = document.createElement('blockquote');
        bq.id = 'translate-info';

        var infoBody = document.createElement('p');
        infoBody.innerText = '当前页面为翻译版本。';
        var msgBody = document.createElement('p');

        var langIcon = document.createElement('i');
        langIcon.classList.add('fa');
        langIcon.classList.add('fa-language');

        var switchButton = document.createElement('a');
        switchButton.href = 'javascript:;';
        switchButton.title = '切换到原语言';
        switchButton.innerText = ' 切换到文章原本的语言';

        msgBody.appendChild(langIcon);
        msgBody.appendChild(switchButton);

        bq.appendChild(infoBody);
        bq.appendChild(msgBody);

        mainElements.insertBefore(bq, mainElements.children[0]);

        switchButton.addEventListener('click', function () {
          translate.changeLanguage(originalLang);
        });
      }
    } catch (e) {
      console.error('检查并提示翻译出错：' + e);
    }
  }

  // 加载动画相关
  var loadingBar = document.querySelector(".loading-bar");
  var progress = document.querySelector(".loading-bar .progress");
  var timer = null;

  //// 初始化加载动画相关
  function initAni() {
    loadingBar = document.querySelector(".loading-bar");
    progress = document.querySelector(".loading-bar .progress");
  }

  //// 开始加载动画
  function startLoad() {
    var loadingBarWidth = 20;
    var MAX_LOADING_WIDTH = 95;

    loadingBar.classList.add("loading");
    progress.style.width = loadingBarWidth + "%";

    clearInterval(timer);
    timer = setInterval(function () {
      loadingBarWidth += 3;

      if (loadingBarWidth > MAX_LOADING_WIDTH) {
        loadingBarWidth = MAX_LOADING_WIDTH;
      }

      progress.style.width = loadingBarWidth + "%";
    }, 500);
  }

  //// 结束加载动画
  function endLoad() {
    clearInterval(timer);
    progress.style.width = "100%";
    loadingBar.classList.remove("loading");

    setTimeout(function () {
      progress.style.width = 0;
    }, 400);
  }


  // PJAX 集成
  let pjax;
  //// 初始化 PJAX
  function initPjax() {
    try {
      const Pjax = window.Pjax || function () { };
      pjax = new Pjax({
        selectors: [
          "head title",
          "head meta",
          "script[data-pjax]",
          ".chapter",
          ".nav-chapters",
          "#search-wrapper",
          ".content",
          ".pjax-reload"
        ],
        cacheBust: false
      })
    }
    catch (e) {
      console.log('PJAX 出错：' + e);
    }
  }


  // 初始化
  function initialize() {
    initPjax();	 //// 初始化 PJAX
    initTranslate();	//// 初始化页面翻译
    initAni();    //// 初始化加载动画
    SetupGiscus(getCurrentLanguage(), getCurrentTheme());   //// 初始化评论系统
    infoTranslate();	//// 检查并提示翻译
    translate.execute();
  }


  // 触发器
  //// 网页加载完毕后触发
  window.addEventListener('DOMContentLoaded', () => initialize());

  //// 翻译执行完成后触发
  translate.listener.renderTaskFinish = function () {
    SetupGiscus(getCurrentLanguage(), getCurrentTheme());
  }

  //// Pjax 开始时执行的函数
  document.addEventListener("pjax:send", function () {
    startLoad();
  });

  //// 监听 Pjax 完成后，重新加载上面的函数
  document.addEventListener("pjax:complete", function () {
    SetupGiscus(getCurrentLanguage(), getCurrentTheme());
    infoTranslate();	//// 检查并提示翻译
    translate.execute();
    endLoad();
  })
})();
