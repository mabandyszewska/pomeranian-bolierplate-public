import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaJsonXmlStorage } from './JsonXMLStorage/router-data';
import { blockRouterMetaData as blockRouterMetaLocalStorageExercise } from './LocalStorageExercise/router-data';
import { blockRouterMetaData as blockRouterMetaPromises } from './Promises/router-data';
import { blockRouterMetaData as blockRouterMetaUseEffectAndPromise } from './UseEffectAndPromise/router-data';
import { blockRouterMetaData as blockRouterMetaUserDataLoader } from './UserDataLoader/router-data';

export const blockRouterMetaData = [
  blockRouterMetaJsonXmlStorage,
  blockRouterMetaLocalStorageExercise,
  blockRouterMetaPromises,
  blockRouterMetaUseEffectAndPromise,
  blockRouterMetaUserDataLoader,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
