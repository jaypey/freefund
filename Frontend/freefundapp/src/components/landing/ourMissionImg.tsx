interface Props {
}

import agplImage from "/agpl.png"
import cubes from "/cubes.png"
import opensource from "/opensource.png"
import github from "/github.jpg"

export default function OurMissionImg({
}: Props) {

  return (
    <>
      <div className="d-block d-md-flex">
        <img className="w-100 me-4 rounded-3 ms-auto" src={agplImage} alt={"agpl"} />
      </div>
      <div className="d-block d-md-flex md-max-height-300 mt-4">
        <img className="w-100 w-md-45 me-4 rounded-3 mb-4 mb-md-0 ms-auto" src={opensource} alt={"opensourcelogo"} />
        <img className="w-100 w-md-45 rounded-3" src={github} alt={"github"} />
      </div>
    </>
  );
}