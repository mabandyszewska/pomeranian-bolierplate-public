import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataExercises } from './ExercisesBooleanNumbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValues } from './EmptyValues/router-data';
import { blockRouterMetaData as blockRouterMetaArraysBasics } from './JsArraysBasics/router-data';
import { blockRouterMetaData as blockRouterMetaArraysExercises } from './JsArrayMethodsExercise/router-data';

import { blockRouterMetaData as blockRouterMetaJsStringsAsArrays } from './JsStringsAsArrays/router-data';
import { blockRouterMetaData as blockRouterMetaJsObjectsBasics } from './JsObjectsBasics/router-data';
import { blockRouterMetaData as blockRouterMetaJsDateTime } from './JsDateTime/router-data';
import { blockRouterMetaData as blockRouterMetaJsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as blockRouterMetaHoisting } from './Hoisting/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataIfSwitch,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataExercises,
  blockRouterMetaDataEmptyValues,
  blockRouterMetaArraysBasics,
  blockRouterMetaArraysExercises,
  blockRouterMetaJsStringsAsArrays,
  blockRouterMetaJsObjectsBasics,
  blockRouterMetaJsDateTime,
  blockRouterMetaJsFunctionBasics,
  blockRouterMetaHoisting,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
