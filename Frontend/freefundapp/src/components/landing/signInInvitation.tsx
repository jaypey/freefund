interface Props {
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
}

export default function SignInInvitation({
  pageHeaderBgImg,
  pageHeaderMinVh
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
    },
  } as const;

  return (
    <>
      <section>
        <div className="page-header rounded-top" style={styles.pageHeader}>
          <div className="faded opacity-10"></div>
          <div className="container z-index-2">
            <div className="row justify-content-center">
              <div className="col-sm-9 text-center mx-auto pt-6">
                <h1 className="mb-2">Log in with Github now!</h1>
                <p className="lead mb-sm-5 px-md-8">We integrate seamlessly with your Github account to allow your repositories' monetization.</p>
                <button className="btn btn-dark btn-lg">Log in  <i className="fab text-lg fa-github" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};