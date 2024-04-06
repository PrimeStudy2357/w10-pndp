import { useQuery } from "@tanstack/react-query";
import { useAjax } from "../hooks/useAjax";

function MyQueryField() {
  const { getUser } = useAjax();

  const { isPending, error, data } = useQuery({
    queryKey: "myQuery",
    queryFn: () => getUser(),
    staleTime: 1000 * 10,
    gcTime: 1000 * 60 * 5,
  });

  if (isPending) return "Loading...";

  if (error) return "Error!" + error.message;

  return <div>{JSON.stringify(data)}</div>;
}

export default MyQueryField;
