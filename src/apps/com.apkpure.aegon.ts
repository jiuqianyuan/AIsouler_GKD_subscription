import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.apkpure.aegon',
  name: 'APKPure',
  groups: [
    {
      key: 1,
      name: '全屏广告-热门推荐关闭',
      desc: '关闭应用推广',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
          matches:
            '@RelativeLayout[clickable=true][visibleToUser=true] - [text="精选必备好应用"] <2 RelativeLayout < LinearLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13466647',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-更新与已安装界面-点击[查看更多]',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.apkpure.aegon.main.activity.MainTabActivity',
            'com.apkpure.aegon.main.activity.AppManagerActivity',
            'com.apkpure.aegon.cms.activity.CommonActivity',
            'com.apkpure.aegon.main.activity.AppMoreActivity',
          ],
          matches:
            '@ViewGroup[clickable=true] > [text="查看更多"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15469126',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-更新界面软件推荐',
      activityIds: [
        'com.apkpure.aegon.main.activity.MainTabActivity',
        'com.apkpure.aegon.main.activity.AppManagerActivity',
        'com.apkpure.aegon.cms.activity.CommonActivity',
        'com.apkpure.aegon.main.activity.AppMoreActivity',
      ],
      fastQuery: true,
      rules: [
        {
          name: '点击三点图标',
          key: 0,
          matches:
            '@ImageView - RelativeLayout >3 [text="AD"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13466329',
        },
        {
          name: '点击关闭',
          preKeys: 0,
          matches:
            '@LinearLayout[clickable=true] >n [text="关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13466610',
            'https://i.gkd.li/i/15542026',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-添加桌面快捷方式',
      desc: '下次添加',
      rules: [
        {
          activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
          matches: '[id="com.apkpure.aegon:id/arg"][text="下次添加"]',
          snapshotUrls: 'https://i.gkd.li/i/13416401',
        },
      ],
    },
  ],
});
