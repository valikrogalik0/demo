import { createSelector } from 'reselect'
import capitalize from '../../../helpers/capitalize';

const getSidebarFromState = state => state.home.sidebar.items;

export const makeSidebarItems = () => createSelector(
  [getSidebarFromState],
  items => {
    if (!items) {
      return null;
    }

    const names = Object.keys(items);

    return names.map((name, index) => {
      const capitalizedName = capitalize(name);
      const panelItems = items[name].map(panelItem => ({
        id: panelItem.id,
        text: panelItem.name,
      }));

      return { name: capitalizedName, children: panelItems, id: index };
    });
  },
);