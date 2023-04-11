interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
}

import image from "../../../public/landing.png"

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {

  const styles = {
    pageHeader: {
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    },
    landingImage: {
      marginLeft: -170
    },
    landingText: {
      marginRight: -250,
    }
  } as const;

  return (
    <>
      <section>
        <div className="page-header bg-dark py-5 py-md-0" style={styles.pageHeader}>
          <span className="mask opacity-7"></span>
          <div className="container text-light mt-7 px-6">
            <div className="row">
              <div className="col text-light justify-content-left" style={{ zIndex:1000}}>
                <div className="text-light text-left" style={styles.landingText}>
                <h6 class="text-uppercase text-light text-sm">New | Monetize your code</h6>
                  <h1 className="mb-4 text-light">{title}</h1>
                  <h2 className="mb-4 text-light" style={{fontWeight:"bold"}}>Allowing open source to be <span style={{color:'#313aa5'}}>lucrative for developers</span> and <span style={{color:'#f35a30'}}>affordable for companies</span></h2>
                  <p className="lead" style={{fontWeight:"bold"}}>The new platform that makes open source a viable job. Profit from the commercial applications of your work while keeping your source code free and open for all. </p>
                  <button className="btn btn-white btn-lg">Our mission</button>
                </div>
              </div>
              <div className="col" style={styles.landingImage}>
                <img src={image}></img>
              </div>
              <h1 className="text-light text-center">↓</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

