/**********************************************************************************************************
 * 解答入力欄のコンポーネントです。入力欄・送信ボタン・エラーメッセージを表示します。
 * <answer-input v-bind:correct="解答" v-on:answer-input="answerInput(event, stage, number, final)"></answer-input>
 * 解答：correctAnswer['stage1']['q1']
 * answerInput(event, stage, number, final)：
 *          event ：$event
 *          stage ：STAGE名 'stage1'
 *          number：問題番号（数字） 1
 *          final ：最終ステージの場合 'final'
 *********************************************************************************************************/
const app = Vue.createApp({
  data() {
    return {
      correctAnswer: {
        stage1: {
          q1: 'あああ',
        },
        stage2: {
          q1: 'いいい',
          // q2: 'えええ',
          // q3: 'おおお'
        },
        stage3: {
          q1: 'ううう',
          // q2: 'かかか',
          // q3: 'ききき',
        },
        stage4: {
          q1: 'えええ',
          // q2: 'えええ',
          // q3: 'おおお'
        },
        stage5: {
          q1: 'おおお',
          // q2: 'えええ',
          // q3: 'おおお'
        },
      },
      answer: {
        stage1: [
          false,
        ],
        stage2: [
          false, // 2-1
          // false, // 2-2
          // false, // 2-3
        ],
        stage3: [
          false, // 3-1
          // false, // 3-2
          // false, // 3-3
        ],
        stage4: [
          false,
        ],
        stage5: [
          false,
        ],
      },
      /* ステージの問題が全て正解かどうか */
      clear: {
        stage1: false,
        stage2: false,
        stage3: false,
        stage4: false, 
        stage5: false,
      },
      /* 次のステージを表示するかどうか
      *  最終ステージはページを遷移するので設定不要です。
      */
      next: {
        stage1: false,
        stage2: false,
        stage3: false,
        stage4: false,
      },
    }
  },
  methods: {
    /* 「送信」ボタンをクリックした場合の動作です。 */
    answerInput(event, stage, number, final) {
      /* answerをtrueまたはfalseにします。 */
      this.answer[stage][number-1] = event;
      /* STAGEのすべての問題がtrueか調べてclearの値を変更します。*/
      const result = this.answer[stage].every((element) => {
        return element;
      });
      this.clear[stage] = result;
      /* 最終ステージの入力を判定します。 */
      if ( this.clear[stage] === true && final === 'final' ) {
        window.location.href = 'final.html';
      }
    },
    /* クリア画面「次のステージへ」ボタンをクリックした時の動作を設定します
    *  clearをfalseにしてクリア画面を非表示にします。
    *  nextをtrueにして次のステージを表示します。
    */
    nextStage(stage) {
      this.clear[stage] = false;
      this.next[stage] = true;
    },
  }
})
/* 解答入力欄のコンポーネント */
app.component('answer-input', {
  props: ['correct'],
  data: function () {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: 'クリア！',
      ngMessage: 'エラー！',
      message: '',
      inputAnswer: '',
    }
  },
  template: `
    <div class="answer__container">
      <div class="answer">
        <input type="text" v-model="inputAnswer" placeholder="ここに答えを入力しよう">
      </div>
      <p v-if="message === ngMessage" class="err-message">{{ message }}</p>
      <button v-on:click="judgement(inputAnswer)">送信</button>
      <p v-if="message === okMessage" class="err-message">{{ message }}</p>
    </div>`,
  methods: {
    judgement(answer) {
      if(answer === this.correct) { // 入力値が解答と一致する場合
        this.message = this.okMessage;
        this.$emit('answerInput', true);
      } else { // 一致しない場合
        this.message = this.ngMessage; 
        this.$emit('answerInput', false);
      }
    },
  }
})
app.mount('#stage')
