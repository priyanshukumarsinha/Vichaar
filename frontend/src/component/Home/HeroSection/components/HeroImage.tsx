interface HeroImageProps {
  src: string;
  label?: string;
}

const HeroImage = ({ src, label }: HeroImageProps) => {
  return (
    <img
      className="h-[600px] -ml-26  -mb-16 -mt-8 hidden lg:block"
      src={src}
      alt={label}
    />
  );
};

export default HeroImage;
