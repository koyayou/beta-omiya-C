/ ************************************************* ************************************************** *******
 *解回答入力ばらのバイナリです。
 * <answer-input v-bind：correct = "解答" v-on：answer-input = "answerInput（event、stage、number、final）"> </ answer-input>
 *解答：correctAnswer ['stage1'] ['q1']
 * answerInput（event、stage、number、final）：
 *イベント：$ event
 ※ステージ：STAGE名「stage1」
 ※番号：問題番号（数字）1
 *ファイナル：最終ステージの最終 'ファイナル'
 ************************************************** ************************************************** ***** /
const  app  =  Vue 。createApp （{
  データ（） {
    / *初期値を設定します* /
    戻り値 {
      / *解答
      * 元。QC2-3を配列しますはステージ2の配列に解応答をします。
      * q3： 'おおお'、
      * /
      correctAnswer：{
        stage1：{
          q1：'サンダー' 、
          q2:'ファイヤー'、
          q3:'ワォーター'、
        } 、
        stage2：{
          q1：'すて2' 、
        } 、
        stage3：{
          q1：'すて3' 、
        }　　、
      } 、

      / *ここの問題が正解かか
      * 元。配列2-3を配列しますは配列に偽り配列します。
      * /
      答え：{
        ステージ1：[
          false、 1-1
          false、　　1-2
          false、　　1-3
        ] 、
        ステージ2：[
          false 、
        ] 、
        ステージ3：[
          false 、
        ]
      } 、

      / *ステージの問題があり正解かか* /
      クリア：{
        stage1：false 、
        stage2：false 、
        stage3：false 、
      } 、

      / *実行のクラスターを表示するか
      *最終キャンペーンはオプションをするので設定します。
      * /
      次へ：{
        stage1：false 、
        stage2：false 、
      } 、
    }
  } 、
  メソッド：{
    / *「送信」ボタン表属性のウエストです。* /
    answerInput （イベント、 ステージ、 番号、 最終） {
      / *答えを真に偽ります。* /
      これ。答え[段階] [数- 1 ]  = イベント。
      / * STAGEのすべての問題がtrueかかしてクリアのスを変更します。* /
      const  result  =  this 。答え[ステージ] 。every （（element ） =>  {
         要素を返す;
      } ）;
      これ。クリア[ステージ]  = 結果;
      / *ゴールステージの入力悪いします。* /
      もし （ 本。クリア[段階]  === 真 && 最終 ===  '最終'  ） {
        ウィンドウ。場所。href  =  'final.html' ;
      }
    } 、
    / *クリアドライ「次のステージへ」ボタンへ時のへへ設定します
    *クリアで偽りクリアラを非表示にします。
    * nextをtrueK次のクラスターを表示します。
    * /
    nextStage （ステージ） {
      これ。clear [ stage ]  =  false ;
      これ。次の[ステージ]  =  true ;
    } 、
  }
} ）

/ *解答回答別のバイナリ* /
アプリ。コンポーネント（'answer-input' 、 {
  小道具：[ '正しい' ] 、
  データ：関数 （） {
    戻り値 {
      / *積ボタンあり表示呪文* /
      okMes​​sage：'正解！' 、
      ngMessage：'その外はてようだぞ！？' 、
      メッセージ：'' 、
      inputAnswer：'' 、
    }
  } 、
  テンプレート：`
    <div class = "answer__container">
      <div class = "answer">
        <input type = "text" v-model = "inputAnswer" placeholder = "ここに表を入力テトラ">
      </ div>
      <p v-if = "message === ngMessage" class = "err-message"> {{メッセージ}} </ p>
      <button v-on：click = "judgement（inputAnswer）">送信</ button>
      <p v-if = "message === okMes​​sage" class = "err-message"> {{メッセージ}} </ p>
    </ div> ` 、
  メソッド：{
    判断（答え） {
      もし（答え === 本。正しい） {  //入力値が解答と一致する場合
        これ。メッセージ = これ。okMes​​sage ;
        これ。$ emit （'answerInput' 、 true ）;
      }  else  {  //一致します
        これ。メッセージ = これ。ngMessage ; 
        これ。$ emit （'answerInput' 、 false ）;
      }
    } 、
  }
} ）

アプリ。マウント（'#stage' ）
