import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
  {
    url: "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
  },
];

export default function SliderRools() {
  return (
    <div className="slider-container">
      <SimpleImageSlider
        width={"100%"}
        height={400}
        images={images}
        showBullets={true}
        showNavs={false}
      />
    </div>
  );
}
