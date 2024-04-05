import { useParams } from "react-router-dom";

const WorkPage = () => {
  const params = useParams<{ id: string }>();
  return <div>WorkPage {params.id}</div>;
};

export default WorkPage;
