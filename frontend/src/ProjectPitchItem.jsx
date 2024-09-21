import { useEffect, useState } from "react";
import api from "./utils/axios";

function ProjectPitchItem() {
  const [project, setProject] = useState();
  useEffect(() => {
    const id = window.location.href.split("/").reverse()[0];
    api.get(`project/${id}`).then((res) => setProject(res.data));
  }, []);
  return <div className="flex flex-col"></div>;
}
export default ProjectPitchItem;
