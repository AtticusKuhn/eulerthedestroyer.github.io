/*
this file is for sharing common code
*/

import { listProjects } from "@/lib/generateStaticData/projectGenerator";
import { flattenArray } from "utils";

export async function staticPaths() {
  const projects = await listProjects();
  const htmlProjects = projects.filter((p) => p.type === "HTML");
  const paths = flattenArray(
    htmlProjects.map((project) => {
      const files = project.zip
        .getEntries()
        .map((f) => f.entryName)
        .filter((f) => f.endsWith(".html"))
        .map((f) => f.substring(0, f.length - 5));
      return files.map((f) => {
        return {
          params: {
            id: project.id,
            project: f.split("/").slice(1)
          }
        };
      });
    })
  );
  return paths;
}
interface ctx {
  params: {
    project: string;
    id: string;
  };
}
export async function staticProps(ctx: ctx) {
  const {
    params: { id }
  } = ctx;
  const projects = await listProjects();
  const foundProject = projects
    .filter((p) => p.type === "HTML")
    .find((p) => p.id === id);
  const template = (e: string) => `/my-projects/${id}/${e}.html`;
  return { foundProject, template };
}
