import getOptionLabel from './getOptionLabel';
import { head } from './nodash';
function getInputText(props) {
  const {
    activeItem,
    labelKey,
    multiple,
    selected,
    text
  } = props;
  if (activeItem) {
    // Display the input value if the pagination item is active.
    return getOptionLabel(activeItem, labelKey);
  }
  const selectedItem = !multiple && !!selected.length && head(selected);
  if (selectedItem) {
    return getOptionLabel(selectedItem, labelKey);
  }
  return text;
}
export default getInputText;