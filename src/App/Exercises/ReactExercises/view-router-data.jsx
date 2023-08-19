import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { Cwiczenie4MetaData } from './Cwiczenie4/router-data';
import { Cwiczenie4AdvancedMetaData } from './Cwiczenie4Advanced/router-data';
import { MaterialUIBasicElementMetaData } from './MaterialUIBasicElements/router-data';
import { MUITemplateDashboardMetaData } from './MUITemplateDashboard/router-data';
import { ToDoListMetaData } from './ToDoList/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  Cwiczenie4MetaData,
  Cwiczenie4AdvancedMetaData,
  MaterialUIBasicElementMetaData,
  MUITemplateDashboardMetaData,
  ToDoListMetaData,
  LocalDevAndFetchMetaData,
  ToDoWithServerMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
