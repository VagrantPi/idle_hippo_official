export type Language = "en" | "zh" | "jp" | "ko"

export interface Translations {
  nav: {
    home: string
    privacy: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    downloadButton: string
    comingSoon: string
  }
  features: {
    title: string
    idle: {
      title: string
      description: string
    }
    click: {
      title: string
      description: string
    }
    pets: {
      title: string
      description: string
    }
    karaoke: {
      title: string
      description: string
    }
    daily: {
      title: string
      description: string
    }
    evolution: {
      title: string
      description: string
    }
  }
  footer: {
    copyright: string
    privacy: string
  }
  privacy: {
    title: string
    lastUpdated: string
    content: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      privacy: "Privacy",
    },
    hero: {
      title: "MEME HIPPO EVOLUTION",
      subtitle: "From Zero to Meme God",
      description:
        "Join our adorable hippo on an epic journey to become the ultimate meme legend! Tap, idle, and evolve your way to internet stardom.",
      downloadButton: "Download Now",
      comingSoon: "Coming Soon",
    },
    features: {
      title: "Game Features",
      idle: {
        title: "Idle Gameplay",
        description: "Earn meme points automatically even when offline. Your hippo works hard for internet fame!",
      },
      click: {
        title: "Tap to Win",
        description: "Click your hippo to boost meme points instantly. Every tap brings you closer to viral status!",
      },
      pets: {
        title: "Collect Pets",
        description: "Unlock adorable companions that help generate more meme energy. Gotta catch them all!",
      },
      karaoke: {
        title: "Hippo Karaoke",
        description: "Daily rhythm mini-game! Hit the beats perfectly to earn bonus meme points.",
      },
      daily: {
        title: "Daily Missions",
        description: "Complete daily challenges and maintain your streak for amazing rewards.",
      },
      evolution: {
        title: "Epic Evolution",
        description: "Watch your hippo transform through multiple stages on the path to meme godhood.",
      },
    },
    footer: {
      copyright: "© 2024 Meme Hippo Evolution. All rights reserved.",
      privacy: "Privacy Policy",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Effective as of 2025-09-21",
      content: `This privacy policy applies to the 迷因河馬大進化 app (hereby referred to as "Application") for mobile devices that was created by (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".

**Information Collection and Use**

The Application collects information when you download and use it. This information may include information such as

• Your device's Internet Protocol address (e.g. IP address)
• The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
• The time spent on the Application
• The operating system you use on your mobile device

The Application does not gather precise information about the location of your mobile device.

The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:

• Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.
• Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
• Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.

The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.

For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.

**Third Party Access**

Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.

Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:

• Google Play Services (https://www.google.com/policies/privacy/)
• AdMob (https://support.google.com/admob/answer/6128543?hl=en)
• Google Analytics for Firebase (https://firebase.google.com/support/privacy)

The Service Provider may disclose User Provided and Automatically Collected Information:

• as required by law, such as to comply with a subpoena, or similar legal process;
• when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
• with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.

**Opt-Out Rights**

You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.

**Data Retention Policy**

The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at kaislumao01@gmail.com and they will respond in a reasonable time.

**Children**

The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.

The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (kaislumao01@gmail.com) so that they will be able to take the necessary actions.

**Security**

The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.

**Changes**

This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.

This privacy policy is effective as of 2025-09-21

**Your Consent**

By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.

**Contact Us**

If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at kaislumao01@gmail.com.

This privacy policy page was generated by App Privacy Policy Generator.`,
    },
  },
  zh: {
    nav: {
      home: "首頁",
      privacy: "隱私政策",
    },
    hero: {
      title: "迷因河馬大進化",
      subtitle: "從零開始成為迷因之神",
      description: "加入我們可愛的河馬寶寶，踏上成為終極迷因傳奇的史詩旅程！點擊、放置、進化，邁向網路巨星之路。",
      downloadButton: "立即下載",
      comingSoon: "即將推出",
    },
    features: {
      title: "遊戲特色",
      idle: {
        title: "放置玩法",
        description: "即使離線也能自動賺取迷因點數。你的河馬為了網路名聲而努力工作！",
      },
      click: {
        title: "點擊致勝",
        description: "點擊河馬立即獲得迷因點數加成。每次點擊都讓你更接近爆紅狀態！",
      },
      pets: {
        title: "收集寵物",
        description: "解鎖可愛的夥伴來幫助產生更多迷因能量。全部都要收集！",
      },
      karaoke: {
        title: "河馬卡拉OK",
        description: "每日節奏小遊戲！完美擊中節拍來賺取額外迷因點數。",
      },
      daily: {
        title: "每日任務",
        description: "完成每日挑戰並保持連續簽到來獲得驚人獎勵。",
      },
      evolution: {
        title: "史詩進化",
        description: "觀看你的河馬在成為迷因之神的道路上經歷多個階段的變化。",
      },
    },
    footer: {
      copyright: "© 2024 迷因河馬大進化。保留所有權利。",
      privacy: "隱私政策",
    },
    privacy: {
      title: "隱私權政策",
      lastUpdated: "生效日期：2025-09-21",
      content: `本隱私權政策適用於為行動裝置建立的迷因河馬大進化應用程式（以下稱為「應用程式」），該應用程式由（以下稱為「服務提供者」）建立，作為廣告支援服務。此服務旨在「按原樣」使用。

**資訊收集和使用**

應用程式在您下載和使用時收集資訊。此資訊可能包括以下資訊：

• 您裝置的網際網路通訊協定位址（例如 IP 位址）
• 您造訪的應用程式頁面、造訪的時間和日期、在這些頁面上花費的時間
• 在應用程式上花費的時間
• 您在行動裝置上使用的作業系統

應用程式不會收集有關您行動裝置位置的精確資訊。

應用程式收集您的裝置位置，這有助於服務提供者確定您的大致地理位置，並透過以下方式使用：

• 地理定位服務：服務提供者利用位置資料提供個人化內容、相關建議和基於位置的服務等功能。
• 分析和改進：匯總和匿名的位置資料有助於服務提供者分析使用者行為、識別趨勢並改善應用程式的整體效能和功能。
• 第三方服務：服務提供者可能會定期向外部服務傳輸匿名位置資料。這些服務協助他們增強應用程式並最佳化其產品。

服務提供者可能會不時使用您提供的資訊與您聯絡，為您提供重要資訊、必要通知和行銷推廣。

為了獲得更好的體驗，在使用應用程式時，服務提供者可能要求您向我們提供某些個人識別資訊。服務提供者要求的資訊將由他們保留並按照本隱私權政策中的描述使用。

**第三方存取**

僅定期向外部服務傳輸匯總的匿名資料，以協助服務提供者改進應用程式和其服務。服務提供者可能會以本隱私權聲明中描述的方式與第三方分享您的資訊。

請注意，應用程式使用具有自己處理資料隱私權政策的第三方服務。以下是應用程式使用的第三方服務提供者的隱私權政策連結：

• Google Play Services (https://www.google.com/policies/privacy/)
• AdMob (https://support.google.com/admob/answer/6128543?hl=en)
• Google Analytics for Firebase (https://firebase.google.com/support/privacy)

服務提供者可能會揭露使用者提供和自動收集的資訊：

• 法律要求，例如遵守傳票或類似的法律程序；
• 當他們善意相信揭露對於保護其權利、保護您或他人的安全、調查欺詐或回應政府要求是必要的；
• 與代表他們工作、對我們向他們揭露的資訊沒有獨立使用權且已同意遵守本隱私權聲明中規定規則的可信服務提供者。

**退出權利**

您可以透過解除安裝應用程式輕鬆停止所有資訊收集。您可以使用行動裝置或透過行動應用程式市場或網路提供的標準解除安裝程序。

**資料保留政策**

服務提供者將在您使用應用程式期間以及之後的合理時間內保留使用者提供的資料。如果您希望他們刪除您透過應用程式提供的使用者提供資料，請透過 kaislumao01@gmail.com 聯絡他們，他們將在合理時間內回應。

**兒童**

服務提供者不會使用應用程式故意向 13 歲以下的兒童徵求資料或進行行銷。

應用程式不針對 13 歲以下的任何人。服務提供者不會故意收集 13 歲以下兒童的個人識別資訊。如果服務提供者發現 13 歲以下的兒童提供了個人資訊，服務提供者將立即從其伺服器中刪除此資訊。如果您是父母或監護人，並且您知道您的孩子向我們提供了個人資訊，請聯絡服務提供者 (kaislumao01@gmail.com)，以便他們能夠採取必要的行動。

**安全性**

服務提供者關注保護您資訊的機密性。服務提供者提供實體、電子和程序保護措施來保護服務提供者處理和維護的資訊。

**變更**

本隱私權政策可能會因任何原因不時更新。服務提供者將透過使用新的隱私權政策更新此頁面來通知您隱私權政策的任何變更。建議您定期查閱本隱私權政策以了解任何變更，因為繼續使用被視為對所有變更的批准。

本隱私權政策自 2025-09-21 起生效

**您的同意**

透過使用應用程式，您同意按照本隱私權政策現在和我們修訂的內容處理您的資訊。

**聯絡我們**

如果您在使用應用程式時對隱私有任何疑問，或對做法有疑問，請透過電子郵件 kaislumao01@gmail.com 聯絡服務提供者。

此隱私權政策頁面由應用程式隱私權政策產生器產生。`,
    },
  },
  jp: {
    nav: {
      home: "ホーム",
      privacy: "プライバシー",
    },
    hero: {
      title: "ミームカバ大進化",
      subtitle: "ゼロからミーム神へ",
      description:
        "愛らしいカバと一緒に、究極のミーム伝説になるための壮大な旅に出よう！タップして、放置して、進化して、インターネットスターへの道を歩もう。",
      downloadButton: "今すぐダウンロード",
      comingSoon: "近日公開",
    },
    features: {
      title: "ゲーム機能",
      idle: {
        title: "放置ゲームプレイ",
        description:
          "オフラインでも自動的にミームポイントを獲得。あなたのカバはインターネットの名声のために頑張っています！",
      },
      click: {
        title: "タップして勝利",
        description: "カバをクリックしてミームポイントを即座にブースト。すべてのタップがバイラル状態に近づけます！",
      },
      pets: {
        title: "ペット収集",
        description: "より多くのミームエネルギーを生成するのに役立つ愛らしい仲間をアンロック。全部集めよう！",
      },
      karaoke: {
        title: "カバカラオケ",
        description: "毎日のリズムミニゲーム！ビートを完璧に打ってボーナスミームポイントを獲得しよう。",
      },
      daily: {
        title: "デイリーミッション",
        description: "毎日のチャレンジを完了し、連続記録を維持して素晴らしい報酬を獲得しよう。",
      },
      evolution: {
        title: "エピック進化",
        description: "ミーム神への道でカバが複数の段階を通して変身する様子を見よう。",
      },
    },
    footer: {
      copyright: "© 2024 ミームカバ大進化。全著作権所有。",
      privacy: "プライバシーポリシー",
    },
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "発効日：2025-09-21",
      content: `このプライバシーポリシーは、（以下「サービスプロバイダー」ラベル）が広告サポートサービスとして作成したモバイルデバイス用の迷因河馬大進化アプリ（以下「アプリケーション」ラベル）に適用されます。このサービスは「現状のまま」使用することを意図しています。

**情報の収集と使用**

アプリケーションは、ダウンロードして使用する際に情報を収集します。この情報には以下のような情報が含まれる場合があります：

• デバイスのインターネットプロトコルアドレス（IPアドレスなど）
• 訪問したアプリケーションのページ、訪問の時刻と日付、それらのページで費やした時間
• アプリケーションで費やした時間
• モバイルデバイスで使用するオペレーティングシステム

アプリケーションは、モバイルデバイスの位置に関する正確な情報を収集しません。

アプリケーションはデバイスの位置を収集し、これによりサービスプロバイダーがおおよその地理的位置を特定し、以下の方法で使用します：

• 位置情報サービス：サービスプロバイダーは位置データを利用して、パーソナライズされたコンテンツ、関連する推奨事項、位置ベースのサービスなどの機能を提供します。
• 分析と改善：集約され匿名化された位置データは、サービスプロバイダーがユーザーの行動を分析し、トレンドを特定し、アプリケーションの全体的なパフォーマンスと機能を改善するのに役立ちます。
• 第三者サービス：サービスプロバイダーは定期的に匿名化された位置データを外部サービスに送信する場合があります。これらのサービスは、アプリケーションの強化と提供内容の最適化を支援します。

サービスプロバイダーは、重要な情報、必要な通知、マーケティングプロモーションを提供するために、提供された情報を使用して随時連絡する場合があります。

より良い体験のために、アプリケーションを使用している間、サービスプロバイダーは特定の個人識別情報の提供を求める場合があります。サービスプロバイダーが要求する情報は、彼らによって保持され、このプライバシーポリシーに記載されているように使用されます。

**第三者アクセス**

サービスプロバイダーがアプリケーションとそのサービスの改善を支援するために、集約された匿名化されたデータのみが定期的に外部サービスに送信されます。サービスプロバイダーは、このプライバシーステートメントに記載されている方法で第三者と情報を共有する場合があります。

アプリケーションは、データの処理に関する独自のプライバシーポリシーを持つ第三者サービスを利用していることにご注意ください。以下は、アプリケーションで使用される第三者サービスプロバイダーのプライバシーポリシーへのリンクです：

• Google Play Services (https://www.google.com/policies/privacy/)
• AdMob (https://support.google.com/admob/answer/6128543?hl=en)
• Google Analytics for Firebase (https://firebase.google.com/support/privacy)

サービスプロバイダーは、ユーザー提供情報と自動収集情報を開示する場合があります：

• 召喚状または類似の法的手続きに従うなど、法律で要求される場合；
• 権利を保護し、あなたや他の人の安全を保護し、詐欺を調査し、または政府の要求に応答するために開示が必要であると善意で信じる場合；
• 彼らに代わって働き、開示する情報を独立して使用せず、このプライバシーステートメントに定められた規則に従うことに同意した信頼できるサービスプロバイダーと。

**オプトアウト権利**

アプリケーションをアンインストールすることで、すべての情報収集を簡単に停止できます。モバイルデバイスの一部として利用可能な標準のアンインストールプロセス、またはモバイルアプリケーションマーケットプレイスやネットワークを通じて使用できます。

**データ保持ポリシー**

サービスプロバイダーは、アプリケーションを使用している間およびその後の合理的な期間、ユーザー提供データを保持します。アプリケーションを通じて提供したユーザー提供データの削除をご希望の場合は、kaislumao01@gmail.com までご連絡いただければ、合理的な時間内に対応いたします。

**子供**

サービスプロバイダーは、13歳未満の子供からデータを故意に求めたり、マーケティングを行ったりするためにアプリケーションを使用しません。

アプリケーションは13歳未満の人を対象としていません。サービスプロバイダーは13歳未満の子供から故意に個人識別情報を収集することはありません。サービスプロバイダーが13歳未満の子供が個人情報を提供したことを発見した場合、サービスプロバイダーは直ちにサーバーからこれを削除します。あなたが親または保護者で、お子様が個人情報を提供したことを知っている場合は、必要な措置を講じることができるよう、サービスプロバイダー（kaislumao01@gmail.com）にご連絡ください。

**セキュリティ**

サービスプロバイダーは情報の機密性を保護することに関心があります。サービスプロバイダーは、処理および維持する情報を保護するために、物理的、電子的、手続き的な保護措置を提供しています。

**変更**

このプライバシーポリシーは、何らかの理由で随時更新される場合があります。サービスプロバイダーは、新しいプライバシーポリシーでこのページを更新することにより、プライバシーポリシーの変更を通知します。継続的な使用はすべての変更の承認とみなされるため、変更について定期的にこのプライバシーポリシーを確認することをお勧めします。

このプライバシーポリシーは2025-09-21から有効です

**あなたの同意**

アプリケーションを使用することにより、このプライバシーポリシーに記載され、当社によって修正された情報の処理に同意したことになります。

**お問い合わせ**

アプリケーションの使用中にプライバシーに関する質問がある場合、または慣行について質問がある場合は、kaislumao01@gmail.com までメールでサービスプロバイダーにお問い合わせください。

このプライバシーポリシーページは、アプリプライバシーポリシージェネレーターによって生成されました。`,
    },
  },
  ko: {
    nav: {
      home: "홈",
      privacy: "개인정보처리방침",
    },
    hero: {
      title: "밈 하마 대진화",
      subtitle: "제로에서 밈 신까지",
      description:
        "사랑스러운 하마와 함께 궁극의 밈 전설이 되기 위한 장대한 여정을 떠나보세요! 탭하고, 방치하고, 진화하여 인터넷 스타가 되는 길을 걸어보세요.",
      downloadButton: "지금 다운로드",
      comingSoon: "출시 예정",
    },
    features: {
      title: "게임 특징",
      idle: {
        title: "방치형 게임플레이",
        description:
          "오프라인에서도 자동으로 밈 포인트를 획득하세요. 당신의 하마가 인터넷 명성을 위해 열심히 일하고 있어요!",
      },
      click: {
        title: "탭해서 승리",
        description: "하마를 클릭해서 밈 포인트를 즉시 부스트하세요. 모든 탭이 바이럴 상태에 더 가까워지게 해줍니다!",
      },
      pets: {
        title: "펫 수집",
        description: "더 많은 밈 에너지 생성을 도와주는 사랑스러운 동반자들을 잠금 해제하세요. 모두 잡아야 해요!",
      },
      karaoke: {
        title: "하마 노래방",
        description: "일일 리듬 미니게임! 비트를 완벽하게 맞춰서 보너스 밈 포인트를 획득하세요.",
      },
      daily: {
        title: "일일 미션",
        description: "일일 도전을 완료하고 연속 기록을 유지해서 놀라운 보상을 받으세요.",
      },
      evolution: {
        title: "에픽 진화",
        description: "밈 신이 되는 길에서 하마가 여러 단계를 거쳐 변신하는 모습을 지켜보세요.",
      },
    },
    footer: {
      copyright: "© 2024 밈 하마 대진화. 모든 권리 보유.",
      privacy: "개인정보처리방침",
    },
    privacy: {
      title: "개인정보처리방침",
      lastUpdated: "발효일: 2025-09-21",
      content: `이 개인정보처리방침은 (이하 "서비스 제공자"라 함)가 광고 지원 서비스로 제작한 모바일 기기용 迷因河馬大進화 앱(이하 "애플리케이션"이라 함)에 적용됩니다. 이 서비스는 "있는 그대로" 사용하도록 의도되었습니다.

**정보 수집 및 사용**

애플리케이션은 다운로드하고 사용할 때 정보를 수집합니다. 이 정보에는 다음과 같은 정보가 포함될 수 있습니다:

• 기기의 인터넷 프로토콜 주소(예: IP 주소)
• 방문한 애플리케이션 페이지, 방문 시간과 날짜, 해당 페이지에서 보낸 시간
• 애플리케이션에서 보낸 시간
• 모바일 기기에서 사용하는 운영 체제

애플리케이션은 모바일 기기 위치에 대한 정확한 정보를 수집하지 않습니다.

애플리케이션은 기기의 위치를 수집하여 서비스 제공자가 대략적인 지리적 위치를 결정하고 다음과 같은 방법으로 사용할 수 있도록 도움을 줍니다:

• 위치 정보 서비스: 서비스 제공자는 위치 데이터를 활용하여 개인화된 콘텐츠, 관련 추천 및 위치 기반 서비스와 같은 기능을 제공합니다.
• 분석 및 개선: 집계되고 익명화된 위치 데이터는 서비스 제공자가 사용자 행동을 분석하고, 트렌드를 식별하며, 애플리케이션의 전반적인 성능과 기능을 개선하는 데 도움이 됩니다.
• 제3자 서비스: 서비스 제공자는 주기적으로 익명화된 위치 데이터를 외부 서비스에 전송할 수 있습니다. 이러한 서비스는 애플리케이션을 향상시키고 제공 서비스를 최적화하는 데 도움을 줍니다.

서비스 제공자는 중요한 정보, 필수 공지사항 및 마케팅 프로모션을 제공하기 위해 제공된 정보를 사용하여 수시로 연락할 수 있습니다.

더 나은 경험을 위해 애플리케이션을 사용하는 동안 서비스 제공자는 특정 개인 식별 정보를 제공하도록 요구할 수 있습니다. 서비스 제공자가 요청하는 정보는 그들에 의해 보관되며 이 개인정보처리방침에 설명된 대로 사용됩니다.

**제3자 접근**

서비스 제공자가 애플리케이션과 서비스를 개선하는 데 도움이 되도록 집계되고 익명화된 데이터만 주기적으로 외부 서비스에 전송됩니다. 서비스 제공자는 이 개인정보 보호 성명서에 설명된 방식으로 제3자와 정보를 공유할 수 있습니다.

애플리케이션은 데이터 처리에 관한 자체 개인정보처리방침을 가진 제3자 서비스를 활용한다는 점에 유의하시기 바랍니다. 다음은 애플리케이션에서 사용하는 제3자 서비스 제공업체의 개인정보처리방침 링크입니다:

• Google Play Services (https://www.google.com/policies/privacy/)
• AdMob (https://support.google.com/admob/answer/6128543?hl=en)
• Google Analytics for Firebase (https://firebase.google.com/support/privacy)

서비스 제공자는 사용자 제공 정보 및 자동 수집 정보를 공개할 수 있습니다:

• 소환장 또는 유사한 법적 절차를 준수하는 등 법률에 의해 요구되는 경우;
• 권리를 보호하고, 귀하 또는 다른 사람의 안전을 보호하고, 사기를 조사하거나 정부 요청에 응답하기 위해 공개가 필요하다고 선의로 믿는 경우;
• 그들을 대신하여 일하고, 공개하는 정보를 독립적으로 사용하지 않으며, 이 개인정보 보호 성명서에 명시된 규칙을 준수하기로 동의한 신뢰할 수 있는 서비스 제공업체와 함께.

**옵트아웃 권리**

애플리케이션을 제거함으로써 모든 정보 수집을 쉽게 중단할 수 있습니다. 모바일 기기의 일부로 제공되거나 모바일 애플리케이션 마켓플레이스 또는 네트워크를 통해 제공되는 표준 제거 프로세스를 사용할 수 있습니다.

**데이터 보존 정책**

서비스 제공자는 애플리케이션을 사용하는 동안과 그 이후 합리적인 기간 동안 사용자 제공 데이터를 보존합니다. 애플리케이션을 통해 제공한 사용자 제공 데이터의 삭제를 원하시면 kaislumao01@gmail.com으로 연락해 주시면 합리적인 시간 내에 응답하겠습니다.

**아동**

서비스 제공자는 13세 미만 아동으로부터 고의로 데이터를 요청하거나 마케팅하기 위해 애플리케이션을 사용하지 않습니다.

애플리케이션은 13세 미만의 누구에게도 해당되지 않습니다. 서비스 제공자는 13세 미만 아동으로부터 고의로 개인 식별 정보를 수집하지 않습니다. 서비스 제공자가 13세 미만 아동이 개인 정보를 제공했다는 것을 발견하는 경우, 서비스 제공자는 즉시 서버에서 이를 삭제합니다. 귀하가 부모 또는 보호자이고 자녀가 개인 정보를 제공했다는 것을 알고 있다면, 필요한 조치를 취할 수 있도록 서비스 제공자(kaislumao01@gmail.com)에게 연락해 주시기 바랍니다.

**보안**

서비스 제공자는 귀하의 정보의 기밀성을 보호하는 데 관심이 있습니다. 서비스 제공자는 처리하고 유지하는 정보를 보호하기 위해 물리적, 전자적, 절차적 보호 조치를 제공합니다.

**변경사항**

이 개인정보처리방침은 어떤 이유로든 수시로 업데이트될 수 있습니다. 서비스 제공자는 새로운 개인정보처리방침으로 이 페이지를 업데이트하여 개인정보처리방침의 변경사항을 알려드립니다. 지속적인 사용은 모든 변경사항에 대한 승인으로 간주되므로 변경사항에 대해 정기적으로 이 개인정보처리방침을 참조하시기 바랍니다.

이 개인정보처리방침은 2025-09-21부터 유효합니다

**귀하의 동의**

애플리케이션을 사용함으로써 귀하는 현재 및 당사가 수정한 이 개인정보처리방침에 명시된 대로 귀하의 정보 처리에 동의하는 것입니다.

**문의하기**

애플리케이션 사용 중 개인정보보호에 관한 질문이 있거나 관행에 대한 질문이 있으시면 kaislumao01@gmail.com으로 서비스 제공자에게 이메일을 보내주시기 바랍니다.

이 개인정보처리방침 페이지는 앱 개인정보처리방침 생성기에 의해 생성되었습니다.`,
    },
  },
}

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations.en
}

export function detectLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith("zh")) return "zh"
  if (browserLang.startsWith("ja")) return "jp"
  if (browserLang.startsWith("ko")) return "ko"

  return "en"
}
