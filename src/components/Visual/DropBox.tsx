import { mainFileName } from "../../utils/constants";
import { removeUnwantedFiles } from "../../utils/helpers";

export const DropBox = () => {
  const handleUpload = (e: any) => {
    e.preventDefault();
    const files = e.target.files as FileList;
    const projectFiles = removeUnwantedFiles(files);

    for (const file of projectFiles) {
      const filePath = file.webkitRelativePath as string;
      if (mainFileName.test(filePath)) {
        console.log(filePath);
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          const text = reader.result;
          console.log(text);
        };
      }
    }
  };
  return (
    <input
      type="file"
      id="project"
      name="project"
      multiple
      directory=""
      webkitdirectory=""
      onChange={(e) => handleUpload(e)}
    />
  );
};
