import {
  createSearchParams,
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HOST_ID_STATE } from "../../config";

export const useRouter = () => {
  const navigate = useNavigate(); // navigate = history.push (react-router-dom v5)
  const { search } = useLocation(); // get params in url
  const searchParams = useSearchParams(); // searchParams: [qrParams, setQueryParams],
  const location = useLocation(); // location

  return {
    search,
    searchParams,
    location,
    navigateHost: (to: To, options?: NavigateOptions) => {
      navigate(to, {
        ...(options || {}),
        state: HOST_ID_STATE, // state check hostRouter
      });
    },
    navigate,
    createSearchParams,
  };
};
