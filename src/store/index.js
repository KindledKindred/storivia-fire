import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)
/* TODO: ファイルを分割
/***
 * state
 * - actions (reactive)
 * - characters (reactive)
 * - worlds (reactive)
 * - roles
 * - reflections
 * - function31s
 * - QandAs
 * - note (reactive)
 * - nextXXXid
 * actions
 * - types.ADD_XXX
 * - types.UPDATE_XXX
 * - types.DELETE_XXX
 * mutations
 * - ADD_XXX
 * - UPDATE_XXX
 * - DELETE_XXX
 * getters
 * - getXXXById
 * - getXXXNameById
 ***/

export default new Vuex.Store({
    state: {
        //初期ステート
        actions: [{
            id: 1,
            function31_id: 1,
            world_id: 1,
            character_id: 1,
            abstract: 'ここに要約を記入してください．',
            note: '何でもメモしてください．'
        }],
        characters: [{
                id: 1,
                name: 'キャラ名',
                role_id: 1,
                age: '20',
                sex: '不明',
                app: 'ここに第一印象や声の特徴などを記載できます．',
                note: '何でもメモしてください．'
            },
            {
                id: 2,
                name: 'R氏',
                role_id: 1,
                age: '46',
                sex: '男性',
                app: 'よく焼けた肌と大きな丸眼鏡が特徴的な研究者',
                note: 'ーこれはサンプルですー　研究と釣り以外には興味を示さない．'
            },
            {
                id: 3,
                name: 'ラゴス',
                role_id: 1,
                age: '青年',
                sex: '男性',
                app: '特定の像は与えない',
                note: 'ーこれもサンプルですー　ラゴスは南へと旅に出た．旅のための旅だった．'
            }
        ],
        worlds: [{
                id: 1,
                name: 'ランドマークや部屋など具体的なシーン',
                light: 2,
                sound: 4,
                note: '何でもメモしてください．'
            },
            {
                id: 2,
                name: '水車小屋：昼',
                light: 4,
                sound: 2,
                note: 'ーこれはサンプルですー　村で１番小さい水車小屋．川の水量が少なくなってからはあまり動いていない．'
            },
            {
                id: 3,
                name: '父の書斎',
                light: 2,
                sound: 1,
                note: 'ーこれもサンプルですー　父の亡き後そのままにされている書斎だ．カーテンから漏れる陽光に舞い上がった埃が遊ぶように輝いている．'
            }
        ],
        // 物語の７つの機能，静的オブジェクト
        roles: [{
                id: 1,
                name: '主人公',
                description: ''
            },
            {
                id: 2,
                name: '敵対者',
                description: '',
            },
            {
                id: 3,
                name: '贈与者',
                description: ''
            },
            {
                id: 4,
                name: '助手',
                description: ''
            },
            {
                id: 5,
                name: '被害者',
                description: ''
            },
            {
                id: 6,
                name: '派遣者',
                description: ''
            },
            {
                id: 7,
                name: '偽主人公',
                description: ''
            }
        ],
        // プロップの31の機能．静的オブジェクト．
        function31s: [{
                id: 0,
                name: '00. 導入の状況',
                description: '舞台の状況説明'
            },
            {
                id: 1,
                name: '01. 不在',
                description: '家族やグループメンバーの留守，死亡，誘拐，監禁など',
            },
            {
                id: 2,
                name: '02. 禁止',
                description: '主人公が何かを禁じられる．あるいは社会に禁忌や危険な領域が存在する．',
            },
            {
                id: 3,
                name: '03. 違反',
                description: '[02. 禁止]が破られる．',
            },
            {
                id: 4,
                name: '04. 捜索',
                description: '敵対者が主人公の弱点，物語で重要な人やアイテムの在処，聖域などを探る．',
            },
            {
                id: 5,
                name: '05. 漏洩',
                description: '[04. 捜索]が密告などにより成就する．',
            },
            {
                id: 6,
                name: '06. 謀略',
                description: '敵対者が主人公を騙す，罠に嵌める，噂で陥れるなどをする',
            },
            {
                id: 7,
                name: '07. 幇助',
                description: '主人公が半強制的あるいは気付かずに敵対者を助ける．または主人公の仲間が買収される．先に報酬が提示される代わりに，将来的な不幸が約束されることもある．',
            },
            {
                id: 8,
                name: '08. 加害・欠如',
                description: '敵対者が主人公側の成員や社会に危害を及ぼす．昼の光を奪う，無理な結婚を強いる，殺害を命じる，誘き出す，略奪する，すり替える，追放するなど．または配偶者，金品，目標と現在のギャップ，その他様々なものの欠如を感じる．',
            },
            {
                id: 9,
                name: '09. 仲介・調停',
                description: '主人公が出発を命じられたり頼まれたり，惨状や悲嘆を耳にしたり目撃したりする．あるいは逃れられない状況に身を置く．',
            },
            {
                id: 10,
                name: '10. 決意・同意',
                description: '主人公が出発を決意する．あるいは渋々同意する．',
            },
            {
                id: 11,
                name: '11. 出発',
                description: '[10. 決意・同意]のもと出発する．現状を再確認したり掘り下げることも．',
            },
            {
                id: 12,
                name: '12. 贈与者による試練',
                description: '贈与者が贈与前に主人公へ試練を課す．',
            },
            {
                id: 13,
                name: '13. 反応',
                description: '困難な試練を辛うじて達成する．あるいはギリギリで失敗する．贈与者自身が協力者となり，大きな困難を達成する．',
            },
            {
                id: 14,
                name: '14. 特別な手段の提供・獲得',
                description: '贈与者を協力者として得たり，秘儀，秘宝，パスワード，秘密の抜け道，強力な道具などを入手する．',
            },
            {
                id: 15,
                name: '15. 移動',
                description: '大掛かりな場面移動．新たな移動手段の獲得や強制的な移動など．飛行船，城外，タイムトラベル等．',
            },
            {
                id: 16,
                name: '16. 闘争・難題',
                description: '敵対者との闘争，困難な問題への対処．',
            },
            {
                id: 17,
                name: '17. 徴付け・被照準',
                description: '主人公が特徴づけられ，敵対者に狙いを絞られる．庇護者の死，隠されていた主人公の露見，主人公の才能開花の確認等による照準移行',
            },
            {
                id: 18,
                name: '18. 勝利',
                description: '敵対者への完全なまたは一時的な勝利．戦闘，説得，逮捕，試合，脱出，耐久など．',
            },
            {
                id: 19,
                name: '19. 不幸・欠如の解消',
                description: '当初の目標の達成．呪いの解除，略奪品の回収，脅威の排除，和解，優勝，結婚など．',
            },
            {
                id: 20,
                name: '20. 帰還',
                description: '[15. 移動]していた主人公の帰還．エンディングへ．場合によっては帰路のみを指し物語を続行．',
            },
            {
                id: 21,
                name: '21. 被追跡',
                description: '[20. 帰還]中の主人公が密かに，あるいは荒々しく追跡される．物理的でなくとも，禍根が残っている様子も示す．',
            },
            {
                id: 22,
                name: '22. 救助',
                description: '[21. 被追跡]から救われる．追跡者の排除，誤解の解消，和解，匿われる，逃げ切りなど．',
            },
            {
                id: 23,
                name: '23. 隠蔽された到着',
                description: '気づかれずに主人公が帰還し終える．仲間と合流，どこかへ去る，主人公の死を想起させるなど．',
            },
            {
                id: 24,
                name: '24. 偽主人公の主張',
                description: '主人公やその成員を名乗る者が出現し，主人公の功績を我が物と言い張る．',
            },
            {
                id: 25,
                name: '25. 主人公への難題',
                description: '[24. 偽主人公の主張]に対し，自身が真の主人公であることを証明する試練．',
            },
            {
                id: 26,
                name: '26. 難題の完遂',
                description: '[25. 主人公への難題]の解消．',
            },
            {
                id: 27,
                name: '27. 主人公への再認識',
                description: '[17. 徴付け]時の徴により主人公であることを再認識．目，指輪，思い出，特殊な道具，傷跡など．',
            },
            {
                id: 28,
                name: '28. 偽主人公や敵対者の露見',
                description: '[27. 主人公への再認識]により偽主人公または敵対者の虚偽が露見する．主人公が本物である，主人公やその成員への悪い噂は嘘であるなど．',
            },
            {
                id: 29,
                name: '29. 変身',
                description: '主人公の容姿が一般に良い方向へ変化する．衣装，顔，種族など．あるいは成員や土地の変化．最上位のグループ，豪邸，使用していた武器の特別な修理など．',
            },
            {
                id: 30,
                name: '30. 敵対者の処遇決定',
                description: '敵対者の完全な終結．勧善懲悪，赦免，復讐，諦観など．',
            },
            {
                id: 31,
                name: '31. エンディング',
                description: '物語としての終わり．主人公の結婚，優勝，昇格，死亡，失踪など．',
            },
        ],

        // Q&Aモーダルではアコーディオンを使用して各コンテンツを表示
        // その際にidを指定する必要があるが，idに'#sv'を付与するスクリプトを動かすより
        // 直接データ内にid_htmlを指定したほうが高速であるためこのようにした．
        // ただし拡張により似た操作が増えるのであれば関数として切り出した方がよい．
        QandAs: [{
                id: 1,
                id_html: "sv1",
                id_href: "#sv1",
                question: 'アイデアが浮かばない',
                answer: '散歩に出かけましょう．トイレまででも構いません．でもスマホか手帳は持って！アイデアは机を離れた時に出がちです．思い浮かんだことを全部メモしてください．全部です！'
            },
            {
                id: 2,
                id_html: "sv2",
                id_href: "#sv2",
                question: '何をすればいいのか分からない',
                answer: '全ては「パネル追加」から始まります．もし「シーン」や「行動者」の選択肢が無いと感じたなら，右上の「Character」や「World」からキャラクターやシーンの舞台を追加することができます．もしどんな風にパネルを加えていいか分からない場合は，多くを空欄にしてもいいので数を作っていきましょう．完璧なものを作るより，不満なものを後で編集・削除するほうが遥かに簡単です．'
            },
            // Action
            {
                id: 10,
                id_html: "sv10",
                id_href: "#sv10",
                question: '機能って？Actionって？',
                answer: '（誰が）何をするかを決めたものです．「何をするか」には適した31の順序があり，あなたはその中からいくつかを選んで使うことができます．'
            },

            {
                id: 11,
                id_html: "sv11",
                id_href: "#sv11",
                question: 'どの機能を描けばいいのか分からない',
                answer: '必ず描かなければいけない機能がない，ということが却って書くのを難しくしているのかもしれません．そんな時は「機能」を埋めずに一行メモだけを書いたパネルを量産するといいでしょう．「機能」は後から埋めることができますから．'
            },
            {
                id: 12,
                id_html: "sv12",
                id_href: "#sv12",
                question: '描きたい場面はあるがどの機能か分からない',
                answer: 'シーンをひとまず機能抜きで書いてみるといいでしょう．後から他のパネルと見比べて，整合性のある機能を当てはめるのも一つの方法です．'
            },
            {
                id: 13,
                id_html: "sv13",
                id_href: "#sv13",
                question: 'どのキャラクターを出せばいいのか分からない',
                answer: 'キャラクター欄を空欄にしてみましょう．それでもパネルを追加することができます．最後まで埋まらなければ，出番が少なかったり最後の登場から間隔の空いたキャラクターを選ぶといいでしょう．'
            },
            {
                id: 14,
                id_html: "sv14",
                id_href: "#sv14",
                question: 'キャラクターをどう活躍させればいいのか分からない',
                answer: '活躍を彩るには感情移入させる必要があります．感情移入させるには苦労や苦難が必要です．辛い部分を演出してから，それを乗り越えるような場面を作ることが活躍として受け取られやすいでしょう．'
            },
            {
                id: 15,
                id_html: "sv15",
                id_href: "#sv15",
                question: '書きたいものと書いているものが違う',
                answer: '思い描くものと書き出すもののギャップはだれしもが感じることです．その差は経験を積み重ねることで埋まっていきます．まずはできる範囲で完成させてみましょう．'
            },
            // Character
            {
                id: 20,
                id_html: "sv20",
                id_href: "#sv20",
                question: 'キャラクターって何？',
                answer: '登場人物……は正確じゃないですね．猫でもロボットでも物語上で何か行動を起こし作用するならば，それはキャラクターです．'
            },
            {
                id: 21,
                id_html: "sv21",
                id_href: "#sv21",
                question: '役割って何？',
                answer: '役割は7種類あって，それぞれが特定の機能（Action）を果たします．物語の時間軸の中で，1つの役割にはたった1人のキャラクターしか適用できません．ただし途中まで敵対者だった人が助手になることがあるように，あるキャラクターの役割が物語の中で変化することもあります．別の見方をすれば，敵対者の役割が別のキャラクターに移ったとも捉えることができます．'
            },
            {
                id: 22,
                id_html: "sv22",
                id_href: "#sv22",
                question: '外見が想像できない',
                answer: '詳細ではなくてもシルエットで構いません．●なら優しそうですし，▲は横柄で▼は強そうです．そのキャラにあったシルエットを用意してください．主人公にはそれとわかりやすい特徴を付けておくのが王道ですが，あえて没個性にしている作品も少なくありません．ただし没個性なだけでは本当に埋もれてしまうので，読み手の自己投影の邪魔にならない（日常で評価の対象とならない）部分で色を付けておきましょう．'
            },
            {
                id: 23,
                id_html: "sv23",
                id_href: "#sv23",
                question: 'シーンって何？',
                answer: 'キャラクターが機能を果たす舞台です．かみ砕いて言えば場所や時間帯のことです．'
            },
            {
                id: 24,
                id_html: "sv24",
                id_href: "#sv25",
                question: 'どんなシーンを作ればいいか分からない',
                answer: '作っても使わないことが多いので，深く考えずに量産すれば未来の自分が良いシーンを選び取ってくれます．量産が難しければ，時間帯を変えてみたり既存のシーンと光量・音量が異なるシーンを足していけばいいでしょう．'
            },
            {
                id: 25,
                id_html: 'sv25',
                id_href: '#sv25',
                question: 'プロットの終わらせ方が分からない',
                answer: '「19. 不幸・欠如の解消」「30. 敵対者の処遇決定」のいずれかを「31. エンディング」の直前におくと作りやすいです．'
            }
        ],

        note: '',

        // 次に追加される各種stateのidのデフォルト値
        nextActionId: 2,
        nextCharacterId: 4,
        nextWorldId: 4
    },

    actions: {
        // ADD_XXX の定義
        [types.ADD_ACTION]({
            commit,
            state
        }, {
            function31_id,
            character_id,
            world_id,
            abstract,
            note
        }) {
            let newAction = {
                id: state.nextActionId,
                function31_id: function31_id,
                character_id: character_id,
                world_id: world_id,
                abstract: abstract,
                note: note
            }
            commit(types.ADD_ACTION, {
                data: newAction
            })
        },

        [types.ADD_CHARACTER]({
            commit,
            state
        }, {
            name,
            role_id,
            age,
            sex,
            app,
            note
        }) {
            let newCharacter = {
                id: state.nextCharacterId,
                name: name,
                role_id: role_id,
                age: age,
                sex: sex,
                app: app,
                note: note
            }
            commit(types.ADD_CHARACTER, {
                data: newCharacter
            })
        },
        [types.ADD_WORLD]({
            commit,
            state
        }, {
            name,
            light,
            sound,
            note
        }) {
            let newWorld = {
                id: state.nextWorldId,
                name: name,
                light: light,
                sound: sound,
                note: note
            }
            commit(types.ADD_WORLD, {
                data: newWorld
            })
        },

        // UPDATE_XXX の定義
        // DELETE_XXX の定義
        [types.DELETE_ACTION]({
            commit
        }, index) {
            commit(types.DELETE_ACTION, {
                data: index
            })
        }
    },

    mutations: {
        // types.ADD_XXX
        [types.ADD_ACTION](state, payload) {
            state.actions.push(payload.data)
            state.nextActionId++
        },
        [types.ADD_CHARACTER](state, payload) {
            state.characters.push(payload.data)
            state.nextCharacterId++
        },
        [types.ADD_WORLD](state, payload) {
            state.worlds.push(payload.data)
            state.nextWorldId++
        },
        // types.UPDATE_XXX
        updateNote(state, note) {
            state.note = note
        },
        updateCharacterName(state, name) {
            state.characters.character.name = name
        },
        updateCharacterRoleId(state, role_id) {
            state.characters.character.role_id = role_id
        },
        updateCharacterAge(state, age) {
            state.characters.character.age = age
        },
        updateCharacterSex(state, sex) {
            state.characters.character.sex = sex
        },
        updateCharacterApp(state, app) {
            state.characters.character.app = app
        },
        updateCharacterNote(state, character_note) {
            state.characters.character.character_note = character_note
        },
        // types.DELETE_XXX
        [types.DELETE_ACTION](state, payload) {
            state.actions.splice(payload.index, 1)
            // これかObject.assignを用いる？
        }
    },

    getters: {
        /***
         * Stateの取得処理
         * 1. オブジェクト取得 - Object
         * 2. .name取得 - String
         * 3. .note取得 - String(textarea用)
         * 4. その他
         */
        // 1. オブジェクト取得
        getActionbyId: (state) => (id) => {
            return state.actions.filter(action => action.id === id)[0]
        },
        getCharacterbyId: (state) => (id) => {
            return state.characters.filter(character => character.id === id)[0]
        },
        getRoleById: (state) => (id) => {
            return state.roles.filter(role => role.id === id)[0]
        },
        getWorldbyId: (state) => (id) => {
            return state.worlds.filter(world => world.id === id)[0]
        },
        getFunction31byId: (state) => (id) => {
            return state.function31s.filter(function31 => function31.id === id)[0]
        },

        // 2. .name取得 - String
        getCharacterNameById: (state, getters) => (id) => {
            const character = getters.getCharacterbyId(id)
            return character ? character.name : ''
        },
        getRoleNameById: (state, getters) => (id) => {
            const role = getters.getRoleById(id)
            return role ? role.name : ''
        },
        getWorldNameById: (state, getters) => (id) => {
            const world = getters.getWorldbyId(id)
            return world ? world.name : ''
        },
        getWorldLightById: (state, getters) => (id) => {
            const world = getters.getWorldbyId(id)
            return world ? world.light : ''
        },
        getWorldSoundById: (state, getters) => (id) => {
            const world = getters.getWorldbyId(id)
            return world ? world.sound : ''
        },
        getFunction31NameById: (state, getters) => (id) => {
            const function31 = getters.getFunction31byId(id)
            return function31 ? function31.name : ''
        },
    }
})