interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
}

import image from "/landing.png"

export default function IntroductionBanner({
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
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <span className="mask opacity-7"></span>
          <div className="container text-light mt-7 px-6">
            <div className="row">
              <div className="col text-dark justify-content-left" style={{ zIndex:1000}}>
                <div className="text-dark text-left" style={styles.landingText}>
                <h6 className="text-uppercase text-dark text-sm">New | Monetize your code</h6>
                  <h1 className="mb-4 text-dark">{title}</h1>
                  <h2 className="mb-4 text-dark" style={{fontWeight:"bold"}}>Allowing open source to be <span style={{color:'#313aa5'}}>lucrative for developers</span> and <span style={{color:'#f35a30'}}>affordable for companies</span></h2>
                  <p className="lead" style={{fontWeight:"bold"}}>The new platform that makes open source a viable job. Profit from the commercial applications of your work while keeping your source code free and open for all. </p>
                  <a href="#ourmission"><button className="btn btn-white btn-lg">Our mission</button></a>
                </div>
              </div>
              <div className="col" style={styles.landingImage}>
                <img src={image}></img>
              </div>
              <h1 className="text-dark text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

