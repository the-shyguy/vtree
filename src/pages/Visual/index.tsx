import { FileStrutureBar } from "../../components/FileStructureBar";
import { DropBox } from "../../components/Visual/DropBox";

export const Visual = () => {
  return (
    <div className="flex h-full w-full">
      <div className="w-3/4 flex justify-center items-center">
        <h1 className="text-3xl font-bold underline">Visual</h1>
        <DropBox />
      </div>
      <div className="w-1/4">
        <FileStrutureBar />
      </div>
    </div>
  );
};
