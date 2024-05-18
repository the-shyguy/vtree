import { GIT, NODE_MODULES, DIST, BUILD } from "./constants";

export const removeUnwantedFiles = (files: FileList) => {
  const filesArray = Array.from(files);
  const newFiles = filesArray
    .filter((file) => {
      return !file.webkitRelativePath.includes(NODE_MODULES);
    })
    .filter((file) => {
      return !file.webkitRelativePath.includes(GIT);
    })
    .filter((file) => {
      return !file.webkitRelativePath.includes(DIST);
    })
    .filter((file) => {
      return !file.webkitRelativePath.includes(BUILD);
    });

  return newFiles;
};
