import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "@/app/utils/shuffle";

const sizeOf = require("image-size");

const folder = "photos";

const HomePhotos = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );
  const shuffled = shuffle(imageFilenames);

  const images = shuffled.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  return <>{images && <MasonryGallery dir={folder} images={images} />}</>;
};

export default HomePhotos;
