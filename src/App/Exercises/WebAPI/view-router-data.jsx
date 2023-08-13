import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaJsonXmlStorage } from './JsonXMLStorage/router-data';
import { blockRouterMetaData as blockRouterMetaLocalStorageExercise } from './LocalStorageExercise/router-data';

export const blockRouterMetaData = [
  blockRouterMetaJsonXmlStorage,
  blockRouterMetaLocalStorageExercise,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
