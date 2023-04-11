import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';

interface Props {
  title: string;
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  featuresDetails: Map<string,string>;
}

export default function ProductOverview({
  title,
  images,
  full_description,
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          <p className="mb-5">We believe that free software built by the community must profit to the community. That's why we provide a centralized subscription based platform to allow companies to use free software without the hassle of individual licensing. Many profitable products depend on open source projects maintained by a a few volunteering developers. The spirit of open source is promoting universal access to cutting edge code therefore allowing individuals or any enterprise to gain access to shared knowledge.<br></br><br></br> Although companies can sponsor projects and support developers, their financial support isn't mandatory. In some cases, enterprises can profit immensely from the work of a volunteer. Even though it is common and took for granted, we believe that companies profiting from developer' free time is highly unethical.<br></br><br></br> That's why we built FreeFund. It allows developers to easily monetize their open source work while keeping the process of acquiring a license hassle-free for companies.</p>
          
        </div>
        <div className="col-12 col-lg-6">
          <ProductFeatureImg images={images}/>
        </div>
      </div>
    </div>
    </>
  );
};
