function ProjectSection(props) {
  //   console.log(props.title);
  return (
    <div className="row flex items-center flex-grow">
      <div className="col col-sm-8 col-lg-3 col-md-6 ">
        <div className="flex items-center">
          <div className="">
            <h3 className="text-2xl font-bold">{props.title}</h3>
            <p className="mt-4 text-xl max-w-lg">{props.desc}</p>
            <a
              href={props.url}
              target="_blank"
              className="mt-10 text-left text-xl inline-block"
            >
              View the site &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="col col-sm-8 col-lg-3 col-md-6 col-lg-offset-2">
        <img alt="ibm logo" src={props.imgSrc} />
      </div>
    </div>
  );
}

export default ProjectSection;
