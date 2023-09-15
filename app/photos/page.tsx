import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "../utils/shuffle";

const sizeOf = require("image-size");

const folder = "photos";

const GalleryPage = async () => {
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

  return (
    <Main flushTop>
      <Banner className="">
        <BannerHeadline>Photos</BannerHeadline>
      </Banner>
      {images && <MasonryGallery dir={folder} images={images} />}
    </Main>
  );
};

export default GalleryPage;
