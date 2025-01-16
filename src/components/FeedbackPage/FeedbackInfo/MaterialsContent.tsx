import Image from "next/image";

const MaterialsContent = () => {
  return (
    <div className="flex gap-1">
      <Image
        src="/feedback/image1.png"
        alt="image"
        width={185}
        height={187}
      />
      <Image
        src="/feedback/image2.png"
        alt="image"
        width={185}
        height={187}
      />
      <Image
        src="/feedback/image3.png"
        alt="image"
        width={185}
        height={187}
      />
      <Image
        src="/feedback/image4.png"
        alt="image"
        width={185}
        height={187}
      />
    </div>
  );
};

export default MaterialsContent;
