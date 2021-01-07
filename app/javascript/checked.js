function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check, 1000);




// function check() {
//   // checkという名前で関数を定義
//   const posts = document.querySelectorAll(".post");
//   // postをクラス名にもつ要素を取得
//   // 次に、この複数取得した要素に対して、forEachで繰り返し処理を行い要素1つずつに対して処理を行う
//   posts.forEach(function (post) {
//     if (post.getAttribute("date-load") != null){
//       return null;
//     } 
//     post.setAttribute("date-load", "true");
//     // 1秒間の間にtrueを付与する処理とfalseを付与する処理が、連続でおこなわれているため解決させるための記述
//     post.addEventListener("click", () => {
//       // イベントを発火させるために、addEventListenerというメソッドを使う
//       // 要素1つずつに対して、『クリック』した際に動作するイベント駆動を設定
//       const postId = post.getAttribute("data-id");
//       const XHR = new XMLHttpRequest();
//       // エンドポイントを呼び出すために、XMLHttpRequestを使用してHTTPリクエストを行う
//       // まず、オブジェクトを生成する必要があるため上記を記述した
//       XHR.open("GET", `/posts/${postId}`, true);
//       // リクエストの詳細の設定
//       // 第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをbooleanで記述
//       XHR.responseType = "json";
//       // レスポンスの形式を指定
//       XHR.send();
//       // sendとは、XMLHttpRequestで定義されているメソッドで、リクエストを送信できる
//       XHR.onload = () => {
//         // onloadとは、XMLHttpRequestで定義されているプロパティで、レスポンスなどの受信が成功した場合に呼び出されるイベントハンドラーのこと
//         const item = XHR.response.post;
//         // XHR.responseでレスポンスされてきたJSONにアクセスできる
//         if (XHR.status != 200) {
//           // HTTPステータスコードが200以外の場合、ifはtrueとなり、アラートを表示する処理が行われる
//           alert(`Error ${XHR.status}: ${XHR.statusText}`);
//           // XHR.statusTextによって、エラーが生じたオブジェクトに含まれるエラーメッセージが表示される
//           return null;
//           // return null;によってJavaScriptの処理から抜け出すことができる。
//           // これはエラーが出た場合に、15行目以降に記述されている処理を行わないようにすることが目的
//         }
        
//         if (item.checked === true) {
//           post.setAttribute("date-check", "true");
//         }else if (item.checked === false) {
//           post.removeAttribute("data-check");
//         }
//         // 既読であれば先ほどHTMLに定義した属性であるdata-checkの属性値にtrueをセットします。
//         // 逆に未読であればdata-checkは属性ごと削除
//         // 上記は想定通りのレスポンスを受け取った場合です。
//         // checkedアクションの処理が正常ではない場合、正常にデータは返却されず、エラーとして返却されることがある
//       }
//     });
//   });
// }

// setInterval(check, 1000);
// // setIntervalを使用し、check関数が1秒に1度実行されるように記述

// // window.addEventListener("load", check);
// // window（ページ）をload（読み込み）した時に実行

// // エンドポイントとはAjaxを実現するためには、Ruby on Railsのコントローラーでのレスポンスを、HTMLではなくjsonなどのデータ形式で返却する必要がある。そのデータを取得する時にアクセスするためのURLを、エンドポイントという。
