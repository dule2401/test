import { createBrowserHistory } from "history";

// history của createBrowserHistory không có type (createURL, encodeLocation) của unstable_HistoryRouter trong dom v6 cho nên muốn sử dung history cần config thêm.
const history = createBrowserHistory();
export default history;
