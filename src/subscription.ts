import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 666,
  name: 'AIsouler的GKD订阅',
  version: 0,
  author: 'AIsouler',
  checkUpdateUrl: './AIsouler_gkd.version.json5',
  supportUri: 'https://github.com/AIsouler/GKD_subscription/issues/new/choose',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
