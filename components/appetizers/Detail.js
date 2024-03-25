// detail component
import Image from 'next/image';

export default function Detail({ appetizers }) {
  return (
    <div className="">
      <Image
        src={appetizers.image}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width={700}
        height={400}
        loading="lazy"
      />
    </div>
  );
}
