export default class Const {
  static ITEMS_WORK_EXPIRIENCE_CONTENTS = [
    {
      text: `今まで会員登録スマレジというレジから手入力でやっていたのを
      LINEミニアプリと連携してLINE上での会員証の管理、ポイントの管理を行いました。
      自分が担当したのは顧客折衝からフロント、バックエンド、AWSによるインフラ開発を1通り担当しました。
      
      <実績>
      ・これまでCICDの構築をAWSのCode3兄弟を使用したのですが
      構築するための手順が多いという声があり
      GithubActionsに移行しました。
      さらに既にあるテンプレートのDockerfileも見直し、
      費用を下げビルド時間を3分以上早くすることに成功しました。
      
      ・フロントエンドはAmplify、バックエンドはApp Runnerを使用し
      開発速度を上げ4月末の納品だったのですが
      3月現在で実装は一通り終わりテストをすることで品質の向上をおこなっております`,
      title: "有名シャンプーブランドのLINEミニアプリの構築",
      occupation: "FRONTENDENGINEER",
      date: "from 02.2023 to 04.2023",
      tool: [
        "Python",
        "TypeScript",
        "Next.js",
        "FastAPI",
        "AWS",
        "Terraform",
        "Docker",
        "GithubActions",
        "Amplify",
        "AppRunner",
        "notion",
        "MySQL",
        "liff",
        "スマレジ",
      ],
    },
    {
      text: `C#で書かれていた社内向け基幹システムのリプレイスを行いました。フロントエンドはNext.js、バックエンドはFastAPIを使用しました。
      自分が担当したのはFastAPIの構築とフロント、バックエンドのAWSによる環境構築です。
      
      <実績>
      ・ローカル環境はDockerを使用し環境を合わせ、AWS環境ではApp Runnerを使用しFastAPIをホストしました。
      まだ知見がなかったのですがApp Runnerのプライベートサブネットにアクセスできるというアップデートがあり、
      いち早く取り入れたプロジェクトになります。
      Terraformによるコードでの保存、社内勉強会による属人化の解消も行っており、今後のプロジェクトにて広く使用されるようになりました。
      
      ・フロントエンドは今まではS3 + CloudFrontを使っていたのですが、１案件で新しい技術を使いたいという気持ちがあったのでAmplifyによるホストを採用して構築しました。
      こちらも上記と同じで社内勉強会やドキュメントに残して、今後活用できるようにしております。
      `,
      title: "基幹システムのリプレイス",
      occupation: "BACKENDENGINEER",
      date: "from 11.2022 to 01.2023",
      tool: [
        "Python",
        "TypeScript",
        "Next.js",
        "FastAPI",
        "AWS",
        "Terraform",
        "Docker",
        "GithubActions",
        "Amplify",
        "AppRunner",
        "Backlog",
        "MySQL",
      ],
    },
    {
      text: `今まで運用担当者がEC2で作業を行う時に行う課題をBacklogに手作業で登録、それに基づいてEC2にログインをして作業を行うという部分を自動化しました。\n
      <実績>
      ・Backlogに手作業で登録していた部分で、毎回markdown記法で記載することが手間で、担当者以外でも登録できてしまうという問題がありました。
      前者に関して、S3静的ホスティングを使いWEB上から登録できるようにしたことで登録の手間をなくしました。
      後者については、S3の静的ホスティングにCognitoで認証を付けて、担当者以外のユーザーがアクセスできないようにしました。
      それ以外にも、静的ホスティングから登録する部分でApiGatewayを使用しているのですが、ApiGatewayにも社内VPNからしかアクセスできないポリシーを適用しました。
      `,
      title: "EC2運用担当者の作業効率化",
      occupation: "INFRAENGINEER",
      date: "from 02.2022 to 10.2023",
      tool: [
        "Python",
        "MySQL",
        "AWS",
        "Terraform",
        "EC2",
        "S3",
        "CloudFront",
        "Cogito",
        "API Gateway",
      ],
    },
    {
      text: `家を建てたい方と家を作りたい方のマッチングシステムのサーバーサイドでAPI開発と、環境毎のインフラ構築、ログ管理を行いました。\nフロントエンドの工数が間に合わなかったのでFlutterでのUI作成を行いました\n
      ＜実績＞
      ・サーバーサイドのgithubのdevブランチにpushされたらそれをフックにCode Pipeline、Code Buildを使いECRにdockerイメージを保存してそれを使いdev環境用のECSのfargateでサーバーを構築しました。同じようにmainブランチにpushされたら本番環境用のECSのfargateでサーバーを構築しました\n
      ・ECSのFargateからS3の画像を取得する際はパブリックネットワークに接続するとnatgatewayの料金がかかってしまうのでVPCエンドポイントを使いAWS内でアクセスをすることにしました\n
      ・Terraformを使用して環境を構築することで、工数の削減ができフロントのヘルプを行うことができました\n
      ・テストコードを実装することにより安全性の高いコードを実現でき作業中での後戻りがなくなり、円滑に作業をすすめることができました\n
      ＜コメント＞
      AWSを使用する事はあったのですが今回は料金面を考えることを主に考え実装することによりクライアントに料金が予想より少なく喜ばれました。
      今回は期限がタイトだったが、Terraformを使用することにより工数がかなり削減できその分間に合っていないフロントの作業を手伝うことができ納期内に終わらすことができました
      `,
      title: "家を建てたい方と家を作りたい方のマッチングシステムサイト",
      occupation: "BACKENDENGINEER",
      date: "from 09.2021 to 01.2022",
      tool: [
        "Python",
        "Flutter",
        "Django",
        "Django Rest Framework",
        "Docker",
        "GiHub",
        "MySQL",
        "Terrafom",
        "AWS",
        "Code Pipeline",
        "Code Build",
        "Code Deploy",
        "ECR",
        "ECS",
        "FarGate",
        "S3",
        "VPCエンドポイント",
      ],
    },

    {
      text: `企業を売りたい方と、買いたい方のマッチングwebアプリケーションのサーバーサイドでAPI開発と、環境毎のインフラを行いました。それ以外にも要件定義にも参加し、クライアントと直接要件詰めを行いました。\n
      ＜実績＞
      ・初めて要件定義フェーズから参加しクライアントがITに詳しくない方だったので要件を全て聞いてしまうと工数が膨れ上がってしまい\n納期に間に合わなくなってしまうのでそこの取捨選択や、クライアントが作りたいものをヒアリングし認識齟齬がないように密にコミュニケーションを取ることで成功させることができたと思います。\n
      ・クライアントとのやりとりで文面だと分かりづらいのでLucidChartを使用して図解することによりスムーズに理解をして頂けたのでその点はとても良かったです。\n
      ・SEOに関係があるサービスだったのでフロントエンドをAWSでホストするときにSPAでなくFargateを使用してSSRでインフラ実装を行いました。\n
      ・フロントエンドとのAPIの疎通の方法をまずこちら側でAPIのリクエストとレスポンスをAPI Blueprintというツールを使うことで認識齟齬が起きずにスムーズに開発ができました。\n
      ＜コメント＞
      初めてAWSを使用してインフラ構成などを担当したのですがIAMの管理が煩雑になってしまったのでリリース後IAMを権限ごとに作成してアタッチすることにより保守がしやすくなりました。システム障害が発生したときもSlackに通知するようにし、Cloudwatchのログを参照したのでダウンタイムが少なく構成できましたが、後に自動で復旧するような仕組みも入れたのでよりよいものが作成できました。
      `,
      title: "企業を売りたい方と、買いたい方のマッチングwebアプリケーション",
      occupation: "BACKENDENGINEER",
      date: "from 01.2021 to 08.2021",
      tool: [
        "Python",
        "Django",
        "Django Rest Framework",
        "TypeScript",
        "Nuxt.js",
        "Docker",
        "GiHub",
        "MySQL",
        "Terrafom",
        "AWS",
        "Code Pipeline",
        "Code Build",
        "Code Deploy",
        "ECR",
        "ECS",
        "FarGate",
        "S3",
        "Slack",
        "Cloudwatch",
      ],
    },

    {
      text: `SESとして参画したプロジェクトになります。webサイトにチャットボットを導入しユーザーの離脱率を減らすことと、満足度を上げることを目標に作成しました。主にPython、DRFでAPI開発と、AWSを使用したCICDなどを担当しました。\n

      ＜実績＞
      ・DRF自体初学者でしたが始めから裁量の大きいタスクを頂きテストや、セキュリティにも気をつけてAPI作成ができました。\n
      ・当時は機能がリリースされる度EC2インスタンス内にsshで入ってコマンドでgithubリポジトリを更新して行っていたのですが、Gitlab RunnerとGitLab CI/CDと連携するaws Code PipelineやCode Deployを使用して特定の文字列が入ったリリースタグを切ったタイミングでリリースされるような機能を作成して、今まで動作確認も含め3時間かかっていたのが30分程度になり、その月のMVPに選ばれました。\n
      
      ＜コメント＞
      DRF自体初めてでしたが、学生の頃にLaravelを使用したインターンを行っており、概念が似ている部分があったので、作業があまり止まることがなくできました。
      AWSを初めて業務で触らせいただきましたが、自分が実現したいことがAWSを使用して実現できたので、とてもおもしろく実装することができました。
      GitLabはGitLab自体にCICDや定期実行の機能があるので、他のサービスと連携しなくても実現できることが多かったので、とても学びがありました。
      `,
      title: "チャットボットシステム開発",
      occupation: "BACKENDENGINEER",
      date: "from 05.2020 to 12.2020",
      tool: [
        "Python",
        "Django",
        "Django Rest Framework",
        "Go",
        "Docker",
        "GiHub",
        "GitLab",
        "GitLab CI",
        "MySQL",
        "AWS",
        "Code Pipeline",
        "Code Build",
        "Code Deploy",
        "EC2",
      ],
    },
  ];
}
