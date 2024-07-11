import getOptionProperty from './getOptionProperty';
import { head } from './nodash';
function getIsOnlyResult(props) {
  const {
    allowNew,
    highlightOnlyResult,
    results
  } = props;
  if (!highlightOnlyResult || allowNew) {
    return false;
  }
  return results.length === 1 && !getOptionProperty(head(results), 'disabled');
}
export default getIsOnlyResult;