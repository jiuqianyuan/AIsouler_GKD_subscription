import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-关闭花呗升级弹窗',
      actionMaximum: 1,
      rules: [
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.msp.ui.views.MspUniRenderActivity',
          ],
          matches: [
            '[text*="花呗升级" || text*="花呗服务"]',
            '@[clickable=true] >n [text="暂不升级，继续付款" || text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12826077',
            'https://i.gkd.li/i/13183946',
            'https://i.gkd.li/i/13631362',
            'https://i.gkd.li/i/13857535',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.AlipayLogin',
            'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage',
          ],
          matches: [
            '[text="立即更新" || text="马上体验" || text="版本更新"]',
            '[text*="稍后" || id="com.alipay.mobile.antui:id/btn_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13327095',
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/15010554',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭设置小组件弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text$="小组件"][text.length<10]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13327349',
            'https://i.gkd.li/i/15514142',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-支付后自动点击完成',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.phone.businesscommon.ucdp.nfc.activity.NResPageActivity',
          ],
          matches: [
            '[text="支付成功" || text="充值成功" || text="提交成功"]',
            '[text="完成"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14008852',
            'https://i.gkd.li/i/16328809',
            'https://i.gkd.li/i/17503266',
            'https://i.gkd.li/i/17686972',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-[下次支付用花呗]弹窗',
      desc: '点击"30天不再提醒"',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: ['[text="同意协议并开通"]', '[text="30天不再提醒"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/14060628',
            'https://i.gkd.li/i/15050300',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-关闭免密支付开关',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
            'https://i.gkd.li/i/17107841',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-[0元下单权益]弹窗',
      desc: '支付完成后出现',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="恭喜获得「0元下单」权益"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14893122',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-自动授权登录',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '[text="支付宝授权"] >3 @[childCount=0][text="同意"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/17376764',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-付款后的免密支付开通广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: ['TextView[text *="免密支付"]', 'TextView[text="不感兴趣"]'],
          snapshotUrls: 'https://i.gkd.li/i/19449399',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14034152',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'WebView > View > View > View > View > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls: 'https://e.gkd.li/ebbd606a-0e21-4fc5-b0c3-49e4d87d065c',
          snapshotUrls: 'https://i.gkd.li/i/16812751',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@[text*="跳过"] + [visibleToUser=true][text^="账单分期还"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls: 'https://e.gkd.li/cc064c84-75a9-4447-b01b-9d5597515093',
          snapshotUrls: 'https://i.gkd.li/i/18409779',
        },
      ],
    },
  ],
});
